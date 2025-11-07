# Zomato UI Clone — Hyderabad Edition

A lightweight front-end clone of Zomato's city pages. Built with HTML, CSS, and vanilla JavaScript. This repo includes three static pages (Dining Out, Delivery, Nightlife) that demonstrate a category menu with active indicator, collections scroller, and a responsive restaurant grid.

## Features
- Top nav + search mockup
- Category menu with active icon swap and animated underline indicator
- Horizontal "Collections" scroller with left/right buttons
- Responsive restaurant cards (image, badges, cuisine, price, rating)
- Links to real Zomato restaurant pages for demo

## Files
- `zomato.html` — dining-out page demo. :contentReference[oaicite:25]{index=25}
- `delivery.html` — delivery page demo. :contentReference[oaicite:26]{index=26}
- `Nightlife.html` — nightlife page demo. :contentReference[oaicite:27]{index=27}
- `style.css` — main stylesheet for layout and components. :contentReference[oaicite:28]{index=28}
- `zomjs.js`, `deljs.js`, `jsnightlife.js` — small scripts controlling the underline indicator and horizontal scrollers. :contentReference[oaicite:29]{index=29} :contentReference[oaicite:30]{index=30}

## How to run
1. Clone the repo.
2. Open any `*.html` file in your browser (e.g. `zomato.html`) — no server required for static files.
3. For local dev with live reload, use a static server:
   - `npx http-server` or
   - VSCode: Live Server extension

## Deployment (quick)
You can host this static site for free:
- **GitHub Pages** — push repo to GitHub and enable Pages in repo settings.
- **Netlify** — connect GitHub repo and deploy (auto-build).
- **Vercel** — connect repo for instant deploy.
- **Surge.sh** — `surge ./public my-site.surge.sh`

## Next steps / Improvements
- Add a simple backend (Node/Express) + JSON dataset so cards are generated from data.
- Add search/filter functionality (client-side or server-side).
- Accessibility tweaks (alt text, keyboard navigation).
- Responsive & mobile UX polish.
- Add state routing (SPA) with React/Vue for faster navigation.

## Credits
Icons & images are referenced from Zomato's assets for demo purposes.

