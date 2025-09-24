// Script to fix language switcher issues on all pages
const fs = require('fs');
const path = require('path');

const files = ['index.html', 'kamers.html', 'prijslijst.html', 'praktisch.html', 'ligging.html', 'contact.html'];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    console.log(`Fixing language switcher issues on ${file}...`);
    
    // Remove the external language-switcher.js script tag
    content = content.replace(/<script src="language-switcher\.js"><\/script>\s*/g, '');
    
    // Check if toggleLanguageDropdown function exists
    if (!content.includes('function toggleLanguageDropdown()')) {
        console.log(`Adding toggleLanguageDropdown function to ${file}...`);
        
        // Find the script section and add the missing function
        const scriptStart = content.indexOf('<script>');
        if (scriptStart !== -1) {
            const scriptEnd = content.indexOf('</script>', scriptStart);
            if (scriptEnd !== -1) {
                const beforeScript = content.substring(0, scriptStart);
                const scriptContent = content.substring(scriptStart, scriptEnd + 9);
                const afterScript = content.substring(scriptEnd + 9);
                
                // Add the missing function at the beginning of the script
                const newScriptContent = scriptContent.replace(
                    '<script>',
                    `<script>
        // Language switcher functionality
        function toggleLanguageDropdown() {
            const dropdown = document.querySelector('.language-dropdown');
            const button = document.querySelector('.language-btn');
            
            dropdown.classList.toggle('hidden');
            button.classList.toggle('open');
        }`
                );
                
                content = beforeScript + newScriptContent + afterScript;
            }
        }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Completed ${file}`);
});

console.log('Language switcher issues fixed on all pages!');
