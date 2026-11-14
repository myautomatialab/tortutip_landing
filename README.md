# TortuTip: Wellness Navigator

Build a world-class, award-worthy landing page for TortuTip — a wellness content app where readers discover daily tips and writers share their expertise. This page must feel like it belongs on Awwwards. It should demonstrate exceptional product thinking, visual craft, and conversion design.

BRAND IDENTITY

App name: TortuTip

Tagline: "Get better, one tip at a time."

Hero line: "Crea una vida que te guste"

Brand colors: Deep forest green #2D5016, olive #4A7C2F, warm cream #F5F0E8, beige #EDE8DC, amber accent #C8A84B

Fonts: Playfair Display (headings) + DM Sans (body) via Google Fonts

Tone: Editorial, warm, premium — like Kinfolk magazine meets a wellness startup

Mascot: turtle 🐢 used as a subtle brand signature

SECTIONS

1. NAVBAR Sticky. Logo left (⚡ icon + TortuTip wordmark). Links: Features · Para Escritores · Categorías · Descargar. Right CTA: "Descargar App" pill button green. Transparent on top → cream background on scroll with subtle shadow transition.

2. HERO Full viewport height. Split layout: left side text, right side floating phone mockup.

Left:

Eyebrow label: small green pill → "Bienestar · Conocimiento · Comunidad"

H1 (large, Playfair Display): "Crea una vida que te guste"

Subheading: "Descubre tips diarios creados por expertos reales. O comparte tu conocimiento con miles de personas apasionadas por vivir mejor."

Two CTAs: "Empezar Gratis →" (solid green) + "Ver demo" (ghost button)

Micro social proof: ⭐ 4.9 · 10k+ usuarios · 500+ artículos

Right:

Phone mockup (CSS frame, rounded, shadow) showing a wellness article card

Gentle infinite float animation (CSS keyframes)

Behind the phone: abstract green blob / gradient mesh as atmosphere

Background: off-white cream with subtle grain texture overlay (CSS noise filter or SVG filter).

3. MARQUEE TRUST BAR Full-width scrolling ticker (CSS animation, infinite loop): "🥗 Comida Saludable · 💪 Fitness · 🧘 Meditación · 😴 Sueño · 🧠 Salud Mental · ⏰ Productividad · ✍️ Comparte tu expertise · 📖 Lee cada día ·" — repeated Green background, cream text. Creates visual momentum between hero and next section.

4. HOW IT WORKS Title: "Tan simple como leer el periódico de la mañana" 3 steps, large numbered (01 · 02 · 03) in Playfair Display as decorative element:

01 — Accede con Google (un click)

02 — Elige tus categorías (feed personalizado)

03 — Lee, guarda y comparte (hábito diario) Layout: horizontal cards, cream background, green accent borders on hover.

5. CATEGORIES Title: "Encuentra tu mundo" 6 cards in asymmetric masonry grid (not boring equal grid):

Each card: full-bleed wellness image from Unsplash, dark gradient overlay, icon + category name in white

Hover: scale 1.03 + green tint overlay + arrow appears

Categories: Comida Saludable · Fitness · Meditación · Sueño & Bienestar · Salud Mental · Productividad

6. FOR WRITERS — HERO DARK SECTION Full-width dark section (#0F1F07 background, cream text). This section must feel premium and different.

Layout: Left mockup of the article creation screen, Right text.

Headline (large, Playfair, cream): "Tu conocimiento merece una audiencia" Body: "¿Eres periodista, experto en nutrición, coach o simplemente tienes algo valioso que aportar? TortuTip te da las herramientas para publicar y el alcance para que te lean."

4 feature rows with icons:

✍️ Editor de artículos con formato enriquecido

📸 Covers vertical y horizontal para máximo impacto visual

🏷️ Categorización automática por temática

📊 Métricas: cuántas personas guardaron tu artículo

CTA: "Empieza a escribir hoy →" (amber #C8A84B button — contrasts beautifully on dark)

7. ARTICLE CARDS SHOWCASE Title: "Contenido que inspira" Horizontal scrollable row of 3 article cards (on mobile) / 3-col grid (desktop):

Card 1: Rainbow Bowl · Healthy Food · 8 min · Dr. Elena Vance

Card 2: 5-Minute Desk Stretches · Fitness · 5 min · Marc Thompson

Card 3: The 1% Rule · Healthy Food · 12 min · Sarah Bloom Each card: Unsplash image, category pill, title, author row, bookmark icon. Hover: lift shadow.

8. TESTIMONIALS Title: "Ellos ya lo están viviendo" 3 cards, staggered layout (not aligned grid — offset vertically to create rhythm):

"Llevo 14 días con mi racha y nunca me había sentido tan constante." — María G.

"Publiqué mi primer artículo y 200 personas lo guardaron en una semana." — Dr. Carlos R.

"El feed personalizado es exactamente lo que necesitaba. Sin ruido." — Ana P. Green left-border accent. Light cream card background. Author initials in green circle avatar.

9. FINAL CTA Full viewport section. Green gradient background (#2D5016 → #4A7C2F). Center-aligned:

Big Playfair headline (white): "Un tip al día. Una vida mejor."

Subtext: "Únete gratis. Sin tarjeta. Sin excusas."

App Store + Google Play buttons (white pill buttons)

Decorative: large faded turtle emoji or SVG as background watermark

10. FOOTER Dark green #0A1505. Logo + tagline. 3 column links. Social icons. Copyright.

ANIMATIONS — THIS IS WHAT IMPRESSES

Hero text: staggered fade-up on load (each line with animation-delay)

Phone mockup: float keyframe (translateY -8px ↔ 0px, 3s infinite ease-in-out)

Section entries: fade-up triggered by Intersection Observer (class toggle)

Category cards: smooth scale + overlay on hover

Marquee bar: CSS infinite scroll animation

Testimonial cards: subtle entrance with stagger delay

CTA button: subtle pulse glow on hover (box-shadow animation)

TECHNICAL SPECS

React + Tailwind CSS

lucide-react for icons only

Intersection Observer for scroll animations

Unsplash images for all photography (wellness, food, fitness, nature)

Mobile-first, fully responsive

Navbar scroll behavior

No UI libraries (shadcn, MUI, etc.) — pure Tailwind

THE ONE THING TO GET RIGHT

This page should make a recruiter stop scrolling and think: "whoever designed this understands product, brand, and users." It must feel intentional, warm, and premium — not like a template. Every section should have a reason to exist. Every line of copy should convert. Every animation should add meaning, not noise.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://tortoise-tip-showcase.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8d1b9918-c801-4efe-9e68-a37a42a7a2d4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
