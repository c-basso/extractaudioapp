const fs = require('fs');
const path = require('path');

const { SITE_URL, URLS, DEFAULT_LANGUAGE, GUIDES_LANGUAGES, guidesPathFor } = require('./constants');

(function main() {
  const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
  const robotsPath = path.join(__dirname, '..', 'robots.txt');

  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>');
  lines.push('<urlset ');
  lines.push('  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
  lines.push('  xmlns:xhtml="http://www.w3.org/1999/xhtml">');
  lines.push('  ');
  const lastmod = new Date().toISOString().split('T')[0];
  for (const { url } of URLS) {
    lines.push('  <url>');
    lines.push(`    <loc>${url}</loc>`);
    for (const alt of URLS) {
      const alternateUrl = alt.url;
      if (alt.hreflangs) {
        for (const hl of alt.hreflangs) {
          lines.push(`    <xhtml:link rel="alternate" hreflang="${hl}" href="${alternateUrl}" />`);
        }
      } else {
        lines.push(`    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alternateUrl}" />`);
      }
    }
    lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}" />`);
    lines.push(`    <lastmod>${lastmod}</lastmod>`);
    lines.push(url === SITE_URL ? '    <priority>1.0</priority>' : '    <priority>0.9</priority>');
    lines.push('  </url>');
    lines.push('');
  }
  // Keyword guides: hub + one page per slug per language, with hreflang between languages sharing a slug.
  const slugsByLang = Object.fromEntries(
    GUIDES_LANGUAGES.map((lang) => [lang, new Set(require(`./guides/${lang}`).map((g) => g.slug))])
  );
  const allSlugs = [...new Set(GUIDES_LANGUAGES.flatMap((lang) => [...slugsByLang[lang]]))];
  const pages = [{ slug: null }, ...allSlugs.map((slug) => ({ slug }))];
  for (const { slug } of pages) {
    const langs = GUIDES_LANGUAGES.filter((lang) => slug === null || slugsByLang[lang].has(slug));
    const urlFor = (lang) => `${SITE_URL}${guidesPathFor(lang)}${slug ? `${slug}/` : ''}`;
    for (const lang of langs) {
      lines.push('  <url>');
      lines.push(`    <loc>${urlFor(lang)}</loc>`);
      if (langs.length > 1) {
        for (const alt of langs) {
          lines.push(`    <xhtml:link rel="alternate" hreflang="${alt}" href="${urlFor(alt)}" />`);
        }
        if (langs.includes(DEFAULT_LANGUAGE)) {
          lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(DEFAULT_LANGUAGE)}" />`);
        }
      }
      lines.push(`    <lastmod>${lastmod}</lastmod>`);
      lines.push(slug ? '    <priority>0.7</priority>' : '    <priority>0.8</priority>');
      lines.push('  </url>');
      lines.push('');
    }
  }
  lines.push('</urlset>');

  fs.writeFileSync(sitemapPath, lines.join('\n') + '\n', 'utf8');
  console.log(`✅ Successfully built sitemap.xml`);
  console.log(`📁 Output saved to: ${sitemapPath}`);
  console.log()

  const robots = `
User-agent: *
Allow: /

Sitemap: ${SITE_URL}sitemap.xml 
  `;
  fs.writeFileSync(robotsPath, robots.trim() + '\n', 'utf8');
  console.log(`✅ Successfully built robots.txt`);
  console.log(`📁 Output saved to: ${robotsPath}`);
  console.log()

})();

