/**
 * Builds the English keyword guides:
 *   /guides/index.html          – hub (all guides)
 *   /guides/<slug>/index.html   – one page per keyword (content: build/guides/en.js)
 * Uses build/guide-template.html + shared strings from build/en.json. Called at the end of build.js.
 */
const fs = require('fs');
const path = require('path');

const {
    SITE_URL,
    APP_STORE_APP_URL,
    APP_PUBLISHER,
    APP_VERSION,
    APP_FILE_SIZE,
    APP_MIN_IOS,
    SCHEMA_AGGREGATE_RATING_VALUE,
    SCHEMA_AGGREGATE_RATING_COUNT,
    SCHEMA_AGGREGATE_BEST_RATING,
    SCHEMA_AGGREGATE_WORST_RATING,
    GUIDES_PATH
} = require('./constants');
const { renderTemplate } = require('./lib/templateEngine');
const { readImageDimensions } = require('./lib/imageDimensions');

const ROOT = path.join(__dirname, '..');
const SHOT = (n) => `/screenshots/${n}.webp`;
const ABS = (p) => `${SITE_URL}${p.replace(/^\//, '')}`;

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

function appLd(appName, description) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: appName,
        description,
        operatingSystem: `iOS ${APP_MIN_IOS} or later`,
        applicationCategory: 'MultimediaApplication',
        image: ABS('/store/app-icon-512.webp'),
        downloadUrl: APP_STORE_APP_URL,
        installUrl: APP_STORE_APP_URL,
        softwareVersion: APP_VERSION,
        fileSize: APP_FILE_SIZE,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
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

function guideCardsHtml(list) {
    return list
        .map(
            (g) => `<li><a class="guide-card" href="/${GUIDES_PATH}${g.slug}/"><span class="guide-tag">${esc(g.eyebrow)}</span><h3>${esc(g.card.title)}</h3><p>${esc(g.card.text)}</p><span class="guide-more">Read guide <span aria-hidden="true">→</span></span></a></li>`
        )
        .join('\n');
}

function storeBadge(place, alt, h = 48) {
    return `<a class="store-badge" href="${APP_STORE_APP_URL}" data-cta="${place}"><img src="/download.svg" alt="${esc(alt)}" width="${Math.round(h * 3)}" height="${h}" loading="lazy"></a>`;
}

function guideBody(g, all, site) {
    const words = stripTags([g.answer, g.intro, ...g.steps.map((s) => s.text), ...g.sections.map((s) => s.html), ...g.faq.map((f) => f.a)].join(' ')).split(' ').length;
    const minutes = Math.max(2, Math.round(words / 200));

    const steps = g.steps
        .map(
            (s, i) => `<li class="guide-step" id="step-${i + 1}">
                <img src="${SHOT(s.image)}" alt="${esc(`Step ${i + 1}: ${s.name}`)}" width="460" height="995" loading="lazy" decoding="async">
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
                <p class="eyebrow"><span class="dot" aria-hidden="true"></span>${esc(g.eyebrow)} · Guide</p>
                <h1>${esc(g.h1)}</h1>
                <p class="guide-meta">${esc(site.last_updated)} · ${minutes} min read · by ${esc(site.author)}</p>
                <div class="answer-box"><strong>Quick answer</strong>${esc(g.answer)}</div>
            </div>
        </section>
        <div class="wrap guide-layout">
            <article class="guide-content">
                ${g.intro}
                <h2>Step by step</h2>
                <ol class="guide-steps">
                ${steps}
                </ol>
                <div class="inline-cta">
                    <img class="icon" src="/logo.webp" alt="" width="56" height="56" loading="lazy">
                    <p>${esc(site.app_name)}<span>Free on the App Store · MP3 &amp; M4A · on-device</span></p>
                    ${storeBadge('inline', site.download_alt)}
                </div>
                ${sections}
                <h2>Frequently asked questions</h2>
                <div class="faq-list">
                ${faq}
                </div>
                <section class="related" aria-labelledby="related-title">
                    <h2 id="related-title">Related guides</h2>
                    <ul class="guide-grid">
                    ${guideCardsHtml(related)}
                    </ul>
                </section>
            </article>
            <aside class="guide-aside" aria-label="Download the app">
                <div class="aside-card">
                    <img class="shot" src="${SHOT(2)}" alt="${esc(site.app_name)} audio extraction screen" width="460" height="995" loading="lazy">
                    <h2>${esc(site.app_name)}</h2>
                    <p>★ ${SCHEMA_AGGREGATE_RATING_VALUE} · ${SCHEMA_AGGREGATE_RATING_COUNT}+ ratings<br>Free · ${APP_FILE_SIZE} · iOS ${APP_MIN_IOS}+</p>
                    ${storeBadge('aside', site.download_alt)}
                </div>
            </aside>
        </div>`;
}

function guideJsonLd(g, site, crumbs) {
    const url = ABS(`/${GUIDES_PATH}${g.slug}/`);
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: g.h1,
            description: g.description,
            url,
            mainEntityOfPage: url,
            image: ABS(SHOT(2)),
            inLanguage: 'en',
            datePublished: site.published,
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
            tool: [{ '@type': 'HowToTool', name: `${site.app_name} (iPhone app)` }],
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
        appLd(site.app_name, g.description)
    ];
}

