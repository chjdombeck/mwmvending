# MWM Vending — Brand Kit

Built from the MWM Vending logo and current site (mwmvending.com). Structured so it can be handed directly to an AI coding tool (Claude Code, Cursor, etc.) or a human developer and implemented without guesswork.

---

## 1. Brand Overview

MWM Vending is a full-service vending and micro-market provider for businesses and schools across New England and New York. They install and stock vending machines, coolers, and micro-market setups in workplace break rooms, position themselves as attentive and people-first (not a faceless equipment drop-off), and emphasize quality: real food and beverage variety, and US-made equipment.

**Personality:** professional, modern, straightforward, dependable — with a little bit of warmth. This is a B2B service brand talking to office managers, HR/facilities leads, and school administrators. It should read as credible and current, never stiff-corporate, never gimmicky.

**Positioning line for internal reference:** the vending partner that treats your break room like it matters.

---

## 2. Color Palette

Primary colors are pulled directly from the logo (sampled, not eyeballed).

| Token | Hex | RGB | Use |
|---|---|---|---|
| `navy` | `#2D3192` | 45, 49, 146 | Primary brand color — logo, nav, headers, primary buttons, footer |
| `cyan` | `#01AEF0` | 1, 174, 240 | Accent — links, icon fills, hover states, secondary CTAs, highlights |
| `ink` | `#14172E` | 20, 23, 46 | Body text — a near-black with a navy undertone, softer than pure black |
| `slate` | `#667085` | 102, 112, 133 | Secondary/muted text, captions, form labels |
| `mist` | `#F4F7FB` | 244, 247, 251 | Section backgrounds, cards, alternating rows |
| `white` | `#FFFFFF` | 255, 255, 255 | Base background |

**Utility colors** (for status/state, not core brand — use sparingly):

| Token | Hex | Use |
|---|---|---|
| `success` | `#1AAE6F` | In-stock / confirmation states |
| `warning` | `#F5A623` | Attention / low-stock states |
| `error` | `#E5484D` | Form errors, validation |

**Usage notes:**
- Navy carries the weight of the brand — use it for anything that needs authority (headers, nav bar, footer, primary buttons).
- Cyan is the energy accent — use it deliberately (links, icon accents, one hero highlight, hover/focus states), not as a second dominant color. It should feel like a spark, not a fill.
- Don't put cyan text on white at small sizes — it fails contrast. Use it on navy/dark backgrounds, or reserve small cyan text for links (with underline) at 16px+.
- `ink` (not pure black) for all body copy — pure black against the navy/cyan palette reads slightly off.

---

## 3. Typography

| Role | Typeface | Weights | Google Fonts |
|---|---|---|---|
| Headings / display | **Sora** | 600 (headings), 700 (hero/large numerals) | `Sora:wght@600;700` |
| Body / UI | **Inter** | 400 (body), 500 (labels/buttons), 600 (emphasis) | `Inter:wght@400;500;600` |

Sora has the same confident, slightly rounded geometry as the logotype and the rounded-corner vending machine icon, so headings feel visually related to the mark. Inter carries the day-to-day reading — forms, menus, body copy — where plain legibility matters more than personality.

**Import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

**Type scale** (desktop → mobile shrinks ~15–20% via clamp):

| Style | Size | Weight | Line-height | Font |
|---|---|---|---|---|
| H1 / Hero | 52px | 700 | 1.1 | Sora |
| H2 | 36px | 600 | 1.15 | Sora |
| H3 | 26px | 600 | 1.2 | Sora |
| H4 | 20px | 600 | 1.3 | Sora |
| Body | 17px | 400 | 1.6 | Inter |
| Small / caption | 14px | 400 | 1.5 | Inter |
| Button / label | 15px | 500 | 1 | Inter |

Keep body line length under ~75 characters per line. Don't set all-caps labels or tracked-out eyebrow text above headings — it reads dated against this palette; let the Sora weight do the work of hierarchy instead.

---

## 4. Logo Usage

