# שחרית Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, production-ready Hebrew RTL personal brand website for שחר גוזלן (Shacharit) as three static HTML pages.

**Architecture:** Pure HTML + CSS + vanilla JS, no build step, no dependencies. One shared CSS file, one JS file, inline SVGs for all icons/logos. The preview.html already exists as a reference — we will extract it into proper separated files.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), Vanilla JS, Google Fonts (Varela Round), inline SVG

---

## File Map

| File | Responsibility |
|------|---------------|
| `index.html` | Main site — all 7 sections |
| `retreat-shacharit.html` | ריטריט שחרית landing page |
| `retreat-ani-ve-at.html` | אני ואת אם ובת landing page |
| `css/style.css` | All shared styles — CSS variables, reset, components, sections |
| `js/main.js` | Nav scroll behavior, mobile menu toggle, contact form handler |

---

## Task 1: CSS Foundation — Variables, Reset, Typography, Shared Components

**Files:**
- Create: `css/style.css`

- [ ] **Step 1: Create `css/style.css` with CSS variables, reset and base styles**

```css
/* css/style.css */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --cream:          #FAF3EC;
  --cream2:         #F3E9DC;
  --cream3:         #EDE0D0;
  --purple:         #7B5EA7;
  --purple-mid:     #9B7EC8;
  --purple-light:   #C4AEDE;
  --purple-pale:    #EDE7F6;
  --coral:          #E8836A;
  --coral-light:    #F2B5A3;
  --gold:           #C89A3A;
  --gold-light:     #E8C97A;
  --text:           #2D2228;
  --text-soft:      #7A6B62;
  --text-xsoft:     #A89890;
  --white:          #FFFFFF;
}

html { scroll-behavior: smooth; }

body {
  background: var(--cream);
  color: var(--text);
  font-family: 'Varela Round', sans-serif;
  line-height: 1.8;
  overflow-x: hidden;
  direction: rtl;
}
```

- [ ] **Step 2: Add shared utility classes to `css/style.css`**

```css
/* ── Shared utilities ── */
.sec { padding: 110px 32px; }
.sec-inner { max-width: 1140px; margin: 0 auto; }

.sec-eyebrow {
  display: block;
  font-size: 11px;
  letter-spacing: 0.24em;
  color: var(--coral);
  margin-bottom: 12px;
}

.sec-title {
  font-size: clamp(30px, 4vw, 46px);
  color: var(--purple);
  line-height: 1.2;
  margin-bottom: 16px;
}

.sec-title--center { text-align: center; }

.sec-body {
  font-size: 16px;
  line-height: 2.1;
  color: var(--text-soft);
  max-width: 600px;
}

.bar {
  width: 48px;
  height: 3px;
  background: linear-gradient(90deg, var(--coral), var(--gold-light));
  border-radius: 4px;
  margin-bottom: 40px;
}

.bar--center { margin-left: auto; margin-right: auto; }

.sep {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(123,94,167,0.15), transparent);
}

/* ── Buttons ── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 15px 36px;
  border-radius: 50px;
  font-family: 'Varela Round', sans-serif;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
}

.btn:hover { transform: translateY(-3px); }

.btn--primary {
  background: var(--purple);
  color: var(--white);
  box-shadow: 0 8px 32px rgba(123,94,167,0.30);
}

.btn--primary:hover {
  background: #6A4F92;
  box-shadow: 0 12px 40px rgba(123,94,167,0.38);
}

.btn--outline {
  background: transparent;
  color: var(--purple);
  border: 1.5px solid var(--purple-light);
}

.btn--outline:hover { background: var(--purple-pale); }

.btn--whatsapp {
  background: #25D366;
  color: var(--white);
  box-shadow: 0 8px 28px rgba(37,211,102,0.28);
}

.btn--whatsapp:hover {
  box-shadow: 0 14px 36px rgba(37,211,102,0.35);
}
```

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add CSS foundation — variables, reset, shared utilities"
```

---

## Task 2: Navigation

**Files:**
- Modify: `css/style.css` — append nav styles
- Create: `index.html` — shell + nav only

- [ ] **Step 1: Append nav styles to `css/style.css`**

```css
/* ── NAV ── */
.nav {
  position: fixed;
  top: 0; right: 0; left: 0;
  z-index: 200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 56px;
  height: 72px;
  background: rgba(250,243,236,0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(123,94,167,0.10);
  transition: box-shadow 0.3s;
}

.nav--scrolled { box-shadow: 0 4px 24px rgba(123,94,167,0.08); }

.nav__brand {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
}

.nav__brand-name {
  font-size: 22px;
  color: var(--purple);
  letter-spacing: 0.02em;
}

.nav__links {
  display: flex;
  gap: 36px;
  list-style: none;
  align-items: center;
}

.nav__links a {
  text-decoration: none;
  color: var(--text-soft);
  font-size: 14px;
  transition: color 0.2s;
}

.nav__links a:hover { color: var(--purple); }

.nav__cta {
  padding: 9px 24px;
  background: var(--purple);
  color: var(--white) !important;
  border-radius: 50px;
  font-size: 13px !important;
  transition: background 0.2s, transform 0.15s !important;
}

.nav__cta:hover { background: #6A4F92 !important; transform: translateY(-1px); }

/* Hamburger — hidden on desktop */
.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 8px;
  background: none;
  border: none;
}

.nav__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--purple);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

/* Mobile nav open state */
.nav--open .nav__links {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 72px; right: 0; left: 0;
  background: var(--cream);
  padding: 32px;
  gap: 24px;
  border-bottom: 1px solid var(--cream3);
  box-shadow: 0 16px 40px rgba(0,0,0,0.08);
}

.nav--open .nav__hamburger span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav--open .nav__hamburger span:nth-child(2) { opacity: 0; }
.nav--open .nav__hamburger span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
```

- [ ] **Step 2: Create `index.html` shell with nav only**

```html
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>שחרית — שחר גוזלן</title>
  <meta name="description" content="שחרית — מרחב להתפתחות אישית, ריפוי ומפגש עם הלב. שחר גוזלן, מאמנת קינסיולוגית ומנחת קבוצות.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<nav class="nav" id="nav">
  <a class="nav__brand" href="#home">
    <svg width="38" height="30" viewBox="0 0 130 85" fill="none" aria-hidden="true">
      <path d="M8 75 Q35 18 58 32 Q72 40 88 6 Q104 40 122 75" stroke="#7B5EA7" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M0 75 Q22 42 44 54 Q58 61 72 32" stroke="#C4AEDE" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.55"/>
      <circle cx="88" cy="8" r="10" fill="none" stroke="#E8836A" stroke-width="2.2"/>
      <line x1="88" y1="-4" x2="88" y2="-1" stroke="#E8836A" stroke-width="2" stroke-linecap="round"/>
      <line x1="100" y1="0" x2="103" y2="-3" stroke="#E8836A" stroke-width="2" stroke-linecap="round"/>
      <line x1="105" y1="11" x2="108" y2="11" stroke="#E8836A" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <span class="nav__brand-name">שחרית</span>
  </a>
  <button class="nav__hamburger" id="navHamburger" aria-label="תפריט" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav__links" id="navLinks">
    <li><a href="#about">עליי</a></li>
    <li><a href="#services">שירותים</a></li>
    <li><a href="#retreats">ריטריטים</a></li>
    <li><a href="#contact" class="nav__cta">לקביעת פגישה</a></li>
  </ul>
</nav>

<script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Verify in browser**

Open `index.html` in browser. Check:
- Nav is fixed at top with cream background
- Brand name "שחרית" in purple visible on the right
- Links visible: עליי / שירותים / ריטריטים / לקביעת פגישה
- "לקביעת פגישה" appears as a purple pill button

- [ ] **Step 4: Commit**

```bash
git add css/style.css index.html
git commit -m "feat: add nav component"
```

---

## Task 3: JavaScript — Nav Behavior

**Files:**
- Create: `js/main.js`

- [ ] **Step 1: Create `js/main.js`**

```js
// js/main.js
'use strict';

// ── Nav: add shadow on scroll ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 20);
});

// ── Nav: mobile hamburger toggle ──
const hamburger = document.getElementById('navHamburger');
hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav--open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// ── Nav: close mobile menu on link click ──
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});
```

- [ ] **Step 2: Verify in browser**

Open `index.html`. Check:
- Scroll down → nav gets subtle shadow
- On narrow window (< 768px): hamburger icon appears, nav links hidden
- Click hamburger → links drop down; click again → collapse

