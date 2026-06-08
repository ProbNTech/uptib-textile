# IMAGE CREDITS — UPTIB Textile

Log every image used on the site here, with source URL and licence — even where attribution
isn't required (belt-and-braces). Use **royalty-free, commercial-use** sources: Unsplash, Pexels,
Pixabay. (The client-specified "Magnify" source is **unconfirmed** — see BUILD_NOTES §5.3 — until
clarified, source only from Unsplash/Pexels/Pixabay.)

| File (in /public/image/...) | Subject | Source | URL | Licence | Attribution req'd |
|---|---|---|---|---|---|
| _(pending)_ | Cotton field, Punjab | — | — | — | — |
| _(pending)_ | Loom / spinning floor | — | — | — | — |
| _(pending)_ | Bed linen & towels | — | — | — | — |
| _(pending)_ | Sportswear production | — | — | — | — |
| _(pending)_ | Healthcare textiles | — | — | — | — |
| _(pending)_ | Shipping containers / port | — | — | — | — |
| _(pending)_ | Warehouse / fulfilment | — | — | — | — |

## Status / TODO (imagery pass — not yet done)
- Product detail pages currently use **labelled placeholders** (dashed green boxes) where photos go —
  search `TODO: add licence-clear` in `app/products/[slug]/page.tsx`.
- Hero video: existing `public/videos/banner.mp4` **kept** (client to supply final video).
- Logo: `public/logo.svg` (colour) kept; `public/logo-white.svg` is a **placeholder** wordmark —
  replace both with the final UPTIB logo, then regenerate `favicon.ico` + `apple-touch-icon.png`.
- Old tech-forum / UK-skyline imagery under `public/image/...` to be culled in the cleanup pass
  (grep references first — see BUILD_NOTES §2.2).

## Rules
- No copyrighted/branded/IP imagery; no identifiable people implying endorsement; no AI-watermarked assets.
- Optimise to WebP/AVIF, correct dimensions, lazy-load below the fold, descriptive alt text on every image.
- Keep one consistent crop/treatment so the gallery feels cohesive.
- Avoid UK-flag-heavy or UK-only imagery — keep it global.
