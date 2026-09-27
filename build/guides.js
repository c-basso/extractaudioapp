/**
 * Builds the keyword guides for every language in GUIDES_LANGUAGES:
 *   /<guidesPath>/index.html          – hub (all guides)            e.g. /guides/, /ru/guides/
 *   /<guidesPath>/<slug>/index.html   – one page per keyword         (content: build/guides/<lang>.js)
 * Uses build/guide-template.html + shared strings from build/<lang>.json (`nav`, `footer`, `cta`, `ui`, `guide_ui`).
 * Guides with the same slug in several languages are linked with hreflang alternates.
 * Called at the end of build.js.
 */
const fs = require('fs');
const path = require('path');

const {
    SITE_URL,
    DEFAULT_LANGUAGE,
    APP_STORE_APP_URL,
    APP_PUBLISHER,
    APP_VERSION,
    APP_FILE_SIZE,
    APP_MIN_IOS,
    PRICE_CURRENCY_BY_LANG,
    SCHEMA_AGGREGATE_RATING_VALUE,
    SCHEMA_AGGREGATE_RATING_COUNT,
    SCHEMA_AGGREGATE_BEST_RATING,
    SCHEMA_AGGREGATE_WORST_RATING,
    GUIDES_LANGUAGES,
    guidesPathFor
} = require('./constants');
const { renderTemplate } = require('./lib/templateEngine');
const { readImageDimensions } = require('./lib/imageDimensions');

const ROOT = path.join(__dirname, '..');
const SHOT = (n) => `/screenshots/${n}.webp`;
const ABS = (p) => `${SITE_URL}${p.replace(/^\//, '')}`;
const homePathFor = (lang) => (lang === DEFAULT_LANGUAGE ? '/' : `/${lang}/`);

function esc(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function stripTags(html) {
    return String(html).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function jsonLdScripts(objects) {
    return objects
        .map((o) => `    <script type="application/ld+json">\n${JSON.stringify(o, null, 2)}\n    </script>`)
        .join('\n');
}

function breadcrumbsHtml(items) {
    const lis = items
        .map((it, i) =>
            i === items.length - 1
                ? `<li aria-current="page">${esc(it.name)}</li>`
                : `<li><a href="${it.path}">${esc(it.name)}</a></li>`
        )
        .join('');
    return `<ol>${lis}</ol>`;
}

function breadcrumbLd(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((it, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: it.name,
            item: ABS(it.path)
        }))
    };
}

/** hreflang <link>s for a page that exists in several languages. `pathForLang(lang)` returns a site path or null. */
function alternatesHtml(pathForLang) {
    const links = [];
    for (const lang of GUIDES_LANGUAGES) {
        const p = pathForLang(lang);
        if (p) links.push(`    <link rel="alternate" hreflang="${lang}" href="${ABS(p)}" />`);
    }
    if (links.length < 2) return '';
    const def = pathForLang(DEFAULT_LANGUAGE);
    if (def) links.push(`    <link rel="alternate" hreflang="x-default" href="${ABS(def)}" />`);
    return links.join('\n');
}

function appLd(appName, description, lang) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: appName,
        description,
        operatingSystem: `iOS ${APP_MIN_IOS}+`,
        applicationCategory: 'MultimediaApplication',
        image: ABS('/store/app-icon-512.webp'),
        downloadUrl: APP_STORE_APP_URL,
        installUrl: APP_STORE_APP_URL,
        softwareVersion: APP_VERSION,
        fileSize: APP_FILE_SIZE,
        offers: { '@type': 'Offer', price: '0', priceCurrency: PRICE_CURRENCY_BY_LANG[lang] || 'USD' },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: SCHEMA_AGGREGATE_RATING_VALUE,
            ratingCount: SCHEMA_AGGREGATE_RATING_COUNT,
            bestRating: SCHEMA_AGGREGATE_BEST_RATING,
            worstRating: SCHEMA_AGGREGATE_WORST_RATING
        },
        publisher: { '@type': 'Organization', name: APP_PUBLISHER }
    };
}

function guideCardsHtml(list, base, gui) {
    return list
        .map(
            (g) => `<li><a class="guide-card" href="/${base}${g.slug}/"><span class="guide-tag">${esc(g.eyebrow)}</span><h3>${esc(g.card.title)}</h3><p>${esc(g.card.text)}</p><span class="guide-more">${esc(gui.read_guide)} <span aria-hidden="true">→</span></span></a></li>`
        )
        .join('\n');
}

function storeBadge(place, alt, h = 48) {
    return `<a class="store-badge" href="${APP_STORE_APP_URL}" data-cta="${place}"><img src="/download.svg" alt="${esc(alt)}" width="${Math.round(h * 3)}" height="${h}" loading="lazy"></a>`;
}

