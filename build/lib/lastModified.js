/**
 * Real "last modified" date for generated pages (YYYY-MM-DD), so dateModified / sitemap lastmod
 * change only when the page's source content changes — not on every build.
 *
 * Date = last git commit touching any of `files`; if any of them has uncommitted changes
 * (or git is unavailable) → today.
 */
const { execFileSync } = require('child_process');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const today = () => new Date().toISOString().slice(0, 10);
const cache = new Map();

function git(args) {
    return execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
}

/** @param {string[]} files paths relative to the repo root, e.g. ['build/en.json'] */
function lastModified(files) {
    const key = files.join('|');
    if (cache.has(key)) return cache.get(key);
    let date = today();
    try {
        const dirty = git(['status', '--porcelain', '--', ...files]);
        if (!dirty) date = git(['log', '-1', '--format=%cs', '--', ...files]) || date;
    } catch {
        // not a git checkout — keep today
    }
    cache.set(key, date);
    return date;
}

module.exports = { lastModified };
