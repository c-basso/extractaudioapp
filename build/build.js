const fs = require('fs');
const path = require('path');

const {
    URLS,
    SITE_URL,
    DEFAULT_LANGUAGE,
    LANGUAGES
} = require('./constants');
const { readImageDimensions } = require('./lib/imageDimensions');

const PROJECT_ROOT = path.join(__dirname, '..');

function resolveSiteImageUrlToLocalPath(imageUrl) {
    if (imageUrl.startsWith(SITE_URL)) {
        const relativePath = imageUrl.replace(SITE_URL, '');
        return path.join(PROJECT_ROOT, relativePath);
    }
    return path.join(PROJECT_ROOT, imageUrl);
}

(async function main() {
    const urlsPath = path.join(__dirname, '..', 'urls.txt');

    fs.writeFileSync(urlsPath, URLS.map(({url}) => url).join('\n'), 'utf8');
    console.log(`✅ Successfully built urls.txt file`);
    console.log(`📁 Output saved to: ${urlsPath}`);
    console.log()


    for (const lang of LANGUAGES) {
        try {
            const htmlDir = path.join(__dirname, lang === DEFAULT_LANGUAGE ? '..' : `../${lang}/`);

            // Read the template and JSON files
            const templatePath = path.join(__dirname, 'template.html');
            const jsonPath = path.join(__dirname, `${lang}.json`);
            const outputPath = path.join(htmlDir, 'index.html');

            if (!fs.existsSync(htmlDir)) {
                fs.mkdirSync(htmlDir, { recursive: true });
            }
            
            const template = fs.readFileSync(templatePath, 'utf8');
            const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
            
            // Add build timestamp for cache busting
            const buildTimestamp = Date.now();
            if (!data.meta) {
                data.meta = {};
            }
            data.meta.version = buildTimestamp;
            data.meta.text_direction = lang === 'he' ? 'rtl' : 'ltr';
            data.meta.alternate_default = SITE_URL;
            data.meta.alternate_languages = URLS;
            data.meta.alternate_languages_head = URLS.flatMap((entry) =>
                entry.hreflangs
                    ? entry.hreflangs.map((hreflang) => ({ hreflang, url: entry.url }))
                    : [{ hreflang: entry.lang, url: entry.url }]
            );

            // Auto-refresh "last updated" copy on every build using language locale.
            const localeByLang = {
                en: 'en-US',
                ru: 'ru-RU',
                es: 'es-ES',
                fr: 'fr-FR',
                de: 'de-DE',
                it: 'it-IT',
                pt: 'pt-PT',
                ja: 'ja-JP',
                ko: 'ko-KR',
                nl: 'nl-NL',
                pl: 'pl-PL',
                ro: 'ro-RO',
                th: 'th-TH',
                tr: 'tr-TR',
                uk: 'uk-UA',
                vi: 'vi-VN',
                cs: 'cs-CZ',
                zh: 'zh-CN',
                da: 'da-DK',
                el: 'el-GR',
                fi: 'fi-FI',
                fil: 'fil-PH',
                he: 'he-IL',
                hr: 'hr-HR',
                hu: 'hu-HU',
                id: 'id-ID',
                ms: 'ms-MY',
                no: 'nb-NO',
                sk: 'sk-SK',
                sv: 'sv-SE',
                bg: 'bg-BG',
                sl: 'sl-SI',
                ca: 'ca-ES',
                hi: 'hi-IN',
                bn: 'bn-IN',
                ta: 'ta-IN',
                te: 'te-IN',
                ml: 'ml-IN'
            };
            const monthYear = new Intl.DateTimeFormat(localeByLang[lang] || 'en-US', {
                month: 'long',
                year: 'numeric'
            }).format(new Date());
            const lastUpdatedPrefixByLang = {
                en: 'Last updated:',
                ru: 'Последнее обновление:',
                es: 'Última actualización:',
                fr: 'Dernière mise à jour :',
                de: 'Zuletzt aktualisiert:',
                it: 'Ultimo aggiornamento:',
                pt: 'Última atualização:',
                ja: '最終更新：',
                ko: '최종 업데이트:',
                nl: 'Laatst bijgewerkt:',
                pl: 'Ostatnia aktualizacja:',
                ro: 'Ultima actualizare:',
                th: 'อัปเดตล่าสุด:',
                tr: 'Son güncelleme:',
                uk: 'Останнє оновлення:',
                vi: 'Cập nhật lần cuối:',
                cs: 'Naposledy aktualizováno:',
                zh: '最后更新：',
                da: 'Sidst opdateret:',
                el: 'Τελευταία ενημέρωση:',
                fi: 'Viimeksi päivitetty:',
                fil: 'Huling na-update:',
                he: 'עודכן לאחרונה:',
                hr: 'Zadnje ažuriranje:',
                hu: 'Utolsó frissítés:',
                id: 'Terakhir diperbarui:',
                ms: 'Kemaskini terakhir:',
                no: 'Sist oppdatert:',
                sk: 'Naposledy aktualizované:',
                sv: 'Senast uppdaterad:',
                bg: 'Последна актуализация:',
                sl: 'Nazadnje posodobljeno:',
                ca: 'Darrera actualització:',
                hi: 'अंतिम अपडेट:',
                bn: 'সর্বশেষ আপডেট:',
                ta: 'கடைசியாக புதுப்பிக்கப்பட்டது:',
                te: 'చివరిగా నవీకరించబడింది:',
                ml: 'അവസാനമായി അപ്ഡേറ്റ് ചെയ്തത്:'
            };
            const lastUpdatedPrefix = lastUpdatedPrefixByLang[lang] || lastUpdatedPrefixByLang.en;
            data.last_updated = {
                text: `${lastUpdatedPrefix} ${monthYear}`
            };

            if (!data.meta.og_logo) {
                data.meta.og_logo = `${SITE_URL}logo.webp`;
            }

            const ogImagePath = resolveSiteImageUrlToLocalPath(data.meta.og_image);
            const { width, height } = await readImageDimensions(ogImagePath);
            data.meta.og_image_width = String(width);
            data.meta.og_image_height = String(height);
            
            // Replace {year} placeholder in footer.copyright with current year
            const currentYear = new Date().getFullYear();
            if (data.footer && data.footer.copyright) {
                data.footer.copyright = data.footer.copyright.replace(/\{year\}/g, currentYear.toString());
            }
            
            // Function to get value from nested object path
            function getValue(obj, path) {
                const keys = path.split('.');
                let value = obj;
                
                for (const k of keys) {
                    if (value && typeof value === 'object' && k in value) {
                        value = value[k];
                    } else {
                        return undefined;
                    }
                }
                
                return value;
            }
            
            // Function to replace variables in template
            function replaceVariables(template, context) {
                return template.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
                    const value = getValue(context, key.trim());
                    
                    if (value !== undefined) {
                        return value;
                    } else {
                        console.warn(`Warning: Variable ${key} not found in data`);
                        return match; // Keep original placeholder if not found
                    }
                });
            }
            
            // Function to process #if blocks
            function processIfBlocks(template, data) {
                // Pattern to match {{#if path}}...{{/if}}
                const ifPattern = /\{\{#if\s+([^\s}]+)\}\}([\s\S]*?)\{\{\/if\}\}/g;
                let result = template;
                let match;
                
                // Process all #if blocks
                while ((match = ifPattern.exec(result)) !== null) {
                    const fullMatch = match[0];
                    const path = match[1].trim();
                    const blockContent = match[2];
                    
                    // Get the value from data
                    const value = getValue(data, path);
                    
                    // Check if value is truthy
                    const shouldInclude = value !== undefined && value !== null && value !== false && value !== '';
                    
                    // Replace with content if truthy, or empty string if falsy
                    result = result.replace(fullMatch, shouldInclude ? blockContent : '');
                    
                    // Reset regex lastIndex to start from beginning for next iteration
                    ifPattern.lastIndex = 0;
                }
                
                return result;
            }
            
            // Function to process #each blocks (handles nested blocks recursively)
            function processEachBlocks(template, data) {
                // Pattern to match {{#each path as |varName|}}...{{/each}}
                const eachPattern = /\{\{#each\s+([^\s]+)\s+as\s+\|([^|]+)\|\}\}([\s\S]*?)\{\{\/each\}\}/;
                let result = template;
                let match;
                
                // Keep processing until no more #each blocks are found
                while ((match = result.match(eachPattern)) !== null) {
                    const fullMatch = match[0];
                    const arrayPath = match[1].trim();
                    const varName = match[2].trim();
                    let blockContent = match[3];
                    
                    // Get the array from data
                    const array = getValue(data, arrayPath);
                    
                    if (!Array.isArray(array)) {
                        console.warn(`Warning: ${arrayPath} is not an array or not found`);
                        result = result.replace(fullMatch, '');
                        continue;
                    }
                    
                    // Process each item in the array
                    let processedBlocks = array.map((item, index) => {
                        // Create context with the item accessible by varName
                        const itemContext = { [varName]: item };
                        const mergedContext = { ...data, ...itemContext };
                        
                        // Recursively process nested #each blocks first
                        let processedContent = processEachBlocks(blockContent, mergedContext);
                        // Process #if blocks
                        processedContent = processIfBlocks(processedContent, mergedContext);
                        // Then process variables in the block content
                        processedContent = replaceVariables(processedContent, mergedContext);
                        
                        return processedContent;
                    }).join('');
                    
                    // Remove trailing comma after the last item in JSON-LD arrays
                    // Pattern: }, followed by newline, optional whitespace/newlines, then closing bracket
                    processedBlocks = processedBlocks.replace(/,\s*\n[\s\n]*\]/g, '\n            ]');
                    // Also handle comma on same line as closing bracket (fallback)
                    processedBlocks = processedBlocks.replace(/,\s*\]/g, ']');
                    
                    // Replace the entire #each block with processed content
                    result = result.replace(fullMatch, processedBlocks);
                }
                
                return result;
            }
            
            // First process #each blocks, then #if blocks, then replace remaining variables
            let result = processEachBlocks(template, data);
            result = processIfBlocks(result, data);
            result = replaceVariables(result, data);
            
            // Final cleanup: remove any trailing commas before closing brackets in JSON-LD
            // This catches any trailing commas that might have been missed
            result = result.replace(/,\s*\n[\s\n]*\]/g, '\n            ]');
            result = result.replace(/,\s*\]/g, ']');
            
            // Write the result to en.html
            fs.writeFileSync(outputPath, result, 'utf8');
            
            console.log(`✅ Successfully built ${lang}.html from template and ${lang}.json`);
            console.log(`📁 Output saved to: ${outputPath}`);
            
        } catch (error) {
            console.error('❌ Error building HTML:', error.message);
            process.exit(1);
        }
    }
})().catch((err) => {
    console.error('❌ Build failed:', err);
    process.exit(1);
});
