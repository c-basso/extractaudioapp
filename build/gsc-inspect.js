/**
 * Google Search Console URL Inspection → gsc/indexing.csv (git-ignored).
 *
 * The "Page indexing" report itself has no API; this checks every sitemap URL one by one
 * via the URL Inspection API (limits: 2000 URLs/day, 600/min per property).
 *
 * Usage:
 *   node build/gsc-inspect.js                 all URLs from sitemap.xml
 *   node build/gsc-inspect.js guides          only URLs containing "guides"
 *   node build/gsc-inspect.js --limit 50      first 50 (quick test)
 *   node build/gsc-inspect.js --fresh         ignore cache, re-inspect everything
 *
 * Results are cached in gsc/indexing.json, so a re-run the same day (e.g. after hitting
 * the quota) continues where it stopped; URLs inspected more than 3 days ago are re-checked.
 * Auth: same service_account.json as build/gsc-report.js.
 * Output:
 *   gsc/indexing.csv          url, coverage, verdict, last crawl, canonicals, robots, fetch…
 *   gsc/indexing-summary.txt  counts by coverage state (overall and per section)
 */
const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'gsc');
const CACHE = path.join(OUT_DIR, 'indexing.json');
const KEY_PATH = path.join(ROOT, 'service_account.json');
const SITEMAP = path.join(ROOT, 'sitemap.xml');
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';
const PROPERTY_CANDIDATES = ['sc-domain:extractaudioapp.com', 'https://extractaudioapp.com/'];
const CONCURRENCY = 4;
const MAX_AGE_MS = 3 * 24 * 3600 * 1000;

const args = process.argv.slice(2);
const fresh = args.includes('--fresh');
const limitIdx = args.indexOf('--limit');
const limit = limitIdx >= 0 ? Number(args[limitIdx + 1]) : Infinity;
const filter = args.find((a, i) => !a.startsWith('--') && args[i - 1] !== '--limit');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function toCsv(header, rows) {
    const esc = (v) => {
        const s = v == null ? '' : String(v);
        return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    return [header.join(','), ...rows.map((r) => r.map(esc).join(','))].join('\n') + '\n';
}

function sitemapUrls() {
    const xml = fs.readFileSync(SITEMAP, 'utf8');
    const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1].replace(/&amp;/g, '&'));
    return [...new Set(urls)];
}

// "/" → "home", "/ru/" → "ru home", "/ru/guides/x/" → "ru guides", "/guides/x/" → "en guides"
function section(url) {
    const parts = new URL(url).pathname.split('/').filter(Boolean);
    const lang = parts[0] && parts[0].length <= 3 && parts[0] !== 'guides' ? parts.shift() : 'en';
    if (!parts.length) return `${lang} home`;
    if (parts[0] === 'guides') return parts.length === 1 ? `${lang} guides hub` : `${lang} guides`;
    return `${lang} other`;
}

async function pickProperty(sc) {
    const { data } = await sc.sites.list();
    const available = (data.siteEntry || []).map((s) => s.siteUrl);
    const found = PROPERTY_CANDIDATES.find((p) => available.includes(p));
    if (!found) throw new Error(`No access to ${PROPERTY_CANDIDATES.join(' / ')}. Visible: ${available.join(', ') || 'none'}`);
    return found;
}

async function inspect(sc, siteUrl, url) {
    for (let attempt = 0; ; attempt++) {
        try {
            const { data } = await sc.urlInspection.index.inspect({
                requestBody: { inspectionUrl: url, siteUrl, languageCode: 'en-US' },
            });
            const r = (data.inspectionResult && data.inspectionResult.indexStatusResult) || {};
            return {
                at: new Date().toISOString(),
                coverage: r.coverageState || '',
                verdict: r.verdict || '',
                lastCrawl: r.lastCrawlTime || '',
                crawledAs: r.crawledAs || '',
                googleCanonical: r.googleCanonical || '',
                userCanonical: r.userCanonical || '',
                robots: r.robotsTxtState || '',
                indexing: r.indexingState || '',
                fetch: r.pageFetchState || '',
                sitemap: (r.sitemap || []).join(' '),
                referrers: (r.referringUrls || []).length,
            };
        } catch (err) {
            const code = err.code || (err.response && err.response.status);
            const msg = (err.errors && err.errors[0] && err.errors[0].message) || err.message;
            if (code === 429 && /quota|exceeded/i.test(msg) && /day/i.test(msg)) throw Object.assign(err, { daily: true });
            if ((code === 429 || code >= 500) && attempt < 4) {
                await sleep(5000 * (attempt + 1));
                continue;
            }
            if (code === 429) throw Object.assign(err, { daily: true });
            return { at: new Date().toISOString(), error: `${code || ''} ${msg}`.trim() };
        }
    }
}