function guideBody(g, all, site, gui, base) {
    const words = stripTags([g.answer, g.intro, ...g.steps.map((s) => s.text), ...g.sections.map((s) => s.html), ...g.faq.map((f) => f.a)].join(' ')).split(' ').length;
    const minutes = Math.max(2, Math.round(words / 200));

    const steps = g.steps
        .map(
            (s, i) => `<li class="guide-step" id="step-${i + 1}">
                <img src="${SHOT(s.image)}" alt="${esc(`${gui.step} ${i + 1}: ${s.name}`)}" width="460" height="995" loading="lazy" decoding="async">
                <div><h3><span>${i + 1}.</span>${esc(s.name)}</h3><p>${esc(s.text)}</p></div>
            </li>`
        )
        .join('\n');

    const sections = g.sections.map((s) => `<h2>${esc(s.h2)}</h2>\n${s.html}`).join('\n');

    const faq = g.faq
        .map(
            (f) => `<details class="faq-item"><summary><h3>${esc(f.q)}</h3><span class="faq-icon" aria-hidden="true"></span></summary><div class="faq-answer"><p>${esc(f.a)}</p></div></details>`
        )
        .join('\n');

    const related = g.related.map((slug) => all.find((x) => x.slug === slug)).filter(Boolean);

    return `
        <section class="guide-hero">
            <div class="wrap">
                <p class="eyebrow"><span class="dot" aria-hidden="true"></span>${esc(g.eyebrow)} · ${esc(gui.guide)}</p>
                <h1>${esc(g.h1)}</h1>
                <p class="guide-meta">${esc(site.last_updated)} · ${minutes} ${esc(gui.min_read)} · ${esc(gui.by)} ${esc(site.author)}</p>
                <div class="answer-box"><strong>${esc(gui.quick_answer)}</strong>${esc(g.answer)}</div>
            </div>
        </section>
        <div class="wrap guide-layout">
            <article class="guide-content">
                ${g.intro}
                <h2>${esc(gui.step_by_step)}</h2>
                <ol class="guide-steps">
                ${steps}
                </ol>
                <div class="inline-cta">
                    <img class="icon" src="/logo.webp" alt="" width="56" height="56" loading="lazy">
                    <p>${esc(site.app_name)}<span>${gui.inline_cta_sub}</span></p>
                    ${storeBadge('inline', site.download_alt)}
                </div>
                ${sections}
                <h2>${esc(gui.faq_title)}</h2>
                <div class="faq-list">
                ${faq}
                </div>
                <section class="related" aria-labelledby="related-title">
                    <h2 id="related-title">${esc(gui.related)}</h2>
                    <ul class="guide-grid">
                    ${guideCardsHtml(related, base, gui)}
                    </ul>
                </section>
            </article>
            <aside class="guide-aside" aria-label="${esc(gui.aside_label)}">
                <div class="aside-card">
                    <img class="shot" src="${SHOT(2)}" alt="${esc(`${site.app_name} — ${gui.aside_shot_alt}`)}" width="460" height="995" loading="lazy">
                    <h2>${esc(site.app_name)}</h2>
                    <p>★ ${SCHEMA_AGGREGATE_RATING_VALUE} · ${SCHEMA_AGGREGATE_RATING_COUNT}+ ${esc(gui.ratings)}<br>${esc(gui.free)} · ${APP_FILE_SIZE} · iOS ${APP_MIN_IOS}+</p>
                    ${storeBadge('aside', site.download_alt)}
                </div>
            </aside>
        </div>`;
}

function guideJsonLd(g, site, gui, crumbs, url, lang) {
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: g.h1,
            description: g.description,
            url,
            mainEntityOfPage: url,
            image: ABS(SHOT(2)),
            inLanguage: lang,
            datePublished: gui.published,
            dateModified: site.today,
            author: { '@type': 'Person', name: site.author },
            publisher: { '@type': 'Organization', name: APP_PUBLISHER, logo: { '@type': 'ImageObject', url: ABS('/store/app-icon-512.webp') } },
            about: { '@type': 'SoftwareApplication', name: site.app_name },
            keywords: g.keyword
        },
        {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: g.h1,
            description: g.answer,
            image: ABS(SHOT(2)),
            totalTime: 'PT1M',
            tool: [{ '@type': 'HowToTool', name: `${site.app_name} (${gui.iphone_app})` }],
            step: g.steps.map((s, i) => ({
                '@type': 'HowToStep',
                position: i + 1,
                name: s.name,
                text: s.text,
                image: ABS(SHOT(s.image)),
                url: `${url}#step-${i + 1}`
            }))
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: g.faq.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a }
            }))
        },
        breadcrumbLd(crumbs),
        appLd(site.app_name, g.description, lang)
    ];
}

