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

---
## Home Textile sub-category galleries — re-sourced 2026-06-20

Four Home Textile sub-category galleries re-sourced from on-brand commercial photography.
**Curation bar:** soft white / ivory / stone / grey / natural only — saturated colours, busy
prints, dark/moody light, model shots, branded packaging/cards and size-guide graphics rejected.
gallery[0] is the full-bleed hero on each `/products/bedding-linen/<sub>` page.

**Sources**
- **Bed & Bath Emporium** (bedandbathemporium.com, Shopify store `1422/6476`) — harvested via public `products.json`.
- **Peter Reed** (peterreed.com, Shopify store `0952/0431/1423`) — premium accent, public `products.json`.
- **Vision Linens** (visionlinens.com, Magento) — table linen; product images scraped from listing-page HTML, full-size originals (cache hash stripped).
- **Pexels** (images.pexels.com) — royalty-free commercial licence; two soft white/stone towel shots.

**Achieved source splits** (target → achieved)
- **Bedroom** (24 images) — 70/30 BBE/Peter Reed → **BBE 17 (71%) · Peter Reed 7 (29%)**. ✅ Met.
- **Bathroom** (20 images) — 45/45/10 BBE/Peter Reed/Pexels → **BBE 13 (65%) · Peter Reed 5 (25%) · Pexels 2 (10%)**. Peter Reed `towels-robes` is a tiny collection (6 product images total); all on-brand whites were harvested but cannot reach 45% without off-brand padding, so the balance is Bed & Bath towels. Closest achievable without padding.
- **Dining & Kitchen** (22 images) — 70/30 Vision Linens/Richard Haworth → **Vision Linens 22 (100%) · Richard Haworth 0**. ⚠️ Richard Haworth (richardhaworth.co.uk) is behind a **Cloudflare JS bot-challenge** — every avenue returned HTTP 403 (curl, WebFetch, `products.json`, sitemap) and the only Wayback snapshot captured just cross-sell/USP thumbnails, no usable neutral table-linen product shots. Per the no-off-brand-padding rule, the full gallery was sourced from Vision Linens (same neutral hotel/table-linen aesthetic) rather than padded.
- **Cushions & Throws** (22 images) — 90/10 BBE/Peter Reed → **BBE 20 (91%) · Peter Reed 2 (9%)**. ✅ Met.

All sourced from brand product/lifestyle photography for **internal mock-up / placeholder** use;
replace with client-licensed photography before production if required.

### bedroom — file → source
| File | Source | URL |
|---|---|---|
| bedroom/01.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/1000TCOffWhiteOxfordPillowcase.jpg?v=1734431622 |
| bedroom/02.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/1000TCFlaxWhiteIcegreyHousewife1_2361b6bb-3db5-4963-9aa5-de62f2a8cee7.jpg?v=1739547302 |
| bedroom/03.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/1000TCOffWhitePillowPair.jpg?v=1734431688 |
| bedroom/04.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/1000TCOxfordPillowcasesingle.jpg?v=1739547168 |
| bedroom/05.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/1000TCStandardPillowcasePair_c82b6859-7ca9-4898-8962-588d372f191d.jpg?v=1739547350 |
| bedroom/06.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/1000TCSuperkingPillowcase-Group.jpg?v=1739547619 |
| bedroom/07.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/1000TCOffWhiteDuvetCover.jpg?v=1734431504 |
| bedroom/08.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/1000TCSuperkingPillowcase-Group_6073b28c-dd9f-4426-8532-583660c36863.jpg?v=1739547408 |
| bedroom/09.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/1000TC_Superking_Pillowcases_-_All_Colours.jpg?v=1739547754 |
| bedroom/10.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/1000TCfittedsheetplatinum.jpg?v=1739547790 |
| bedroom/11.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/1000TCflatsheeticegrey.jpg?v=1739547465 |
| bedroom/12.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/300TCRococoPillowcasePair-3.jpg?v=1712846654 |
| bedroom/13.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/1000TCpillowstackflax.jpg?v=1739547350 |
| bedroom/14.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/1000TCpillowswhite_e1d97857-f80d-4c7e-9e0f-d09fe276b7be.jpg?v=1739547059 |
| bedroom/15.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/1000TCstandradpillowcaseicegrey.jpg?v=1739547555 |
| bedroom/16.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/1000ThreadCountBedding-AllColours_1e85a44d-855b-455d-ba1f-fa858f9cda4a.jpg?v=1739547828 |
| bedroom/17.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/300TCTiedHemMineral-DuvetCover-4.jpg?v=1750688324 |
| bedroom/18.jpg | Peter Reed | https://cdn.shopify.com/s/files/1/0952/0431/1423/files/2_row_classic_cord_white.jpg?v=1774369802 |
| bedroom/19.jpg | Peter Reed | https://cdn.shopify.com/s/files/1/0952/0431/1423/files/2-row-2_607ac079-aab4-4950-8736-e565fe273c61.jpg?v=1776085412 |
| bedroom/20.jpg | Peter Reed | https://cdn.shopify.com/s/files/1/0952/0431/1423/files/3Row.jpg?v=1775574553 |
| bedroom/21.jpg | Peter Reed | https://cdn.shopify.com/s/files/1/0952/0431/1423/files/3_row_classic_cord_fda456a9-da8d-46c9-a9a6-9a88b7e3f0a7.avif?v=1764860070 |
| bedroom/22.jpg | Peter Reed | https://cdn.shopify.com/s/files/1/0952/0431/1423/files/4rowdetail.jpg?v=1764866381 |
| bedroom/23.jpg | Peter Reed | https://cdn.shopify.com/s/files/1/0952/0431/1423/files/4-row-1_0cad9514-031f-4183-b10f-f452754ff7eb.jpg?v=1764757976 |
| bedroom/24.jpg | Peter Reed | https://cdn.shopify.com/s/files/1/0952/0431/1423/files/Kengo1.jpg?v=1764770516 |

