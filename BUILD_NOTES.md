# BUILD NOTES — UPTIB Global Textile Export Website

> Repurposing the **UPTECH** tech-forum template (Next.js 16 / React 19 / Tailwind) into the
> **UPTIB Textile** global-export site. Design preserved; content, colour, IA replaced and
> repositioned **Pakistan → the world** (UK is one example market).

---

## 1. Template inventory ("where things live")

| Concern | Location |
|---|---|
| **Framework** | Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind 3.4. Framer Motion, Lucide, Swiper, d3. |
| **Colour tokens** | `app/globals.css` `:root` CSS vars **+** `tailwind.config.ts` `theme.extend.colors`. **BUT** colours are also hardcoded as hex in **~145 files / ~1899 occurrences** — the template is *not* fully token-driven. |
| **Global stylesheet** | `app/globals.css` (tokens, base type, buttons `.shiny-cta`/`.rainbow-border`, animations). |
| **Layout / metadata** | `app/layout.tsx` (fonts Montserrat+Lato, `<Header/>`, `<Footer/>`, JSON-LD, OG). |
| **Header (mega-menu)** | `components/Header.tsx` — `navItems[]` data drives desktop 3-col mega-panel + mobile accordion drawer. **This is the nav source of truth.** |
| **Footer** | `components/Footer.tsx`. |
| **Hero (video)** | `components/Hero.tsx` + video at `public/videos/banner.mp4` (kept as-is per brief §4.4). |
| **Reusable sections** | `components/`: `Section`, `Container`, `Card`, `Button`, `SectionHeader`, `PageHero`, `StatCard`, `ServiceGrid`, `PillarGrid`, `GlobalCTA`, `TrustCards`, plus `tech-market/MarketTable` (reusable comparison table), `directory/*` (card grid). |
| **Content/data** | `data/*.ts` (typed) + `config/site.ts` + `lib/data/market-data.ts`. New content will live in typed `data/` files. |
| **Routing** | File-based under `app/`. Source docs use `/textile/...`; **new IA uses root paths** (`/products/...`, `/services/...`, etc.) per BUILD PROMPT §11. |
| **Images** | `public/image/...` (hundreds of tech-forum banners — to be culled). |
| **Source docs** | `public/UPTIB_Textile_source-docs/` (`.md` + `.html` + `.docx`). |
| **Hero video** | `public/videos/banner.mp4`. |
| **Forms / API** | `app/api/contact/route.ts`, `app/api/membership/route.ts`, `lib/mailer.ts` (nodemailer). |

## 2. Key strategic findings

1. **Not token-driven.** A token-only re-theme will NOT recolour the site — blues (`#2563EB`/`#1D4ED8`),
   greens (`#22C55E`/`#16A34A`), crimson (`#C41E3A`) and brand navy (`#1a2b5e`) are hardcoded across
   the codebase. **Mitigation:** re-theme tokens *and* the shared surviving components; do NOT spend
   effort on pages being deleted.
2. **Most pages get deleted, not re-themed.** The template has ~80 routes for a tech forum
   (`about/*`, `ecosystem/*`, `arbitration/*`, `initiatives/*`, `programs/*`, `services/*` [tech],
   `events/*`, `partners`, `job-portal`, `meeting-space`, `it-companies`, `pakistan-top-companies`, …).
   The new IA needs ~15 pages. **Surviving/legal pages kept:** `privacy`, `cookies`, `terms`, `gdpr`,
   `code-of-conduct` (footer legal — re-theme lightly). Everything tech-specific is removed in the
   cleanup pass (§11). Until then old routes still compile but are unlinked from nav.
3. **Source content is UK-first AND uses the OLD service taxonomy** (Marketing&Sales · E-commerce&Warehouse ·
   Buying House · Logistics). The BUILD PROMPT overrides this with the **new Service taxonomy**
   (Buying · Outsourcing · Marketing · Warehousing) and **global** framing. Content is remapped:
   - old *Buying House (Outsourcing)* → split into **Buying** (buyer-facing finished sourcing) + **Outsourcing** (full procurement house, absorbs Logistics).
   - old *Logistics* → folded into **Outsourcing** (per §14.2 default; flagged below).
   - old *Marketing & Sales* → **Marketing** (membership moves to its own top-level page).
   - old *E-commerce & Warehouse* → **Warehousing**.

## 3. Colour mapping (green / white / black — BUILD PROMPT §4)

Old → new (applied to tokens + shared components):

| Old | New | Role |
|---|---|---|
| `#2563EB` / `var(--primary)` (blue) | `#047857` `--green-700` | PRIMARY links/buttons |
| `#1D4ED8` (blue hover) | `#065F46` `--green-800` | hover/active |
| `#22C55E` / accent-green | `#10B981` `--green-500` | bright accent/icons |
| `#16A34A` (accent hover) | `#059669` `--green-600` | CTA fill (large text) |
| `#C41E3A` (crimson) | `#047857` / `#064E3B` | removed — was a 3rd nav colour & "(UPTECH)" tag |
| `#1a2b5e` (brand navy) | `#064E3B` `--green-900` / `#0A0A0A` | header wordmark / dark sections |

Full green scale (50→900) added to `:root`. WCAG AA: small green text uses `--green-700`+; green-fill
buttons use `--green-700` (white text); large CTA may use `--green-600`. Dark sections = `--green-900`.

## 4. New IA (BUILD PROMPT §5) — replaces template nav

