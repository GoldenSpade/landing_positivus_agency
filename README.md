# Positivus — Digital Marketing Agency Landing Page

A fully responsive landing page for a fictional digital marketing agency, built as a front-end practice project based on a Figma design.

**[→ Live Demo](https://goldenspade.github.io/landing_positivus_agency/)**

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| HTML5 | Semantic markup |
| SCSS | Styles (BEM methodology, modular structure) |
| Vanilla JavaScript | Interactive behaviour (ES modules) |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Lenis](https://lenis.darkroom.engineering/) | Smooth scroll |

No frameworks, no UI libraries — just HTML, SCSS, and JavaScript.

---

## Page Sections

| Section | Description |
|---------|-------------|
| **Header** | Sticky navigation with spinning logo, underline hover effects, mobile burger menu |
| **Hero** | Two-column layout with headline, CTA buttons, floating illustration, partner brands marquee |
| **Services** | Service cards grid (3 color variants) with CTA banner |
| **Case Studies** | Horizontal project showcase cards |
| **Working Process** | Step-by-step accordion |
| **Team** | Team member cards grid |
| **Testimonials** | Auto-playing slider with dot navigation |
| **Contact Us** | Contact form with custom radio buttons and clearable inputs |
| **Footer** | Logo, navigation, social links, subscribe form, contacts |

---

## Features

- Fully responsive layout (desktop → tablet → mobile)
- Smooth scrolling with Lenis — all anchor links animated
- Mobile burger menu with overlay
- Working Process accordion (one item open at a time)
- Testimonials slider with auto-advance (5s) and manual dot navigation
- Contact form with custom-styled radio buttons and clear-input buttons
- CSS animations: spinning star logo, floating illustrations, infinite brands marquee
- Custom styled scrollbar (matches site design)

---

## Project Structure

```
src/
├── index.html
├── scripts/
│   ├── main.js             # Entry point — imports all modules
│   ├── smooth-scroll.js    # Lenis initialization + anchor interception
│   ├── burger.js           # Mobile burger menu
│   ├── accordion.js        # Working Process accordion
│   ├── testimonials.js     # Slider with auto-advance
│   └── contact.js          # Clear button logic for form inputs
└── styles/
    ├── main.scss            # Global base styles + imports
    ├── utils/
    │   ├── _vars.scss       # Design tokens (colors, fonts, transitions)
    │   └── _reset.scss      # CSS reset
    └── blocks/              # One file per section (BEM)
        ├── container.scss
        ├── buttons.scss
        ├── header.scss
        ├── hero.scss
        ├── services.scss
        ├── cta-banner.scss
        ├── case-studies.scss
        ├── process.scss
        ├── team.scss
        ├── testimonials.scss
        ├── contact.scss
        └── footer.scss
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Design Decisions

- **No JavaScript frameworks** — all interactivity (slider, accordion, burger) is simple enough for clean vanilla JS, keeping the bundle minimal
- **BEM + SCSS modules** — each section has its own `.scss` file imported via `@use`, keeping styles isolated and easy to maintain
- **Lenis for smooth scroll** — handles both free scrolling and anchor navigation; `scroll-behavior: auto` is set in CSS so native scroll doesn't interfere
- **Dynamic gap reading in the slider** — `getComputedStyle(track).gap` is read at runtime so the slider layout stays correct across all breakpoints without hardcoded values

---

## Live Demo

[https://goldenspade.github.io/landing_positivus_agency/](https://goldenspade.github.io/landing_positivus_agency/)
