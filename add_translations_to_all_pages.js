// Script to add new translations to all pages
const fs = require('fs');
const path = require('path');

const files = ['index.html', 'kamers.html', 'prijslijst.html', 'praktisch.html', 'ligging.html', 'contact.html'];

const newTranslations = {
    nl: {
        logo_text: "De Wielingen",
        address_street: "Irislaan 1",
        address_city: "8400 Oostende",
        address_country: "België",
        phone: "Tel: +32 59 70 11 11",
        email: "Email: info@dewielingen.be",
        rooms_title: "Onze Kamers",
        rooms_subtitle: "Ontdek onze comfortabele accommodatie",
        our_rates: "Onze Tarieven",
        prices_inclusive: "Alle prijzen zijn inclusief belastingen en servicekosten",
        practical_title: "Praktische Informatie",
        practical_subtitle: "Alles wat u moet weten voor uw verblijf",
        location_title: "Ideale Ligging",
        location_subtitle: "Ontdek onze unieke locatie aan de Belgische kust",
        contact_title: "Contact",
        contact_subtitle: "Neem contact met ons op"
    },
    en: {
        logo_text: "De Wielingen",
        address_street: "Irislaan 1",
        address_city: "8400 Ostend",
        address_country: "Belgium",
        phone: "Tel: +32 59 70 11 11",
        email: "Email: info@dewielingen.be",
        rooms_title: "Our Rooms",
        rooms_subtitle: "Discover our comfortable accommodation",
        our_rates: "Our Rates",
        prices_inclusive: "All prices include taxes and service charges",
        practical_title: "Practical Information",
        practical_subtitle: "Everything you need to know for your stay",
        location_title: "Ideal Location",
        location_subtitle: "Discover our unique location on the Belgian coast",
        contact_title: "Contact",
        contact_subtitle: "Get in touch with us"
    },
    fr: {
        logo_text: "De Wielingen",
        address_street: "Irislaan 1",
        address_city: "8400 Ostende",
        address_country: "Belgique",
        phone: "Tel: +32 59 70 11 11",
        email: "Email: info@dewielingen.be",
        rooms_title: "Nos Chambres",
        rooms_subtitle: "Découvrez notre hébergement confortable",
        our_rates: "Nos Tarifs",
        prices_inclusive: "Tous les prix incluent les taxes et frais de service",
        practical_title: "Informations Pratiques",
        practical_subtitle: "Tout ce que vous devez savoir pour votre séjour",
        location_title: "Emplacement Idéal",
        location_subtitle: "Découvrez notre emplacement unique sur la côte belge",
        contact_title: "Contact",
        contact_subtitle: "Contactez-nous"
    },
    de: {
        logo_text: "De Wielingen",
        address_street: "Irislaan 1",
        address_city: "8400 Ostende",
        address_country: "Belgien",
        phone: "Tel: +32 59 70 11 11",
        email: "Email: info@dewielingen.be",
        rooms_title: "Unsere Zimmer",
        rooms_subtitle: "Entdecken Sie unsere komfortable Unterkunft",
        our_rates: "Unsere Preise",
        prices_inclusive: "Alle Preise inklusive Steuern und Servicegebühren",
        practical_title: "Praktische Informationen",
        practical_subtitle: "Alles was Sie für Ihren Aufenthalt wissen müssen",
        location_title: "Ideale Lage",
        location_subtitle: "Entdecken Sie unsere einzigartige Lage an der belgischen Küste",
        contact_title: "Kontakt",
        contact_subtitle: "Nehmen Sie Kontakt mit uns auf"
    }
};

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    console.log(`Adding new translations to ${file}...`);
    
    // Add new translations to each language section
    Object.keys(newTranslations).forEach(lang => {
        const langTranslations = newTranslations[lang];
        Object.entries(langTranslations).forEach(([key, value]) => {
            // Find the language section and add the new translation
            const langSectionRegex = new RegExp(`(\\s+${lang}:\\s*{[^}]*)(\\s+})`, 's');
            const match = content.match(langSectionRegex);
            
            if (match) {
                const beforeClosing = match[1];
                const closingBrace = match[2];
                
                // Add the new translation before the closing brace
                const newTranslation = `                    ${key}: "${value}",\n`;
                const updatedSection = beforeClosing + newTranslation + closingBrace;
                
                content = content.replace(langSectionRegex, updatedSection);
            }
        });
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Completed ${file}`);
});

console.log('New translations added to all pages!');