function writeOutputs(urls, cache) {
    const header = ['url', 'section', 'coverage', 'verdict', 'last_crawl', 'crawled_as', 'google_canonical',
        'user_canonical', 'robots', 'indexing', 'fetch', 'referring_urls', 'inspected_at', 'error'];
    const rows = urls.filter((u) => cache[u]).map((u) => {
        const c = cache[u];
        return [u, section(u), c.coverage, c.verdict, c.lastCrawl, c.crawledAs, c.googleCanonical, c.userCanonical,
            c.robots, c.indexing, c.fetch, c.referrers, c.at, c.error];
    });
    rows.sort((a, b) => (a[2] || '').localeCompare(b[2] || '') || a[0].localeCompare(b[0]));
    fs.writeFileSync(path.join(OUT_DIR, 'indexing.csv'), toCsv(header, rows));

    const count = (keyFn) => {
        const m = {};
        for (const r of rows) {
            const k = keyFn(r);
            m[k] = (m[k] || 0) + 1;
        }
        return Object.entries(m).sort((a, b) => b[1] - a[1]);
    };
    const lines = [`Inspected ${rows.length} of ${urls.length} URLs  (${new Date().toISOString()})`, '', 'By coverage state:'];
    for (const [k, n] of count((r) => r[2] || (r[13] ? 'ERROR' : '?'))) lines.push(`  ${String(n).padStart(4)}  ${k}`);
    lines.push('', 'By section × state:');
    for (const [k, n] of count((r) => `${r[1].padEnd(16)} ${r[2] || 'ERROR'}`)) lines.push(`  ${String(n).padStart(4)}  ${k}`);
    const mismatch = rows.filter((r) => r[6] && r[7] && r[6] !== r[7]);
    if (mismatch.length) {
        lines.push('', `Google chose a different canonical (${mismatch.length}):`);
        for (const r of mismatch.slice(0, 50)) lines.push(`  ${r[0]}  →  ${r[6]}`);
    }
    fs.writeFileSync(path.join(OUT_DIR, 'indexing-summary.txt'), lines.join('\n') + '\n');
    console.log('\n' + lines.join('\n'));
}

async function main() {
    if (!fs.existsSync(KEY_PATH)) throw new Error(`Missing ${KEY_PATH}`);
    const key = require(KEY_PATH);
    const auth = new google.auth.JWT({ email: key.client_email, key: key.private_key, scopes: [SCOPE] });
    await auth.authorize();
    const sc = google.searchconsole({ version: 'v1', auth });
    const siteUrl = await pickProperty(sc);

    fs.mkdirSync(OUT_DIR, { recursive: true });
    const cache = !fresh && fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {};
    const all = sitemapUrls().filter((u) => !filter || u.includes(filter));
    const todo = all
        .filter((u) => fresh || !cache[u] || cache[u].error || Date.now() - Date.parse(cache[u].at) > MAX_AGE_MS)
        .slice(0, limit);
    console.log(`🔎 ${siteUrl}: ${all.length} URLs in scope, ${todo.length} to inspect (${all.length - todo.length} cached)`);

    let done = 0;
    let stop = null;
    const save = () => fs.writeFileSync(CACHE, JSON.stringify(cache, null, 1));
    const queue = [...todo];
    await Promise.all(
        Array.from({ length: CONCURRENCY }, async () => {
            while (queue.length && !stop) {
                const url = queue.shift();
                try {
                    cache[url] = await inspect(sc, siteUrl, url);
                } catch (err) {
                    stop = err;
                    break;
                }
                if (++done % 25 === 0) {
                    save();
                    process.stdout.write(`  ${done}/${todo.length}\n`);
                }
                await sleep(450); // stays under 600/min with 4 workers
            }
        })
    );
    save();
    if (stop) console.warn(`⚠️  Stopped after ${done}: ${stop.message}. Re-run tomorrow to continue (cached).`);
    writeOutputs(all, cache);
    console.log(`\n✅ gsc/indexing.csv, gsc/indexing-summary.txt`);
}

main().catch((err) => {
    console.error('❌', err.message || err);
    process.exit(1);
});
