// Script to fix missing data-translate attributes on all pages
const fs = require('fs');
const path = require('path');

const files = ['index.html', 'kamers.html', 'prijslijst.html', 'praktisch.html', 'ligging.html', 'contact.html'];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    console.log(`Fixing missing data-translate attributes on ${file}...`);
    
    // Fix duplicate data-translate attributes first
    content = content.replace(/data-translate="([^"]+)"\s+data-translate="\1"/g, 'data-translate="$1"');
    
    // Fix logo text
    content = content.replace(
        '<span class="text-2xl font-bold text-accent-red">De Wielingen</span>',
        '<span class="text-2xl font-bold text-accent-red" data-translate="logo_text">De Wielingen</span>'
    );
    
    content = content.replace(
        '<span class="text-xl font-bold text-accent-red">De Wielingen</span>',
        '<span class="text-xl font-bold text-accent-red" data-translate="logo_text">De Wielingen</span>'
    );
    
    // Fix navigation elements
    content = content.replace(
        '<a href="index.html" class="text-dark-gray hover:text-accent-red transition-colors duration-200">Home</a>',
        '<a href="index.html" class="text-dark-gray hover:text-accent-red transition-colors duration-200" data-translate="nav_home">Home</a>'
    );
    
    content = content.replace(
        '<a href="hotel.html" class="text-dark-gray hover:text-accent-red transition-colors duration-200">Hotel</a>',
        '<a href="hotel.html" class="text-dark-gray hover:text-accent-red transition-colors duration-200" data-translate="nav_hotel">Hotel</a>'
    );
    
    content = content.replace(
        '<a href="hotel.html" class="block text-2xl font-semibold text-dark-gray hover:text-accent-red transition-colors duration-200">Hotel</a>',
        '<a href="hotel.html" class="block text-2xl font-semibold text-dark-gray hover:text-accent-red transition-colors duration-200" data-translate="nav_hotel">Hotel</a>'
    );
    
    // Fix footer contact info
    content = content.replace(
        '<h3 class="text-xl font-semibold mb-4 text-dark-gray">Contact</h3>',
        '<h3 class="text-xl font-semibold mb-4 text-dark-gray" data-translate="contact_title">Contact</h3>'
    );
    
    content = content.replace(
        '<p>Irislaan 1</p>',
        '<p data-translate="address_street">Irislaan 1</p>'
    );
    
    content = content.replace(
        '<p>8400 Oostende</p>',
        '<p data-translate="address_city">8400 Oostende</p>'
    );
    
    content = content.replace(
        '<p>België</p>',
        '<p data-translate="address_country">België</p>'
    );
    
    content = content.replace(
        '<p class="mt-4">Tel: +32 59 70 11 11</p>',
        '<p class="mt-4" data-translate="phone">Tel: +32 59 70 11 11</p>'
    );
    
    content = content.replace(
        '<p>Email: info@dewielingen.be</p>',
        '<p data-translate="email">Email: info@dewielingen.be</p>'
    );
    
    // Fix footer links
    content = content.replace(
        '<a href="hotel.html" class="block text-light-gray hover:text-accent-red transition-colors duration-200">Hotel</a>',
        '<a href="hotel.html" class="block text-light-gray hover:text-accent-red transition-colors duration-200" data-translate="nav_hotel">Hotel</a>'
    );
    
    content = content.replace(
        '<a href="kamers.html" class="block text-light-gray hover:text-accent-red transition-colors duration-200">Kamers</a>',
        '<a href="kamers.html" class="block text-light-gray hover:text-accent-red transition-colors duration-200" data-translate="nav_rooms">Kamers</a>'
    );
    
    content = content.replace(
        '<a href="prijslijst.html" class="block text-light-gray hover:text-accent-red transition-colors duration-200">Prijslijst</a>',
        '<a href="prijslijst.html" class="block text-light-gray hover:text-accent-red transition-colors duration-200" data-translate="nav_prices">Prijslijst</a>'
    );
    
    content = content.replace(
        '<a href="contact.html" class="block text-light-gray hover:text-accent-red transition-colors duration-200">Contact</a>',
        '<a href="contact.html" class="block text-light-gray hover:text-accent-red transition-colors duration-200" data-translate="nav_contact">Contact</a>'
    );
    
    content = content.replace(
        '<a href="#" class="inline-block bg-accent-red text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors duration-200 font-medium">Boek nu</a>',
        '<a href="#" class="inline-block bg-accent-red text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors duration-200 font-medium" data-translate="nav_book_now">Boek nu</a>'
    );
    
    // Page-specific fixes
    if (file === 'index.html') {
        // Fix duplicate data-translate attributes
        content = content.replace(
            '<p class="text-xl md:text-2xl mb-8 opacity-90 fade-in" data-translate="home_subtitle" data-translate="home_subtitle">Een onvergetelijk verblijf aan de Belgische kust, op wandelafstand van de zee</p>',
            '<p class="text-xl md:text-2xl mb-8 opacity-90 fade-in" data-translate="home_subtitle">Een onvergetelijk verblijf aan de Belgische kust, op wandelafstand van de zee</p>'
        );
        
        content = content.replace(
            '<p class="text-light-gray mb-4" data-translate="footer_booking_desc" data-translate="footer_booking_desc">Reserveer nu en geniet van een ontspannen verblijf aan zee.</p>',
            '<p class="text-light-gray mb-4" data-translate="footer_booking_desc">Reserveer nu en geniet van een ontspannen verblijf aan zee.</p>'
        );
    }
    
    if (file === 'kamers.html') {
        // Add missing translations for kamers page
        content = content.replace(
            '<h1 class="text-4xl md:text-6xl font-bold mb-6 fade-in">Onze Kamers</h1>',
            '<h1 class="text-4xl md:text-6xl font-bold mb-6 fade-in" data-translate="rooms_title">Onze Kamers</h1>'
        );
        
        content = content.replace(
            '<p class="text-xl md:text-2xl opacity-90 fade-in">Ontdek onze comfortabele accommodatie</p>',
            '<p class="text-xl md:text-2xl opacity-90 fade-in" data-translate="rooms_subtitle">Ontdek onze comfortabele accommodatie</p>'
        );
    }
    
    if (file === 'prijslijst.html') {
        // Add missing translations for prijslijst page
        content = content.replace(
            '<h1 class="text-4xl md:text-6xl font-bold mb-6 fade-in">Onze Tarieven</h1>',
            '<h1 class="text-4xl md:text-6xl font-bold mb-6 fade-in" data-translate="our_rates">Onze Tarieven</h1>'
        );
        
        content = content.replace(
            '<p class="text-xl md:text-2xl opacity-90 fade-in">Alle prijzen zijn inclusief belastingen en servicekosten</p>',
            '<p class="text-xl md:text-2xl opacity-90 fade-in" data-translate="prices_inclusive">Alle prijzen zijn inclusief belastingen en servicekosten</p>'
        );
    }
    
    if (file === 'praktisch.html') {
        // Add missing translations for praktisch page
        content = content.replace(
            '<h1 class="text-4xl md:text-6xl font-bold mb-6 fade-in">Praktische Informatie</h1>',
            '<h1 class="text-4xl md:text-6xl font-bold mb-6 fade-in" data-translate="practical_title">Praktische Informatie</h1>'
        );
        
        content = content.replace(
            '<p class="text-xl md:text-2xl opacity-90 fade-in">Alles wat u moet weten voor uw verblijf</p>',
            '<p class="text-xl md:text-2xl opacity-90 fade-in" data-translate="practical_subtitle">Alles wat u moet weten voor uw verblijf</p>'
        );
    }
    
    if (file === 'ligging.html') {
        // Add missing translations for ligging page
        content = content.replace(
            '<h1 class="text-4xl md:text-6xl font-bold mb-6 fade-in">Ideale Ligging</h1>',
            '<h1 class="text-4xl md:text-6xl font-bold mb-6 fade-in" data-translate="location_title">Ideale Ligging</h1>'
        );
        
        content = content.replace(
            '<p class="text-xl md:text-2xl opacity-90 fade-in">Ontdek onze unieke locatie aan de Belgische kust</p>',
            '<p class="text-xl md:text-2xl opacity-90 fade-in" data-translate="location_subtitle">Ontdek onze unieke locatie aan de Belgische kust</p>'
        );
    }
    
    if (file === 'contact.html') {
        // Add missing translations for contact page
        content = content.replace(
            '<h1 class="text-4xl md:text-6xl font-bold mb-6 fade-in">Contact</h1>',
            '<h1 class="text-4xl md:text-6xl font-bold mb-6 fade-in" data-translate="contact_title">Contact</h1>'
        );
        
        content = content.replace(
            '<p class="text-xl md:text-2xl opacity-90 fade-in">Neem contact met ons op</p>',
            '<p class="text-xl md:text-2xl opacity-90 fade-in" data-translate="contact_subtitle">Neem contact met ons op</p>'
        );
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Completed ${file}`);
});

console.log('All pages translation attributes fixed!');
