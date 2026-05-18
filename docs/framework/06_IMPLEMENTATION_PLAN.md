# Implementation Plan — Portfolio Rebuild

## Phase 1: Project Setup
1. Create new Astro project in `projects/portfolio-new/`
   - `npm create astro@latest` with TypeScript + minimal template
   - Configure `astro.config.mjs` for GitHub Pages deployment (`site` + `base`)
2. Set up folder structure per TRD
3. Install deps: `@astrojs/mdx` (for project content), `lucide` (icons)
4. Create `.github/workflows/deploy.yml` for GitHub Actions auto-deploy

## Phase 2: Layout & Global Styles
1. Create `BaseLayout.astro` with:
   - HTML head (meta tags, OG tags, font preloads)
   - Global CSS import
   - Header component (nav + resume button)
   - Footer component
2. Create `global.css`:
   - CSS custom properties (colors, fonts, spacing)
   - Reset, base typography
   - Utility classes
   - Animation keyframes
3. Create Header component
4. Create Footer component

## Phase 3: Home Page
1. Create Hero component — name, tagline, CTAs
2. Create ProjectCard component — reusable card with status badge
3. Create Skills component — technology cloud/ tags
4. Build `index.astro` assembling:
   - Hero section
   - Featured projects (top 3)
   - About section (short)
   - Skills tags
   - CTA section ("Ready to build?" → /contact)

## Phase 4: Projects & Detail Pages
1. Create project data file (`src/data/projects.ts`) with all 5 projects
2. Create `/projects/index.astro` — grid of all project cards
3. Create individual project pages (5 files):
   - Each uses a shared project layout
   - Back link, title, status, tags, description, tech stack
   - GitHub link + screenshot placeholders
   - Navigation to next/previous project

## Phase 5: Services & Contact
1. Create Services page (`/services`):
   - 3-4 service cards (AI Product Development, ChatBot Building, Web Scraping/Automation, Voice AI)
   - Each card: icon, description, CTA → contact
2. Create Contact page (`/contact`):
   - Formspree form (Name, Email, Subject, Message)
   - Submit button with loading state
   - Success / error state handling
   - Fallback: email link
3. Create ResumeButton component (header, footer, download page)

## Phase 6: Polish & Deploy
1. Add scroll animations (Intersection Observer, CSS transitions)
2. Add mobile hamburger menu
3. Create custom 404 page
4. Add Open Graph meta tags for social sharing
5. Test all pages on mobile + desktop
6. Build site (`npm run build`) — verify no errors
7. Deploy to GitHub Pages via GitHub Actions
8. Verify live site works

## Edge Cases & Validations
- **404 page** — custom design with link home
- **Mobile nav** — hamburger with smooth slide-out, close on nav click
- **Form state** — loading spinner, success message, error with email fallback
- **Resume missing** — hide button if file absent
- **Empty state** — (not applicable for hardcoded data)
- **Slow network** — static site loads instantly, no network dependency
