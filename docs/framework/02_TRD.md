# TRD — Technical Requirements Document

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Astro 6.x | Static site generator, zero JS by default, island architecture, ideal for portfolios |
| Language | TypeScript | Type safety, better DX |
| Styling | CSS (no framework) | Custom dark theme, no extra deps |
| Icons | Lucide (via CDN or npm) | Clean, consistent icon set |
| Animations | CSS + Intersection Observer | Lightweight, no library needed |
| Contact Form | Formspree (free tier) | No backend needed, POST to Formspree endpoint |
| Hosting | GitHub Pages | Free, already using it |
| CI/CD | GitHub Actions | Auto-deploy on push to main |
| Fonts | Google Fonts (Inter) | Modern, readable |

## Folder Structure
```
portfolio/
├── public/
│   ├── resume.pdf
│   ├── favicon.ico
│   └── og-image.png
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   ├── ai-video-summarizer.astro
│   │   │   ├── chatbot-studio.astro
│   │   │   ├── quarterly-clock.astro
│   │   │   ├── tradingview-candles.astro
│   │   │   └── voice-trade-recorder.astro
│   │   ├── services.astro
│   │   └── contact.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── Skills.astro
│   │   ├── Services.astro
│   │   ├── ContactForm.astro
│   │   └── ResumeButton.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── .github/workflows/deploy.yml
```

## Third-Party Services
- **Formspree** — contact form endpoint (free: 50 submissions/mo)
- **Google Fonts** — Inter font
- **GitHub Pages** — hosting

## Environment Variables
None required (static site). Formspree endpoint is hardcoded in the contact form action URL.
