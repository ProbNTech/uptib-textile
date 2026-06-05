# UPTIB Textile

Production marketing website for the **UK Pakistan Trade & Investment Board — Textile Division**. Built with Next.js (App Router), TypeScript and Tailwind CSS.

> _Pakistan's finest textiles — sourced and sold for the UK. Marketing the supply. Sourcing the demand. Trusted by both._

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build
npm start            # serve the production build
npm run lint         # ESLint (no warnings/errors)
npm run format       # Prettier
```

## Architecture

- **`/app`** — routes (App Router). Server Components by default; `"use client"` only for the mega-menu, mobile nav, directory filters, FAQ accordions and the enquiry form.
- **`/components`** — `layout/`, `ui/`, `sections/`, `forms/`, `directory/`.
- **`/data`** — all content is data-driven and typed: `products.ts`, `services.ts`, `companies.ts`, `stats.ts`, `nav.ts`, `faqs.ts`, `site.ts`. Pages map over this data; no copy is hardcoded in JSX.
- **`/types`** — shared TypeScript types.
- **`/lib`** — `utils.ts`, `icons.ts` (string→lucide map), `contact-schema.ts` (zod, shared client + server).

The four product pages share one template (`app/products/[slug]`); the four service pages share another (`app/services/[slug]`).

## Content & design notes

Copy is taken from the project source docs in `assets/UPTIB_Textile_source-docs/` (primarily `UPTIB_Textile_Website_Content.md`). The directory seed (`data/companies.ts`) is built from `Textile_Company_Database.md`.

Two deliberate overrides of the source docs (per the build brief):

1. **Colour scheme** — Blue (primary) → Red (secondary) → Green (tertiary), _not_ the teal/navy palette suggested in the content doc. Tokens are defined as RGB channels in `app/globals.css` (`:root`) and mapped in `tailwind.config.ts` so opacity modifiers (`bg-primary/10`) work.
2. **URLs** — clean root routes (`/products/bedding-linen`), not the `/textile/...` prefix from the docs. To nest under the main site later, set `basePath: "/textile"` in `next.config.mjs`.

## To do for the client

- **Imagery** — replace `MediaPlaceholder` blocks with real, consistently-treated photography under `/public/assets/images`.
- **Enquiry form** — `app/api/contact/route.ts` validates and logs; wire it to email/CRM where marked `TODO`.
- **Legal pages** — Privacy / Cookies / Terms are placeholders awaiting reviewed copy.
- **Market figures** — refresh trade/market statistics annually (`data/stats.ts`, product facts).
- **Favicon** — `app/icon.png` is a large source image; optimise if needed.
