# Aparthotel De Wielingen - Website

Een moderne, minimalistische website voor Aparthotel De Wielingen gebouwd met Tailwind CSS en vanilla JavaScript.

## 🏨 Over het Project

Deze website is ontworpen voor Aparthotel De Wielingen, gelegen op de hoek van Irislaan en Henri Jasparlaan in Westende, België. De site biedt een professionele, gebruiksvriendelijke ervaring voor gasten die op zoek zijn naar accommodatie aan de Belgische kust in Westende en Middelkerke.

## ✨ Features

### Design & UX
- **Mobile-first design** - Optimized voor alle apparaten
- **Minimalistisch design** - Clean en professioneel
- **Kleurenschema**: Gebroken wit (#f9f9f7) achtergrond, zwart/donkere grijstinten voor tekst, accentkleur lichtblauw (#2a95ff)
- **Lettertype**: Inter (Google Fonts) voor moderne uitstraling
- **Subtiele animaties** - Scroll animaties en hover effecten

### Functionaliteit
- **Responsive navigatie** - Sticky navbar met hamburger menu voor mobile
- **Meertaligheid** - Voorbereid voor NL, EN, FR, DE (taalwisselaar component)
- **Contact formulier** - Met validatie en feedback
- **SEO geoptimaliseerd** - Meta tags en semantische HTML

### Pagina's
1. **Home** - Hero sectie, highlights en CTA buttons
2. **Hotel** - Over ons hotel met features en informatie
3. **Kamers** - Studio's en appartementen met voorzieningen
4. **Prijslijst** - Transparante prijzen met supplementen
5. **Praktisch** - Check-in/out tijden en voorzieningen
6. **Ligging** - Locatie beschrijving en nabijgelegen attracties
7. **Contact** - Contactgegevens en contactformulier

## 🛠️ Technologieën

- **HTML5** - Semantische markup
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JavaScript** - Geen frameworks, pure JS
- **Google Fonts** - Inter font family
- **Unsplash** - Placeholder afbeeldingen

## 📁 Project Structuur

```
dewielingen/
├── index.html              # Homepage
├── hotel.html             # Hotel pagina
├── kamers.html            # Kamers pagina
├── prijslijst.html        # Prijslijst pagina
├── praktisch.html         # Praktische informatie
├── ligging.html           # Ligging pagina
├── contact.html           # Contact pagina
└── README.md             # Project documentatie
```

## 🚀 Installatie & Gebruik

1. **Clone of download** het project
2. **Open** `index.html` in een webbrowser
3. **Of serveer** via een lokale server:
   ```bash
   # Met Python
   python -m http.server 8000
   
   # Met Node.js
   npx serve .
   ```

## 🎨 Customization

### Kleuren Aanpassen
De kleuren zijn gedefinieerd in de Tailwind configuratie in elke HTML file:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'cream': '#f9f9f7',        // Achtergrond
                'accent-red': '#2a95ff',   // Accent kleur (lichtblauw)
                'dark-gray': '#2d2d2d',    // Tekst
                'light-gray': '#6b7280'    // Secundaire tekst
            }
        }
    }
}
```

### Content Bijwerken
- **Tekst**: Bewerk de HTML bestanden direct
- **Afbeeldingen**: Vervang Unsplash URLs met eigen afbeeldingen
- **Contact info**: Update contactgegevens in alle pagina's

### Meertaligheid Uitbreiden
De taalwisselaar is voorbereid voor uitbreiding:

1. **Taalbestanden maken** - JSON bestanden per taal
2. **Content vertalen** - Alle tekst content
3. **URL structuur** - `/nl/`, `/en/`, `/fr/`, `/de/`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Browser Ondersteuning

- Chrome (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)
- Edge (laatste 2 versies)

## 📞 Contact Informatie

**Aparthotel De Wielingen**
- Adres: Irislaan 8434, 8434 Westende, België
- Telefoon: 059 30 33 64
- Email: info@dewielingen.be

## 📄 Licentie

Dit project is ontwikkeld voor Aparthotel De Wielingen. Alle rechten voorbehouden.

## 🤝 Bijdragen

Voor vragen of suggesties, neem contact op via info@dewielingen.be

---

**Ontwikkeld met ❤️ voor Aparthotel De Wielingen**