- [ ] **Step 3: Commit**

```bash
git add js/main.js
git commit -m "feat: add nav scroll and mobile toggle JS"
```

---

## Task 4: Hero Section

**Files:**
- Modify: `css/style.css` — append hero styles
- Modify: `index.html` — add hero section before `<script>`

- [ ] **Step 1: Append hero styles to `css/style.css`**

```css
/* ── HERO ── */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 32px 80px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  width: 800px; height: 800px;
  top: -200px; right: -200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(196,174,222,0.18) 0%, transparent 65%);
  pointer-events: none;
}

.hero::after {
  content: '';
  position: absolute;
  width: 600px; height: 600px;
  bottom: -100px; left: -100px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(232,131,106,0.10) 0%, transparent 65%);
  pointer-events: none;
}

.hero__deco {
  position: absolute;
  pointer-events: none;
  opacity: 0.18;
}

.hero__deco--tl {
  top: 120px; right: 80px;
  width: 180px;
  animation: floatA 8s ease-in-out infinite;
}

.hero__deco--br {
  bottom: 80px; left: 60px;
  width: 140px;
  animation: floatB 10s ease-in-out infinite;
}

@keyframes floatA {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(3deg); }
}

@keyframes floatB {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(10px) rotate(-2deg); }
}

.hero__content { position: relative; z-index: 2; }

.hero__logo {
  width: 200px;
  margin: 0 auto 36px;
  display: block;
}

.hero__eyebrow {
  font-size: 12px;
  letter-spacing: 0.28em;
  color: var(--coral);
  margin-bottom: 14px;
}

.hero__title {
  font-size: clamp(64px, 10vw, 110px);
  color: var(--purple);
  line-height: 0.95;
  margin-bottom: 14px;
}

.hero__sub {
  font-size: clamp(16px, 2vw, 20px);
  color: var(--coral);
  letter-spacing: 0.22em;
  margin-bottom: 32px;
}

.hero__tagline {
  font-size: clamp(15px, 1.5vw, 17px);
  color: var(--text-soft);
  max-width: 480px;
  margin: 0 auto 52px;
  line-height: 2.1;
}

.hero__actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero__scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-xsoft);
  font-size: 11px;
  letter-spacing: 0.15em;
  animation: scrollHint 2.5s ease-in-out infinite;
}

@keyframes scrollHint {
  0%, 100% { opacity: 0.4; transform: translateX(-50%) translateY(0); }
  50% { opacity: 0.8; transform: translateX(-50%) translateY(6px); }
}
```

- [ ] **Step 2: Add hero HTML inside `index.html` (before `<script>`)**

```html
<!-- HERO -->
<section class="hero" id="home">
  <svg class="hero__deco hero__deco--tl" viewBox="0 0 200 200" fill="none" aria-hidden="true">
    <path d="M100 10 C120 40, 170 60, 160 100 C150 140, 110 155, 100 190 C90 155, 50 140, 40 100 C30 60, 80 40, 100 10Z" stroke="#7B5EA7" stroke-width="1.5" fill="none"/>
    <path d="M100 40 C115 60, 150 70, 145 100 C140 130, 115 140, 100 165 C85 140, 60 130, 55 100 C50 70, 85 60, 100 40Z" stroke="#E8836A" stroke-width="1" fill="none"/>
  </svg>
  <svg class="hero__deco hero__deco--br" viewBox="0 0 160 160" fill="none" aria-hidden="true">
    <circle cx="80" cy="80" r="60" stroke="#C4AEDE" stroke-width="1.5" stroke-dasharray="4 6"/>
    <circle cx="80" cy="80" r="40" stroke="#E8836A" stroke-width="1" stroke-dasharray="3 5"/>
    <circle cx="80" cy="80" r="8" fill="#C4AEDE" opacity="0.5"/>
  </svg>

  <div class="hero__content">
    <svg class="hero__logo" viewBox="0 0 320 200" fill="none" aria-label="לוגו שחרית">
      <path d="M16 180 Q55 55 95 78 Q122 92 148 20 Q174 92 210 78 Q245 65 300 180" stroke="#7B5EA7" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M0 180 Q34 100 62 114 Q82 123 100 72" stroke="#C4AEDE" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
      <path d="M190 100 Q220 72 250 86 Q270 94 300 180" stroke="#C4AEDE" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.4"/>
      <circle cx="148" cy="22" r="16" fill="none" stroke="#E8836A" stroke-width="2.5"/>
      <line x1="148" y1="2" x2="148" y2="-2" stroke="#E8836A" stroke-width="2" stroke-linecap="round"/>
      <line x1="162" y1="6" x2="165" y2="3" stroke="#E8836A" stroke-width="2" stroke-linecap="round"/>
      <line x1="168" y1="20" x2="172" y2="20" stroke="#E8836A" stroke-width="2" stroke-linecap="round"/>
      <line x1="162" y1="34" x2="165" y2="37" stroke="#E8836A" stroke-width="2" stroke-linecap="round"/>
      <line x1="134" y1="6" x2="131" y2="3" stroke="#E8836A" stroke-width="2" stroke-linecap="round"/>
      <line x1="128" y1="20" x2="124" y2="20" stroke="#E8836A" stroke-width="2" stroke-linecap="round"/>
      <line x1="134" y1="34" x2="131" y2="37" stroke="#E8836A" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <p class="hero__eyebrow">מרחב להתפתחות וריפוי</p>
    <h1 class="hero__title">שחרית</h1>
    <p class="hero__sub">אור השחר</p>
    <p class="hero__tagline">
      כאן מותר להרגיש, להקשיב לגוף,<br>
      ולגלות מה הלב שלך באמת מבקש.
    </p>
    <div class="hero__actions">
      <a href="#contact" class="btn btn--primary">לקביעת פגישה</a>
      <a href="https://wa.me/972500000000" class="btn btn--outline" target="_blank" rel="noopener">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp
      </a>
    </div>
  </div>

  <div class="hero__scroll" aria-hidden="true">
    <span>גללי למטה</span>
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4 7l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </div>
</section>
<div class="sep"></div>
```

- [ ] **Step 3: Verify in browser**

Open `index.html`. Check:
- Full-height hero visible with mountains SVG logo
- "שחרית" in large purple text, "אור השחר" in coral below
- Two buttons side by side (purple filled + outline)
- Floating botanical decorations animating gently
- Scroll-down indicator bouncing at bottom

- [ ] **Step 4: Commit**

```bash
git add css/style.css index.html
git commit -m "feat: add hero section"
```

---

## Task 5: About Section

**Files:**
- Modify: `css/style.css` — append about styles
- Modify: `index.html` — add about section

- [ ] **Step 1: Append about styles to `css/style.css`**

```css
/* ── ABOUT ── */
.about__grid {
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 96px;
  align-items: center;
}

.about__img-wrap { position: relative; }

.about__img-placeholder {
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 56% 44% 52% 48% / 52% 48% 56% 44%;
  background: linear-gradient(145deg, var(--purple-light) 0%, var(--cream3) 60%, var(--coral-light) 100%);
  opacity: 0.55;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-soft);
  font-size: 13px;
  letter-spacing: 0.1em;
}

/* When a real photo is used, replace placeholder with this class */
.about__img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 56% 44% 52% 48% / 52% 48% 56% 44%;
  display: block;
}

.about__badge {
  position: absolute;
  bottom: 32px;
  left: -24px;
  background: var(--white);
  border-radius: 20px;
  padding: 18px 24px;
  box-shadow: 0 16px 48px rgba(123,94,167,0.14);
  min-width: 190px;
}

.about__badge-label { font-size: 13px; color: var(--text-xsoft); letter-spacing: 0.05em; margin-bottom: 4px; }
.about__badge-name  { font-size: 18px; color: var(--purple); margin-bottom: 4px; }
.about__badge-role  { font-size: 12px; color: var(--coral); letter-spacing: 0.08em; }

.about__dots {
  position: absolute;
  top: 24px;
  right: -24px;
  opacity: 0.22;
}
```

- [ ] **Step 2: Add about HTML to `index.html` (after the sep div, before `<script>`)**