async function buildGuidesForLang(lang, template, slugsByLang) {
    const guides = require(`./guides/${lang}`);
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, `${lang}.json`), 'utf8'));
    const gui = data.guide_ui;
    const base = guidesPathFor(lang);
    const home = homePathFor(lang);

    const ogImage = data.meta.og_image;
    const { width, height } = await readImageDimensions(path.join(ROOT, ogImage.replace(SITE_URL, '')));
    const now = new Date();
    const site = {
        app_name: data.app_info.name,
        author: data.meta.author,
        app_store_id: data.meta.app_store_id,
        store_url: APP_STORE_APP_URL,
        download_alt: data.hero.download_alt,
        og_image: ogImage,
        og_image_width: String(width),
        og_image_height: String(height),
        version: Date.now(),
        today: now.toISOString().slice(0, 10),
        home_url: home,
        hub_url: `/${base}`,
        last_updated: `${gui.updated} ${new Intl.DateTimeFormat(gui.locale, { month: 'long', year: 'numeric' }).format(now)}`,
        copyright: data.footer.copyright.replace(/\{year\}/g, String(now.getFullYear())),
        footer_guides: guides.map((g) => `<li><a href="/${base}${g.slug}/">${esc(g.card.title)}</a></li>`).join('')
    };
    const shared = { site, gui, ui: data.ui, nav: data.nav, footer: data.footer, cta: data.cta, guides: data.guides, floating_cta: data.floating_cta };

    const outDir = path.join(ROOT, base);
    fs.mkdirSync(outDir, { recursive: true });

    for (const g of guides) {
        const pagePath = `/${base}${g.slug}/`;
        const crumbs = [
            { name: gui.home, path: home },
            { name: gui.guides, path: `/${base}` },
            { name: g.card.title, path: pagePath }
        ];
        const url = ABS(pagePath);
        const page = {
            title: esc(g.title),
            description: esc(g.description),
            canonical: url,
            alternates: alternatesHtml((l) => (slugsByLang[l] && slugsByLang[l].has(g.slug) ? `/${guidesPathFor(l)}${g.slug}/` : null)),
            og_type: 'article',
            jsonld: jsonLdScripts(guideJsonLd(g, site, gui, crumbs, url, lang)),
            breadcrumbs: breadcrumbsHtml(crumbs),
            body: guideBody(g, guides, site, gui, base)
        };
        const html = renderTemplate(template, { ...shared, page });
        const dir = path.join(outDir, g.slug);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
        console.log(`✅ Built guide ${pagePath}`);
    }

    // Hub page
    const hubCrumbs = [
        { name: gui.home, path: home },
        { name: gui.guides, path: `/${base}` }
    ];
    const hubLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: gui.hub_title,
            description: gui.hub_description,
            url: ABS(`/${base}`),
            inLanguage: lang,
            mainEntity: {
                '@type': 'ItemList',
                itemListElement: guides.map((g, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    url: ABS(`/${base}${g.slug}/`),
                    name: g.h1
                }))
            }
        },
        breadcrumbLd(hubCrumbs)
    ];
    const hubBody = `
        <section class="hub-hero guides">
            <div class="wrap">
                <p class="eyebrow"><span class="dot" aria-hidden="true"></span>${esc(gui.guides)}</p>
                <h1>${esc(gui.hub_h1)}</h1>
                <p class="section-sub">${esc(gui.hub_sub)}</p>
                <ul class="guide-grid">
                ${guideCardsHtml(guides, base, gui)}
                </ul>
            </div>
        </section>`;
    const hubHtml = renderTemplate(template, {
        ...shared,
        page: {
            title: esc(gui.hub_title),
            description: esc(gui.hub_description),
            canonical: ABS(`/${base}`),
            alternates: alternatesHtml((l) => (slugsByLang[l] ? `/${guidesPathFor(l)}` : null)),
            og_type: 'website',
            jsonld: jsonLdScripts(hubLd),
            breadcrumbs: breadcrumbsHtml(hubCrumbs),
            body: hubBody
        }
    });
    fs.writeFileSync(path.join(outDir, 'index.html'), hubHtml, 'utf8');
    console.log(`✅ Built guides hub /${base}`);
}

async function buildGuides() {
    const template = fs.readFileSync(path.join(__dirname, 'guide-template.html'), 'utf8');
    const slugsByLang = {};
    for (const lang of GUIDES_LANGUAGES) {
        slugsByLang[lang] = new Set(require(`./guides/${lang}`).map((g) => g.slug));
    }
    for (const lang of GUIDES_LANGUAGES) {
        await buildGuidesForLang(lang, template, slugsByLang);
    }
}

module.exports = { buildGuides };

if (require.main === module) {
    buildGuides().catch((e) => {
        console.error('❌ Guides build failed:', e);
        process.exit(1);
    });
}