```
Home | Product ▾ | Service ▾ | Global Textile Market | Membership | News | Contact
```
- **Product ▾**: Bedding & Linen · Apparel & Accessories · Sportswear & Activewear · Healthcare Textile
- **Service ▾**: Buying · Outsourcing · Marketing · Warehousing
- Routes: `/products`, `/products/<slug>`, `/services`, `/services/<slug>`, `/global-textile-market`, `/membership`, `/news`, `/news/<slug>`, `/contact`.

## 5. Open decisions (§14) — defaults taken, confirm with client

1. **No "About"/"Directory" in nav.** Default taken: short "Who we are" on Home + full org details in footer; supplier/partner data surfaced inside Product hub / Global Textile Market. **Directory held for a later phase.**
2. **Logistics merged into Outsourcing** (as a sub-block). Not its own page. ← confirm.
3. **Image source "Magnify"** unconfirmed → sourcing from Unsplash/Pexels/Pixabay until clarified.
4. **Final logo + hero video pending** → header/footer reference `/logo.svg` + `/logo-white.svg` placeholders; existing `banner.mp4` kept.
5. **Membership pricing** shown "on request".
6. **UK–Pakistan Business Summit 2026** → not surfaced unless client confirms (optional News item).

## 6. Entity facts (kept true — §2)
UPTIB = **UK–Pakistan Trades & Investment Board**, London HQ (134–136 Westbourne Terrace, London W2 6QB)
+ Lahore office (Office 108–110 Urooj Center, Farid Court Road, Lahore). Abbrev **UPTIB** everywhere.
Only the **export-market scope** goes global, not the org identity.

## 6b. RE-SKIN STATUS (revised brief — design locked, re-skin in place)

After the design-lock clarification, the diverged first-pass pages were **reverted to the original
template design**, then re-skinned in place (colour via tokens + textile copy + nav). Build passes.

**Done (design preserved — sections/layout/backgrounds/videos/icons intact):**
- Global colour: green/white/black across **225 files** — zero blue/indigo/crimson hex or utility
  classes remain (semantic error-red `#DC2626` kept in forms). Decorative SVG illustrations green-ified.
- Brand text: `UPTECH`→`UPTIB`, `Tech Forum`→`Trades & Investment Board`, `ukpaktech`→`ukpaktrade`
  (word-boundary swap; component identifiers like `JoinUPTECHBackground` untouched).
- **Home** re-skinned in place (all 16 sections kept): About→"Who we are", Services grid→buyers/exporters,
  "More from"→Products/Market/Membership/News, Market Intelligence→global textile (§8), CTAs, labels.
- **Footer** (London-skyline bg kept), **Header**, **Hero** (video kept), **TopTicker**, **ContactForm**.
- **Home child components** framing re-skinned: `ImpactStats` (textile % stats), `MembershipSection` +
  `WhatDrivesUs` (audiences + pillars + green illustrations + re-glyphed icons), `PakistanTopCompaniesShowcase`,
  `PartnerSolutionsSection`, `BoardOfAdvisors`.

**Encoding fix:** a brand-swap perl using `[\x{2013}-]` matched ASCII-hyphen "UK-Pakistan Tech Forum"
and double-UTF-8-encoded one BOM file (`TradeDelegations...Client.tsx`) — repaired. No other files affected.

## 6c. CONTENT TODOs (flagged — needs the client's real data; do NOT fabricate)
These components keep the template **layout** but still carry **tech-origin DATA**. Framing/headings are
re-skinned to textile; the underlying records need the client's real content (search `TODO(content)`):
- **Manufacturer directory** — `lib/memberCompanies.ts` / `data/companies.ts` (AI/IT firms) → real vetted
  textile manufacturers from `Textile_Company_Database.md` / `Pakistan_Textile_Partners`.
- **Partner solutions** — `data/partner-solutions.ts` (tech products) → member manufacturer profiles.
- **News carousel on Home** — `data/articles.ts` (tech articles) → textile insights (textile set already in `data/news.ts`).
- **Events** — `data/events.ts`, **country market carousel** — `lib/data/market-data.ts` (IT markets),
  **advisor names/photos** — `BoardOfAdvisors.tsx`. Repurpose with real data or hide per client.

## 6d. STILL TO DO (structural / assets)
- **Inner pages** `/products`, `/services`, `/contact`, `/news`, `/membership` + new detail/market pages are
  still the clean first-pass versions (green + textile + building) — to be rebuilt from the template's own
  section components (`PageHero`, `Section`, `SectionHeader`, `GlobalCTA`) for full visual parity.
- **Content images**: every existing slot kept filled; subjects to be swapped one-for-one to textile
  photography (blocked on the "Magnify" source clarification, §14.3) — log in `IMAGE_CREDITS.md`.
- **Logo/video/favicon** pending client assets. **Restore `.git`** (absent) before further sweeping edits.

## 7. Conflicts / things flagged (not invented)
- Source docs give **UK-only** market sizes (e.g. "UK home-textile ~US$7.2bn"). Per §6 rule these are
  demoted to *example* data points; headline figures use the global/§8 anchor set.
- Phone numbers differ between docs: master content lists `0207 402 4071` (UK) / `0092 42 37235280` (PK);
  BUILD PROMPT lists `0044 7920 55 0000` + `info@ukpaktrade.org.uk`. **Using BUILD PROMPT values** (it is
  the source of truth) and keeping landline as secondary. ← confirm which is canonical.
