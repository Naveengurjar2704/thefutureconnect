# thefutureconnect — Website

A premium, Apple-inspired marketing website for a fintech & AI automation company.
Built with **React + Vite + pure CSS** (no Tailwind, no animation libraries — all
animations are hand-tuned CSS + IntersectionObserver, so there are zero extra
dependencies to break).

## Run it

```bash
npm install
npm run dev      # local dev server → http://localhost:5173
npm run build    # production build → /dist
npm run preview  # preview the production build
```

## Project structure

```
thefutureconnect/
├── index.html                  # SEO meta, fonts, favicon
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                # entry point
    ├── App.jsx                 # page composition
    ├── styles.css              # full design system (tokens, sections, responsive)
    ├── hooks.js                # Reveal, useCountUp, useInView, formatINR
    └── components/
        ├── Navbar.jsx          # glass nav + mobile menu
        ├── Hero.jsx            # rotating AI text loop + live dashboard
        ├── TrustBar.jsx        # marquee of client types
        ├── PainSection.jsx     # Traditional vs AI comparison
        ├── Products.jsx        # LOS · LMS · AI Calling · Automation Suite
        ├── Calculator.jsx      # interactive savings calculator
        ├── HowItWorks.jsx      # 10-step animated flow
        ├── Impact.jsx          # big animated stats (dark section)
        ├── Industries.jsx
        ├── WhyUs.jsx
        ├── Testimonials.jsx    # auto-playing carousel
        ├── DemoForm.jsx        # validated lead form + success animation
        ├── FAQ.jsx             # accordion
        ├── FinalCTA.jsx        # dark conversion section
        └── Footer.jsx
```

## Wiring the demo form to a real backend

`DemoForm.jsx` currently saves leads to sessionStorage. Replace the marked
block inside `submit()` with a `fetch()` to your API or an email service
(e.g. EmailJS, Formspree, or your own endpoint).

## Customizing

All colors, radii, shadows and fonts live as CSS variables at the top of
`src/styles.css`. Change `--blue`, `--cyan`, etc. once and the whole site updates.