```html
<!-- ABOUT -->
<section class="sec" id="about">
  <div class="sec-inner">
    <div class="about__grid">

      <div class="about__img-wrap">
        <svg class="about__dots" width="80" height="80" viewBox="0 0 80 80" aria-hidden="true">
          <g fill="#7B5EA7">
            <circle cx="8"  cy="8"  r="2"/><circle cx="24" cy="8"  r="2"/><circle cx="40" cy="8"  r="2"/><circle cx="56" cy="8"  r="2"/><circle cx="72" cy="8"  r="2"/>
            <circle cx="8"  cy="24" r="2"/><circle cx="24" cy="24" r="2"/><circle cx="40" cy="24" r="2"/><circle cx="56" cy="24" r="2"/><circle cx="72" cy="24" r="2"/>
            <circle cx="8"  cy="40" r="2"/><circle cx="24" cy="40" r="2"/><circle cx="40" cy="40" r="2"/><circle cx="56" cy="40" r="2"/><circle cx="72" cy="40" r="2"/>
            <circle cx="8"  cy="56" r="2"/><circle cx="24" cy="56" r="2"/><circle cx="40" cy="56" r="2"/><circle cx="56" cy="56" r="2"/><circle cx="72" cy="56" r="2"/>
          </g>
        </svg>
        <!-- Replace div with <img class="about__img" src="assets/images/shahar.jpg" alt="שחר גוזלן"> when photo is ready -->
        <div class="about__img-placeholder">[ תמונה של שחר ]</div>
        <div class="about__badge">
          <div class="about__badge-label">מייסדת שחרית</div>
          <div class="about__badge-name">שחר גוזלן</div>
          <div class="about__badge-role">מאמנת · מנחה · מלווה</div>
        </div>
      </div>

      <div>
        <span class="sec-eyebrow">קצת עליי</span>
        <h2 class="sec-title">אני שחר,<br>ואני כאן לעורר את הלב</h2>
        <div class="bar"></div>
        <p class="sec-body">
          מאמנת קינסיולוגית ואלווה רגשית, מנחת קבוצות ויוצרת מרחבי השתנות וחיקור.
          שחרית נולדה מתוך מסע אישי עמוק — לפגוש את הרגע שבו הלב מתעורר.
          <br><br>
          בעלת תואר ראשון ושני בעולמות החינוך ואוכלוסיות מיוחדות, תעודת קואוצ׳ינג בהתמחויות ילדים, נוער ובוגרים.
          <br><br>
          אני מגיעה עם אהבה, הודיה, פשטות, ועין רגישה שרואה ולב שמקשיב גם למה שאינו נאמר במילים.
        </p>
        <br><br>
        <a href="#contact" class="btn btn--primary">בואי נדבר</a>
      </div>

    </div>
  </div>
</section>
<div class="sep"></div>
```

- [ ] **Step 3: Verify in browser**

Scroll to About. Check:
- Two-column layout: blob placeholder on right, text on left
- Floating badge card visible bottom-left of image
- Dot grid decoration top-right of image
- "בואי נדבר" purple button at bottom of text

- [ ] **Step 4: Commit**

```bash
git add css/style.css index.html
git commit -m "feat: add about section"
```

---

## Task 6: Philosophy Section

**Files:**
- Modify: `css/style.css` — append philosophy styles
- Modify: `index.html` — add philosophy section

- [ ] **Step 1: Append philosophy styles to `css/style.css`**

```css
/* ── PHILOSOPHY ── */
.philosophy {
  background: var(--purple);
  position: relative;
  overflow: hidden;
}

.philosophy::before {
  content: '';
  position: absolute;
  top: -200px; left: -200px;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 65%);
  pointer-events: none;
}

.philosophy__inner {
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}

.philosophy__eyebrow {
  display: block;
  font-size: 11px;
  letter-spacing: 0.24em;
  color: rgba(255,255,255,0.45);
  margin-bottom: 32px;
}

.philosophy__quote {
  font-size: clamp(20px, 2.8vw, 32px);
  color: var(--white);
  line-height: 1.8;
  margin-bottom: 32px;
  opacity: 0.93;
}

.philosophy__quote em {
  color: var(--coral-light);
  font-style: normal;
}

.philosophy__author {
  font-size: 14px;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.12em;
}
```

- [ ] **Step 2: Add philosophy HTML to `index.html`**

```html
<!-- PHILOSOPHY -->
<section class="sec philosophy" id="philosophy">
  <div class="philosophy__inner">
    <span class="philosophy__eyebrow">הייעוד שלי</span>
    <p class="philosophy__quote">
      להאיר ולהעיר את הלב, את הרגשות — <em>להקשיב להם</em>,
      לתת להם מקום לביטוי, מקום להיות.
      מקום שבו הרגש הוא הנכס הכי גדול,
      <em>הוא השביל לריפוי.</em>
    </p>
    <span class="philosophy__author">— שחר גוזלן, מייסדת שחרית</span>
  </div>
</section>
<div class="sep"></div>
```

- [ ] **Step 3: Verify in browser**

Scroll to philosophy. Check:
- Full-width deep purple background
- Large quote text in white
- Highlighted phrases in coral-light color
- Author attribution below in muted white

- [ ] **Step 4: Commit**

```bash
git add css/style.css index.html
git commit -m "feat: add philosophy section"
```

---

## Task 7: Services Section

**Files:**
- Modify: `css/style.css` — append services styles
- Modify: `index.html` — add services section

- [ ] **Step 1: Append services styles to `css/style.css`**

```css
/* ── SERVICES ── */
.services { background: var(--cream2); }

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 60px;
}

.service-card {
  background: var(--cream);
  border-radius: 28px;
  padding: 44px 36px;
  position: relative;
  overflow: hidden;
  transition: transform 0.25s, box-shadow 0.25s;
}

.service-card::after {
  content: '';
  position: absolute;
  top: 0; right: 0;
  width: 100px; height: 100px;
  border-radius: 0 28px 0 100%;
  background: linear-gradient(225deg, var(--purple-pale), transparent);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 60px rgba(123,94,167,0.13);
}

.service-card__num {
  font-size: 11px;
  letter-spacing: 0.2em;
  color: var(--coral);
  margin-bottom: 20px;
}

.service-card__icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: var(--purple-pale);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.service-card__icon svg { width: 26px; height: 26px; }

.service-card__title {
  font-size: 20px;
  color: var(--purple);
  margin-bottom: 12px;
}

.service-card__desc {
  font-size: 14px;
  line-height: 1.95;
  color: var(--text-soft);
}
```

- [ ] **Step 2: Add services HTML to `index.html`**

```html
<!-- SERVICES -->
<section class="sec services" id="services">
  <div class="sec-inner">
    <span class="sec-eyebrow">מה אני מציעה</span>
    <h2 class="sec-title">השירותים שלי</h2>
    <div class="bar"></div>
    <div class="services__grid">

      <article class="service-card">
        <div class="service-card__num">01</div>
        <div class="service-card__icon">
          <svg viewBox="0 0 26 26" fill="none" stroke="#7B5EA7" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
            <path d="M5 21V7a2 2 0 012-2h12a2 2 0 012 2v14"/><path d="M3 21h20"/><line x1="9" y1="11" x2="17" y2="11"/><line x1="9" y1="15" x2="14" y2="15"/>
          </svg>
        </div>
        <h3 class="service-card__title">ליווי הוליסטי</h3>
        <p class="service-card__desc">תהליך אישי המשלב גוף, נפש ורוח — עבודה עמוקה לקראת שינוי אמיתי ומשמעותי.</p>
      </article>

      <article class="service-card">
        <div class="service-card__num">02</div>
        <div class="service-card__icon">
          <svg viewBox="0 0 26 26" fill="none" stroke="#7B5EA7" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
            <rect x="3" y="4" width="20" height="16" rx="3"/>
            <line x1="3" y1="10" x2="23" y2="10"/>
            <line x1="9" y1="4" x2="9" y2="10"/>
            <line x1="17" y1="4" x2="17" y2="10"/>
          </svg>
        </div>
        <h3 class="service-card__title">הערכת קלפים</h3>
        <p class="service-card__desc">מפגש אישי דרך קלפי תובנה — כלי להתבוננות, לחיבור פנימי ופתיחת שאלות מהלב.</p>
      </article>

      <article class="service-card">
        <div class="service-card__num">03</div>
        <div class="service-card__icon">
          <svg viewBox="0 0 26 26" fill="none" stroke="#7B5EA7" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
          </svg>
        </div>
        <h3 class="service-card__title">המחברת</h3>
        <p class="service-card__desc">כלי לתהליך עצמאי של כתיבה, חקירה פנימית וצמיחה — להמשיך את המסע לבד.</p>
      </article>

      <article class="service-card">
        <div class="service-card__num">04</div>
        <div class="service-card__icon">
          <svg viewBox="0 0 26 26" fill="none" stroke="#7B5EA7" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
            <circle cx="13" cy="8" r="4"/><path d="M6 22c0-3.9 3.1-7 7-7s7 3.1 7 7"/>
          </svg>
        </div>
        <h3 class="service-card__title">עבודה עם נוער</h3>
        <p class="service-card__desc">ליווי מותאם לבני נוער — חיזוק הקול הפנימי, גבולות, ביטוי עצמי ועצמאות רגשית.</p>
      </article>

      <article class="service-card">
        <div class="service-card__num">05</div>
        <div class="service-card__icon">
          <svg viewBox="0 0 26 26" fill="none" stroke="#7B5EA7" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
            <circle cx="9" cy="9" r="3"/><circle cx="17" cy="9" r="3"/><circle cx="13" cy="18" r="3"/>
            <line x1="11.5" y1="11" x2="12.2" y2="15.2"/><line x1="14.5" y1="11" x2="13.8" y2="15.2"/>
          </svg>
        </div>
        <h3 class="service-card__title">הנחיית קבוצות</h3>
        <p class="service-card__desc">מרחבים קבוצתיים בטוחים ומשנים — לנשים, לאמהות ובנות, לקהילות.</p>
      </article>

      <article class="service-card">
        <div class="service-card__num">06</div>
        <div class="service-card__icon">
          <svg viewBox="0 0 26 26" fill="none" stroke="#7B5EA7" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
            <path d="M13 3C9 3 4 8 4 13c0 4 3 7 9 10 6-3 9-6 9-10 0-5-5-10-9-10z"/>
            <path d="M13 8v5l3 3"/>
          </svg>
        </div>
        <h3 class="service-card__title">טבע רוח תודעה</h3>
        <p class="service-card__desc">מסעות חוויתיים בטבע — מדיטציה, נוכחות ושתיקה כדרך לחיבור עמוק לעצמי.</p>
      </article>

    </div>
  </div>
</section>
<div class="sep"></div>
```

