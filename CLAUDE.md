# PROJECT CLAUDE.md — Portfolio

## Global Rules
@C:\Users\visha\CLAUDE.md

## Project Overview
- Name: Vishal Khajuriya Portfolio
- Purpose: Personal portfolio website showcasing projects, skills, and services for freelance clients on Fiverr/Upwork
- Status: Mid-rebuild (migrating from single HTML → Astro 6.x)
- Started: April/May 2026

## Tech Stack
- Framework: **Astro 6.x** (TypeScript)
- Styling: CSS custom properties, dark theme
- Icons: Lucide
- Contact: Formspree (free tier)
- Fonts: Inter (Google Fonts)
- Hosting: GitHub Pages + GitHub Actions

## Folder Structure
```
portfolio/
├── public/               — Static assets (resume.pdf, favicon, images)
├── src/
│   ├── layouts/          — BaseLayout.astro
│   ├── pages/            — index, projects/*, services, contact
│   ├── components/       — Header, Footer, Hero, ProjectCard, etc.
│   ├── data/             — projects.ts, services.ts
│   └── styles/           — global.css
├── docs/framework/       — 6 design docs (01_PRD .. 06_IMPLEMENTATION_PLAN)
├── astro.config.mjs
├── package.json
└── .github/workflows/    — GitHub Pages deploy
```

## Key Decisions
- Astro chosen for zero-JS output, fast builds, ideal for static portfolio
- All project content hardcoded in TypeScript data files (no DB needed)
- Formspree for contact form (no backend to maintain)
- GitHub Pages with Actions for automatic deployment on push to main
- Dark purple theme consistent with current branding
- Individual project pages for detailed showcase

## Current Status
- ✅ Full rebuild complete (Astro 6.x + TypeScript)
- ✅ 10 pages built: Home, Projects grid, 5 project detail pages, Services, Contact, 404
- ✅ GitHub Pages auto-deploy via Actions on push to main
- ✅ Live at: https://Vishalk50.github.io/Portfolio (GitHub Pages)
- Old index.html preserved at root (not served — dist/ is deployed via Actions)
