// Script to fix all JavaScript syntax errors in all pages
const fs = require('fs');
const path = require('path');

const files = ['index.html', 'hotel.html', 'kamers.html', 'prijslijst.html', 'praktisch.html', 'ligging.html', 'contact.html'];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    console.log(`Fixing all syntax errors in ${file}...`);
    
    // Fix all missing commas in the translations object
    // Replace any line that ends with a quote but doesn't have a comma, and is followed by a new line with a key
    content = content.replace(
        /(")\s*\n\s+([a-zA-Z_][a-zA-Z0-9_]*:)/g,
        '$1,\n                    $2'
    );
    
    // Fix any remaining missing commas before closing braces
    content = content.replace(
        /(")\s*\n\s+}/g,
        '$1\n                }'
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Completed ${file}`);
});

console.log('All JavaScript syntax errors fixed!');
