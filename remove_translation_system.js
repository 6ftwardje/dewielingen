// Script to remove all translation system and fix HTML syntax errors
const fs = require('fs');
const path = require('path');

const files = ['index.html', 'hotel.html', 'kamers.html', 'prijslijst.html', 'praktisch.html', 'ligging.html', 'contact.html'];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    console.log(`Removing translation system from ${file}...`);
    
    // Remove all data-translate attributes
    content = content.replace(/\s+data-translate="[^"]*"/g, '');
    
    // Fix HTML syntax errors
    content = content.replace(/<h33/g, '<h3');
    content = content.replace(/<h22/g, '<h2');
    
    // Remove language switcher HTML
    content = content.replace(/<div class="language-switcher">[\s\S]*?<\/div>/g, '');
    
    // Remove all translation JavaScript code
    const scriptStart = content.indexOf('// Language switcher functionality');
    if (scriptStart !== -1) {
        const scriptEnd = content.indexOf('};', scriptStart) + 2;
        if (scriptEnd > scriptStart) {
            content = content.substring(0, scriptStart) + content.substring(scriptEnd);
        }
    }
    
    // Remove translations object
    const translationsStart = content.indexOf('const translations = {');
    if (translationsStart !== -1) {
        const translationsEnd = content.indexOf('};', translationsStart) + 2;
        if (translationsEnd > translationsStart) {
            content = content.substring(0, translationsStart) + content.substring(translationsEnd);
        }
    }
    
    // Remove translatePageContent function
    const translateStart = content.indexOf('function translatePageContent(');
    if (translateStart !== -1) {
        const translateEnd = content.indexOf('}', translateStart);
        if (translateEnd > translateStart) {
            content = content.substring(0, translateStart) + content.substring(translateEnd + 1);
        }
    }
    
    // Clean up any remaining translation-related code
    content = content.replace(/\/\/ Translation[\s\S]*?\/\/ End translation/g, '');
    content = content.replace(/\/\/ Language switcher[\s\S]*?\/\/ End language switcher/g, '');
    
    // Remove duplicate commas and clean up JavaScript
    content = content.replace(/,\s*,/g, ',');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    
    fs.writeFileSync(filePath, content);
    console.log(`Completed ${file}`);
});

console.log('Translation system completely removed!');
