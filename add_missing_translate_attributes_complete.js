// Script to add data-translate attributes to ALL text elements
const fs = require('fs');
const path = require('path');

const files = ['index.html', 'hotel.html', 'kamers.html', 'prijslijst.html', 'praktisch.html', 'ligging.html', 'contact.html'];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    console.log(`Adding missing data-translate attributes to ALL text elements in ${file}...`);
    
    // Define all text content that needs translation attributes
    const textMappings = {
        'index.html': {
            'Welkom bij Aparthotel De Wielingen': 'home_welcome',
            'Een onvergetelijk verblijf aan de Belgische kust, op wandelafstand van de zee': 'home_subtitle',
            'Waarom kiezen voor De Wielingen?': 'home_why_choose',
            'Ontdek wat ons apart maakt van andere accommodaties aan de kust': 'home_why_subtitle',
            'Ruime Studio\'s & Appartementen': 'home_rooms_title',
            'Studio\'s met terras en appartementen met luxe terras, volledig ingericht met kingsize bed, eigen badkamer en kitchenette.': 'home_rooms_desc',
            'Unieke Ligging': 'home_location_title',
            'Gelegen in het centrum van Westende-bad, op 300m van de tramhalte. Ideaal voor wandelen, fietsen en relaxen tussen strand en polders.': 'home_location_desc',
            'Hotelservice Zonder Maaltijden': 'home_service_title',
            'Opgemaakte bedden, handdoeken en alle comfort van een hotel, maar met de vrijheid van een appartement. Gratis WiFi in het hele hotel.': 'home_service_desc',
            'Klaar voor uw verblijf?': 'cta_title',
            'Boek nu en geniet van een onvergetelijke tijd aan de Belgische kust': 'cta_subtitle'
        },
        'hotel.html': {
            'Welkom bij De Wielingen': 'hotel_welcome',
            'Ontdek onze moderne accommodatie aan de Belgische kust': 'hotel_subtitle',
            'Over ons hotel': 'hotel_about_title',
            'Wat maakt ons bijzonder?': 'hotel_features_title',
            'Ontdek de voordelen van verblijven bij Aparthotel De Wielingen': 'hotel_features_subtitle',
            'Centrum van Westende-bad': 'hotel_location_feature',
            'Ruime Studio\'s & Appartementen': 'hotel_rooms_feature',
            'Hotelservice Zonder Maaltijden': 'hotel_service_feature',
            'Gratis WiFi': 'free_wifi',
            'Flexibele Check-in': 'flexible_checkin',
            'Kitchenette': 'kitchenette',
            'Ervaar onze gastvrijheid': 'cta_title',
            'Boek nu uw verblijf en ontdek waarom gasten steeds terugkeren naar De Wielingen': 'cta_desc'
        },
        'kamers.html': {
            'Onze Kamers': 'rooms_title',
            'Ontdek onze comfortabele accommodatie': 'rooms_subtitle',
            'Studio': 'studio_title',
            'Perfect voor koppels': 'studio_desc',
            'Appartement': 'apartment_title',
            'Ideaal voor gezinnen': 'apartment_desc',
            'Voorzieningen': 'amenities_title'
        },
        'prijslijst.html': {
            'Onze Tarieven': 'our_rates',
            'Alle prijzen zijn inclusief belastingen en servicekosten': 'prices_inclusive',
            'Studio': 'studio',
            'Perfect voor koppels': 'studio_desc',
            '€85': 'studio_price',
            'Appartement': 'apartment',
            'Ideaal voor gezinnen': 'apartment_desc',
            '€120': 'apartment_price',
            'per nacht': 'per_night',
            'Alle prijzen zijn inclusief:': 'all_in_desc',
            'Hotelservice': 'hotel_service',
            'Gratis WiFi': 'free_wifi',
            'Kitchenette': 'kitchenette',
            'Parkeerplaats': 'parking_space',
            'Extra services:': 'extra_services',
            'Extra bed: €15/nacht': 'extra_bed',
            'Microgolfoven: €5/nacht': 'microwave_rental',
            'Late check-out: €10': 'late_checkout'
        },
        'praktisch.html': {
            'Praktische Informatie': 'practical_title',
            'Alles wat u moet weten voor uw verblijf': 'practical_subtitle',
            'Check-in/out': 'check_in_out',
            'Voorzieningen': 'amenities'
        },
        'ligging.html': {
            'Ideale Ligging': 'location_title',
            'Ontdek onze unieke locatie aan de Belgische kust': 'location_subtitle'
        },
        'contact.html': {
            'Contact': 'contact_title',
            'Neem contact met ons op': 'contact_subtitle'
        }
    };
    
    const fileMappings = textMappings[file];
    if (fileMappings) {
        // Add data-translate attributes to various HTML elements
        Object.entries(fileMappings).forEach(([text, key]) => {
            // Escape special regex characters
            const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            
            // Create regex patterns for different HTML elements
            const patterns = [
                // h1 tags
                new RegExp(`<h1([^>]*)>\\s*${escapedText}\\s*</h1>`, 'gi'),
                // h2 tags
                new RegExp(`<h2([^>]*)>\\s*${escapedText}\\s*</h2>`, 'gi'),
                // h3 tags
                new RegExp(`<h3([^>]*)>\\s*${escapedText}\\s*</h3>`, 'gi'),
                // p tags
                new RegExp(`<p([^>]*)>\\s*${escapedText}\\s*</p>`, 'gi'),
                // li tags
                new RegExp(`<li([^>]*)>\\s*${escapedText}\\s*</li>`, 'gi'),
                // span tags
                new RegExp(`<span([^>]*)>\\s*${escapedText}\\s*</span>`, 'gi'),
                // div tags with text content
                new RegExp(`<div([^>]*)>\\s*${escapedText}\\s*</div>`, 'gi')
            ];
            
            // Apply each pattern
            patterns.forEach(pattern => {
                content = content.replace(pattern, (match, attributes) => {
                    // Check if data-translate already exists
                    if (attributes.includes('data-translate=')) {
                        return match; // Skip if already has data-translate
                    }
                    return `<${match.match(/<(\w+)/)[1]}${attributes} data-translate="${key}">${text}</${match.match(/<(\w+)/)[1]}>`;
                });
            });
        });
    }
    
    // Add data-translate attributes to any remaining text elements without them
    // This catches any text that might have been missed
    
    // Fix any remaining elements that should have data-translate but don't
    const commonTexts = [
        'De Wielingen',
        'Irislaan 1',
        '8400 Oostende',
        'België',
        'Tel: +32 59 70 11 11',
        'Email: info@dewielingen.be',
        'Boek nu',
        'Reserveer uw verblijf aan zee',
        'Snelle Links',
        'Praktisch',
        'Check-in/out',
        'Ligging',
        'Voorzieningen',
        'Boek uw verblijf',
        'Reserveer nu en geniet van een ontspannen verblijf aan zee.',
        '© 2024 Aparthotel De Wielingen. Alle rechten voorbehouden.'
    ];
    
    commonTexts.forEach(text => {
        const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        // Add data-translate to elements that don't have it
        const patterns = [
            new RegExp(`<h1([^>]*)>\\s*${escapedText}\\s*</h1>`, 'gi'),
            new RegExp(`<h2([^>]*)>\\s*${escapedText}\\s*</h2>`, 'gi'),
            new RegExp(`<h3([^>]*)>\\s*${escapedText}\\s*</h3>`, 'gi'),
            new RegExp(`<p([^>]*)>\\s*${escapedText}\\s*</p>`, 'gi'),
            new RegExp(`<span([^>]*)>\\s*${escapedText}\\s*</span>`, 'gi'),
            new RegExp(`<a([^>]*)>\\s*${escapedText}\\s*</a>`, 'gi')
        ];
        
        patterns.forEach(pattern => {
            content = content.replace(pattern, (match, attributes) => {
                if (attributes.includes('data-translate=')) {
                    return match;
                }
                const tagName = match.match(/<(\w+)/)[1];
                const key = text.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
                return `<${tagName}${attributes} data-translate="${key}">${text}</${tagName}>`;
            });
        });
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Completed ${file}`);
});

console.log('Data-translate attributes added to ALL text elements!');