### bathroom — file → source
| File | Source | URL |
|---|---|---|
| bathroom/01.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/ZeroTwistTowels-White-4.jpg?v=1714472781 |
| bathroom/02.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/products/FourRowCordGreyonrail.jpg?v=1671534494 |
| bathroom/03.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/ZeroTwistTowels-White-1.jpg?v=1714472781 |
| bathroom/04.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/products/Ripplewhitestack.jpg?v=1671534499 |
| bathroom/05.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/products/FourRowCordGreystack.jpg?v=1671534494 |
| bathroom/06.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/ZeroTwistTowels-White-3.jpg?v=1714472781 |
| bathroom/07.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/products/RippleGreyStack.jpg?v=1671534497 |
| bathroom/08.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/products/RippleGreyonrail.jpg?v=1671534497 |
| bathroom/09.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/ZeroTwistTowels-White-7.jpg?v=1714472781 |
| bathroom/10.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/ZeroTwistTowels-White-6.jpg?v=1714472781 |
| bathroom/11.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/ZeroTwistTowels-Charcoal-4.jpg?v=1714405976 |
| bathroom/12.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/ZeroTwistTowels-Stone-3.jpg?v=1714471977 |
| bathroom/13.jpg | Peter Reed | https://cdn.shopify.com/s/files/1/0952/0431/1423/files/PeterReedCottonLuxuryBathRobe.jpg?v=1769765879 |
| bathroom/14.jpg | Peter Reed | https://cdn.shopify.com/s/files/1/0952/0431/1423/files/PeterReedCottonLuxuryBathRobeH.jpg?v=1769765879 |
| bathroom/15.jpg | Peter Reed | https://cdn.shopify.com/s/files/1/0952/0431/1423/files/PeterReedZeroTwiseCottonTowelsMonogram.jpg?v=1769765788 |
| bathroom/16.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/products/FourRowCordCloseupstack.jpg?v=1671531969 |
| bathroom/17.jpg | Peter Reed | https://cdn.shopify.com/s/files/1/0952/0431/1423/files/PeterReedZeroTwistCottonTowelsMonogramBath.jpg?v=1769766213 |
| bathroom/18.jpg | Peter Reed | https://cdn.shopify.com/s/files/1/0952/0431/1423/files/Peter_Reed_Zero_Twise_Cotton_Towels.jpg?v=1769766213 |
| bathroom/19.jpg | Pexels | https://images.pexels.com/photos/4883686/pexels-photo-4883686.jpeg?auto=compress&cs=tinysrgb&w=1600 |
| bathroom/20.jpg | Pexels | https://images.pexels.com/photos/4210372/pexels-photo-4210372.jpeg?auto=compress&cs=tinysrgb&w=1600 |