- **Files provided:** full-color lockup (navy machine icon + cyan bottles + navy wordmark on transparent/white).
- **Clear space:** keep empty space around the logo equal to the width of the "M" in the wordmark, minimum, on all sides.
- **Minimum size:** don't render the full lockup narrower than ~120px wide — the keypad/icon detail breaks down below that. For small placements (favicon, app icon), use the vending-machine icon alone, cropped square.
- **Backgrounds:** the current lockup is built for light/white backgrounds. For a dark navy nav bar or footer, you'll want a **reversed (all-white) version** of the wordmark + icon — this doesn't exist yet in the assets provided, so flag it as a to-do before building a dark-background header/footer.
- **Don't:** recolor the icon, stretch/distort the lockup, drop a shadow on it, or place it on a busy photo without a solid-color safety area behind it.

---

## 5. Voice & Tone

The existing site already leans this direction — keep it:

- **Plainspoken over corporate.** Say "upgrade your break room," not "optimize your convenience services infrastructure."
- **Second person.** Talk to "you" / "your team" / "your business," not "clients" in the abstract.
- **Benefit first, feature second.** Lead with what the reader gets (happier employees, zero cost, better snacks), then back it up with specifics (equipment brand, product variety).
- **A little wit is fine, sparingly** — mainly in headlines/CTAs, not body copy. Their current tagline and a line like "don't go hangry" show the right dose: one light touch per page, not throughout.
- **Short sentences, active voice.** Avoid stacking adjectives ("premier," "state-of-the-art," "full-service," "one-stop") in the same sentence — pick one and move on.

---

## 6. Layout & UI Tokens

Ready-to-use design tokens for the build.

**Spacing scale** (4px base unit):
`4, 8, 12, 16, 24, 32, 48, 64, 96` (px)

**Border radius:**
- Buttons / inputs: `8px`
- Cards / images: `16px`
- Pills / badges: `999px` (full round)

**Shadows** (keep subtle — this is a trustworthy B2B service brand, not a flashy SaaS product):
- Card: `0 1px 2px rgba(20,23,46,0.06), 0 4px 12px rgba(20,23,46,0.06)`
- Hover lift: `0 8px 20px rgba(20,23,46,0.10)`

**Buttons:**
- Primary: navy fill (`#2D3192`), white text, 8px radius, hover → darken ~8%
- Secondary: white fill, navy 1.5px border, navy text, hover → mist fill
- Accent/CTA (sparingly): cyan fill (`#01AEF0`), navy text (not white — better contrast), for one standout action per page

---

## 7. Imagery Style

- Real equipment and real break-room/workplace environments over generic stock. The current site's biggest weakness is overly generic stock photography — a refresh should prioritize actual MWM machines, actual client spaces, or at minimum specific/authentic-feeling office photography over obviously staged stock.
- Bright, clean, well-lit. No moody/dark treatments — this brand is about accessibility and convenience, not exclusivity.
- Product shots (machines, coolers, micro-market fixtures) on clean or navy/mist backgrounds for consistency across the equipment pages.

---

## 8. Drop-in Code Reference

**CSS custom properties:**
```css
:root {
  /* Colors */
  --color-navy: #2D3192;
  --color-cyan: #01AEF0;
  --color-ink: #14172E;
  --color-slate: #667085;
  --color-mist: #F4F7FB;
  --color-white: #FFFFFF;
  --color-success: #1AAE6F;
  --color-warning: #F5A623;
  --color-error: #E5484D;

  /* Typography */
  --font-display: 'Sora', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-full: 999px;

  /* Shadow */
  --shadow-card: 0 1px 2px rgba(20,23,46,0.06), 0 4px 12px rgba(20,23,46,0.06);
  --shadow-hover: 0 8px 20px rgba(20,23,46,0.10);
}
```

**Tailwind config extension** (if the build uses Tailwind):
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: '#2D3192',
        cyan: '#01AEF0',
        ink: '#14172E',
        slate: '#667085',
        mist: '#F4F7FB',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,23,46,0.06), 0 4px 12px rgba(20,23,46,0.06)',
        hover: '0 8px 20px rgba(20,23,46,0.10)',
      },
    },
  },
};
```

---

## 9. Open Items Before Build

- [ ] Get/create a reversed (all-white) logo lockup for dark backgrounds
- [ ] Get/create a square icon-only mark for favicon/app icon
- [ ] Decide whether cyan or navy is the primary CTA button color (recommend testing navy first — cyan as a secondary accent)
