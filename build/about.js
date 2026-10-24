/**
 * English-only "About" page → /about/index.html.
 * Who builds the app, how it handles files, how the guides are written, how to get in touch.
 * Uses build/guide-template.html (same header/footer as the guides) and the shared Organization entity.
 * Facts come from app.md / constants.js — keep them in sync when the App Store listing changes.
 * Called at the end of build.js.
 */
const fs = require('fs');
const path = require('path');

const {
    SITE_URL,
    APP_STORE_APP_URL,
    APP_VERSION,
    APP_MIN_IOS,
    SUPPORT_EMAIL,
    DEVELOPER_NAME,
    DEVELOPER_SITE_URL,
    APP_STORE_DEVELOPER_URL,
    SITE_ABOUT_URL,
    SITE_PRIVACY_URL,
    SITE_TERMS_URL,
    ORGANIZATION_ID,
    ORGANIZATION_LD,
    ABOUT_LABEL_BY_LANG,
    guidesPathFor
} = require('./constants');
const { renderTemplate } = require('./lib/templateEngine');
const { readImageDimensions } = require('./lib/imageDimensions');
const { lastModified } = require('./lib/lastModified');
const { esc, jsonLdScripts, breadcrumbsHtml, breadcrumbLd } = require('./guides');

const ROOT = path.join(__dirname, '..');
const LANG = 'en';
/** First App Store release (app.md). */
const APP_FIRST_RELEASE = '2025-04-18';