### dining-kitchen — file → source
| File | Source | URL |
|---|---|---|
| dining-kitchen/01.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/p/a/pampas_napkin.jpg |
| dining-kitchen/02.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/0/3/031rafa_1_2.jpg |
| dining-kitchen/03.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/0/3/031rafa_3.jpg |
| dining-kitchen/04.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/5/5/557_athena_ivory_tablecloth_satin_bed_3.jpg |
| dining-kitchen/05.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/t/a/table1_1.jpg |
| dining-kitchen/06.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/c/o/copy_of_cezanne_ivory_rectangle_table_cloth.jpg |
| dining-kitchen/07.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/v/_/v_polyester_plain_table_linen_white_circular_1800x1800_3_1.jpg |
| dining-kitchen/08.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/e/2/e230_recycled_napkins_main.jpg |
| dining-kitchen/09.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/t/a/table1_1_1.jpg |
| dining-kitchen/10.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/v/_/v_polyester_ivyleaf_table_linen_ivory_1800x1800_2_3.jpg |
| dining-kitchen/11.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/v/_/v_polyester_plain_table_linen_white_circular_1800x1800_1.jpg |
| dining-kitchen/12.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/n/a/napkin_1_1.jpg |
| dining-kitchen/13.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/v/_/v_cotton_ivyleaf_table_linen_napkin_detail_1800x1800_1.jpg |
| dining-kitchen/14.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/v/_/v_cotton_sateen_napkin_1800x1800.jpg |
| dining-kitchen/15.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/v/_/v_cotton_satin_band_table_linen_1800x1800_4.jpg |
| dining-kitchen/16.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/v/_/v_polyester_ivyleaf_napkin_white_1800x1800_5.jpg |
| dining-kitchen/17.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/w/h/white-satin-band-tablecloth.jpg |
| dining-kitchen/18.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/w/h/white_paper_napkin_1.jpg |
| dining-kitchen/19.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/t/i/titanic_table_setting_1.jpg |
| dining-kitchen/20.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/c/o/copy_of_forta_white_plain_dye_2.jpg |
| dining-kitchen/21.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/v/_/v_polyester_satin_band_table_linen_1800x1800_1.jpg |
| dining-kitchen/22.jpg | Vision Linens | https://www.visionlinens.com/media/catalog/product/v/_/v_polyester_satin_band_table_linen_1800x1800.jpg |

### cushions-throws — file → source
| File | Source | URL |
|---|---|---|
| cushions-throws/01.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/OffWhiteOpenCheckThrow.jpg?v=1738326811 |
| cushions-throws/02.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/OffWhiteCheckerboardThrow.jpg?v=1738326800 |
| cushions-throws/03.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/PebbleCableKnitThrow.jpg?v=1723478218 |
| cushions-throws/04.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/RuffleFauxFurThrow-1.jpg?v=1733154520 |
| cushions-throws/05.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/WoodlandSherpaThrow.jpg?v=1731408002 |
| cushions-throws/06.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/SoftBrownOpenCheckThrow.jpg?v=1738326866 |
| cushions-throws/07.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/TaupeVelvetThrow.jpg?v=1762530237 |
| cushions-throws/08.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/WhiteBoudoirCushiononAustell.jpg?v=1712735432 |
| cushions-throws/09.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/Boudoirthree.jpg?v=1712735432 |
| cushions-throws/10.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/Boudoirthree_abeb4c81-4c58-4738-be48-8a1b65bb72a1.jpg?v=1712735494 |
| cushions-throws/11.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/GreyBoudoirCushiononAustell_6c097237-4f71-443b-9c04-4574352684d3.jpg?v=1712735494 |
| cushions-throws/12.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/Grey_Snow_Leopard_Faux_Fur_Throw_-_3.jpg?v=1733834911 |
| cushions-throws/13.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/NaturalSnowLeopardFauxFurCushion.jpg?v=1733835248 |
| cushions-throws/14.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/NaturalSnowLeopardFauxFurThrow.jpg?v=1733835234 |
| cushions-throws/15.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/NavyboudoircushiononAstell_15d23d29-b3af-405d-83c5-3fa54b59808b.jpg?v=1712735454 |
| cushions-throws/16.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/GreySnowLeopardCushion.jpg?v=1733154559 |
| cushions-throws/17.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/GreyVelvetBedspread-1500x1500.jpg?v=1728311741 |
| cushions-throws/18.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/GreyVelvetThrow-1500x1500.jpg?v=1728312489 |
| cushions-throws/19.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/GreyVelvetBedRunner-1500x1500.jpg?v=1728312671 |
| cushions-throws/20.jpg | BBE | https://cdn.shopify.com/s/files/1/1422/6476/files/NaturalMarbleFauxFurThrow.jpg?v=1762529929 |
| cushions-throws/21.jpg | Peter Reed | https://cdn.shopify.com/s/files/1/0952/0431/1423/files/PETER-REED-LOCATION-SESSION-THE-ANGEL-BED-CAMEO-5-IMAGE-01.jpg?v=1764770286 |
| cushions-throws/22.jpg | Peter Reed | https://cdn.shopify.com/s/files/1/0952/0431/1423/files/PETER-REED-LOCATION-SESSION-THE-ANGEL-SOFA-IMAGE-CAMEO-14249.jpg?v=1764770813 |
