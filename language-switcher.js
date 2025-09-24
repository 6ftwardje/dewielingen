// Language Switcher Component
// This file contains the language switching functionality for the website

class LanguageSwitcher {
    constructor() {
        this.currentLanguage = 'nl';
        this.supportedLanguages = ['nl', 'en', 'fr', 'de'];
        this.translations = this.loadTranslations();
        this.init();
    }

    loadTranslations() {
        return {
            nl: {
                // Navigation
                nav_home: "Home",
                nav_hotel: "Hotel", 
                nav_rooms: "Kamers",
                nav_prices: "Prijslijst",
                nav_practical: "Praktisch",
                nav_location: "Ligging",
                nav_contact: "Contact",
                nav_book_now: "Boek nu",
                
                // Homepage
                home_welcome: "Welkom bij Aparthotel De Wielingen",
                home_subtitle: "Een onvergetelijk verblijf aan de Belgische kust, op wandelafstand van de zee",
                home_why_choose: "Waarom kiezen voor De Wielingen?",
                home_why_subtitle: "Ontdek wat ons apart maakt van andere accommodaties aan de kust",
                home_rooms_title: "Ruime Studio's & Appartementen",
                home_rooms_desc: "Studio's met terras en appartementen met luxe terras, volledig ingericht met kingsize bed, eigen badkamer en kitchenette.",
                home_location_title: "Unieke Ligging",
                home_location_desc: "Gelegen in het centrum van Westende-bad, op 300m van de tramhalte. Ideaal voor wandelen, fietsen en relaxen tussen strand en polders.",
                home_service_title: "Hotelservice Zonder Maaltijden",
                home_service_desc: "Opgemaakte bedden, handdoeken en alle comfort van een hotel, maar met de vrijheid van een appartement. Gratis WiFi in het hele hotel.",
                
                // Hotel page
                hotel_welcome: "Welkom bij De Wielingen",
                hotel_subtitle: "Ontdek onze moderne accommodatie aan de Belgische kust",
                hotel_about_title: "Over ons hotel",
                hotel_about_text1: "Wij heten u van harte welkom bij Aparthotel De Wielingen. Wij bezorgen u een onvergetelijk verblijf aan de Belgische kust. Ons hotel is gelegen op wandelafstand van de zee en biedt hotelservice zonder maaltijden.",
                hotel_about_text2: "De Wielingen heeft een unieke locatie, gelegen op een boog scheut van het strand en de uitgestrekte polders. Dit maakt onze ligging ideaal om er te wandelen, te fietsen en te relaxen.",
                hotel_about_text3: "Wij beschikken over ruime studio's (met terras) en appartementen met (luxe) terras. Hiernaast bieden wij ook een eigen parking aan voor het hotel met 2 elektrische laadpalen voor uw wagen.",
                
                // Rooms page
                rooms_welcome: "Onze Kamers",
                rooms_subtitle: "Ontdek onze comfortabele accommodaties",
                rooms_studio_title: "Studio's",
                rooms_studio_desc: "Moderne studio's met terras, perfect voor koppels",
                rooms_apartment_title: "Appartementen", 
                rooms_apartment_desc: "Ruime appartementen met luxe terras, ideaal voor gezinnen",
                
                // Contact page
                contact_title: "Contact",
                contact_subtitle: "Neem contact met ons op",
                contact_address: "Adres",
                contact_phone: "Telefoon",
                contact_email: "E-mail",
                contact_form_name: "Naam",
                contact_form_email: "E-mail",
                contact_form_message: "Bericht",
                contact_form_send: "Verstuur bericht",
                
                // Footer
                footer_rights: "Alle rechten voorbehouden",
                footer_reserve: "Reserveer uw verblijf aan zee"
            },
            en: {
                // Navigation
                nav_home: "Home",
                nav_hotel: "Hotel",
                nav_rooms: "Rooms", 
                nav_prices: "Prices",
                nav_practical: "Practical",
                nav_location: "Location",
                nav_contact: "Contact",
                nav_book_now: "Book now",
                
                // Homepage
                home_welcome: "Welcome to Aparthotel De Wielingen",
                home_subtitle: "An unforgettable stay on the Belgian coast, within walking distance of the sea",
                home_why_choose: "Why choose De Wielingen?",
                home_why_subtitle: "Discover what sets us apart from other accommodations on the coast",
                home_rooms_title: "Spacious Studios & Apartments",
                home_rooms_desc: "Studios with terrace and apartments with luxury terrace, fully equipped with kingsize bed, private bathroom and kitchenette.",
                home_location_title: "Unique Location",
                home_location_desc: "Located in the center of Westende-bad, 300m from the tram stop. Perfect for walking, cycling and relaxing between beach and polders.",
                home_service_title: "Hotel Service Without Meals",
                home_service_desc: "Made beds, towels and all the comfort of a hotel, but with the freedom of an apartment. Free WiFi throughout the hotel.",
                
                // Hotel page
                hotel_welcome: "Welcome to De Wielingen",
                hotel_subtitle: "Discover our modern accommodation on the Belgian coast",
                hotel_about_title: "About our hotel",
                hotel_about_text1: "We warmly welcome you to Aparthotel De Wielingen. We provide you with an unforgettable stay on the Belgian coast. Our hotel is located within walking distance of the sea and offers hotel service without meals.",
                hotel_about_text2: "De Wielingen has a unique location, located within walking distance of the beach and the vast polders. This makes our location ideal for walking, cycling and relaxing.",
                hotel_about_text3: "We have spacious studios (with terrace) and apartments with (luxury) terrace. In addition, we also offer our own parking for the hotel with 2 electric charging stations for your car.",
                
                // Rooms page
                rooms_welcome: "Our Rooms",
                rooms_subtitle: "Discover our comfortable accommodations",
                rooms_studio_title: "Studios",
                rooms_studio_desc: "Modern studios with terrace, perfect for couples",
                rooms_apartment_title: "Apartments",
                rooms_apartment_desc: "Spacious apartments with luxury terrace, ideal for families",
                
                // Contact page
                contact_title: "Contact",
                contact_subtitle: "Get in touch with us",
                contact_address: "Address",
                contact_phone: "Phone",
                contact_email: "Email",
                contact_form_name: "Name",
                contact_form_email: "Email",
                contact_form_message: "Message",
                contact_form_send: "Send message",
                
                // Footer
                footer_rights: "All rights reserved",
                footer_reserve: "Reserve your stay by the sea"
            },
            fr: {
                // Navigation
                nav_home: "Accueil",
                nav_hotel: "Hôtel",
                nav_rooms: "Chambres",
                nav_prices: "Tarifs",
                nav_practical: "Pratique",
                nav_location: "Emplacement",
                nav_contact: "Contact",
                nav_book_now: "Réserver",
                
                // Homepage
                home_welcome: "Bienvenue à l'Aparthotel De Wielingen",
                home_subtitle: "Un séjour inoubliable sur la côte belge, à quelques pas de la mer",
                home_why_choose: "Pourquoi choisir De Wielingen?",
                home_why_subtitle: "Découvrez ce qui nous distingue des autres hébergements de la côte",
                home_rooms_title: "Studios & Appartements Spacieux",
                home_rooms_desc: "Studios avec terrasse et appartements avec terrasse de luxe, entièrement équipés avec lit king-size, salle de bain privée et kitchenette.",
                home_location_title: "Emplacement Unique",
                home_location_desc: "Situé au centre de Westende-bad, à 300m de l'arrêt de tram. Parfait pour marcher, faire du vélo et se détendre entre plage et polders.",
                home_service_title: "Service Hôtelier Sans Repas",
                home_service_desc: "Lits faits, serviettes et tout le confort d'un hôtel, mais avec la liberté d'un appartement. WiFi gratuit dans tout l'hôtel.",
                
                // Hotel page
                hotel_welcome: "Bienvenue à De Wielingen",
                hotel_subtitle: "Découvrez notre hébergement moderne sur la côte belge",
                hotel_about_title: "À propos de notre hôtel",
                hotel_about_text1: "Nous vous souhaitons la bienvenue à l'Aparthotel De Wielingen. Nous vous offrons un séjour inoubliable sur la côte belge. Notre hôtel est situé à quelques pas de la mer et propose un service hôtelier sans repas.",
                hotel_about_text2: "De Wielingen a un emplacement unique, situé à quelques pas de la plage et des vastes polders. Cela fait de notre emplacement un endroit idéal pour marcher, faire du vélo et se détendre.",
                hotel_about_text3: "Nous disposons de studios spacieux (avec terrasse) et d'appartements avec terrasse (de luxe). En plus, nous proposons également notre propre parking pour l'hôtel avec 2 bornes de recharge électrique pour votre voiture.",
                
                // Rooms page
                rooms_welcome: "Nos Chambres",
                rooms_subtitle: "Découvrez nos hébergements confortables",
                rooms_studio_title: "Studios",
                rooms_studio_desc: "Studios modernes avec terrasse, parfaits pour les couples",
                rooms_apartment_title: "Appartements",
                rooms_apartment_desc: "Appartements spacieux avec terrasse de luxe, idéaux pour les familles",
                
                // Contact page
                contact_title: "Contact",
                contact_subtitle: "Contactez-nous",
                contact_address: "Adresse",
                contact_phone: "Téléphone",
                contact_email: "E-mail",
                contact_form_name: "Nom",
                contact_form_email: "E-mail",
                contact_form_message: "Message",
                contact_form_send: "Envoyer le message",
                
                // Footer
                footer_rights: "Tous droits réservés",
                footer_reserve: "Réservez votre séjour au bord de mer"
            },
            de: {
                // Navigation
                nav_home: "Startseite",
                nav_hotel: "Hotel",
                nav_rooms: "Zimmer",
                nav_prices: "Preise",
                nav_practical: "Praktisch",
                nav_location: "Lage",
                nav_contact: "Kontakt",
                nav_book_now: "Jetzt buchen",
                
                // Homepage
                home_welcome: "Willkommen im Aparthotel De Wielingen",
                home_subtitle: "Ein unvergesslicher Aufenthalt an der belgischen Küste, nur wenige Schritte vom Meer entfernt",
                home_why_choose: "Warum De Wielingen wählen?",
                home_why_subtitle: "Entdecken Sie, was uns von anderen Unterkünften an der Küste unterscheidet",
                home_rooms_title: "Geräumige Studios & Apartments",
                home_rooms_desc: "Studios mit Terrasse und Apartments mit Luxus-Terrasse, vollständig ausgestattet mit Kingsize-Bett, eigenem Badezimmer und Küchenzeile.",
                home_location_title: "Einzigartige Lage",
                home_location_desc: "Gelegen im Zentrum von Westende-bad, 300m von der Straßenbahnhaltestelle entfernt. Perfekt zum Wandern, Radfahren und Entspannen zwischen Strand und Poldern.",
                home_service_title: "Hotelservice Ohne Mahlzeiten",
                home_service_desc: "Gemachte Betten, Handtücher und der ganze Komfort eines Hotels, aber mit der Freiheit einer Wohnung. Kostenloses WiFi im gesamten Hotel.",
                
                // Hotel page
                hotel_welcome: "Willkommen in De Wielingen",
                hotel_subtitle: "Entdecken Sie unsere moderne Unterkunft an der belgischen Küste",
                hotel_about_title: "Über unser Hotel",
                hotel_about_text1: "Wir heißen Sie herzlich im Aparthotel De Wielingen willkommen. Wir bieten Ihnen einen unvergesslichen Aufenthalt an der belgischen Küste. Unser Hotel liegt nur wenige Schritte vom Meer entfernt und bietet Hotelservice ohne Mahlzeiten.",
                hotel_about_text2: "De Wielingen hat eine einzigartige Lage, nur wenige Schritte vom Strand und den weiten Poldern entfernt. Dies macht unsere Lage ideal zum Wandern, Radfahren und Entspannen.",
                hotel_about_text3: "Wir verfügen über geräumige Studios (mit Terrasse) und Apartments mit (Luxus-)Terrasse. Darüber hinaus bieten wir auch einen eigenen Parkplatz für das Hotel mit 2 Elektroladestationen für Ihr Auto.",
                
                // Rooms page
                rooms_welcome: "Unsere Zimmer",
                rooms_subtitle: "Entdecken Sie unsere komfortablen Unterkünfte",
                rooms_studio_title: "Studios",
                rooms_studio_desc: "Moderne Studios mit Terrasse, perfekt für Paare",
                rooms_apartment_title: "Apartments",
                rooms_apartment_desc: "Geräumige Apartments mit Luxus-Terrasse, ideal für Familien",
                
                // Contact page
                contact_title: "Kontakt",
                contact_subtitle: "Kontaktieren Sie uns",
                contact_address: "Adresse",
                contact_phone: "Telefon",
                contact_email: "E-Mail",
                contact_form_name: "Name",
                contact_form_email: "E-Mail",
                contact_form_message: "Nachricht",
                contact_form_send: "Nachricht senden",
                
                // Footer
                footer_rights: "Alle Rechte vorbehalten",
                footer_reserve: "Reservieren Sie Ihren Aufenthalt am Meer"
            }
        };
    }