- [ ] **Step 3: Verify in browser**

Scroll to services. Check:
- 3×2 grid of cream cards on cream-2 background
- Each card: number in coral, icon in purple-pale square, title, description
- Hover on any card → lifts with shadow

- [ ] **Step 4: Commit**

```bash
git add css/style.css index.html
git commit -m "feat: add services section"
```

---

## Task 8: Values Section

**Files:**
- Modify: `css/style.css` — append values styles
- Modify: `index.html` — add values section

- [ ] **Step 1: Append values styles to `css/style.css`**

```css
/* ── VALUES ── */
.values__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 60px;
}

.value-card {
  background: var(--white);
  border-radius: 24px;
  padding: 40px 36px;
  display: flex;
  gap: 24px;
  align-items: flex-start;
  border: 1px solid rgba(123,94,167,0.08);
  transition: box-shadow 0.2s;
}

.value-card:hover { box-shadow: 0 12px 40px rgba(123,94,167,0.08); }

.value-card__icon {
  width: 52px;
  min-width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--purple-pale);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

.value-card__title {
  font-size: 18px;
  color: var(--purple);
  margin-bottom: 8px;
}

.value-card__desc {
  font-size: 14px;
  line-height: 1.9;
  color: var(--text-soft);
}
```

- [ ] **Step 2: Add values HTML to `index.html`**

```html
<!-- VALUES -->
<section class="sec" id="values">
  <div class="sec-inner">
    <span class="sec-eyebrow" style="text-align:center;display:block;">ערכי שחרית</span>
    <h2 class="sec-title sec-title--center">מה מנחה אותי</h2>
    <div class="bar bar--center"></div>
    <div class="values__grid">

      <div class="value-card">
        <div class="value-card__icon" aria-hidden="true">👁</div>
        <div>
          <div class="value-card__title">עין טובה</div>
          <p class="value-card__desc">מרחב שבו השיפוטיות נמצאת מחוצה לו. אני יכולה להביא את עצמי כמו שאני — חופשי, חשוף, פגיע, נקי מכסות-לב.</p>
        </div>
      </div>

      <div class="value-card">
        <div class="value-card__icon" aria-hidden="true">🌱</div>
        <div>
          <div class="value-card__title">מרחב בטוח ותומך</div>
          <p class="value-card__desc">מרחב המעודד צמיחה, ביטוי חופשי והתבוננות פנימה. מרחב התומך בתהליכים טרנספורמטיביים.</p>
        </div>
      </div>

      <div class="value-card">
        <div class="value-card__icon" aria-hidden="true">🌸</div>
        <div>
          <div class="value-card__title">אותנטיות והכרת הטוב</div>
          <p class="value-card__desc">הזמנה להניח בצד את התבניות, הסיפורים והתוויות — להשתחרר ולהגיע בלב סקרן אל עצמי ואל הקבוצה.</p>
        </div>
      </div>

      <div class="value-card">
        <div class="value-card__icon" aria-hidden="true">🫀</div>
        <div>
          <div class="value-card__title">הקשבה אוהבת</div>
          <p class="value-card__desc">לכל נשמה הקצב שלה. אנחנו מכבדים את הקצב הטבעי והאישי של כל אחד ואחת, ויחד יוצרים שייכות וביטחון.</p>
        </div>
      </div>

    </div>
  </div>
</section>
<div class="sep"></div>
```

- [ ] **Step 3: Verify in browser**

Scroll to values. Check:
- 2×2 grid of white cards
- Each card: colored emoji circle on the right, title + desc on left
- Centered heading + coral bar above grid

- [ ] **Step 4: Commit**

```bash
git add css/style.css index.html
git commit -m "feat: add values section"
```

---

## Task 9: Retreats Section

**Files:**
- Modify: `css/style.css` — append retreats styles
- Modify: `index.html` — add retreats section

- [ ] **Step 1: Append retreats styles to `css/style.css`**

```css
/* ── RETREATS ── */
.retreats { background: var(--cream2); }

.retreats__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  margin-top: 60px;
}

.retreat-card {
  border-radius: 36px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 9/11;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
}

.retreat-card:hover {
  transform: scale(1.025) translateY(-4px);
  box-shadow: 0 40px 80px rgba(0,0,0,0.18);
}

.retreat-card__bg {
  position: absolute;
  inset: 0;
}

.retreat-card__bg--purple {
  background: linear-gradient(165deg, #8B6CBF 0%, #4A2F7A 55%, #2E1A52 100%);
}

.retreat-card__bg--earth {
  background: linear-gradient(165deg, #C49268 0%, #8B5E38 55%, #4A2E18 100%);
}

.retreat-card__gradient {
  position: absolute;
  bottom: 0; right: 0; left: 0;
  height: 75%;
  background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%);
  z-index: 2;
}

.retreat-card__deco {
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 3;
  opacity: 0.3;
}

.retreat-card__content {
  position: relative;
  z-index: 4;
  padding: 48px 44px;
  color: var(--white);
  width: 100%;
}

.retreat-card__tag {
  display: inline-block;
  font-size: 10px;
  letter-spacing: 0.2em;
  border: 1px solid rgba(255,255,255,0.35);
  border-radius: 50px;
  padding: 5px 14px;
  margin-bottom: 16px;
  opacity: 0.85;
}

.retreat-card__title {
  font-size: 38px;
  line-height: 1.15;
  margin-bottom: 10px;
}

.retreat-card__date {
  font-size: 13px;
  opacity: 0.65;
  margin-bottom: 28px;
  letter-spacing: 0.06em;
}

.retreat-card__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--white);
  opacity: 0.8;
  letter-spacing: 0.08em;
  transition: opacity 0.2s, gap 0.2s;
}

.retreat-card:hover .retreat-card__link {
  opacity: 1;
  gap: 14px;
}
```

- [ ] **Step 2: Add retreats HTML to `index.html`**

