# MUSA Website — Claude Code Instructions

## Project Overview

Building a professional brochure website for **UBC MUSA** (Music Undergraduate Students'
Association at UBC School of Music). The site targets external audiences including donors,
sponsors, partner organizations (e.g. VSO), and prospective students.

**Live reference:** https://www.cus.ca/ — match this level of polish and layout structure.
**Current site (to replace):** https://www.ubcmusa.ca/

---

## Tech Stack

- **Vite + React** (no Next.js)
- **Tailwind CSS** for styling
- **React Router DOM** for routing
- **No CMS** — static site, content is hardcoded

---

## Design Direction

**Simple, clean, professional.** White background dominant. One strong primary color used
consistently for the navbar, buttons, accents, and footer. No competing colors, no gradients,
no color clashing.

Think: clean institution website. CUS.ca is the reference — mostly white with one solid color
used sparingly but consistently.

---

## Color Palette

Tokens are defined as Tailwind v4 `@theme` colors in `src/index.css` (use them as Tailwind
utility classes, e.g. `text-steel`, `bg-steel-dark`, `text-logo`). Mirror `:root` CSS vars
exist for raw CSS.

```css
@theme {
  --color-steel: #5B79B8;       /* Primary blue — navbar, footer, buttons, headings, accents */
  --color-steel-dark: #45608F;  /* Darker blue for hover states */
  --color-logo: #5B82E0;        /* Link blue (hover → steel) */
  --color-soft: #9DB6EC;        /* Soft blue for subtle tints */
  --color-gold: #E6B82F;        /* Warm gold — used sparingly (hero eyebrow only) */
  --color-gold-bright: #F7CB47; /* Bright gold accent */
  --color-ivory: #F0EEE8;       /* Warm off-white section background */
  --color-sheet: #FFFFFF;       /* Page / card background */
}
```

**Rules:**
- Page background: white (`bg-sheet` / white)
- Navbar: `steel` (solid, no transparency)
- Footer: `steel` (solid)
- Buttons/CTAs: `steel` background, white text; hover → `steel-dark`
- Headings: `steel` (Cormorant Garamond display font)
- Body text: gray-700 / gray-500 for secondary
- Links: `logo` blue, hover → `steel`
- Cards: white with subtle border
- Gold is reserved for tiny accents (hero eyebrow) — never large areas. No gradients.

Use the Tailwind token classes (`text-steel`, etc.); avoid hardcoded hex values.

---

## Typography

Three font families, mapped to Tailwind tokens in `src/index.css`:

- **Cormorant Garamond** (`font-display`, `--font-display`) — headings (h1–h4), page titles.
- **Montserrat** (`font-heavy`, `--font-heavy`) — heavy/uppercase labels, eyebrows, nav.
- **Inter** (`font-sans`, `--font-sans`) — body copy (default).

Loaded via Google Fonts in `index.html`. Use the Tailwind classes (`font-display`,
`font-heavy`, `font-sans`).

---

## Site Structure & Routing

```
/                          Home
/about/what-is-musa        What is MUSA
/about/who-we-are          Who We Are
/about/how-we-run          How We Run
/resources/academic        Academic
/resources/personal        Personal
/resources/professional    Professional
/resources/musa            MUSA Resources
/student-life/lounge       Student Lounge
/student-life/grads        Grads
/student-life/downbeat     The Downbeat (Newsletter)
/student-life/journal      UBC Music Journal
/events                    Events (combined timeline — replaces old Calendar/Details; /events/calendar & /events/details redirect here)
/get-involved/join         Join MUSA
/get-involved/hiring       Hiring Opportunities
/get-involved/elections    Elections
/sponsors                  Sponsors
/contact                   Contact Us
```

---

## Navigation Structure

Sticky navbar. `steel` background, white text. Main headers open dropdowns on hover
(no direct page link). Subheaders link to pages. Clean text-only dropdowns — white
background, dark text, subtle shadow, no images. Nav structure lives in
`src/data/navigation.js`.

**Dropdown animation:** scale from 0.95 + opacity 0 → scale 1 + opacity 1, 150ms ease-out.
Transform origin at top. Never ease-in.

```
Logo (→ /)
About Us
  - What is MUSA       → /about/what-is-musa
  - Who We Are         → /about/who-we-are
  - How We Run         → /about/how-we-run
Resources
  - Academic           → /resources/academic
  - Personal           → /resources/personal
  - Professional       → /resources/professional
  - MUSA               → /resources/musa
Student Life
  - Student Lounge     → /student-life/lounge
  - Grads              → /student-life/grads
  - The Downbeat       → /student-life/downbeat
  - UBC Music Journal  → /student-life/journal
Events                 → /events   (direct link, no dropdown — combined timeline)
Get Involved
  - Join MUSA          → /get-involved/join
  - Hiring Opportunities → /get-involved/hiring
  - Elections          → /get-involved/elections
Sponsors               → /sponsors
Contact Us             → /contact
```

