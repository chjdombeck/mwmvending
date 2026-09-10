# MWM Vending

Marketing site for MWM Vending. Vending machines, AI smart coolers, office coffee, and micro-markets across New England and New York.

## Stack

Single static `index.html` with Tailwind (CDN), Sora + Inter fonts, and a small amount of vanilla JS for the hero carousel and background. No build step.

## Local preview

```bash
node serve.mjs        # serves the project root at http://localhost:3000
node screenshot.mjs http://localhost:3000 [label]   # full-page screenshot
```

`node_modules` (puppeteer, sharp) is dev-only tooling for screenshots and image processing. It is not needed to run or deploy the site.

## Deploy

Hosted on Vercel as a static deployment (no install, no build). `vercel.json` sets `outputDirectory` to the repo root; `.vercelignore` keeps dev tooling and source assets out of the deploy. Pushing to `main` triggers a production deploy.

## Structure

- `index.html` — the whole site
- `images/` — optimized site images
- `MWMLogo.png` — logo
- Root `.png` / `.webp` / `.pdf` files — source material and references, not deployed