```html
<!-- RETREATS -->
<section class="sec retreats" id="retreats">
  <div class="sec-inner">
    <span class="sec-eyebrow" style="text-align:center;display:block;">הריטריטים שלי</span>
    <h2 class="sec-title sec-title--center">מסעות ריפוי</h2>
    <div class="bar bar--center"></div>
    <div class="retreats__grid">

      <a class="retreat-card" href="retreat-shacharit.html">
        <div class="retreat-card__bg retreat-card__bg--purple"></div>
        <div class="retreat-card__gradient"></div>
        <svg class="retreat-card__deco" width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <path d="M10 85 Q30 30 50 42 Q65 52 78 12 Q90 52 95 85" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <circle cx="78" cy="14" r="9" fill="none" stroke="white" stroke-width="1.5"/>
        </svg>
        <div class="retreat-card__content">
          <div class="retreat-card__tag">ריטריט · 3 ימים · קיבוץ פרוד</div>
          <div class="retreat-card__title">ריטריט<br>שחרית</div>
          <div class="retreat-card__date">6 – 8.11.2025</div>
          <div class="retreat-card__link">
            לפרטים נוספים
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M15 10H5M10 5l-5 5 5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </a>

      <a class="retreat-card" href="retreat-ani-ve-at.html">
        <div class="retreat-card__bg retreat-card__bg--earth"></div>
        <div class="retreat-card__gradient"></div>
        <svg class="retreat-card__deco" width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="35" stroke="white" stroke-width="1" stroke-dasharray="4 5"/>
          <path d="M30 65 C30 45, 50 35, 50 20 C50 35, 70 45, 70 65" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        </svg>
        <div class="retreat-card__content">
          <div class="retreat-card__tag">מסע ריפוי · אמהות ובנות</div>
          <div class="retreat-card__title">אני ואת<br>אם ובת</div>
          <div class="retreat-card__date">20 – 23.1.2026</div>
          <div class="retreat-card__link">
            לפרטים נוספים
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M15 10H5M10 5l-5 5 5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </a>

    </div>
  </div>
</section>
<div class="sep"></div>
```

- [ ] **Step 3: Verify in browser**

Scroll to retreats. Check:
- Two tall cards side by side — purple + earth tones
- SVG decorations visible top-left of each card
- Gradient overlay making text readable
- Hover → scale up with shadow
- Arrow-link animates gap on hover

- [ ] **Step 4: Commit**

```bash
git add css/style.css index.html
git commit -m "feat: add retreats section"
```

---

## Task 10: Contact Section + Footer

**Files:**
- Modify: `css/style.css` — append contact + footer styles
- Modify: `index.html` — add contact section and footer
- Modify: `js/main.js` — add form handler

- [ ] **Step 1: Append contact + footer styles to `css/style.css`**

```css
/* ── CONTACT ── */
.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 96px;
  align-items: start;
}

.contact__title {
  font-size: clamp(28px, 3.5vw, 40px);
  color: var(--purple);
  line-height: 1.25;
  margin-bottom: 24px;
}

.contact__body {
  font-size: 15px;
  line-height: 2.1;
  color: var(--text-soft);
  margin-bottom: 40px;
  max-width: 400px;
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.contact__form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.input {
  width: 100%;
  background: var(--white);
  border: 1.5px solid rgba(123,94,167,0.15);
  border-radius: 16px;
  padding: 16px 20px;
  font-family: 'Varela Round', sans-serif;
  font-size: 14px;
  color: var(--text);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  text-align: right;
  direction: rtl;
}

.input:focus {
  border-color: var(--purple-mid);
  box-shadow: 0 0 0 4px rgba(123,94,167,0.08);
}

.input::placeholder { color: var(--text-xsoft); }

textarea.input {
  height: 150px;
  resize: vertical;
}

.form-success {
  display: none;
  padding: 20px 28px;
  background: var(--purple-pale);
  border-radius: 16px;
  color: var(--purple);
  font-size: 15px;
  text-align: center;
}

/* ── FOOTER ── */
.footer {
  background: var(--text);
  color: rgba(255,255,255,0.45);
  text-align: center;
  padding: 64px 32px;
}

.footer__logo {
  display: block;
  font-size: 28px;
  color: var(--purple-light);
  letter-spacing: 0.04em;
  margin-bottom: 20px;
}

.footer__links {
  display: flex;
  gap: 32px;
  justify-content: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  list-style: none;
}

.footer__links a {
  color: rgba(255,255,255,0.4);
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s;
}

.footer__links a:hover { color: var(--purple-light); }

.footer__email {
  font-size: 13px;
  color: rgba(255,255,255,0.35);
  text-decoration: none;
  transition: color 0.2s;
}

.footer__email:hover { color: var(--purple-light); }

.footer__copy {
  font-size: 12px;
  opacity: 0.28;
  margin-top: 24px;
}
```

- [ ] **Step 2: Add contact + footer HTML to `index.html` (before `<script>`)**

```html
<!-- CONTACT -->
<section class="sec" id="contact">
  <div class="sec-inner">
    <div class="contact__grid">
      <div>
        <span class="sec-eyebrow">בואי נדבר</span>
        <h2 class="contact__title">משהו מהדהד?<br>מוזמנת לכתוב.</h2>
        <div class="bar"></div>
        <p class="contact__body">
          שמחה לשמוע ממך — בין אם יש שאלה, בין אם משהו מגע בלב,
          ובין אם פשוט תרצי להגיד שלום. אחזור אלייך בהקדם.
        </p>
        <a href="https://wa.me/972500000000" class="btn btn--whatsapp" target="_blank" rel="noopener">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          שלחי הודעה ב-WhatsApp
        </a>
      </div>

      <form class="contact__form" id="contactForm" novalidate>
        <div class="contact__form-row">
          <input class="input" type="text" name="firstName" placeholder="שם פרטי" required>
          <input class="input" type="text" name="lastName" placeholder="שם משפחה" required>
        </div>
        <input class="input" type="email" name="email" placeholder="אימייל" dir="ltr" style="text-align:left;" required>
        <input class="input" type="tel" name="phone" placeholder="טלפון" dir="ltr" style="text-align:left;">
        <textarea class="input" name="message" placeholder="מה בלבך?" required></textarea>
        <button type="submit" class="btn btn--primary" style="justify-content:center;">שליחה</button>
        <div class="form-success" id="formSuccess">תודה! קיבלתי את הפנייה שלך ואחזור אלייך בהקדם 🌸</div>
      </form>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <span class="footer__logo">שחרית</span>
  <ul class="footer__links">
    <li><a href="#about">עליי</a></li>
    <li><a href="#services">שירותים</a></li>
    <li><a href="#retreats">ריטריטים</a></li>
    <li><a href="#contact">צרי קשר</a></li>
  </ul>
  <a href="mailto:shahar@shacharit.co.il" class="footer__email">shahar@shacharit.co.il</a>
  <p class="footer__copy">© 2025 שחרית — שחר גוזלן. כל הזכויות שמורות.</p>
</footer>
```

- [ ] **Step 3: Add form handler to `js/main.js`**

```js
// ── Contact form: show success message ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = contactForm.firstName.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!firstName || !email || !message) {
      // Highlight empty required fields
      [contactForm.firstName, contactForm.email, contactForm.message].forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = 'var(--coral)';
          field.addEventListener('input', () => { field.style.borderColor = ''; }, { once: true });
        }
      });
      return;
    }

    contactForm.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  });
}
```

- [ ] **Step 4: Verify in browser**

Scroll to contact. Check:
- Two-column layout: info + WhatsApp on right, form on left
- Green WhatsApp button visible
- Submit with empty fields → coral border on empty fields
- Fill all required fields and submit → form hides, success message appears
- Footer: dark background, "שחרית" in purple-light, nav links, email

- [ ] **Step 5: Commit**

```bash
git add css/style.css index.html js/main.js
git commit -m "feat: add contact section, footer and form handler"
```

---

## Task 11: Mobile Responsive Styles

**Files:**
- Modify: `css/style.css` — append responsive styles

- [ ] **Step 1: Append responsive styles to `css/style.css`**

```css
/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .about__grid { grid-template-columns: 1fr; gap: 56px; }
  .about__img-wrap { max-width: 400px; margin: 0 auto; }
  .about__badge { left: 0; }
  .services__grid { grid-template-columns: repeat(2, 1fr); }
  .contact__grid { grid-template-columns: 1fr; gap: 56px; }
}

@media (max-width: 768px) {
  .nav { padding: 0 24px; }
  .nav__links { display: none; }
  .nav__hamburger { display: flex; }

  .sec { padding: 80px 20px; }

  .hero__deco--tl { display: none; }
  .hero__deco--br { display: none; }

  .services__grid { grid-template-columns: 1fr; }
  .values__grid { grid-template-columns: 1fr; }
  .retreats__grid { grid-template-columns: 1fr; }
  .retreat-card { aspect-ratio: 4/3; }

  .contact__form-row { grid-template-columns: 1fr; }

  .footer__links { gap: 20px; }
}

@media (max-width: 480px) {
  .hero__title { font-size: 52px; }
  .hero__actions { flex-direction: column; align-items: center; }
  .btn { width: 100%; justify-content: center; }
  .about__badge { position: static; margin-top: 20px; box-shadow: none; border: 1px solid var(--cream3); }
}
```

