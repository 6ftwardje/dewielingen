// Script to add complete translations for all new elements
const fs = require('fs');
const path = require('path');

const files = ['index.html', 'hotel.html', 'kamers.html', 'prijslijst.html', 'praktisch.html', 'ligging.html', 'contact.html'];

const completeTranslations = {
    nl: {
        home_why_choose: "Waarom kiezen voor De Wielingen?",
        home_why_subtitle: "Ontdek wat ons apart maakt van andere accommodaties aan de kust",
        home_rooms_title: "Ruime Studio's & Appartementen",
        home_rooms_desc: "Studio's met terras en appartementen met luxe terras, volledig ingericht met kingsize bed, eigen badkamer en kitchenette.",
        home_location_title: "Unieke Ligging",
        home_location_desc: "Gelegen in het centrum van Westende-bad, op 300m van de tramhalte. Ideaal voor wandelen, fietsen en relaxen tussen strand en polders.",
        home_service_title: "Hotelservice Zonder Maaltijden",
        home_service_desc: "Opgemaakte bedden, handdoeken en alle comfort van een hotel, maar met de vrijheid van een appartement. Gratis WiFi in het hele hotel.",
        cta_title: "Klaar voor uw verblijf?",
        cta_subtitle: "Boek nu en geniet van een onvergetelijke tijd aan de Belgische kust",
        cta_desc: "Boek nu uw verblijf en ontdek waarom gasten steeds terugkeren naar De Wielingen",
        flexible_checkin: "Flexibele Check-in",
        kitchenette: "Kitchenette",
        de_wielingen: "De Wielingen",
        irislaan_1: "Irislaan 1",
        oostende: "8400 Oostende",
        belgie: "België",
        tel: "Tel: +32 59 70 11 11",
        email: "Email: info@dewielingen.be",
        boek_nu: "Boek nu",
        reserveer_uw_verblijf_aan_zee: "Reserveer uw verblijf aan zee",
        snelle_links: "Snelle Links",
        praktisch: "Praktisch",
        check_in_out: "Check-in/out",
        ligging: "Ligging",
        voorzieningen: "Voorzieningen",
        boek_uw_verblijf: "Boek uw verblijf",
        reserveer_nu_en_geniet_van_een_ontspannen_verblijf_aan_zee: "Reserveer nu en geniet van een ontspannen verblijf aan zee.",
        copyright: "© 2024 Aparthotel De Wielingen. Alle rechten voorbehouden."
    },
    en: {
        home_why_choose: "Why choose De Wielingen?",
        home_why_subtitle: "Discover what sets us apart from other coastal accommodations",
        home_rooms_title: "Spacious Studios & Apartments",
        home_rooms_desc: "Studios with terrace and apartments with luxury terrace, fully equipped with kingsize bed, private bathroom and kitchenette.",
        home_location_title: "Unique Location",
        home_location_desc: "Located in the center of Westende-bad, 300m from the tram stop. Ideal for walking, cycling and relaxing between beach and polders.",
        home_service_title: "Hotel Service Without Meals",
        home_service_desc: "Made beds, towels and all the comfort of a hotel, but with the freedom of an apartment. Free WiFi throughout the hotel.",
        cta_title: "Ready for your stay?",
        cta_subtitle: "Book now and enjoy an unforgettable time on the Belgian coast",
        cta_desc: "Book now and discover why guests keep returning to De Wielingen",
        flexible_checkin: "Flexible Check-in",
        kitchenette: "Kitchenette",
        de_wielingen: "De Wielingen",
        irislaan_1: "Irislaan 1",
        oostende: "8400 Ostend",
        belgie: "Belgium",
        tel: "Tel: +32 59 70 11 11",
        email: "Email: info@dewielingen.be",
        boek_nu: "Book now",
        reserveer_uw_verblijf_aan_zee: "Reserve your stay by the sea",
        snelle_links: "Quick Links",
        praktisch: "Practical",
        check_in_out: "Check-in/out",
        ligging: "Location",
        voorzieningen: "Amenities",
        boek_uw_verblijf: "Book your stay",
        reserveer_nu_en_geniet_van_een_ontspannen_verblijf_aan_zee: "Reserve now and enjoy a relaxing stay by the sea.",
        copyright: "© 2024 Aparthotel De Wielingen. All rights reserved."
    },
    fr: {
        home_why_choose: "Pourquoi choisir De Wielingen?",
        home_why_subtitle: "Découvrez ce qui nous distingue des autres hébergements côtiers",
        home_rooms_title: "Studios & Appartements Spacieux",
        home_rooms_desc: "Studios avec terrasse et appartements avec terrasse de luxe, entièrement équipés avec lit king-size, salle de bain privée et kitchenette.",
        home_location_title: "Emplacement Unique",
        home_location_desc: "Situé au centre de Westende-bad, à 300m de l'arrêt de tram. Idéal pour marcher, faire du vélo et se détendre entre plage et polders.",
        home_service_title: "Service Hôtelier Sans Repas",
        home_service_desc: "Lits faits, serviettes et tout le confort d'un hôtel, mais avec la liberté d'un appartement. WiFi gratuit dans tout l'hôtel.",
        cta_title: "Prêt pour votre séjour?",
        cta_subtitle: "Réservez maintenant et profitez d'un temps inoubliable sur la côte belge",
        cta_desc: "Réservez maintenant et découvrez pourquoi les invités reviennent toujours à De Wielingen",
        flexible_checkin: "Check-in Flexible",
        kitchenette: "Kitchenette",
        de_wielingen: "De Wielingen",
        irislaan_1: "Irislaan 1",
        oostende: "8400 Ostende",
        belgie: "Belgique",
        tel: "Tel: +32 59 70 11 11",
        email: "Email: info@dewielingen.be",
        boek_nu: "Réserver",
        reserveer_uw_verblijf_aan_zee: "Réservez votre séjour au bord de mer",
        snelle_links: "Liens Rapides",
        praktisch: "Pratique",
        check_in_out: "Check-in/out",
        ligging: "Emplacement",
        voorzieningen: "Équipements",
        boek_uw_verblijf: "Réservez votre séjour",
        reserveer_nu_en_geniet_van_een_ontspannen_verblijf_aan_zee: "Réservez maintenant et profitez d'un séjour détendu au bord de mer.",
        copyright: "© 2024 Aparthotel De Wielingen. Tous droits réservés."
    },
    de: {
        home_why_choose: "Warum De Wielingen wählen?",
        home_why_subtitle: "Entdecken Sie, was uns von anderen Küstenunterkünften unterscheidet",
        home_rooms_title: "Geräumige Studios & Apartments",
        home_rooms_desc: "Studios mit Terrasse und Apartments mit Luxus-Terrasse, vollständig ausgestattet mit Kingsize-Bett, eigenem Badezimmer und Küchenzeile.",
        home_location_title: "Einzigartige Lage",
        home_location_desc: "Gelegen im Zentrum von Westende-bad, 300m von der Straßenbahnhaltestelle. Ideal zum Spazieren, Radfahren und Entspannen zwischen Strand und Poldern.",
        home_service_title: "Hotelservice Ohne Mahlzeiten",
        home_service_desc: "Gemachte Betten, Handtücher und der ganze Komfort eines Hotels, aber mit der Freiheit einer Wohnung. Kostenloses WiFi im gesamten Hotel.",
        cta_title: "Bereit für Ihren Aufenthalt?",
        cta_subtitle: "Buchen Sie jetzt und genießen Sie eine unvergessliche Zeit an der belgischen Küste",
        cta_desc: "Buchen Sie jetzt und entdecken Sie, warum Gäste immer wieder zu De Wielingen zurückkehren",
        flexible_checkin: "Flexibler Check-in",
        kitchenette: "Küchenzeile",
        de_wielingen: "De Wielingen",
        irislaan_1: "Irislaan 1",
        oostende: "8400 Ostende",
        belgie: "Belgien",
        tel: "Tel: +32 59 70 11 11",
        email: "Email: info@dewielingen.be",
        boek_nu: "Jetzt buchen",
        reserveer_uw_verblijf_aan_zee: "Reservieren Sie Ihren Aufenthalt am Meer",
        snelle_links: "Schnelle Links",
        praktisch: "Praktisch",
        check_in_out: "Check-in/out",
        ligging: "Lage",
        voorzieningen: "Ausstattung",
        boek_uw_verblijf: "Buchen Sie Ihren Aufenthalt",
        reserveer_nu_en_geniet_van_een_ontspannen_verblijf_aan_zee: "Reservieren Sie jetzt und genießen Sie einen entspannten Aufenthalt am Meer.",
        copyright: "© 2024 Aparthotel De Wielingen. Alle Rechte vorbehalten."
    }
};

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    console.log(`Adding complete translations to ${file}...`);
    
    // Add new translations to each language section
    Object.keys(completeTranslations).forEach(lang => {
        const langTranslations = completeTranslations[lang];
        Object.entries(langTranslations).forEach(([key, value]) => {
            // Find the language section and add the new translation
            const langSectionRegex = new RegExp(`(\\s+${lang}:\\s*{[^}]*)(\\s+})`, 's');
            const match = content.match(langSectionRegex);
            
            if (match) {
                const beforeClosing = match[1];
                const closingBrace = match[2];
                
                // Check if the translation already exists
                if (!beforeClosing.includes(`${key}:`)) {
                    // Add the new translation before the closing brace
                    const newTranslation = `                    ${key}: "${value}",\n`;
                    const updatedSection = beforeClosing + newTranslation + closingBrace;
                    
                    content = content.replace(langSectionRegex, updatedSection);
                }
            }
        });
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Completed ${file}`);
});

console.log('Complete translations added to all pages!');
