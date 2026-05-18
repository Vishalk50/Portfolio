# UI/UX Design Brief

## Aesthetic Direction
Dark, modern, premium feel. Purple accent (#6c5ce7) on dark backgrounds. Clean typography, generous whitespace, subtle animations.

## Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Background | Deep near-black | `#0a0a0f` |
| Card background | Slightly lighter | `#12121a` |
| Card border | Subtle dark | `#1e1e2e` |
| Primary text | Light gray | `#e4e4ef` |
| Secondary text | Muted gray | `#a0a0b8` |
| Accent / Links | Purple | `#6c5ce7` |
| Success / Complete Green | Green | `#4caf50` |
| Warning / In Progress | Amber | `#eab308` |
| Muted accent | Muted purple | `#8888a0` |

## Typography
- **Font:** Inter (Google Fonts)
- **Base size:** 16px
- **Headings:** 700 weight
- **Body:** 400 weight
- **Code/tech tags:** 0.78rem, purple

## Component Styles

### Header
- Fixed top, glass-morphism effect (backdrop-filter blur)
- Logo left, nav links center, Resume button right
- Mobile: hamburger icon, slide-out menu

### Hero Section
- Large name + tagline centered
- Subtle gradient text on the name
- CTA buttons: "View Projects" (filled purple) | "Contact Me" (outline)
- Optional: abstract geometric background decoration (CSS only)

### Project Cards
- Rounded (12px), dark card on dark background
- Status badge in top-right corner
- Title, description, tech tags, GitHub link
- Hover: translateY(-2px), border glows purple

### Individual Project Pages
- Back link to /projects
- Hero with project title, status badge, tags
- Full description, tech stack list
- GitHub link + live demo link (if applicable)
- Screenshot placeholder area
- "View all projects" at bottom

### Services Section
- 3-4 service cards in a grid
- Each card: icon, title, description, "Get a quote" link
- Pricing note or "Starting at $X" if applicable

### Contact Form
- Clean, minimal form fields (Name, Email, Subject, Message)
- Purple submit button
- Formspree-powered (POST action)
- Success/error states with clear messaging

### Resume Button
- Download icon + "Download Resume"
- Styled as outline button in header, text link in footer

### Animations
- Fade-in on scroll (Intersection Observer, no libraries)
- Subtle hover transitions on cards and buttons
- Page transitions: smooth fade (optional)

## Responsive Breakpoints
| Device | Width | Adjustments |
|--------|-------|-------------|
| Mobile | <640px | Single column, stacked nav |
| Tablet | 640-1024px | 2-column project grid |
| Desktop | >1024px | Full layout, 3-column project grid |

## Accessibility
- Appropriate color contrast ratios
- Focus states for keyboard navigation
- Alt text on all images
- Semantic HTML (nav, main, section, footer)