- [ ] **Step 2: Verify responsiveness**

Resize browser to 375px wide. Check:
- Hamburger icon visible, nav links hidden
- Hero text fits without overflow
- Services show 1 column
- Retreat cards stack vertically
- Contact form stacks (info above form)
- No horizontal scroll at any breakpoint

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add mobile responsive styles"
```

---

## Task 12: Retreat Landing Page — ריטריט שחרית

**Files:**
- Create: `retreat-shacharit.html`

- [ ] **Step 1: Create `retreat-shacharit.html`**

```html
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ריטריט שחרית — הרגע בו הלב מתעורר</title>
  <meta name="description" content="ריטריט שחרית — מסע בן 3 ימים בו מותר להרגיש, להקשיב לגוף ולגלות מה הלב שלך באמת מבקש. 6–8.11.2025 קיבוץ פרוד.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <style>
    .retreat-hero {
      min-height: 100vh;
      background: linear-gradient(165deg, #8B6CBF 0%, #4A2F7A 55%, #2E1A52 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 120px 32px 80px;
      position: relative;
      overflow: hidden;
    }
    .retreat-hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 60% 50% at 50% 100%, rgba(232,131,106,0.12) 0%, transparent 65%);
      pointer-events: none;
    }
    .retreat-hero__content { position: relative; z-index: 2; color: white; }
    .retreat-hero__back { position: absolute; top: 90px; right: 56px; color: rgba(255,255,255,0.6); text-decoration: none; font-size: 14px; display: flex; align-items: center; gap: 8px; transition: color 0.2s; z-index: 3; }
    .retreat-hero__back:hover { color: white; }
    .retreat-hero__tag { display: inline-block; font-size: 11px; letter-spacing: 0.2em; border: 1px solid rgba(255,255,255,0.35); border-radius: 50px; padding: 6px 18px; margin-bottom: 24px; opacity: 0.8; }
    .retreat-hero__title { font-size: clamp(48px, 8vw, 88px); line-height: 1; margin-bottom: 16px; }
    .retreat-hero__sub { font-size: clamp(16px, 2vw, 20px); opacity: 0.75; margin-bottom: 12px; letter-spacing: 0.1em; }
    .retreat-hero__date { font-size: 18px; color: var(--coral-light); margin-bottom: 40px; letter-spacing: 0.06em; }
    .retreat-section { padding: 96px 32px; }
    .retreat-section--alt { background: var(--cream2); }
    .retreat-section--purple { background: var(--purple); color: white; }
    .retreat-section--purple .sec-title { color: white; }
    .retreat-section--purple .sec-eyebrow { color: var(--coral-light); }
    .retreat-section--purple .sec-body { color: rgba(255,255,255,0.8); max-width: 700px; margin: 0 auto; text-align: center; }
    .retreat-inner { max-width: 800px; margin: 0 auto; }
    .for-who__list { margin-top: 32px; display: flex; flex-direction: column; gap: 16px; }
    .for-who__item { display: flex; gap: 16px; align-items: flex-start; background: var(--white); border-radius: 16px; padding: 24px 28px; border: 1px solid rgba(123,94,167,0.08); }
    .for-who__dot { width: 10px; min-width: 10px; height: 10px; border-radius: 50%; background: var(--coral); margin-top: 7px; }
    .for-who__text { font-size: 15px; line-height: 1.9; color: var(--text-soft); }
    .program__grid { display: grid; gap: 20px; margin-top: 40px; }
    .program__item { display: flex; gap: 24px; align-items: flex-start; }
    .program__num { font-size: 32px; color: var(--purple-light); opacity: 0.6; min-width: 48px; line-height: 1; }
    .program__title { font-size: 17px; color: var(--purple); margin-bottom: 4px; }
    .program__desc { font-size: 14px; color: var(--text-soft); line-height: 1.85; }
    .retreat-cta-section { background: var(--cream2); padding: 96px 32px; text-align: center; }
    .retreat-cta-section .retreat-inner { display: flex; flex-direction: column; align-items: center; gap: 24px; }
    .retreat-cta-section .sec-title { margin-bottom: 8px; }
    @media (max-width: 768px) {
      .retreat-hero__back { right: 24px; top: 80px; }
      .retreat-section { padding: 72px 20px; }
    }
  </style>
</head>
<body>

<nav class="nav" id="nav">
  <a class="nav__brand" href="index.html">
    <svg width="38" height="30" viewBox="0 0 130 85" fill="none" aria-hidden="true">
      <path d="M8 75 Q35 18 58 32 Q72 40 88 6 Q104 40 122 75" stroke="#7B5EA7" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M0 75 Q22 42 44 54 Q58 61 72 32" stroke="#C4AEDE" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.55"/>
      <circle cx="88" cy="8" r="10" fill="none" stroke="#E8836A" stroke-width="2.2"/>
    </svg>
    <span class="nav__brand-name">שחרית</span>
  </a>
  <ul class="nav__links" id="navLinks">
    <li><a href="index.html#about">עליי</a></li>
    <li><a href="index.html#services">שירותים</a></li>
    <li><a href="index.html#retreats">ריטריטים</a></li>
    <li><a href="#retreat-contact" class="nav__cta">הרשמה</a></li>
  </ul>
  <button class="nav__hamburger" id="navHamburger" aria-label="תפריט" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- HERO -->
<section class="retreat-hero">
  <a class="retreat-hero__back" href="index.html">
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M5 10h10M10 15l5-5-5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    חזרה לאתר
  </a>
  <div class="retreat-hero__content">
    <div class="retreat-hero__tag">ריטריט · 3 ימים · קיבוץ פרוד</div>
    <h1 class="retreat-hero__title">ריטריט שחרית</h1>
    <p class="retreat-hero__sub">הרגע בו הלב מתעורר</p>
    <p class="retreat-hero__date">6 – 8.11.2025</p>
    <a href="#retreat-contact" class="btn btn--primary">אני רוצה להצטרף</a>
  </div>
</section>

<!-- ABOUT RETREAT -->
<section class="retreat-section">
  <div class="retreat-inner">
    <span class="sec-eyebrow">מה זה שחרית?</span>
    <h2 class="sec-title">מוזמנים אל מסע בן 3 ימים</h2>
    <div class="bar"></div>
    <p class="sec-body">
      מסע בו מותר להרגיש, להקשיב לגוף ולגלות מה הלב שלך באמת מבקש.
      <br><br>
      המרחבים שלי נוצרים בתשוקה רבה ובכך מאפשרים לקסם לקרות. אותם מרחבים מאפשרים למשתתפים לפגוש את עצמם מחדש, להתבונן במורכבויות הלב ולעבור תהליכי הישתנות והעמקה.
      <br><br>
      אני מגיעה עם אהבה, הודיה, פשטות, עין רגישה שרואה ולב שמקשיב גם למה שאינו נאמר במילים.
    </p>
  </div>
</section>
<div class="sep"></div>

<!-- FOR WHO -->
<section class="retreat-section retreat-section--alt">
  <div class="retreat-inner">
    <span class="sec-eyebrow">למי זה מתאים?</span>
    <h2 class="sec-title">הריטריט הזה בשבילך אם…</h2>
    <div class="bar"></div>
    <div class="for-who__list">
      <div class="for-who__item"><div class="for-who__dot"></div><p class="for-who__text">את מרגישה שהזמן עובר והאת אינך נוכחת במלואך בחיים.</p></div>
      <div class="for-who__item"><div class="for-who__dot"></div><p class="for-who__text">את חווה תקיעות, ריחוק מהלב או קושי להתחבר לרגשות.</p></div>
      <div class="for-who__item"><div class="for-who__dot"></div><p class="for-who__text">את מצאת את עצמך פועלת מרבית הזמן מהראש ושכחת את הקול הפנימי.</p></div>
      <div class="for-who__item"><div class="for-who__dot"></div><p class="for-who__text">את רוצה מקום להיפתח מחדש, להרחיב את תודעת הלב ולחוות חיים מלאים ומשמעותיים.</p></div>
    </div>
  </div>
</section>
<div class="sep"></div>