async function buildGuides() {
    const guides = require('./guides/en');
    const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8'));
    const template = fs.readFileSync(path.join(__dirname, 'guide-template.html'), 'utf8');

    const ogImage = en.meta.og_image;
    const { width, height } = await readImageDimensions(path.join(ROOT, ogImage.replace(SITE_URL, '')));
    const now = new Date();
    const site = {
        app_name: en.app_info.name,
        author: en.meta.author,
        app_store_id: en.meta.app_store_id,
        store_url: APP_STORE_APP_URL,
        download_alt: en.hero.download_alt,
        og_image: ogImage,
        og_image_width: String(width),
        og_image_height: String(height),
        version: Date.now(),
        today: now.toISOString().slice(0, 10),
        published: '2026-09-27',
        last_updated: `Updated ${new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(now)}`,
        copyright: en.footer.copyright.replace(/\{year\}/g, String(now.getFullYear())),
        footer_guides: guides.map((g) => `<li><a href="/${GUIDES_PATH}${g.slug}/">${esc(g.card.title)}</a></li>`).join('')
    };
    const shared = { site, nav: en.nav, footer: en.footer, cta: en.cta, floating_cta: en.floating_cta };

    const outDir = path.join(ROOT, GUIDES_PATH);
    fs.mkdirSync(outDir, { recursive: true });

    // Individual guide pages
    for (const g of guides) {
        const crumbs = [
            { name: 'Home', path: '/' },
            { name: 'Guides', path: `/${GUIDES_PATH}` },
            { name: g.card.title, path: `/${GUIDES_PATH}${g.slug}/` }
        ];
        const page = {
            title: esc(g.title),
            description: esc(g.description),
            canonical: ABS(`/${GUIDES_PATH}${g.slug}/`),
            og_type: 'article',
            jsonld: jsonLdScripts(guideJsonLd(g, site, crumbs)),
            breadcrumbs: breadcrumbsHtml(crumbs),
            body: guideBody(g, guides, site)
        };
        const html = renderTemplate(template, { ...shared, page });
        const dir = path.join(outDir, g.slug);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
        console.log(`✅ Built guide /${GUIDES_PATH}${g.slug}/`);
    }

    // Hub page
    const hubCrumbs = [
        { name: 'Home', path: '/' },
        { name: 'Guides', path: `/${GUIDES_PATH}` }
    ];
    const hubTitle = 'Extract Audio from Video Guides for iPhone (MP3, M4A)';
    const hubDesc = 'Step-by-step iPhone guides: extract audio from video, convert MP4 and MOV to MP3 or M4A, trim audio, save music, make ringtones. Free, on-device, no upload.';
    const hubLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: hubTitle,
            description: hubDesc,
            url: ABS(`/${GUIDES_PATH}`),
            inLanguage: 'en',
            mainEntity: {
                '@type': 'ItemList',
                itemListElement: guides.map((g, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    url: ABS(`/${GUIDES_PATH}${g.slug}/`),
                    name: g.h1
                }))
            }
        },
        breadcrumbLd(hubCrumbs)
    ];
    const hubBody = `
        <section class="hub-hero guides">
            <div class="wrap">
                <p class="eyebrow"><span class="dot" aria-hidden="true"></span>Guides</p>
                <h1>Extract audio from video on iPhone: every guide</h1>
                <p class="section-sub">Pick the job you want to do. Each guide gives a quick answer, the exact steps with screenshots, and fixes for common problems.</p>
                <ul class="guide-grid">
                ${guideCardsHtml(guides)}
                </ul>
            </div>
        </section>`;
    const hubHtml = renderTemplate(template, {
        ...shared,
        page: {
            title: esc(hubTitle),
            description: esc(hubDesc),
            canonical: ABS(`/${GUIDES_PATH}`),
            og_type: 'website',
            jsonld: jsonLdScripts(hubLd),
            breadcrumbs: breadcrumbsHtml(hubCrumbs),
            body: hubBody
        }
    });
    fs.writeFileSync(path.join(outDir, 'index.html'), hubHtml, 'utf8');
    console.log(`✅ Built guides hub /${GUIDES_PATH}`);
}

module.exports = { buildGuides };

if (require.main === module) {
    buildGuides().catch((e) => {
        console.error('❌ Guides build failed:', e);
        process.exit(1);
    });
}
