# Design Guidelines - Bespoke Automation Sales Focus

## Kleurenpalet

### Primaire kleuren
- **Deep Blue**: #1A365D - Voor headers, belangrijke knoppen en accentelementen
- **Vibrant Orange**: #FF6B35 - Voor CTA's en highlight elementen
- **Light Gray**: #F8F9FA - Voor achtergronden

### Secundaire kleuren
- **Teal**: #2EC4B6 - Voor iconen en secundaire elementen
- **Dark Gray**: #343A40 - Voor tekst
- **Light Blue**: #EBF2FA - Voor secties en kaders

## Typography

### Headers
- **Font**: Montserrat Bold
- **H1**: 48px / 3rem
- **H2**: 36px / 2.25rem
- **H3**: 24px / 1.5rem
- **H4**: 20px / 1.25rem

### Body Text
- **Font**: Inter
- **Regular text**: 16px / 1rem
- **Small text**: 14px / 0.875rem

## UI Elementen

### Knoppen
- **Primair**: Vibrant Orange (#FF6B35) met witte tekst, afgeronde hoeken (8px)
- **Secundair**: Transparant met Deep Blue (#1A365D) outline, Deep Blue tekst
- **Tertiair**: Light Gray (#F8F9FA) met Dark Gray tekst (#343A40)

### Navigatie
- Vaste header met transparante achtergrond die bij scrollen verandert naar wit
- Desktop: horizontale menu items rechts uitgelijnd
- Mobiel: hamburger menu dat uitklapt naar volledige overlay

### Cards
- Witte achtergrond
- Lichte schaduw
- Afgeronde hoeken (12px)
- Optionele accentrand in Teal voor belangrijke elementen

## Beeldgebruik

### Foto's
- Hoge kwaliteit, professionele beelden die sales teams in actie tonen
- Focus op technologie in combinatie met menselijke interactie
- Consistente bewerkingsstijl met licht verhoogd contrast en warme ondertoon

### Iconen
- Lijn-iconen met consistente lijndikte (2px)
- Primair in Deep Blue of Teal
- Animaties bij hover voor interactieve elementen

### Illustraties
- Custom illustraties die het concept van AI-sales oplossingen visualiseren
- Abstracte representaties van data en automatisering
- Consistent met het kleurenschema

## Secties Opbouw

### Hero Section
- Volledige breedte
- Gradient achtergrond van Deep Blue naar donkerder tint
- Witte tekst met duidelijke CTA in Vibrant Orange
- Optionele achtergrond-illustratie of -patroon

### Content Secties
- Afwisselend wit en Light Gray om visuele scheiding te creëren
- Maximale breedte van 1200px, gecentreerd
- Voldoende witruimte tussen secties (minimaal 80px padding)

### Testimonials & Case Studies
- Card-based design
- Foto's van echte klanten waar mogelijk
- Citaattekens in Vibrant Orange als visueel element

## Responsiviteit

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Content Aanpassingen
- Stacked layout op mobiel (geen kolommen)
- Verkleinde tekst op mobiel (H1: 36px, Body: 16px)
- Navigatie verandert naar hamburger menu onder 1024px

## Animaties & Interacties

### Scroll Animaties
- Subtiele fade-in en slide-up animaties bij scrollen
- Progressieve onthulling van content elementen
- Animatie van statistieken/cijfers (optellen vanaf 0)

### Hover States
- Subtiele schaalvergroting (1.02x) voor cards en clickable elementen
- Kleurverandering voor knoppen en links
- Tooltips voor complexe functies of begrippen

### Pagina Transities
- Smooth fade transitions tussen pagina's
- Behoud van scroll positie waar relevant

## Toegankelijkheid

- Minimaal AA WCAG 2.1 compliant
- Voldoende kleurcontrast voor alle tekst (minimaal 4.5:1 voor normale tekst)
- Alt text voor alle afbeeldingen
- Keyboard navigatie mogelijk
- ARIA labels waar nodig

## Technische Overwegingen

- Lazy loading voor afbeeldingen
- Prestatie-optimalisatie (Core Web Vitals aandachtspunten)
- CDN voor assets
- Compressie en optimalisatie van afbeeldingen