---

## Home Page Sections (in order)

### 1. Hero Banner
Full-width. `public/images/chan-centre.jpeg` as background with dark overlay (rgba 0,0,0,0.45).
White text. "Welcome to MUSA" heading + "UBC Music Undergraduate Students' Association"
subheading. CTA button linking to /about/what-is-musa.
**Animation:** On page load, heading fades up from translateY(20px) opacity 0 → 1, 600ms ease-out.
Subheading follows with 100ms delay. Button follows with 200ms delay.

### 2. Stats Bar
`--primary` background, white text. 4 stats in a row:
`400+ Musicians` | `20+ Annual Events` | `3 Pillars` | `$50K+ Budget`
**Animation:** Numbers count up from 0 when they scroll into view (Intersection Observer).

### 3. Get Involved
White background. Text left, image right layout.
CTA button in `--primary`. Links to /get-involved/join.
**Animation:** On scroll into view — text slides in from left, image slides in from right.
Use translateX(-30px) → 0 and translateX(30px) → 0, opacity 0 → 1, 500ms var(--ease-out).

### 4. Upcoming Events — CAROUSEL COMPONENT
This is the most important interactive section. Build it as a full carousel:

- Full-width card with a large event photo taking up the top ~65% of the card
- Event title overlaid on the bottom of the photo with a gradient overlay
- Below the photo: event date, location in clean text
- Bottom-left corner: "Event Details →" button in `--primary`
- Right side: arrow button (→) to advance to the next event
- Left side: arrow button (←) to go back

**Carousel animation (critical):**
- When the right arrow is clicked, current card slides out to the left (translateX(-100%))
  simultaneously as the next card slides in from the right (translateX(100%) → 0)
- When the left arrow is clicked, reverse direction
- Duration: 350ms, var(--ease-in-out)
- Arrow buttons scale down to 0.92 on :active (100ms ease-out) for tactile feedback
- Use CSS transitions, not keyframes, so it's interruptible

Event data (hardcode these as placeholders):
```js
const events = [
  { title: "Welcome Back BBQ", date: "Sep 12", location: "Old Auditorium Lawn", image: "public/images/ubc-opera-ball.jpg" },
  { title: "Wellness Week Kickoff", date: "Oct 04", location: "School of Music Atrium", image: "public/images/ubc-choirs-1.webp" },
  { title: "Spring Formal Gala", date: "Mar 21", location: "Chan Centre", image: "public/images/chan-centre.jpeg" },
]
```

Also include a "View Calendar →" link separately above or below the carousel.

### 5. Pillars of Commitment
White background. 3 cards side by side: Academic / Personal / Professional.
Simple icon, heading, short description. Each links to its resources page.
**Animation:** Stagger on scroll — card 1 at 0ms, card 2 at 60ms, card 3 at 120ms.
Each fades up from translateY(16px), 400ms var(--ease-out).

### 6. About Us
`--off-white` background. Short paragraph + CTA to /about/what-is-musa.

### 7. Footer
`--primary` background, white text. Organized link columns matching nav.
Address block on one side. Social media icons. Clean, like CUS footer.

---

## Footer Content

**Addresses:**
- UBC School of Music, 6361 Memorial Rd, Vancouver, BC V6T 1Z2
- Office: Room E106, Old Auditorium Annex
- President's Office: Room 209, Old Auditorium
- Student Lounge: Fourth Floor, UBC School of Music

**Socials:**
- Instagram: https://instagram.com/ubcmusa
- LinkedIn: UBC Music Undergraduate Students' Association
- Facebook: https://www.facebook.com/share/g/1BZEryRF8k/

---

## Executive Team (Who We Are page)

**President — Millen Sandhu**
4th-year BMus, Tenor UBC Opera, AMS Councillor
ubcmusa.president@gmail.com

**VP Administration — Almira Miao**
2nd-year BMus, Flute Performance
ubc.musa@gmail.com

**VP Finance — Aleksandra Van-Looy (Sasha)**
2nd-year BMus, Soprano UBC Opera
musa.vpfinance@gmail.com

**VP Internal — Zaiden Grayda-Reyes**
3rd-year BMus, Flute Performance
ubcmusa.vpinternal@gmail.com

