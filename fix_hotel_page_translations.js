// Script to fix missing data-translate attributes on hotel page
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'hotel.html');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Fixing missing data-translate attributes on hotel page...');

// Fix navigation elements
content = content.replace(
    '<a href="index.html" class="text-dark-gray hover:text-accent-red transition-colors duration-200">Home</a>',
    '<a href="index.html" class="text-dark-gray hover:text-accent-red transition-colors duration-200" data-translate="nav_home">Home</a>'
);

content = content.replace(
    '<a href="hotel.html" class="text-accent-red font-medium">Hotel</a>',
    '<a href="hotel.html" class="text-accent-red font-medium" data-translate="nav_hotel">Hotel</a>'
);

content = content.replace(
    '<a href="hotel.html" class="block text-2xl font-semibold text-accent-red">Hotel</a>',
    '<a href="hotel.html" class="block text-2xl font-semibold text-accent-red" data-translate="nav_hotel">Hotel</a>'
);

// Fix logo text
content = content.replace(
    '<span class="text-2xl font-bold text-accent-red">De Wielingen</span>',
    '<span class="text-2xl font-bold text-accent-red" data-translate="logo_text">De Wielingen</span>'
);

// Fix missing features section elements
content = content.replace(
    '<h3 class="text-xl font-semibold mb-4 text-dark-gray">Persoonlijke Service</h3>',
    '<h3 class="text-xl font-semibold mb-4 text-dark-gray" data-translate="hotel_service_feature">Hotelservice Zonder Maaltijden</h3>'
);

content = content.replace(
    '<p class="text-light-gray">Wij bieden persoonlijke aandacht en service om uw verblijf zo aangenaam mogelijk te maken.</p>',
    '<p class="text-light-gray" data-translate="hotel_service_desc">Opgemaakte bedden, handdoeken en alle comfort van een hotel, maar met de vrijheid van een appartement.</p>'
);

content = content.replace(
    '<h3 class="text-xl font-semibold mb-4 text-dark-gray">Gratis WiFi</h3>',
    '<h3 class="text-xl font-semibold mb-4 text-dark-gray" data-translate="free_wifi">Gratis WiFi</h3>'
);

content = content.replace(
    '<p class="text-light-gray">Gratis WiFi in alle kamers en gemeenschappelijke ruimtes voor uw comfort en gemak.</p>',
    '<p class="text-light-gray" data-translate="free_wifi_desc">Gratis WiFi in alle kamers en gemeenschappelijke ruimtes voor uw comfort en gemak.</p>'
);

content = content.replace(
    '<h3 class="text-xl font-semibold mb-4 text-dark-gray">Flexibele Check-in</h3>',
    '<h3 class="text-xl font-semibold mb-4 text-dark-gray" data-translate="flexible_checkin">Flexibele Check-in</h3>'
);

content = content.replace(
    '<p class="text-light-gray">Flexibele incheck- en uitchecktijden om aan te sluiten bij uw reisplannen.</p>',
    '<p class="text-light-gray" data-translate="flexible_checkin_desc">Flexibele incheck- en uitchecktijden om aan te sluiten bij uw reisplannen.</p>'
);

content = content.replace(
    '<h3 class="text-xl font-semibold mb-4 text-dark-gray">Kitchenette</h3>',
    '<h3 class="text-xl font-semibold mb-4 text-dark-gray" data-translate="kitchenette">Kitchenette</h3>'
);

content = content.replace(
    '<p class="text-light-gray">Kitchenette met Senseo koffiezetapparaat en microgolf op aanvraag beschikbaar.</p>',
    '<p class="text-light-gray" data-translate="kitchenette_desc">Kitchenette met Senseo koffiezetapparaat en microgolf op aanvraag beschikbaar.</p>'
);

// Fix CTA section
content = content.replace(
    '<h2 class="text-4xl md:text-5xl font-bold mb-6">Ervaar onze gastvrijheid</h2>',
    '<h2 class="text-4xl md:text-5xl font-bold mb-6" data-translate="cta_title">Ervaar onze gastvrijheid</h2>'
);

content = content.replace(
    '<p class="text-xl mb-8 opacity-90">Boek nu uw verblijf en ontdek waarom gasten steeds terugkeren naar De Wielingen</p>',
    '<p class="text-xl mb-8 opacity-90" data-translate="cta_desc">Boek nu uw verblijf en ontdek waarom gasten steeds terugkeren naar De Wielingen</p>'
);

content = content.replace(
    '<a href="#" class="inline-block bg-accent-red text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105">Boek nu</a>',
    '<a href="#" class="inline-block bg-accent-red text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105" data-translate="nav_book_now">Boek nu</a>'
);

// Fix footer elements
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

fs.writeFileSync(filePath, content);
console.log('Hotel page translation attributes fixed!');
