const SITE_URL = "https://extractaudioapp.com/";
const DEFAULT_LANGUAGE = 'en';

const LANGUAGES = [
    DEFAULT_LANGUAGE,
    'ru',
    'es',
    'fr',
    'de',
    'it',
    'pt',
    'ja',
    'ko',
    'nl',
    'pl',
    'ro',
    'th',
    'tr',
    'uk',
    'vi',
    'cs',
    'zh',
    'da',
    'el',
    'fi',
    'fil',
    'he',
    'hr',
    'hu',
    'id',
    'ms',
    'no',
    'sk',
    'sv',
    'bg',
    'sl',
    'ca',
    'hi',
    'bn',
    'ta',
    'te',
    'ml'
];

const URLS = LANGUAGES.map((lang) => {
    const entry = {
        lang,
        url: lang === DEFAULT_LANGUAGE ? SITE_URL : `${SITE_URL}${lang}/`
    };
    // Single URL for Chinese; search engines get both script variants via hreflang.
    if (lang === 'zh') {
        entry.hreflangs = ['zh-Hans', 'zh-Hant'];
    }
    entry.link_label = lang === 'zh' ? '中文' : lang;
    return entry;
});

const ADDITIONAL_URLS = [
    `${SITE_URL}llms.txt`
];

// Expected JSON-LD types that should be present on each generated page.
// Keep this list in sync with `build/template.html` structured data scripts.
const EXPECTED_JSON_LD_TYPES = [
    'SoftwareApplication',
    'Organization',
    'WebSite',
    'HowTo',
    'FAQPage',
    'BreadcrumbList'
];

const INDEX_NOW_KEY = '310407653a608d4d';

// https://www.indexnow.org/searchengines.json
const INDEX_NOW_ENGINES = [
    'indexnow.yep.com',
    'search.seznam.cz',
    'searchadvisor.naver.com',
    'indexnow.amazonbot.amazon',
    'api.indexnow.org',
    'yandex.com',
    'bing.com'
];

module.exports = {
    SITE_URL,
    URLS,
    DEFAULT_LANGUAGE,
    LANGUAGES,
    EXPECTED_JSON_LD_TYPES,
    INDEX_NOW_KEY,
    INDEX_NOW_ENGINES,
    ADDITIONAL_URLS
};