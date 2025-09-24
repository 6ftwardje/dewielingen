// Script to add missing data-translate attributes to all elements
const fs = require('fs');
const path = require('path');

const files = ['index.html', 'hotel.html', 'kamers.html', 'prijslijst.html', 'praktisch.html', 'ligging.html', 'contact.html'];

// Translation mappings for missing elements
const missingTranslations = {
    'index.html': {
        'Welkom bij Aparthotel De Wielingen': 'home_welcome',
        'Een onvergetelijk verblijf aan de Belgische kust, op wandelafstand van de zee': 'home_subtitle',
        'Ontdek onze accommodatie': 'home_discover_title',
        'Moderne studio\'s en appartementen met alle comfort': 'home_discover_desc',
        'Unieke ligging': 'home_location_title',
        'Op wandelafstand van het strand en de uitgestrekte polders': 'home_location_desc',
        'Hotelservice': 'home_service_title',
        'Opgemaakte bedden, handdoeken en alle comfort van een hotel': 'home_service_desc',
        'Reserveer nu en geniet van een ontspannen verblijf aan zee.': 'footer_booking_desc'
    },
    'hotel.html': {
        'Welkom bij De Wielingen': 'hotel_welcome',
        'Ontdek onze moderne accommodatie aan de Belgische kust': 'hotel_subtitle',
        'Over ons hotel': 'hotel_about_title',
        'Wij heten u van harte welkom bij Aparthotel De Wielingen. Wij bezorgen u een onvergetelijk verblijf aan de Belgische kust. Ons hotel is gelegen op wandelafstand van de zee en biedt hotelservice zonder maaltijden.': 'hotel_about_text1',
        'De Wielingen heeft een unieke locatie, gelegen op een boog scheut van het strand en de uitgestrekte polders. Dit maakt onze ligging ideaal om er te wandelen, te fietsen en te relaxen.': 'hotel_about_text2',
        'Wij beschikken over ruime studio\'s (met terras) en appartementen met (luxe) terras. Hiernaast bieden wij ook een eigen parking aan voor het hotel met 2 elektrische laadpalen voor uw wagen.': 'hotel_about_text3',
        'Wat maakt ons bijzonder?': 'hotel_features_title',
        'Ontdek de voordelen van verblijven bij Aparthotel De Wielingen': 'hotel_features_subtitle',
        'Centrum van Westende-bad': 'hotel_location_feature',
        'Gelegen op de hoek van Irislaan en Henri Jasparlaan, op 300m van de tramhalte met verbinding naar alle kuststeden.': 'hotel_location_desc',
        'Ruime Studio\'s & Appartementen': 'hotel_rooms_feature',
        'Studio\'s met terras en appartementen met luxe terras, volledig ingericht met kingsize bed, eigen badkamer en kitchenette.': 'hotel_rooms_desc',
        'Hotelservice Zonder Maaltijden': 'hotel_service_feature',
        'Opgemaakte bedden, handdoeken en alle comfort van een hotel, maar met de vrijheid van een appartement.': 'hotel_service_desc',
        'Boek uw verblijf': 'footer_booking_title',
        'Reserveer nu en geniet van een ontspannen verblijf aan zee.': 'footer_booking_desc'
    },
    'kamers.html': {
        'Onze Kamers': 'rooms_title',
        'Ontdek onze comfortabele accommodatie': 'rooms_subtitle',
        'Studio': 'studio_title',
        'Perfect voor koppels': 'studio_desc',
        'Appartement': 'apartment_title',
        'Ideaal voor gezinnen': 'apartment_desc',
        'Voorzieningen': 'amenities_title',
        'Reserveer nu en geniet van een ontspannen verblijf aan zee.': 'footer_booking_desc'
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
        'Late check-out: €10': 'late_checkout',
        'Reserveer nu en geniet van een ontspannen verblijf aan zee.': 'footer_booking_desc'
    },
    'praktisch.html': {
        'Praktische Informatie': 'practical_title',
        'Alles wat u moet weten voor uw verblijf': 'practical_subtitle',
        'Check-in/out': 'check_in_out',
        'Voorzieningen': 'amenities',
        'Reserveer nu en geniet van een ontspannen verblijf aan zee.': 'footer_booking_desc'
    },
    'ligging.html': {
        'Ideale Ligging': 'location_title',
        'Ontdek onze unieke locatie aan de Belgische kust': 'location_subtitle',
        'Reserveer nu en geniet van een ontspannen verblijf aan zee.': 'footer_booking_desc'
    },
    'contact.html': {
        'Contact': 'contact_title',
        'Neem contact met ons op': 'contact_subtitle',
        'Reserveer nu en geniet van een ontspannen verblijf aan zee.': 'footer_booking_desc'
    }
};

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    console.log(`Adding missing data-translate attributes to ${file}...`);
    
    const fileTranslations = missingTranslations[file];
    if (fileTranslations) {
        // Add data-translate attributes to various elements
        Object.entries(fileTranslations).forEach(([text, key]) => {
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
    
    fs.writeFileSync(filePath, content);
    console.log(`Completed ${file}`);
});

console.log('Missing data-translate attributes added to all elements!');