<!-- VALUES -->
<section class="retreat-section retreat-section--purple">
  <div class="retreat-inner" style="text-align:center;">
    <span class="sec-eyebrow">ערכי המרחב</span>
    <h2 class="sec-title">מה מחכה לך</h2>
    <div class="bar bar--center" style="background:var(--coral-light);"></div>
    <p class="sec-body">
      עין טובה · מרחב בטוח ותומך · אותנטיות · הקשבה אוהבת · לכל נשמה הקצב שלה.
      <br><br>
      שלושה ימים של נוכחות מלאה — בטבע, בגוף, בלב.
      מדיטציה, תנועה, סאונד הילינג, רוקחות טבעית ומפגש קבוצתי עמוק.
    </p>
  </div>
</section>
<div class="sep"></div>

<!-- ABOUT SHAHAR -->
<section class="retreat-section">
  <div class="retreat-inner">
    <span class="sec-eyebrow">קצת עליי</span>
    <h2 class="sec-title">שחר גוזלן</h2>
    <div class="bar"></div>
    <p class="sec-body">
      שמי שחר, מייסדת שחרית. מאמנת קינסיולוגית ואלווה רגשית, מנחת קבוצות ויוצרת מרחבי השתנות וחיקור.
      <br><br>
      שחרית נולדה מתוך מסע אישי עמוק — לפגוש את רגע השחר, רגע שבו הלב שלי פוצח, חי. כל חיי שאפתי את המסע "את הרגישה אידי", שניא שהוא (לתפיסתי) היה כמכוכבי — עד ש שהכנתי שזה כח המתנה שלי, שמו הרגישות היתר שלי.
    </p>
    <br>
    <a href="#retreat-contact" class="btn btn--primary">לקביעת מקום</a>
  </div>
</section>
<div class="sep"></div>

<!-- REGISTRATION -->
<section class="retreat-cta-section" id="retreat-contact">
  <div class="retreat-inner">
    <span class="sec-eyebrow" style="display:block;text-align:center;">הרשמה</span>
    <h2 class="sec-title">שמרי לך מקום</h2>
    <div class="bar bar--center"></div>
    <p class="sec-body" style="text-align:center;max-width:500px;">
      המקומות מוגבלים. לפרטים נוספים ולהרשמה — כתבי לי ואשמח לענות על כל שאלה.
    </p>
    <a href="https://wa.me/972500000000" class="btn btn--whatsapp" target="_blank" rel="noopener">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      שלחי הודעה ב-WhatsApp
    </a>
    <a href="index.html#contact" class="btn btn--outline">שלחי טופס פנייה</a>
  </div>
</section>

<footer class="footer">
  <span class="footer__logo">שחרית</span>
  <ul class="footer__links">
    <li><a href="index.html">ראשי</a></li>
    <li><a href="index.html#about">עליי</a></li>
    <li><a href="index.html#retreats">ריטריטים</a></li>
  </ul>
  <p class="footer__copy">© 2025 שחרית — שחר גוזלן. כל הזכויות שמורות.</p>
</footer>

<script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify in browser**

Open `retreat-shacharit.html`. Check:
- Full-height purple hero with "ריטריט שחרית" title
- "חזרה לאתר" back link top-right
- 5 sections scroll smoothly
- "אני רוצה להצטרף" CTA scrolls to registration section
- WhatsApp button green at bottom

- [ ] **Step 3: Commit**

```bash
git add retreat-shacharit.html
git commit -m "feat: add ריטריט שחרית landing page"
```

---

## Task 13: Retreat Landing Page — אני ואת אם ובת

**Files:**
- Create: `retreat-ani-ve-at.html`

- [ ] **Step 1: Create `retreat-ani-ve-at.html`**

Same structure as `retreat-shacharit.html` with earth-tone theme and אני ואת content:

