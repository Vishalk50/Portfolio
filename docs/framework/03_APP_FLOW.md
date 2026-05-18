# App Flow — Navigation & User Journey

## Site Architecture
```
Home (/) — hero, featured projects, skills, services summary
├── Projects (/projects/) — all projects grid
│   ├── AI-Video-Summarizer (/projects/ai-video-summarizer/)
│   ├── ChatBot Studio (/projects/chatbot-studio/)
│   ├── QuarterlyClock (/projects/quarterly-clock/)
│   ├── 6h 40m Candles (/projects/tradingview-candles/)
│   └── Voice-Trade-Recorder (/projects/voice-trade-recorder/)
├── Services (/services/) — freelance offerings
├── Contact (/contact/) — contact form + info
└── Resume (PDF download button in header/footer)
```

## Navigation
- **Header** — Logo + Nav links (Home, Projects, Services, Contact) + Resume button
- **Footer** — Links + GitHub/LinkedIn/Email icons + copyright

## Core User Journey

### Client Landing (Home Page)
1. User lands on homepage
2. Sees hero section: name, tagline, CTA buttons ("View Projects" / "Contact Me")
3. Scrolls to featured projects (top 3-4)
4. Clicks project → goes to individual project page
5. Sees full project details, tech stack, GitHub link
6. Navigates to Services page → sees offerings
7. Goes to Contact page → fills form → submits → confirmation message

### Client Journey (Direct)
1. Client sees project card on Fiverr/Upwork → clicks portfolio link
2. Lands on homepage → immediately sees professional design
3. Browses projects → sees quality work
4. Visits Services → understands what he can build
5. Clicks Contact → sends inquiry

## States

### Navigation
- **Desktop** — horizontal nav bar
- **Mobile** — hamburger menu with slide-out overlay
- **Active page** — highlighted nav item

### Project Cards
- **Normal** — card with image, title, tags, status badge
- **Hover** — slight lift, border glow
- **Empty** — (not applicable, projects are hardcoded)

### Contact Form
- **Initial** — empty form with placeholders
- **Typing** — clean input fields
- **Submitting** — spinner on submit button
- **Success** — green confirmation message, form clears
- **Error** — red error message, form retains values
- **Validation** — inline errors for required fields

### Resume Download
- **Normal** — download button visible
- **Click** — triggers browser download

### Error States
- **404** — custom 404 page with link back to home
- **Form failure** — "Message failed. Please email directly." + email link fallback
