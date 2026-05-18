# Backend Schema — Portfolio

## Architecture
This is a **static site** with no backend database. All content is hardcoded in Astro pages/components.

## Data Model

### Project Data
Projects are defined as a TypeScript data file:
```typescript
// src/data/projects.ts
interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;       // Full markdown description
  shortDescription: string;  // Card summary
  status: 'complete' | 'in-progress' | 'concept';
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  screenshots?: string[];
}
```

### Service Data
```typescript
// src/data/services.ts
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;       // Lucide icon name
  startingPrice?: string;
  ctaText: string;
  ctaLink: string;    // /contact
}
```

### Contact Form
- Handled by **Formspree** (third-party)
- Form submits POST to `https://formspree.io/f/{form_id}`
- No backend processing needed
- Formspree forwards submissions to Vishal's email

## Auth Model
None required.

## File Storage
- `public/resume.pdf` — downloadable resume
- Screenshots stored in `public/images/projects/`

## Security
- No sensitive data stored
- Formspree handles spam filtering (CAPTCHA provided)
- Standard Content-Security-Policy headers via Astro config
