// Script to fix JavaScript syntax errors in all pages
const fs = require('fs');
const path = require('path');

const files = ['index.html', 'hotel.html', 'kamers.html', 'prijslijst.html', 'praktisch.html', 'ligging.html', 'contact.html'];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    console.log(`Fixing JavaScript syntax errors in ${file}...`);
    
    // Fix missing commas before new translations
    content = content.replace(
        /footer_copyright: "© 2024 Aparthotel De Wielingen\. Alle rechten voorbehouden\."\s+logo_text:/g,
        'footer_copyright: "© 2024 Aparthotel De Wielingen. Alle rechten voorbehouden.",\n                    logo_text:'
    );
    
    content = content.replace(
        /footer_copyright: "© 2024 Aparthotel De Wielingen\. All rights reserved\."\s+logo_text:/g,
        'footer_copyright: "© 2024 Aparthotel De Wielingen. All rights reserved.",\n                    logo_text:'
    );
    
    content = content.replace(
        /footer_copyright: "© 2024 Aparthotel De Wielingen\. Tous droits réservés\."\s+logo_text:/g,
        'footer_copyright: "© 2024 Aparthotel De Wielingen. Tous droits réservés.",\n                    logo_text:'
    );
    
    content = content.replace(
        /footer_copyright: "© 2024 Aparthotel De Wielingen\. Alle Rechte vorbehalten\."\s+logo_text:/g,
        'footer_copyright: "© 2024 Aparthotel De Wielingen. Alle Rechte vorbehalten.",\n                    logo_text:'
    );
    
    // Fix missing commas before other new translations
    content = content.replace(
        /email: "Email: info@dewielingen\.be"\s+rooms_title:/g,
        'email: "Email: info@dewielingen.be",\n                    rooms_title:'
    );
    
    content = content.replace(
        /email: "Email: info@dewielingen\.be"\s+practical_title:/g,
        'email: "Email: info@dewielingen.be",\n                    practical_title:'
    );
    
    content = content.replace(
        /email: "Email: info@dewielingen\.be"\s+location_title:/g,
        'email: "Email: info@dewielingen.be",\n                    location_title:'
    );
    
    content = content.replace(
        /email: "Email: info@dewielingen\.be"\s+contact_title:/g,
        'email: "Email: info@dewielingen.be",\n                    contact_title:'
    );
    
    // Fix missing commas before our_rates
    content = content.replace(
        /email: "Email: info@dewielingen\.be"\s+our_rates:/g,
        'email: "Email: info@dewielingen.be",\n                    our_rates:'
    );
    
    // Fix missing commas before prices_inclusive
    content = content.replace(
        /our_rates: "Onze Tarieven"\s+prices_inclusive:/g,
        'our_rates: "Onze Tarieven",\n                    prices_inclusive:'
    );
    
    content = content.replace(
        /our_rates: "Our Rates"\s+prices_inclusive:/g,
        'our_rates: "Our Rates",\n                    prices_inclusive:'
    );
    
    content = content.replace(
        /our_rates: "Nos Tarifs"\s+prices_inclusive:/g,
        'our_rates: "Nos Tarifs",\n                    prices_inclusive:'
    );
    
    content = content.replace(
        /our_rates: "Unsere Preise"\s+prices_inclusive:/g,
        'our_rates: "Unsere Preise",\n                    prices_inclusive:'
    );
    
    // Fix missing commas before practical_subtitle
    content = content.replace(
        /practical_title: "Praktische Informatie"\s+practical_subtitle:/g,
        'practical_title: "Praktische Informatie",\n                    practical_subtitle:'
    );
    
    content = content.replace(
        /practical_title: "Practical Information"\s+practical_subtitle:/g,
        'practical_title: "Practical Information",\n                    practical_subtitle:'
    );
    
    content = content.replace(
        /practical_title: "Informations Pratiques"\s+practical_subtitle:/g,
        'practical_title: "Informations Pratiques",\n                    practical_subtitle:'
    );
    
    content = content.replace(
        /practical_title: "Praktische Informationen"\s+practical_subtitle:/g,
        'practical_title: "Praktische Informationen",\n                    practical_subtitle:'
    );
    
    // Fix missing commas before location_subtitle
    content = content.replace(
        /location_title: "Ideale Ligging"\s+location_subtitle:/g,
        'location_title: "Ideale Ligging",\n                    location_subtitle:'
    );
    
    content = content.replace(
        /location_title: "Ideal Location"\s+location_subtitle:/g,
        'location_title: "Ideal Location",\n                    location_subtitle:'
    );
    
    content = content.replace(
        /location_title: "Emplacement Idéal"\s+location_subtitle:/g,
        'location_title: "Emplacement Idéal",\n                    location_subtitle:'
    );
    
    content = content.replace(
        /location_title: "Ideale Lage"\s+location_subtitle:/g,
        'location_title: "Ideale Lage",\n                    location_subtitle:'
    );
    
    // Fix missing commas before contact_subtitle
    content = content.replace(
        /contact_title: "Contact"\s+contact_subtitle:/g,
        'contact_title: "Contact",\n                    contact_subtitle:'
    );
    
    content = content.replace(
        /contact_title: "Contact"\s+contact_subtitle:/g,
        'contact_title: "Contact",\n                    contact_subtitle:'
    );
    
    content = content.replace(
        /contact_title: "Contact"\s+contact_subtitle:/g,
        'contact_title: "Contact",\n                    contact_subtitle:'
    );
    
    content = content.replace(
        /contact_title: "Kontakt"\s+contact_subtitle:/g,
        'contact_title: "Kontakt",\n                    contact_subtitle:'
    );
    
    // Fix missing commas before rooms_subtitle
    content = content.replace(
        /rooms_title: "Onze Kamers"\s+rooms_subtitle:/g,
        'rooms_title: "Onze Kamers",\n                    rooms_subtitle:'
    );
    
    content = content.replace(
        /rooms_title: "Our Rooms"\s+rooms_subtitle:/g,
        'rooms_title: "Our Rooms",\n                    rooms_subtitle:'
    );
    
    content = content.replace(
        /rooms_title: "Nos Chambres"\s+rooms_subtitle:/g,
        'rooms_title: "Nos Chambres",\n                    rooms_subtitle:'
    );
    
    content = content.replace(
        /rooms_title: "Unsere Zimmer"\s+rooms_subtitle:/g,
        'rooms_title: "Unsere Zimmer",\n                    rooms_subtitle:'
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Completed ${file}`);
});

console.log('JavaScript syntax errors fixed on all pages!');