**VP External — Rosie Lin**
2nd-year BMus, Piano Performance
musa.vpexternal@gmail.com

**VP Student Resource — TBD**
ubcmusa.vpstudentresource@gmail.com

Bio cards: headshot image, name, title, year/instrument, email, short bio. Clean white cards
with subtle border. Full bios are in the project brief.

---

## Key Copy

**About MUSA (homepage):**
"The Music Undergraduate Students' Association (MUSA) is the official student government and
community backbone for over 400 musicians at the UBC School of Music. Guided by our core
pillars of academic advocacy, student well-being, and professional development, MUSA supports
our members through specialized initiatives, resources, and programming that host collaborative
mixers, wellness events, masterclasses, and student showcases."

**Mission:**
"Guided by the pillars of academic advocacy, student well-being, and professional development,
MUSA is dedicated to empowering over 400 musicians at the UBC School of Music to achieve
creative excellence and discover their unique journeys within an inclusive, collaborative
community."

**Get Involved:**
"Join MUSA under the right role for you! Under MUSA's Restructuring Plan many new positions
have been introduced, increasing MUSA's capacity for excellence while providing more student
opportunities. The majority of our positions are open to ALL UBC Undergraduate Students,
providing valuable skills and experience to all students, sharing a common interest of Music."

**Three Pillars:**
- Academic & Institutional Advocacy
- Student Well-being & Community Building
- Professional Development & Cross-Faculty Collaboration

---

## Animation Guidelines (Emil Kowalski / animations.dev)

### Core philosophy
Every animation must have a purpose. Never animate just because you can. The aggregate of
invisible, correct details creates interfaces people love without knowing why.

### Decision framework — ask before animating:
1. How often will users see this? If 100+ times/day (nav links, typing) → no animation.
2. What is the purpose? Spatial consistency, state indication, feedback, or preventing jarring changes.
3. Never ease-in on UI elements — it feels sluggish. Always ease-out for entering elements.

### Easing rules
```css
/* All easing curves use CSS variables defined in :root */
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);     /* Entering elements */
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1); /* On-screen movement (carousel) */
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);  /* Drawers and slides */
```

### Duration targets
| Element | Duration |
|---|---|
| Button press feedback | 100-160ms |
| Tooltips, small popovers | 125-200ms |
| Dropdowns | 150-200ms |
| Carousel slide | 300-400ms |
| Scroll-triggered reveals | 400-600ms |

### Entry animations — always start from:
- `opacity: 0` + `transform: translateY(12px)` for vertical reveals
- `opacity: 0` + `transform: translateX(±30px)` for horizontal reveals
- `opacity: 0` + `transform: scale(0.95)` for dropdowns/popovers
- NEVER start from `scale(0)` or large translate values — nothing in the real world appears from nothing

### Stagger pattern for lists/cards
```css
.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 60ms; }
.card:nth-child(3) { animation-delay: 120ms; }
```
Keep stagger at 30-80ms between items. Never block interaction during stagger.

### Scroll-triggered animations
Use IntersectionObserver with threshold: 0.15. Add a CSS class when element enters viewport.
Elements should be invisible (opacity: 0) by default and animate in once.

### Button/interactive feedback
All clickable elements: `transform: scale(0.97)` on `:active`, 100ms ease-out.
Arrow buttons specifically: `scale(0.92)` on `:active`.
Hover transitions on links: 150ms ease.

### Carousel specifics
- Use CSS transitions (not keyframes) so animation is interruptible
- translateX(-100%) out + translateX(100%) in simultaneously
- 350ms var(--ease-in-out)
- Disable arrow buttons during animation (add `pointer-events: none` while transitioning)

### Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Never animate keyboard-triggered actions
Keyboard shortcuts and repeated nav actions should never animate — it feels slow.

### Review checklist before committing
- No `transition: all` — specify exact properties
- No `ease-in` on any UI element
- No animation > 300ms on UI elements (carousel is the exception at 350ms)
- Hover animations gated behind `@media (hover: hover) and (pointer: fine)`
- prefers-reduced-motion handled

---

## Component Conventions

- All components in `src/components/`
- All pages in `src/pages/` with subdirectories matching routes
- Navbar and Footer are shared layout components wrapping all pages via React Router
- Mobile responsive — navbar collapses to hamburger menu on mobile
- Images live in `public/images/`
- Use Intersection Observer via a reusable `useInView` hook for all scroll animations

---

## Deployment

- Hosted on Netlify via the client's GitHub account
- Build command: `npm run build`
- Publish directory: `dist`
- Custom domain: ubcmusa.ca (DNS managed via Tucows/OpenSRS)
