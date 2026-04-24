# שחרית Website — Design Spec
**Date:** 2026-04-24
**Status:** Approved

---

## Overview

A professional Hebrew-language personal brand website for **שחר גוזלן (Shahar Gozlan)**, founder of **שחרית** (Shacharit). The site targets Israeli women seeking holistic coaching, emotional accompaniment, group facilitation, and retreat experiences.

---

## Brand Identity

| Element | Value |
|---------|-------|
| Brand name | שחרית |
| Tagline | אור השחר |
| Full name | שחר גוזלן |
| Logo | Line-art mountains with sunrise (SVG, inline) |
| Language | Hebrew only, RTL (`dir="rtl"`, `lang="he"`) |

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Cream | `#FAF3EC` | Main background |
| Cream 2 | `#F3E9DC` | Alternate section bg |
| Purple | `#7B5EA7` | Primary brand color, headings, buttons |
| Purple mid | `#9B7EC8` | Hover states |
| Purple light | `#C4AEDE` | Decorative accents |
| Purple pale | `#EDE7F6` | Icon backgrounds, card accents |
| Coral | `#E8836A` | Secondary accent, eyebrows, CTAs |
| Coral light | `#F2B5A3` | Soft highlights |
| Gold | `#C89A3A` | Decorative details |
| Text | `#2D2228` | Body text |
| Text soft | `#7A6B62` | Secondary text |

### Typography

| Role | Font | Weight |
|------|------|--------|
| All text | Varela Round | 400 (only weight available) |
| Source | Google Fonts | `family=Varela+Round` |

---

## Site Architecture

### Pages

```
index.html                  — Main site (single-page scroll)
retreat-shacharit.html      — Landing page: ריטריט שחרית
retreat-ani-ve-at.html      — Landing page: אני ואת אם ובת
```

### Main Site Sections (index.html)

| Order | Section ID | Hebrew Name |
|-------|-----------|-------------|
| 1 | `#home` | Hero — שחרית / אור השחר |
| 2 | `#about` | קצת עליי |
| 3 | `#philosophy` | הייעוד שלי (full-width quote block) |
| 4 | `#services` | השירותים שלי |
| 5 | `#values` | ערכי שחרית |
| 6 | `#retreats` | מסעות ריפוי |
| 7 | `#contact` | צרי קשר |

### Navigation

Fixed top nav with backdrop blur. Links: עליי / שירותים / ריטריטים / לקביעת פגישה (CTA button).

---

## Section Designs

### Hero
- Full-viewport height, centered content
- Floating botanical SVG decorations (top-right + bottom-left), subtle animation
- Soft radial gradient blobs in background
- Logo SVG (mountains + sunrise), eyebrow text, large brand title, subtitle, tagline paragraph
- Two CTAs: "לקביעת פגישה" (purple filled) + WhatsApp (outline)
- Scroll hint animation at bottom

### About
- Two-column grid: image left, text right
- Image: organic blob-shape placeholder (swappable with Shahar's photo)
- Floating badge card with name + role
- Dot-grid decorative element

### Philosophy
- Full-width purple background section
- Large centered quote from Shahar with coral highlights on key phrases
- Author attribution

### Services
- Cream-2 background
- 3×2 grid of cards
- Each card: number, icon (custom SVG), title, description
- Hover: lift + shadow
- 6 services: ליווי הוליסטי, הערכת קלפים, המחברת, עבודה עם נוער, הנחיית קבוצות, טבע רוח תודעה

### Values
- 2×2 grid of cards
- Each card: emoji icon in circle + title + description
- 4 values: עין טובה, מרחב בטוח ותומך, אותנטיות והכרת הטוב, הקשבה אוהבת

### Retreats
- 2-column grid of tall cards (aspect-ratio 9/11)
- Card 1 (purple): ריטריט שחרית — 6–8.11.2025
- Card 2 (earth tones): אני ואת אם ובת — 20–23.1.2026
- Each links to its dedicated landing page
- Hover: scale + shadow
- Layered: background gradient + texture overlay + content gradient + SVG deco + text

### Contact
- Two-column: info left, form right
- WhatsApp CTA (green) prominent
- Form fields: שם פרטי + שם משפחה (row), אימייל, טלפון, הודעה (textarea)
- Submit button (purple)

---

## Retreat Landing Pages

Both pages share structure:
1. Hero — retreat name, dates, location, tagline
2. About the retreat — what it is, who it's for
3. Program / what to expect
4. About Shahar (brief)
5. Registration CTA — WhatsApp + form
6. Footer

### ריטריט שחרית
- Colors: Purple palette
- Location: כפר הנופש קיבוץ פרוד
- Dates: 6–8.11.2025
- Theme: "הרגע בו הלב מתעורר"

### אני ואת — אם ובת
- Colors: Warm earth palette (coral/gold)
- Dates: 20–23.1.2026
- Theme: מסע ריפוי לאמהות ובנות

---

## Technical Spec

| Item | Decision |
|------|----------|
| Stack | Pure HTML + CSS + Vanilla JS |
| Build | None — static files only |
| Hosting | Any static host (Netlify / GitHub Pages / Vercel) — free tier |
| Domain | To be connected later by user |
| Fonts | Google Fonts CDN (Varela Round) |
| Icons | Inline SVG only — no external icon libraries |
| Images | Placeholder divs for now; swappable with real photos |
| RTL | `dir="rtl"` on `<html>`, Hebrew throughout |
| JS | Minimal: smooth scroll, mobile nav toggle, form handling |
| Responsive | Mobile-first; breakpoints at 768px and 1024px |

---

## File Structure

```
/
├── index.html
├── retreat-shacharit.html
├── retreat-ani-ve-at.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── images/        (photos when ready)
│   └── svg/           (logo, decorative SVGs)
└── docs/
    └── superpowers/specs/
        └── 2026-04-24-shacharit-website-design.md
```

---

## Content Source

All Hebrew content sourced from:
- `הרגע בו הלב מתעורר.pdf` — ריטריט שחרית presentation
- `מסע ריפוי- אני ואת.pdf` — אני ואת retreat presentation

---

## Out of Scope

- CMS / editable backend
- Blog
- Online payment / booking system
- Multilingual support