async function buildAbout() {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, `${LANG}.json`), 'utf8'));
    const gui = data.guide_ui;
    const appName = data.app_info.name;
    const modified = lastModified(['build/about.js']);
    const modifiedText = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
        new Date(`${modified}T12:00:00Z`)
    );
    const { width, height } = await readImageDimensions(path.join(ROOT, data.meta.og_image.replace(SITE_URL, '')));
    const guides = require(`./guides/${LANG}`);
    const hub = `/${guidesPathFor(LANG)}`;

    const site = {
        app_name: appName,
        author: DEVELOPER_NAME,
        app_store_id: data.meta.app_store_id,
        store_url: APP_STORE_APP_URL,
        download_alt: data.hero.download_alt,
        og_image: data.meta.og_image,
        og_image_width: String(width),
        og_image_height: String(height),
        version: Date.now(),
        today: modified,
        home_url: '/',
        hub_url: hub,
        about_url: SITE_ABOUT_URL,
        about_text: ABOUT_LABEL_BY_LANG[LANG],
        last_updated: `${gui.updated} ${modifiedText}`,
        copyright: data.footer.copyright.replace(/\{year\}/g, String(new Date().getFullYear())),
        footer_guides: guides.map((g) => `<li><a href="${hub}${g.slug}/">${esc(g.card.title)}</a></li>`).join('')
    };

    const title = `About ${appName} — who makes it and how to reach us`;
    const description = `${appName} is an iPhone app by independent developer ${DEVELOPER_NAME} (c-basso). How it handles your videos, how our guides are written, and how to contact support.`;
    const crumbs = [
        { name: gui.home, path: '/' },
        { name: 'About', path: '/about/' }
    ];

    const body = `
        <section class="guide-hero">
            <div class="wrap">
                <p class="eyebrow"><span class="dot" aria-hidden="true"></span>About</p>
                <h1>About ${esc(appName)}</h1>
                <p class="guide-meta"><time datetime="${modified}">${esc(site.last_updated)}</time> · ${esc(gui.by)} ${esc(DEVELOPER_NAME)}</p>
                <div class="answer-box"><strong>In short</strong>${esc(appName)} is an iPhone app that turns videos into MP3 or M4A audio on the device. It is built and maintained by one independent developer, ${esc(DEVELOPER_NAME)}, who publishes apps on the App Store as c-basso.</div>
            </div>
        </section>
        <div class="wrap guide-layout">
            <article class="guide-content">
                <h2>Who makes the app</h2>
                <p>${esc(appName)} is made by <strong>${esc(DEVELOPER_NAME)}</strong>, an independent iOS developer. Apps are published under the name <strong>c-basso</strong>; the same person builds the app, answers support email and publishes the guides on this site.</p>
                <ul>
                    <li>Developer website: <a href="${DEVELOPER_SITE_URL}" rel="me">${esc(DEVELOPER_SITE_URL.replace(/^https:\/\/|\/$/g, ''))}</a></li>
                    <li>All apps by the developer: <a href="${APP_STORE_DEVELOPER_URL}" rel="me">${esc(DEVELOPER_NAME)} on the App Store</a></li>
                    <li>This app: <a href="${APP_STORE_APP_URL}">${esc(appName)} on the App Store</a></li>
                </ul>

                <h2>The app</h2>
                <ul>
                    <li>First released on the App Store on <time datetime="${APP_FIRST_RELEASE}">April 18, 2025</time>; current version ${esc(APP_VERSION)}.</li>
                    <li>iPhone only, requires iOS ${esc(APP_MIN_IOS)} or later. The interface is available in English and 30+ other languages.</li>
                    <li>Free to download and use, with optional in-app purchases for extra features.</li>
                    <li>What it does: extract audio from any video (MP4, MOV and other formats iPhone can play), save it as MP3 or M4A, trim to the part you need, and share or save it to Files. It also works from the Share button in Photos and Files.</li>
                </ul>

                <h2>How the app handles your files</h2>
                <p>Conversion runs on your iPhone. Your videos and the audio files made from them are not uploaded to a server, and you do not need an account. The App Store privacy label lists only purchases, identifiers and diagnostics, all as data not linked to you. Details are in the <a href="${SITE_PRIVACY_URL}">privacy policy</a> and the <a href="${SITE_TERMS_URL}">terms of use</a>.</p>

                <h2>How the guides on this site are written</h2>
                <p>The <a href="${hub}">guides</a> are published by the developer and describe what ${esc(appName)} and iOS actually do, with screenshots from the app. Where another option is simpler or free — Apple Shortcuts, an online converter, a video editor — the guides say so. When the app or iOS changes, the guides are updated and the date at the top of each guide changes with them. Guides in other languages are translations of the English versions.</p>

                <h2>Contact</h2>
                <p>Questions, bug reports, feature requests or press: email <a href="mailto:${SUPPORT_EMAIL}">${esc(SUPPORT_EMAIL)}</a>. You can write in English or Russian.</p>
            </article>
            <aside class="guide-aside" aria-label="${esc(gui.aside_label)}">
                <div class="aside-card">
                    <img class="shot" src="/screenshots/2.webp" alt="${esc(`${appName} — ${gui.aside_shot_alt}`)}" width="460" height="995" loading="lazy">
                    <h2>${esc(appName)}</h2>
                    <p>${esc(gui.free)} · iOS ${esc(APP_MIN_IOS)}+</p>
                    <a class="store-badge" href="${APP_STORE_APP_URL}" data-cta="aside"><img src="/images/download.svg" alt="${esc(site.download_alt)}" width="144" height="48" loading="lazy"></a>
                </div>
            </aside>
        </div>`;

    const jsonld = [
        {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: title,
            description,
            url: SITE_ABOUT_URL,
            inLanguage: LANG,
            dateModified: modified,
            publisher: { '@id': ORGANIZATION_ID },
            mainEntity: { '@id': ORGANIZATION_ID }
        },
        {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: DEVELOPER_NAME,
            url: SITE_ABOUT_URL,
            email: SUPPORT_EMAIL,
            jobTitle: 'iOS developer',
            worksFor: { '@id': ORGANIZATION_ID },
            sameAs: [DEVELOPER_SITE_URL, APP_STORE_DEVELOPER_URL]
        },
        { '@context': 'https://schema.org', ...ORGANIZATION_LD },
        breadcrumbLd(crumbs)
    ];

    const template = fs.readFileSync(path.join(__dirname, 'guide-template.html'), 'utf8');
    const html = renderTemplate(template, {
        site,
        gui: { ...gui, dir: 'ltr' },
        ui: data.ui,
        nav: data.nav,
        footer: data.footer,
        cta: data.cta,
        guides: data.guides,
        floating_cta: data.floating_cta,
        page: {
            title: esc(title),
            description: esc(description),
            canonical: SITE_ABOUT_URL,
            alternates: '',
            og_type: 'website',
            jsonld: jsonLdScripts(jsonld),
            breadcrumbs: breadcrumbsHtml(crumbs),
            body
        }
    });
    const dir = path.join(ROOT, 'about');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
    console.log('✅ Built /about/');
}

module.exports = { buildAbout };

if (require.main === module) {
    buildAbout().catch((e) => {
        console.error('❌ About build failed:', e);
        process.exit(1);
    });
}
