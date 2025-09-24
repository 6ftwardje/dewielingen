// Script to add complete translation system to all pages
const fs = require('fs');
const path = require('path');

const files = ['index.html', 'hotel.html', 'kamers.html', 'prijslijst.html', 'praktisch.html', 'ligging.html', 'contact.html'];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    console.log(`Adding complete translation system to ${file}...`);
    
    // Add language switcher CSS to the head section
    const languageSwitcherCSS = `
        .language-switcher {
            position: fixed;
            top: 80px;
            right: 20px;
            z-index: 1000;
        }
        .language-btn {
            background: white;
            border: 2px solid #a50030;
            border-radius: 8px;
            padding: 8px 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            font-weight: 600;
            color: #a50030;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            min-width: 120px;
        }
        .language-btn:hover {
            background: #a50030;
            color: white;
        }
        .language-btn .flag {
            font-size: 16px;
        }
        .language-btn .arrow {
            font-size: 12px;
            transition: transform 0.3s ease;
        }
        .language-btn.open .arrow {
            transform: rotate(180deg);
        }
        .language-dropdown {
            position: absolute;
            top: 100%;
            right: 0;
            background: white;
            border: 2px solid #a50030;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            margin-top: 4px;
            min-width: 140px;
            overflow: hidden;
        }
        .language-option {
            padding: 10px 12px;
            cursor: pointer;
            font-size: 14px;
            color: #333;
            transition: background-color 0.2s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .language-option:hover {
            background: #f0f0f0;
        }
        .hidden {
            display: none;
        }
        @media (max-width: 768px) {
            .language-switcher {
                top: 70px;
                right: 15px;
            }
            .language-btn {
                padding: 6px 10px;
                font-size: 12px;
                min-width: 100px;
            }
            .language-btn .flag {
                font-size: 14px;
            }
            .language-btn .arrow {
                font-size: 10px;
            }
            .language-dropdown {
                min-width: 120px;
            }
            .language-option {
                padding: 8px 10px;
                font-size: 12px;
            }
            .language-option .flag {
                font-size: 14px;
            }
        }`;
    
    // Add CSS to the head section
    const styleEnd = content.indexOf('</style>');
    if (styleEnd !== -1) {
        content = content.substring(0, styleEnd) + languageSwitcherCSS + content.substring(styleEnd);
    }
    
    // Add language switcher HTML before the closing body tag
    const languageSwitcherHTML = `
    <!-- Language Switcher -->
    <div class="language-switcher">
        <button class="language-btn" onclick="toggleLanguageDropdown()">
            <span class="flag">🇳🇱</span>
            <span class="language-text">Nederlands</span>
            <span class="arrow">▼</span>
        </button>
        <div class="language-dropdown hidden">
            <div class="language-option" data-lang="nl">
                <span class="flag">🇳🇱</span>
                <span class="language-text">Nederlands</span>
            </div>
            <div class="language-option" data-lang="en">
                <span class="flag">🇬🇧</span>
                <span class="language-text">English</span>
            </div>
            <div class="language-option" data-lang="fr">
                <span class="flag">🇫🇷</span>
                <span class="language-text">Français</span>
            </div>
            <div class="language-option" data-lang="de">
                <span class="flag">🇩🇪</span>
                <span class="language-text">Deutsch</span>
            </div>
        </div>
    </div>`;
    
    const bodyEnd = content.indexOf('</body>');
    if (bodyEnd !== -1) {
        content = content.substring(0, bodyEnd) + languageSwitcherHTML + content.substring(bodyEnd);
    }
    
    // Add JavaScript before the closing body tag
    const languageSwitcherJS = `
    <script>
        // Language switcher functionality
        function toggleLanguageDropdown() {
            const dropdown = document.querySelector('.language-dropdown');
            const button = document.querySelector('.language-btn');
            
            dropdown.classList.toggle('hidden');
            button.classList.toggle('open');
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const switcher = document.querySelector('.language-switcher');
            if (!switcher.contains(event.target)) {
                const dropdown = document.querySelector('.language-dropdown');
                const button = document.querySelector('.language-btn');
                dropdown.classList.add('hidden');
                button.classList.remove('open');
            }
        });
        
        // Handle language selection
        document.addEventListener('click', function(event) {
            if (event.target.closest('.language-option')) {
                const option = event.target.closest('.language-option');
                const lang = option.dataset.lang;
                
                console.log('Language option clicked:', lang);
                
                // Update button content
                const button = document.querySelector('.language-btn');
                const flag = option.querySelector('.flag').textContent;
                const text = option.querySelector('.language-text').textContent;
                
                button.querySelector('.flag').textContent = flag;
                button.querySelector('.language-text').textContent = text;
                
                // Close dropdown
                const dropdown = document.querySelector('.language-dropdown');
                dropdown.classList.add('hidden');
                button.classList.remove('open');
                
                // Trigger language change directly
                translatePageContent(lang);
            }
        });
        
        // Direct translation function using data-translate attributes
        function translatePageContent(language) {
            console.log('Translating to:', language);
            
            const translations = {
                nl: {
                    nav_home: "Home",
                    nav_hotel: "Hotel",
                    nav_rooms: "Kamers",
                    nav_prices: "Prijslijst",
                    nav_practical: "Praktisch",
                    nav_location: "Ligging",
                    nav_contact: "Contact",
                    nav_book_now: "Boek nu",
                    home_welcome: "Welkom bij Aparthotel De Wielingen",
                    home_subtitle: "Een onvergetelijk verblijf aan de Belgische kust, op wandelafstand van de zee",
                    home_discover_title: "Ontdek onze accommodatie",
                    home_discover_desc: "Moderne studio's en appartementen met alle comfort",
                    home_location_title: "Unieke ligging",
                    home_location_desc: "Op wandelafstand van het strand en de uitgestrekte polders",
                    home_service_title: "Hotelservice",
                    home_service_desc: "Opgemaakte bedden, handdoeken en alle comfort van een hotel",
                    hotel_welcome: "Welkom bij De Wielingen",
                    hotel_subtitle: "Ontdek onze moderne accommodatie aan de Belgische kust",
                    hotel_about_title: "Over ons hotel",
                    hotel_about_text1: "Wij heten u van harte welkom bij Aparthotel De Wielingen. Wij bezorgen u een onvergetelijk verblijf aan de Belgische kust. Ons hotel is gelegen op wandelafstand van de zee en biedt hotelservice zonder maaltijden.",
                    hotel_about_text2: "De Wielingen heeft een unieke locatie, gelegen op een boog scheut van het strand en de uitgestrekte polders. Dit maakt onze ligging ideaal om er te wandelen, te fietsen en te relaxen.",
                    hotel_about_text3: "Wij beschikken over ruime studio's (met terras) en appartementen met (luxe) terras. Hiernaast bieden wij ook een eigen parking aan voor het hotel met 2 elektrische laadpalen voor uw wagen.",
                    hotel_features_title: "Wat maakt ons bijzonder?",
                    hotel_features_subtitle: "Ontdek de voordelen van verblijven bij Aparthotel De Wielingen",
                    hotel_location_feature: "Centrum van Westende-bad",
                    hotel_location_desc: "Gelegen op de hoek van Irislaan en Henri Jasparlaan, op 300m van de tramhalte met verbinding naar alle kuststeden.",
                    hotel_rooms_feature: "Ruime Studio's & Appartementen",
                    hotel_rooms_desc: "Studio's met terras en appartementen met luxe terras, volledig ingericht met kingsize bed, eigen badkamer en kitchenette.",
                    hotel_service_feature: "Hotelservice Zonder Maaltijden",
                    hotel_service_desc: "Opgemaakte bedden, handdoeken en alle comfort van een hotel, maar met de vrijheid van een appartement.",
                    rooms_title: "Onze Kamers",
                    rooms_subtitle: "Ontdek onze comfortabele accommodatie",
                    studio_title: "Studio",
                    studio_desc: "Perfect voor koppels",
                    apartment_title: "Appartement",
                    apartment_desc: "Ideaal voor gezinnen",
                    amenities_title: "Voorzieningen",
                    our_rates: "Onze Tarieven",
                    prices_inclusive: "Alle prijzen zijn inclusief belastingen en servicekosten",
                    studio: "Studio",
                    studio_price: "€85",
                    apartment: "Appartement",
                    apartment_price: "€120",
                    per_night: "per nacht",
                    all_in_desc: "Alle prijzen zijn inclusief:",
                    hotel_service: "Hotelservice",
                    free_wifi: "Gratis WiFi",
                    kitchenette: "Kitchenette",
                    parking_space: "Parkeerplaats",
                    extra_services: "Extra services:",
                    extra_bed: "Extra bed: €15/nacht",
                    microwave_rental: "Microgolfoven: €5/nacht",
                    late_checkout: "Late check-out: €10",
                    practical_title: "Praktische Informatie",
                    practical_subtitle: "Alles wat u moet weten voor uw verblijf",
                    check_in_out: "Check-in/out",
                    amenities: "Voorzieningen",
                    location_title: "Ideale Ligging",
                    location_subtitle: "Ontdek onze unieke locatie aan de Belgische kust",
                    contact_title: "Contact",
                    contact_subtitle: "Neem contact met ons op",
                    footer_reserve: "Reserveer uw verblijf aan zee",
                    footer_booking_title: "Boek uw verblijf",
                    footer_booking_desc: "Reserveer nu en geniet van een ontspannen verblijf aan zee.",
                    footer_copyright: "© 2024 Aparthotel De Wielingen. Alle rechten voorbehouden."
                },
                en: {
                    nav_home: "Home",
                    nav_hotel: "Hotel",
                    nav_rooms: "Rooms",
                    nav_prices: "Prices",
                    nav_practical: "Practical",
                    nav_location: "Location",
                    nav_contact: "Contact",
                    nav_book_now: "Book now",
                    home_welcome: "Welcome to Aparthotel De Wielingen",
                    home_subtitle: "An unforgettable stay on the Belgian coast, within walking distance of the sea",
                    home_discover_title: "Discover our accommodation",
                    home_discover_desc: "Modern studios and apartments with all comfort",
                    home_location_title: "Unique location",
                    home_location_desc: "Within walking distance of the beach and the vast polders",
                    home_service_title: "Hotel service",
                    home_service_desc: "Made beds, towels and all the comfort of a hotel",
                    hotel_welcome: "Welcome to De Wielingen",
                    hotel_subtitle: "Discover our modern accommodation on the Belgian coast",
                    hotel_about_title: "About our hotel",
                    hotel_about_text1: "We warmly welcome you to Aparthotel De Wielingen. We provide you with an unforgettable stay on the Belgian coast. Our hotel is located within walking distance of the sea and offers hotel service without meals.",
                    hotel_about_text2: "De Wielingen has a unique location, located within walking distance of the beach and the vast polders. This makes our location ideal for walking, cycling and relaxing.",
                    hotel_about_text3: "We have spacious studios (with terrace) and apartments with (luxury) terrace. In addition, we also offer our own parking for the hotel with 2 electric charging stations for your car.",
                    hotel_features_title: "What makes us special?",
                    hotel_features_subtitle: "Discover the benefits of staying at Aparthotel De Wielingen",
                    hotel_location_feature: "Center of Westende-bad",
                    hotel_location_desc: "Located at the corner of Irislaan and Henri Jasparlaan, 300m from the tram stop with connections to all coastal cities.",
                    hotel_rooms_feature: "Spacious Studios & Apartments",
                    hotel_rooms_desc: "Studios with terrace and apartments with luxury terrace, fully equipped with kingsize bed, private bathroom and kitchenette.",
                    hotel_service_feature: "Hotel Service Without Meals",
                    hotel_service_desc: "Made beds, towels and all the comfort of a hotel, but with the freedom of an apartment.",
                    rooms_title: "Our Rooms",
                    rooms_subtitle: "Discover our comfortable accommodation",
                    studio_title: "Studio",
                    studio_desc: "Perfect for couples",
                    apartment_title: "Apartment",
                    apartment_desc: "Ideal for families",
                    amenities_title: "Amenities",
                    our_rates: "Our Rates",
                    prices_inclusive: "All prices include taxes and service charges",
                    studio: "Studio",
                    studio_price: "€85",
                    apartment: "Apartment",
                    apartment_price: "€120",
                    per_night: "per night",
                    all_in_desc: "All prices include:",
                    hotel_service: "Hotel service",
                    free_wifi: "Free WiFi",
                    kitchenette: "Kitchenette",
                    parking_space: "Parking space",
                    extra_services: "Extra services:",
                    extra_bed: "Extra bed: €15/night",
                    microwave_rental: "Microwave: €5/night",
                    late_checkout: "Late check-out: €10",
                    practical_title: "Practical Information",
                    practical_subtitle: "Everything you need to know for your stay",
                    check_in_out: "Check-in/out",
                    amenities: "Amenities",
                    location_title: "Ideal Location",
                    location_subtitle: "Discover our unique location on the Belgian coast",
                    contact_title: "Contact",
                    contact_subtitle: "Get in touch with us",
                    footer_reserve: "Reserve your stay by the sea",
                    footer_booking_title: "Book your stay",
                    footer_booking_desc: "Reserve now and enjoy a relaxing stay by the sea.",
                    footer_copyright: "© 2024 Aparthotel De Wielingen. All rights reserved."
                },
                fr: {
                    nav_home: "Accueil",
                    nav_hotel: "Hôtel",
                    nav_rooms: "Chambres",
                    nav_prices: "Prix",
                    nav_practical: "Pratique",
                    nav_location: "Emplacement",
                    nav_contact: "Contact",
                    nav_book_now: "Réserver",
                    home_welcome: "Bienvenue à l'Aparthotel De Wielingen",
                    home_subtitle: "Un séjour inoubliable sur la côte belge, à quelques pas de la mer",
                    home_discover_title: "Découvrez notre hébergement",
                    home_discover_desc: "Studios et appartements modernes avec tout le confort",
                    home_location_title: "Emplacement unique",
                    home_location_desc: "À quelques pas de la plage et des vastes polders",
                    home_service_title: "Service hôtelier",
                    home_service_desc: "Lits faits, serviettes et tout le confort d'un hôtel",
                    hotel_welcome: "Bienvenue à De Wielingen",
                    hotel_subtitle: "Découvrez notre hébergement moderne sur la côte belge",
                    hotel_about_title: "À propos de notre hôtel",
                    hotel_about_text1: "Nous vous souhaitons la bienvenue à l'Aparthotel De Wielingen. Nous vous offrons un séjour inoubliable sur la côte belge. Notre hôtel est situé à quelques pas de la mer et propose un service hôtelier sans repas.",
                    hotel_about_text2: "De Wielingen a un emplacement unique, situé à quelques pas de la plage et des vastes polders. Cela fait de notre emplacement un endroit idéal pour marcher, faire du vélo et se détendre.",
                    hotel_about_text3: "Nous disposons de studios spacieux (avec terrasse) et d'appartements avec terrasse (de luxe). En plus, nous proposons également notre propre parking pour l'hôtel avec 2 bornes de recharge électrique pour votre voiture.",
                    hotel_features_title: "Qu'est-ce qui nous rend spéciaux?",
                    hotel_features_subtitle: "Découvrez les avantages de séjourner à l'Aparthotel De Wielingen",
                    hotel_location_feature: "Centre de Westende-bad",
                    hotel_location_desc: "Situé au coin de l'Irislaan et de l'Henri Jasparlaan, à 300m de l'arrêt de tram avec connexions vers toutes les villes côtières.",
                    hotel_rooms_feature: "Studios & Appartements Spacieux",
                    hotel_rooms_desc: "Studios avec terrasse et appartements avec terrasse de luxe, entièrement équipés avec lit king-size, salle de bain privée et kitchenette.",
                    hotel_service_feature: "Service Hôtelier Sans Repas",
                    hotel_service_desc: "Lits faits, serviettes et tout le confort d'un hôtel, mais avec la liberté d'un appartement.",
                    rooms_title: "Nos Chambres",
                    rooms_subtitle: "Découvrez notre hébergement confortable",
                    studio_title: "Studio",
                    studio_desc: "Parfait pour les couples",
                    apartment_title: "Appartement",
                    apartment_desc: "Idéal pour les familles",
                    amenities_title: "Équipements",
                    our_rates: "Nos Tarifs",
                    prices_inclusive: "Tous les prix incluent les taxes et frais de service",
                    studio: "Studio",
                    studio_price: "€85",
                    apartment: "Appartement",
                    apartment_price: "€120",
                    per_night: "par nuit",
                    all_in_desc: "Tous les prix incluent:",
                    hotel_service: "Service hôtelier",
                    free_wifi: "WiFi gratuit",
                    kitchenette: "Kitchenette",
                    parking_space: "Place de parking",
                    extra_services: "Services supplémentaires:",
                    extra_bed: "Lit supplémentaire: €15/nuit",
                    microwave_rental: "Micro-ondes: €5/nuit",
                    late_checkout: "Check-out tardif: €10",
                    practical_title: "Informations Pratiques",
                    practical_subtitle: "Tout ce que vous devez savoir pour votre séjour",
                    check_in_out: "Check-in/out",
                    amenities: "Équipements",
                    location_title: "Emplacement Idéal",
                    location_subtitle: "Découvrez notre emplacement unique sur la côte belge",
                    contact_title: "Contact",
                    contact_subtitle: "Contactez-nous",
                    footer_reserve: "Réservez votre séjour au bord de mer",
                    footer_booking_title: "Réservez votre séjour",
                    footer_booking_desc: "Réservez maintenant et profitez d'un séjour détendu au bord de mer.",
                    footer_copyright: "© 2024 Aparthotel De Wielingen. Tous droits réservés."
                },
                de: {
                    nav_home: "Startseite",
                    nav_hotel: "Hotel",
                    nav_rooms: "Zimmer",
                    nav_prices: "Preise",
                    nav_practical: "Praktisch",
                    nav_location: "Lage",
                    nav_contact: "Kontakt",
                    nav_book_now: "Jetzt buchen",
                    home_welcome: "Willkommen im Aparthotel De Wielingen",
                    home_subtitle: "Ein unvergesslicher Aufenthalt an der belgischen Küste, in Gehweite zum Meer",
                    home_discover_title: "Entdecken Sie unsere Unterkunft",
                    home_discover_desc: "Moderne Studios und Apartments mit allem Komfort",
                    home_location_title: "Einzigartige Lage",
                    home_location_desc: "In Gehweite zum Strand und den weiten Poldern",
                    home_service_title: "Hotelservice",
                    home_service_desc: "Gemachte Betten, Handtücher und der ganze Komfort eines Hotels",
                    hotel_welcome: "Willkommen bei De Wielingen",
                    hotel_subtitle: "Entdecken Sie unsere moderne Unterkunft an der belgischen Küste",
                    hotel_about_title: "Über unser Hotel",
                    hotel_about_text1: "Wir heißen Sie herzlich willkommen im Aparthotel De Wielingen. Wir bieten Ihnen einen unvergesslichen Aufenthalt an der belgischen Küste. Unser Hotel liegt in Gehweite zum Meer und bietet Hotelservice ohne Mahlzeiten.",
                    hotel_about_text2: "De Wielingen hat eine einzigartige Lage, in Gehweite zum Strand und den weiten Poldern. Dies macht unsere Lage ideal zum Spazieren, Radfahren und Entspannen.",
                    hotel_about_text3: "Wir verfügen über geräumige Studios (mit Terrasse) und Apartments mit (Luxus-)Terrasse. Darüber hinaus bieten wir auch unseren eigenen Parkplatz für das Hotel mit 2 Elektroladestationen für Ihr Auto.",
                    hotel_features_title: "Was macht uns besonders?",
                    hotel_features_subtitle: "Entdecken Sie die Vorteile eines Aufenthalts im Aparthotel De Wielingen",
                    hotel_location_feature: "Zentrum von Westende-bad",
                    hotel_location_desc: "Gelegen an der Ecke von Irislaan und Henri Jasparlaan, 300m von der Straßenbahnhaltestelle mit Verbindungen zu allen Küstenstädten.",
                    hotel_rooms_feature: "Geräumige Studios & Apartments",
                    hotel_rooms_desc: "Studios mit Terrasse und Apartments mit Luxus-Terrasse, vollständig ausgestattet mit Kingsize-Bett, eigenem Badezimmer und Küchenzeile.",
                    hotel_service_feature: "Hotelservice Ohne Mahlzeiten",
                    hotel_service_desc: "Gemachte Betten, Handtücher und der ganze Komfort eines Hotels, aber mit der Freiheit einer Wohnung.",
                    rooms_title: "Unsere Zimmer",
                    rooms_subtitle: "Entdecken Sie unsere komfortable Unterkunft",
                    studio_title: "Studio",
                    studio_desc: "Perfekt für Paare",
                    apartment_title: "Apartment",
                    apartment_desc: "Ideal für Familien",
                    amenities_title: "Ausstattung",
                    our_rates: "Unsere Preise",
                    prices_inclusive: "Alle Preise inklusive Steuern und Servicegebühren",
                    studio: "Studio",
                    studio_price: "€85",
                    apartment: "Apartment",
                    apartment_price: "€120",
                    per_night: "pro Nacht",
                    all_in_desc: "Alle Preise beinhalten:",
                    hotel_service: "Hotelservice",
                    free_wifi: "Kostenloses WiFi",
                    kitchenette: "Küchenzeile",
                    parking_space: "Parkplatz",
                    extra_services: "Zusätzliche Services:",
                    extra_bed: "Zusatzbett: €15/Nacht",
                    microwave_rental: "Mikrowelle: €5/Nacht",
                    late_checkout: "Später Check-out: €10",
                    practical_title: "Praktische Informationen",
                    practical_subtitle: "Alles was Sie für Ihren Aufenthalt wissen müssen",
                    check_in_out: "Check-in/out",
                    amenities: "Ausstattung",
                    location_title: "Ideale Lage",
                    location_subtitle: "Entdecken Sie unsere einzigartige Lage an der belgischen Küste",
                    contact_title: "Kontakt",
                    contact_subtitle: "Nehmen Sie Kontakt mit uns auf",
                    footer_reserve: "Reservieren Sie Ihren Aufenthalt am Meer",
                    footer_booking_title: "Buchen Sie Ihren Aufenthalt",
                    footer_booking_desc: "Reservieren Sie jetzt und genießen Sie einen entspannten Aufenthalt am Meer.",
                    footer_copyright: "© 2024 Aparthotel De Wielingen. Alle Rechte vorbehalten."
                }
            };
            
            const langTranslations = translations[language];
            if (!langTranslations) {
                console.log('No translations found for language:', language);
                return;
            }
            
            console.log('Found translations for:', language);
            
            // Translate elements with data-translate attribute
            const elementsToTranslate = document.querySelectorAll('[data-translate]');
            console.log('Found', elementsToTranslate.length, 'elements to translate');
            
            elementsToTranslate.forEach(element => {
                const key = element.getAttribute('data-translate');
                if (langTranslations[key]) {
                    console.log('Translating', key, 'to:', langTranslations[key]);
                    element.textContent = langTranslations[key];
                } else {
                    console.log('No translation found for key:', key);
                }
            });
            
            // Translate placeholder attributes
            const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
            console.log('Found', placeholderElements.length, 'placeholder elements to translate');
            
            placeholderElements.forEach(element => {
                const key = element.getAttribute('data-translate-placeholder');
                if (langTranslations[key]) {
                    console.log('Translating placeholder', key, 'to:', langTranslations[key]);
                    element.placeholder = langTranslations[key];
                }
            });
            
            // Update page language attribute
            document.documentElement.lang = language;
            
            // Store preference
            localStorage.setItem('preferred-language', language);
            
            console.log('Translation completed for:', language);
        }
    </script>`;
    
    const bodyEnd2 = content.indexOf('</body>');
    if (bodyEnd2 !== -1) {
        content = content.substring(0, bodyEnd2) + languageSwitcherJS + content.substring(bodyEnd2);
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Completed ${file}`);
});

console.log('Complete translation system added to all pages!');