```html
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>אני ואת — מסע ריפוי לאמהות ובנות</title>
  <meta name="description" content="ריטריט אני ואת — מסע ריפוי אמיץ לאמהות ובנות. 20–23.1.2026. מרחב לריפוי מערכת יחסים בין אם לבת.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <style>
    .retreat-hero {
      min-height: 100vh;
      background: linear-gradient(165deg, #C49268 0%, #8B5E38 55%, #4A2E18 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 120px 32px 80px;
      position: relative;
      overflow: hidden;
    }
    .retreat-hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 60% 50% at 50% 100%, rgba(232,131,106,0.15) 0%, transparent 65%);
      pointer-events: none;
    }
    .retreat-hero__content { position: relative; z-index: 2; color: white; }
    .retreat-hero__back { position: absolute; top: 90px; right: 56px; color: rgba(255,255,255,0.6); text-decoration: none; font-size: 14px; display: flex; align-items: center; gap: 8px; transition: color 0.2s; z-index: 3; }
    .retreat-hero__back:hover { color: white; }
    .retreat-hero__tag { display: inline-block; font-size: 11px; letter-spacing: 0.2em; border: 1px solid rgba(255,255,255,0.35); border-radius: 50px; padding: 6px 18px; margin-bottom: 24px; opacity: 0.8; }
    .retreat-hero__title { font-size: clamp(48px, 8vw, 88px); line-height: 1; margin-bottom: 16px; }
    .retreat-hero__sub { font-size: clamp(16px, 2vw, 20px); opacity: 0.75; margin-bottom: 12px; letter-spacing: 0.1em; }
    .retreat-hero__date { font-size: 18px; color: #F2B5A3; margin-bottom: 40px; letter-spacing: 0.06em; }
    .btn--earth { background: #8B5E38; color: white; box-shadow: 0 8px 28px rgba(139,94,56,0.35); }
    .btn--earth:hover { background: #7A5030; }
    .retreat-section { padding: 96px 32px; }
    .retreat-section--alt { background: var(--cream2); }
    .retreat-section--warm { background: #4A2E18; color: white; }
    .retreat-section--warm .sec-title { color: #F2B5A3; }
    .retreat-section--warm .sec-eyebrow { color: rgba(255,255,255,0.5); }
    .retreat-section--warm .sec-body { color: rgba(255,255,255,0.8); max-width: 700px; margin: 0 auto; text-align: center; }
    .retreat-inner { max-width: 800px; margin: 0 auto; }
    .for-who__list { margin-top: 32px; display: flex; flex-direction: column; gap: 16px; }
    .for-who__item { display: flex; gap: 16px; align-items: flex-start; background: var(--white); border-radius: 16px; padding: 24px 28px; border: 1px solid rgba(123,94,167,0.08); }
    .for-who__dot { width: 10px; min-width: 10px; height: 10px; border-radius: 50%; background: #C89A3A; margin-top: 7px; }
    .for-who__text { font-size: 15px; line-height: 1.9; color: var(--text-soft); }
    .retreat-cta-section { background: var(--cream2); padding: 96px 32px; text-align: center; }
    .retreat-cta-section .retreat-inner { display: flex; flex-direction: column; align-items: center; gap: 24px; }
    @media (max-width: 768px) {
      .retreat-hero__back { right: 24px; top: 80px; }
      .retreat-section { padding: 72px 20px; }
    }
  </style>
</head>
<body>

<nav class="nav" id="nav">
  <a class="nav__brand" href="index.html">
    <svg width="38" height="30" viewBox="0 0 130 85" fill="none" aria-hidden="true">
      <path d="M8 75 Q35 18 58 32 Q72 40 88 6 Q104 40 122 75" stroke="#7B5EA7" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M0 75 Q22 42 44 54 Q58 61 72 32" stroke="#C4AEDE" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.55"/>
      <circle cx="88" cy="8" r="10" fill="none" stroke="#E8836A" stroke-width="2.2"/>
    </svg>
    <span class="nav__brand-name">שחרית</span>
  </a>
  <ul class="nav__links" id="navLinks">
    <li><a href="index.html#about">עליי</a></li>
    <li><a href="index.html#services">שירותים</a></li>
    <li><a href="index.html#retreats">ריטריטים</a></li>
    <li><a href="#retreat-contact" class="nav__cta">הרשמה</a></li>
  </ul>
  <button class="nav__hamburger" id="navHamburger" aria-label="תפריט" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- HERO -->
<section class="retreat-hero">
  <a class="retreat-hero__back" href="index.html">
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M5 10h10M10 15l5-5-5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    חזרה לאתר
  </a>
  <div class="retreat-hero__content">
    <div class="retreat-hero__tag">מסע ריפוי · אמהות ובנות</div>
    <h1 class="retreat-hero__title">אני ואת<br>אם ובת</h1>
    <p class="retreat-hero__sub">ריטריט התחברות מחדש</p>
    <p class="retreat-hero__date">20 – 23.1.2026</p>
    <a href="#retreat-contact" class="btn btn--earth">אני רוצה להצטרף</a>
  </div>
</section>

<!-- ABOUT RETREAT -->
<section class="retreat-section">
  <div class="retreat-inner">
    <span class="sec-eyebrow">מה זה אני ואת?</span>
    <h2 class="sec-title">מסע ריפוי אמיץ לאמהות ובנות</h2>
    <div class="bar"></div>
    <p class="sec-body">
      הבנה והכרה כי מערכות יחסים ככלל טומנות בחובן מורכבויות ואתגרים ובפרט מערכת יחסים של אם ובת, לאורך הדורות.
      <br><br>
      "אני ואת — אם ובת" הוא מסע ריפוי אמיץ לאמהות ובנות, מסע שיש בו מקום להרפות ולפגוש את הכאב, להסכים לראות האחת את השנייה, לבקש שחרור וריפוי במערכת היחסים ולהתחבר מחדש.
      <br><br>
      זהו מסע ריפוי רב-דורי, הפוגש את מה שעובר מדור לדור — פחדים, ציפיות, כאב, ואהבה גדולה.
    </p>
  </div>
</section>
<div class="sep"></div>

<!-- FOR WHO -->
<section class="retreat-section retreat-section--alt">
  <div class="retreat-inner">
    <span class="sec-eyebrow">למי זה מתאים?</span>
    <h2 class="sec-title">הריטריט הזה בשבילכן אם…</h2>
    <div class="bar"></div>
    <div class="for-who__list">
      <div class="for-who__item"><div class="for-who__dot"></div><p class="for-who__text">אתן שרוצות להתבונן, להרגיש, ולהטיב את הקשר שבין אם לבת ובין בת לאם.</p></div>
      <div class="for-who__item"><div class="for-who__dot"></div><p class="for-who__text">אל מי שליבה מבקש שינוי במערכת היחסים המיוחדת הזו.</p></div>
      <div class="for-who__item"><div class="for-who__dot"></div><p class="for-who__text">מי שחשות פערים, שתיקות וכמיהה להבנה עמוקה יותר.</p></div>
      <div class="for-who__item"><div class="for-who__dot"></div><p class="for-who__text">אמהות ובנות שרוצות לשחרר את מה שכבר אינו משרת ולהשיב ריפוי שלם לשושלת כולה.</p></div>
    </div>
  </div>
</section>
<div class="sep"></div>

<!-- WHAT AWAITS -->
<section class="retreat-section retreat-section--warm">
  <div class="retreat-inner" style="text-align:center;">
    <span class="sec-eyebrow">מה מחכה לנו?</span>
    <h2 class="sec-title">בתוך מרחב בטוח, אמיץ ורך</h2>
    <div class="bar bar--center" style="background:#C89A3A;"></div>
    <p class="sec-body">
      נפגוש כאב ואהבה, נבקש להבין, לשחרר, ולהתחבר מחדש.
      <br><br>
      מרחב נשי, אמיץ ואנושי — שבו אפשר פשוט לעצור, להקשיב, ולפגוש אחת את השנייה בלי שיפוט ובלי תפקידים.
    </p>
  </div>
</section>
<div class="sep"></div>

<!-- ABOUT SHAHAR + ZVIA -->
<section class="retreat-section">
  <div class="retreat-inner">
    <span class="sec-eyebrow">קצת עלינו</span>
    <h2 class="sec-title">שחר גוזלן · צביה ברון</h2>
    <div class="bar"></div>
    <p class="sec-body">
      <strong>שחר גוזלן</strong> — מייסדת שחרית, מאמנת קינסיולוגית ואלווה רגשית, מנחת קבוצות ויוצרת מרחבי השתנות וחיקור. בעלת תואר ראשון ושני בעולמות החינוך ואוכלוסיות מיוחדות.
      <br><br>
      <strong>צביה ברון</strong> — בת, אמא, ואישה שמאמינה בקשרים אמיתיים בין אנשים. את רוב חייה המקצועיים הקדישה לעולמות של חדשנות, אנרגיה וחוסן, ובתוך כל זה גילתה שהחיבור הכי עדין הוא זה שבין אם ובת.
    </p>
    <br>
    <a href="#retreat-contact" class="btn btn--primary">לשמירת מקום</a>
  </div>
</section>
<div class="sep"></div>

<!-- REGISTRATION -->
<section class="retreat-cta-section" id="retreat-contact">
  <div class="retreat-inner">
    <span class="sec-eyebrow" style="display:block;text-align:center;">הרשמה</span>
    <h2 class="sec-title">שמרי לכן מקום</h2>
    <div class="bar bar--center"></div>
    <p class="sec-body" style="text-align:center;max-width:500px;">
      המקומות מוגבלים. לפרטים נוספים ולהרשמה — כתבי לי ואשמח לענות על כל שאלה.
    </p>
    <a href="https://wa.me/972500000000" class="btn btn--whatsapp" target="_blank" rel="noopener">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      שלחי הודעה ב-WhatsApp
    </a>
    <a href="index.html#contact" class="btn btn--outline">שלחי טופס פנייה</a>
  </div>
</section>

<footer class="footer">
  <span class="footer__logo">שחרית</span>
  <ul class="footer__links">
    <li><a href="index.html">ראשי</a></li>
    <li><a href="index.html#about">עליי</a></li>
    <li><a href="index.html#retreats">ריטריטים</a></li>
  </ul>
  <p class="footer__copy">© 2025 שחרית — שחר גוזלן. כל הזכויות שמורות.</p>
</footer>

<script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify in browser**

Open `retreat-ani-ve-at.html`. Check:
- Full-height earth-tone hero (warm browns/golds)
- "אני ואת / אם ובת" title with subtitle
- Back-link to main site works
- All 5 sections render correctly
- CTA scrolls to registration section

- [ ] **Step 3: Commit**

```bash
git add retreat-ani-ve-at.html
git commit -m "feat: add אני ואת landing page"
```

---

## Task 14: WhatsApp Number + Final Polish

**Files:**
- Modify: `index.html` — replace placeholder WhatsApp number
- Modify: `retreat-shacharit.html` — replace placeholder WhatsApp number
- Modify: `retreat-ani-ve-at.html` — replace placeholder WhatsApp number

> **Note:** Replace `972500000000` with Shahar's actual WhatsApp number (format: `972XXXXXXXXX` — country code 972, no leading zero, no spaces or dashes).

- [ ] **Step 1: Get Shahar's WhatsApp number from user and replace in all 3 files**

In all three files, find and replace:
```
https://wa.me/972500000000
```
With:
```
https://wa.me/972XXXXXXXXX
```

- [ ] **Step 2: Replace Shahar's email in footer of `index.html`**

Replace:
```
shahar@shacharit.co.il
```
With her actual email address.

- [ ] **Step 3: Final browser check across all 3 pages**

Check each page:
- `index.html` — scroll through all sections, verify all links work, test contact form, test WhatsApp button
- `retreat-shacharit.html` — hero to footer, back-link works, CTA scrolls to registration
- `retreat-ani-ve-at.html` — same checks

- [ ] **Step 4: Commit**

```bash
git add index.html retreat-shacharit.html retreat-ani-ve-at.html
git commit -m "feat: update contact details and final polish"
```

---

## Task 15: Deployment Prep

**Files:**
- Create: `netlify.toml` (optional but recommended)

- [ ] **Step 1: Create `netlify.toml` for clean URL routing**

```toml
[[redirects]]
  from = "/retreat-shacharit"
  to = "/retreat-shacharit.html"
  status = 200

[[redirects]]
  from = "/retreat-ani-ve-at"
  to = "/retreat-ani-ve-at.html"
  status = 200

[build]
  publish = "."
```

- [ ] **Step 2: Verify final file structure**

Run:
```bash
ls -la
```
Expected output includes:
```
index.html
retreat-shacharit.html
retreat-ani-ve-at.html
css/style.css
js/main.js
netlify.toml
docs/
preview.html
fonts.html
```

- [ ] **Step 3: Commit**

```bash
git add netlify.toml
git commit -m "feat: add Netlify deployment config"
```

- [ ] **Step 4: Instructions for going live**

To deploy to Netlify (free):
1. Go to netlify.com → "Add new site" → "Deploy manually"
2. Drag the entire project folder onto the Netlify deploy area
3. Site goes live instantly with a `*.netlify.app` URL
4. When Shahar buys a domain: Netlify dashboard → Domain settings → Add custom domain → follow DNS instructions

---

*End of plan. 15 tasks, ~50 steps, all content complete.*