    init() {
        this.createLanguageSwitcher();
        this.bindEvents();
    }

    createLanguageSwitcher() {
        // Create language switcher HTML
        const switcherHTML = `
            <div class="language-switcher fixed top-20 right-4 z-50">
                <div class="bg-white rounded-lg shadow-lg p-2">
                    <div class="flex items-center space-x-2">
                        <span class="text-sm text-gray-600">Taal:</span>
                        <div class="relative">
                            <button class="language-toggle flex items-center space-x-1 px-3 py-1 rounded-md hover:bg-gray-100 transition-colors duration-200">
                                <span class="flag">🇳🇱</span>
                                <span class="language-code text-sm font-medium">NL</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div class="language-dropdown absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 hidden">
                                <div class="py-1">
                                    <button class="language-option w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2" data-lang="nl">
                                        <span class="flag">🇳🇱</span>
                                        <span class="language-name">Nederlands</span>
                                    </button>
                                    <button class="language-option w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2" data-lang="en">
                                        <span class="flag">🇬🇧</span>
                                        <span class="language-name">English</span>
                                    </button>
                                    <button class="language-option w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2" data-lang="fr">
                                        <span class="flag">🇫🇷</span>
                                        <span class="language-name">Français</span>
                                    </button>
                                    <button class="language-option w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2" data-lang="de">
                                        <span class="flag">🇩🇪</span>
                                        <span class="language-name">Deutsch</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Insert into DOM
        document.body.insertAdjacentHTML('beforeend', switcherHTML);
    }

    bindEvents() {
        const toggle = document.querySelector('.language-toggle');
        const dropdown = document.querySelector('.language-dropdown');
        const options = document.querySelectorAll('.language-option');

        // Toggle dropdown
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-switcher')) {
                dropdown.classList.add('hidden');
            }
        });

        // Handle language selection
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                const selectedLang = e.currentTarget.dataset.lang;
                this.switchLanguage(selectedLang);
                dropdown.classList.add('hidden');
            });
        });
    }

    switchLanguage(language) {
        if (!this.supportedLanguages.includes(language)) {
            console.error('Unsupported language:', language);
            return;
        }

        this.currentLanguage = language;
        
        // Update UI
        this.updateLanguageSwitcher(language);
        
        // Update page language attribute
        document.documentElement.lang = language;
        
        // Store preference
        localStorage.setItem('preferred-language', language);
        
        // Translate all content on the page
        this.translatePage(language);
        
        console.log('Language switched to:', language);
        
        // Show confirmation message
        this.showLanguageMessage(language);
    }

    translatePage(language) {
        const translations = this.translations[language];
        if (!translations) return;

        // Translate elements with data-translate attribute
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

        // Translate elements with data-translate-placeholder attribute
        const placeholdersToTranslate = document.querySelectorAll('[data-translate-placeholder]');
        placeholdersToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[key]) {
                element.placeholder = translations[key];
            }
        });

        // Translate elements with data-translate-title attribute
        const titlesToTranslate = document.querySelectorAll('[data-translate-title]');
        titlesToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate-title');
            if (translations[key]) {
                element.title = translations[key];
            }
        });

        // Update alt text for images
        const imagesToTranslate = document.querySelectorAll('[data-translate-alt]');
        imagesToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate-alt');
            if (translations[key]) {
                element.alt = translations[key];
            }
        });
    }

    updateLanguageSwitcher(language) {
        const toggle = document.querySelector('.language-toggle');
        const flag = toggle.querySelector('.flag');
        const code = toggle.querySelector('.language-code');
        
        const languageData = {
            'nl': { flag: '🇳🇱', code: 'NL' },
            'en': { flag: '🇬🇧', code: 'EN' },
            'fr': { flag: '🇫🇷', code: 'FR' },
            'de': { flag: '🇩🇪', code: 'DE' }
        };
        
        const data = languageData[language];
        if (data) {
            flag.textContent = data.flag;
            code.textContent = data.code;
        }
    }

    showLanguageMessage(language) {
        const messages = {
            'nl': 'Taal gewijzigd naar Nederlands',
            'en': 'Language changed to English',
            'fr': 'Langue changée en Français',
            'de': 'Sprache geändert zu Deutsch'
        };
        
        // Create temporary notification
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-accent-red text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300';
        notification.textContent = messages[language];
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Load saved language preference
    loadSavedLanguage() {
        const saved = localStorage.getItem('preferred-language');
        if (saved && this.supportedLanguages.includes(saved)) {
            this.switchLanguage(saved);
        }
    }
}

// Initialize language switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = new LanguageSwitcher();
    languageSwitcher.loadSavedLanguage();
});

// Export for potential use in other scripts
window.LanguageSwitcher = LanguageSwitcher;
