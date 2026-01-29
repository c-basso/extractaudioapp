const fs = require('fs');
const path = require('path');

const {
    URLS,
    SITE_URL,
    DEFAULT_LANGUAGE,
    LANGUAGES
} = require('./constants');

(function() {
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
            data.meta.alternate_default = SITE_URL;
            data.meta.alternate_languages = URLS;

            if (!data.meta.og_logo) {
                data.meta.og_logo = `${SITE_URL}logo.webp`;
            }
            
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
})();
