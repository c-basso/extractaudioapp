/**
 * Tiny Handlebars-like template engine used by `build/build.js` and `build/guides.js`.
 * Supports {{path.to.value}}, {{#if path}}…{{/if}} and {{#each path as |item|}}…{{/each}}.
 * NOTE: nested #each blocks are not supported reliably (non-greedy match) — pre-render nested
 * markup in JS instead.
 */

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

function replaceVariables(template, context) {
    return template.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
        const value = getValue(context, key.trim());
        if (value !== undefined) {
            return value;
        }
        console.warn(`Warning: Variable ${key} not found in data`);
        return match;
    });
}

function processIfBlocks(template, data) {
    const ifPattern = /\{\{#if\s+([^\s}]+)\}\}([\s\S]*?)\{\{\/if\}\}/g;
    let result = template;
    let match;
    while ((match = ifPattern.exec(result)) !== null) {
        const fullMatch = match[0];
        const value = getValue(data, match[1].trim());
        const shouldInclude = value !== undefined && value !== null && value !== false && value !== '';
        result = result.replace(fullMatch, shouldInclude ? match[2] : '');
        ifPattern.lastIndex = 0;
    }
    return result;
}

function processEachBlocks(template, data) {
    const eachPattern = /\{\{#each\s+([^\s]+)\s+as\s+\|([^|]+)\|\}\}([\s\S]*?)\{\{\/each\}\}/;
    let result = template;
    let match;
    while ((match = result.match(eachPattern)) !== null) {
        const fullMatch = match[0];
        const arrayPath = match[1].trim();
        const varName = match[2].trim();
        const blockContent = match[3];
        const array = getValue(data, arrayPath);
        if (!Array.isArray(array)) {
            console.warn(`Warning: ${arrayPath} is not an array or not found`);
            result = result.replace(fullMatch, '');
            continue;
        }
        let processedBlocks = array.map((item, index) => {
            const mergedContext = { ...data, [varName]: item, [`${varName}_index`]: index + 1 };
            let processedContent = processEachBlocks(blockContent, mergedContext);
            processedContent = processIfBlocks(processedContent, mergedContext);
            processedContent = replaceVariables(processedContent, mergedContext);
            return processedContent;
        }).join('');
        // Remove trailing comma after the last item in JSON-LD arrays
        processedBlocks = processedBlocks.replace(/,\s*\n[\s\n]*\]/g, '\n            ]');
        processedBlocks = processedBlocks.replace(/,\s*\]/g, ']');
        // Function replacer: avoid `$&`/`$1` patterns in content being interpreted.
        result = result.replace(fullMatch, () => processedBlocks);
    }
    return result;
}

function renderTemplate(template, data) {
    let result = processEachBlocks(template, data);
    result = processIfBlocks(result, data);
    result = replaceVariables(result, data);
    // Final cleanup: trailing commas before closing brackets in JSON-LD
    result = result.replace(/,\s*\n[\s\n]*\]/g, '\n            ]');
    result = result.replace(/,\s*\]/g, ']');
    return result;
}

module.exports = { getValue, replaceVariables, processIfBlocks, processEachBlocks, renderTemplate };
