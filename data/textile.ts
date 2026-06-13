/* ──────────────────────────────────────────────────────────────────
   Pakistan Textile Partners — central content model.
   Single source of truth for products, services, stats and markets so
   copy is editable in one place (BUILD PROMPT §11). All copy is written
   GLOBAL-first: Pakistan → the world; UK is one example market.
─────────────────────────────────────────────────────────────────── */
import {
  BedDouble, Shirt, Dumbbell, Stethoscope,
  ShoppingCart, Megaphone, Warehouse, Truck,
  ShieldCheck, Globe2, Handshake, BadgePercent,
  type LucideIcon,
} from "lucide-react";

/* A single product line shown as an editorial "lookbook" block:
   an elegant heading + paragraph beside a mosaic of product photos.
   (Used to render image-rich category pages — see ProductShowcase.) */
export type ShowcaseGroup = {
  name: string;            // line name, e.g. "Premium Towels & Bath"
  tagline: string;         // short italic kicker, e.g. "Egyptian & terry cotton"
  desc: string;            // one short editorial paragraph
  items: string[];         // bulleted product list for this line
  images: { src: string; alt: string }[]; // 2-4 photos for the mosaic
  /* Mosaic composition. Image count must match:
       quad      → 4 (even 2×2)
       stack     → 4 (wide · two squares · wide)
       tall-left → 3 (one tall main + two stacked)
       top-wide  → 3 (one wide on top + two squares)
       duo       → 2 (two offset portraits)
     Omit to auto-pick from the image count. */
  layout?: "quad" | "stack" | "tall-left" | "top-wide" | "duo";
};

export type ProductCategory = {
  slug: string;
  name: string;
  eyebrow: string;
  short: string;          // home/hub card blurb
  headline: string;       // product page H1
  summary: string;        // one-line under the headline
  icon: LucideIcon;
  image: string;          // feature photo for hub + detail
  intro: string;          // 2-sentence intro (globalised)
  included: string[];     // "What's included"
  applications: string[]; // end-markets / who sources it (chips)
  certList: string[];     // certifications as chips
  facts: {
    strength: string;
    globalDemand: string;
    marketSize: string;
    certifications: string;
  };
  demandDrivers: { title: string; desc: string }[]; // "What's driving demand" — market trends
  strengths: string[];    // "Why Pakistan leads here" — competitive advantages
  strengthsNote?: string; // optional callout under the strengths (e.g. brands supplied)
  /* Optional image-rich showcase. When present, the detail page renders an
     editorial, photo-led collection instead of the plain "What's included"
     list. Rolled out per category — Home Textile first. */
  showcase?: {
    eyebrow: string;       // small label above the collection title
    title: string;         // serif display title for the collection
    intro: string;         // lead paragraph under the title
    heroImage: { src: string; alt: string }; // full-bleed banner image
    groups: ShowcaseGroup[];
  };
};

export type Service = {
  slug: string;
  name: string;
  audience: string;
  eyebrow: string;
  short: string;          // home/hub card blurb
  headline: string;
  summary: string;
  icon: LucideIcon;
  primaryCta: { label: string; href: string };
};

/* ── Global stat band (BUILD PROMPT §8 anchor set) ── */
export const homeStats: { value: string; label: string }[] = [
  { value: "~US$17.9bn", label: "Pakistan textile & apparel exports, FY2025 (PBS)" },
  { value: "Top 10", label: "Global textile & apparel exporter" },
  { value: "55–60%", label: "Of Pakistan's total exports are textiles" },
  { value: "GSP+", label: "EU duty-free access advantage" },
];

/* ── Markets we reach (global lens; UK is one of several) ── */
export const markets: { name: string; note: string }[] = [
  { name: "European Union", note: "Largest destination bloc; GSP+ duty-free access" },
  { name: "United States", note: "Largest single-country market (~US$2.9bn)" },
  { name: "United Kingdom", note: "A significant individual market (~US$1.06bn)" },
  { name: "Middle East", note: "Fast-growing demand for home & institutional textiles" },
  { name: "Africa", note: "Diversifying export destination" },
  { name: "Latin America", note: "Emerging market for cotton-based products" },
];

/* ── Why Pakistan Textile Partners ── */
export const whyUptib: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: "A vetted global supplier network", desc: "Profiled Pakistani manufacturers across every category, matched to buyers worldwide.", icon: Globe2 },
  { title: "Quality control on the ground", desc: "Independent, multi-stage inspection to your agreed AQL — not just the factory's word.", icon: ShieldCheck },
  { title: "One accountable partner", desc: "A single point of accountability from first enquiry to final delivery, anywhere in the world.", icon: Handshake },
  { title: "The GSP+ advantage", desc: "Preferential duty-free entry into the EU on qualifying Pakistani textiles, built into your landed price.", icon: BadgePercent },
];

/* ── Products ── */
export const products: ProductCategory[] = [
  {
    slug: "bedding-linen",
    name: "Home Textile",
    eyebrow: "Products · Home Textile",
    short: "Bed linen, towels, hotel textiles, curtains & mattress protectors — Pakistan's strongest category.",
    headline: "The complete home textile range, made in Pakistan",
    summary: "Our largest category — globally recognised cotton quality and terry-towel manufacturing.",
    icon: BedDouble,
    image: "/image/textile/products/bedding-linen.jpg",
    intro:
      "Bedding and bath is the category where Pakistan is most competitive — globally recognised cotton quality and large-scale terry-towel capacity at competitive prices. Retailers, hotel groups, property developers and online home brands across the EU, the Americas, the Middle East and the UK rely on it.",
    included: [
      "Bed linen — flat & fitted sheets, duvet covers, comforters.",
      "Pillows, mattress protectors and toppers.",
      "Towels & bath linen — bath, hand, face, spa and pool towels, bathrobes.",
      "Hotel linen — contract-grade bedding and bath for hospitality.",
      "Table & kitchen linen — napkins, runners, aprons.",
    ],
    applications: [
      "Hotels & hospitality groups",
      "Retail & department stores",
      "Online home & lifestyle brands",
      "Property developers",
      "Spas & resorts",
    ],
    certList: ["GOTS", "OEKO-TEX", "BCI", "ISO 9001"],
    facts: {
      strength: "Globally recognised cotton quality and terry-towel manufacturing, with large-scale capacity and competitive pricing.",
      globalDemand: "Retailers, hotel groups, hospitality operators, property developers and online home brands worldwide — from the EU and USA to the Middle East and UK.",
      marketSize: "Pakistan is a world-leading origin for home textiles; the global home-textile market runs into the hundreds of billions of dollars.",
      certifications: "GOTS, OEKO-TEX and ISO available through our network.",
    },
    demandDrivers: [
      { title: "Hospitality expansion", desc: "New hotels, resorts and serviced-apartment groups worldwide drive steady demand for contract-grade bedding and bath." },
      { title: "Online home brands", desc: "Direct-to-consumer and marketplace home-and-lifestyle brands need dependable, certified bedding and towelling at scale." },
      { title: "Sustainability requirements", desc: "Retailers increasingly require organic cotton, recycled content and traceable, audited supply chains." },
      { title: "Premium cotton & towelling", desc: "Lasting demand for genuine long-staple cotton sheeting and high-GSM terry towels that survive heavy laundering." },
    ],
    strengths: [
      "Globally recognised cotton and yarn quality, including long-staple varieties.",
      "World-class terry-towel manufacturing, from everyday to high-GSM spa grades.",
      "Vertically integrated mills — spinning, weaving, dyeing and finishing under one roof.",
      "Large-scale capacity that scales from boutique runs to full container volumes.",
      "Hotel and contract-grade finishing built for repeated industrial laundering.",
      "GOTS, OEKO-TEX, BCI and ISO 9001 certified production available.",
    ],
    showcase: {
      eyebrow: "The collection",
      title: "Everything for the modern home",
      intro:
        "From the bedroom to the bath to the window, Pakistan's mills produce the full home textile range under one roof — woven, dyed, printed and finished to the standards the world's leading retailers and hotel groups demand.",
      heroImage: {
        src: "/image/textile/home/hotel-1.jpg",
        alt: "A made-up hotel bed with crisp white bed linen and a tufted headboard",
      },
      groups: [
        {
          name: "Bed Linen & Bed Sets",
          tagline: "Reactive-dyed, digitally printed & sateen",
          desc:
            "Long-staple cotton sheeting, duvet sets and comforters — woven, reactive-dyed and digitally printed to your colourway, then finished for a soft hand that survives wash after wash.",
          items: [
            "Flat & fitted sheets, pillowcases",
            "Duvet covers & comforter sets",
            "Dyed, printed & stripe-sateen ranges",
            "200–1000 thread-count cotton",
          ],
          images: [
            { src: "/image/textile/home/bed-linen-1.jpg", alt: "Crisp white stripe-sateen bed linen, close up" },
            { src: "/image/textile/home/bed-linen-2.jpg", alt: "A styled bed dressed in soft white bedding and pillows" },
            { src: "/image/textile/home/bed-linen-3.jpg", alt: "White bedding and pillows detail" },
          ],
        },
        {
          name: "Premium Towels & Bath",
          tagline: "Egyptian & terry cotton, 400–700+ GSM",
          desc:
            "The category Pakistan is famous for. Ring-spun and combed terry towelling in every weight — from everyday bath towels to plush spa grades and bathrobes, with hotel-grade durability built in.",
          items: [
            "Bath, hand, face & guest towels",
            "Spa, pool & beach towels",
            "Bathrobes & towelling sets",
            "Dobby borders & custom logos",
          ],
          images: [
            { src: "/image/textile/home/towels-1.jpg", alt: "A folded stack of towels in soft neutral colours" },
            { src: "/image/textile/home/towels-4.jpg", alt: "A blush spa bathrobe styled with bath accessories" },
            { src: "/image/textile/home/towels-2.jpg", alt: "Rolled towels in a woven basket beside a pool" },
            { src: "/image/textile/home/towels-5.jpg", alt: "Rolled towels dressed with fresh flowers" },
          ],
        },
        {
          name: "Hotel & Hospitality Textiles",
          tagline: "Contract-grade linen for hospitality",
          desc:
            "Bedding, bath and table linen engineered for repeated industrial laundering — the contract-grade textiles hotel groups, resorts and serviced-apartment operators specify worldwide.",
          items: [
            "Hotel bed linen & duvets",
            "Bath linen & pool towels",
            "Table & restaurant linen",
            "Stripe-sateen & jacquard ranges",
          ],
          images: [
            { src: "/image/textile/home/hotel-1.jpg", alt: "A luxury hotel bed made up with white linen and a tufted headboard" },
            { src: "/image/textile/home/hotel-2.jpg", alt: "A hotel bed with a breakfast tray and fresh flowers" },
          ],
        },
        {
          name: "Curtains & Drapery",
          tagline: "Sheer, dim-out & blackout",
          desc:
            "Made-to-measure window treatments in every weight and weave — from airy sheers to full blackout — in fabrics and colourways coordinated to the rest of the room.",
          items: [
            "Sheer & voile curtains",
            "Dim-out & blackout drapery",
            "Eyelet, pencil-pleat & tab-top headings",
            "Coordinated cushion & accessory fabrics",
          ],
          images: [
            { src: "/image/textile/home/curtains-1.jpg", alt: "Blue and grey curtains dressing a bright living room" },
            { src: "/image/textile/home/curtains-3.jpg", alt: "Elegant terracotta floor-length drapes" },
            { src: "/image/textile/home/curtains-2.jpg", alt: "Warm sheer curtains filtering daylight" },
            { src: "/image/textile/home/curtains-4.jpg", alt: "Deep blue curtains framing a window" },
          ],
        },
        {
          name: "Mattress Protectors & Toppers",
          layout: "top-wide",
          tagline: "Quilted & water-repellent",
          desc:
            "Quilted protectors and toppers that guard the mattress and add a layer of comfort — with water-repellent and breathable finishes for homes, hotels and care settings alike.",
          items: [
            "Quilted mattress protectors",
            "Water-repellent & waterproof grades",
            "Mattress toppers & pads",
            "Fitted-skirt & strap fittings",
          ],
          images: [
            { src: "/image/textile/home/mattress-1.jpg", alt: "A white quilted mattress protector" },
            { src: "/image/textile/home/mattress-2.jpg", alt: "Hands fitting a quilted protector onto a mattress" },
            { src: "/image/textile/home/mattress-3.jpg", alt: "A quilted mattress protector dressed on a bed" },
          ],
        },
        {
          name: "Cushions & Throws",
          layout: "top-wide",
          tagline: "Decorative & accent textiles",
          desc:
            "The finishing layer — woven and knitted cushions, throws and blankets in seasonal colourways and textures that pull a room together, for retail and hospitality alike.",
          items: [
            "Cushion covers & filled cushions",
            "Knitted & woven throws",
            "Blankets & bedspreads",
            "Seasonal colours & textures",
          ],
          images: [
            { src: "/image/textile/home/cushions-1.jpg", alt: "A soft knitted throw with tasselled edges" },
            { src: "/image/textile/home/cushions-2.jpg", alt: "Neutral cushions and a knitted throw on a bed" },
            { src: "/image/textile/home/cushions-3.jpg", alt: "Soft grey cushions styled on a bed" },
          ],
        },
        {
          name: "Table & Kitchen Linen",
          layout: "duo",
          tagline: "Napkins, runners & aprons",
          desc:
            "Everyday and occasion table linen in cotton and linen weaves — napkins, runners, placemats and aprons, dyed and finished to coordinate with the rest of the range.",
          items: [
            "Napkins & table runners",
            "Placemats & tablecloths",
            "Tea towels & kitchen linen",
            "Aprons & oven textiles",
          ],
          images: [
            { src: "/image/textile/home/table-1.jpg", alt: "A neutral place setting with linen and cutlery" },
            { src: "/image/textile/home/table-2.jpg", alt: "Crisp white folded napkins with cutlery" },
          ],
        },
      ],
    },
  },
  {
    slug: "apparel-accessories",
    name: "Apparel & Accessories",
    eyebrow: "Products · Apparel & Accessories",
    short: "Private-label fashion, denim, knitwear, uniforms and accessories.",
    headline: "Private-label apparel, made to your spec",
    summary: "OEM and private-label production across woven and knit, with design support and fast turnaround.",
    icon: Shirt,
    image: "/image/textile/products/apparel-accessories.jpg",
    intro:
      "Pakistan offers OEM and private-label capability across woven and knit — with design support, small runs and fast turnaround for brands that keep branding in-house. Brands and retailers worldwide outsource production here, with strong demand for low-MOQ partners.",
    included: [
      "Fashion basics — t-shirts, polos, hoodies, fleece, loungewear.",
      "Children's wear.",
      "Denim and woven garments.",
      "Knitwear and jersey.",
      "Uniforms & workwear — corporate, industrial, school and security.",
      "Accessories — socks, bags and more.",
    ],
    applications: [
      "Fashion & lifestyle brands",
      "High-street retailers",
      "Workwear & uniform suppliers",
      "E-commerce & DTC labels",
      "Corporate & promotional",
    ],
    certList: ["OEKO-TEX", "BCI", "WRAP", "Sedex"],
    facts: {
      strength: "Private-label and OEM capability across woven and knit, with design support, packaging and fast turnaround.",
      globalDemand: "Brands and retailers worldwide outsourcing production; strong demand for low-MOQ partners across the EU, USA, Middle East and UK.",
      marketSize: "Knitwear (~US$5.0bn) and readymade garments (~US$4.1bn) are among Pakistan's largest export categories (FY2025).",
      certifications: "OEKO-TEX, BCI, WRAP, Sedex available through our network.",
    },
    demandDrivers: [
      { title: "Private-label growth", desc: "Brands keep design and marketing in-house and outsource production to flexible OEM partners." },
      { title: "Low-MOQ sourcing", desc: "E-commerce and DTC labels want small, fast runs backed by design and sampling support." },
      { title: "Responsible sourcing", desc: "Retailers demand WRAP, Sedex and BCI-audited factories with transparent supply chains." },
      { title: "Knitwear & basics", desc: "Steady worldwide demand for jersey basics, fleece, denim and workwear in volume." },
    ],
    strengths: [
      "OEM and private-label capability across both woven and knit.",
      "In-house design, sampling and tech-pack support.",
      "Deep knitwear and readymade-garment base — among Pakistan's largest export categories.",
      "Flexible volumes, from low-MOQ runs to bulk production programmes.",
      "Fast turnaround with packaging and finishing handled in-house.",
      "OEKO-TEX, BCI, WRAP and Sedex certified options.",
    ],
    showcase: {
      eyebrow: "The collection",
      title: "Private label, made to your spec",
      intro:
        "From everyday basics to denim, knitwear and workwear, Pakistan's vertically integrated factories produce OEM and private-label apparel across woven and knit — with design support, sampling and the finishing to carry your own brand.",
      heroImage: {
        src: "/image/textile/apparel/knit-1.jpg",
        alt: "A model in a soft, neutral-toned knitted sweater",
      },
      groups: [
        {
          name: "Fashion Basics & Loungewear",
          tagline: "T-shirts, polos, hoodies & fleece",
          desc:
            "The everyday staples brands sell in volume — ring-spun cotton tees, polos, hoodies and loungewear, cut and finished to a clean, consistent standard run after run.",
          items: [
            "T-shirts, polos & long-sleeves",
            "Hoodies, fleece & sweatshirts",
            "Loungewear & joggers",
            "Kids' & baby basics",
          ],
          images: [
            { src: "/image/textile/apparel/basics-1.jpg", alt: "A soft mint t-shirt styled with cotton stems" },
            { src: "/image/textile/apparel/basics-2.jpg", alt: "A stack of folded cream cotton t-shirts" },
            { src: "/image/textile/apparel/basics-3.jpg", alt: "A cozy flat lay of a soft knit and accessories" },
            { src: "/image/textile/apparel/basics-4.jpg", alt: "A folded stack of knitted sweaters" },
          ],
        },
        {
          name: "Knitwear & Sweaters",
          tagline: "Jersey, ribbed & cable knit",
          desc:
            "Fine- and chunky-gauge knitwear in cotton, wool and blended yarns — from roll-necks and crews to cardigans, knitted to a soft hand and held shape.",
          items: [
            "Crew, V & roll-neck knits",
            "Cardigans & cable knit",
            "Fine-gauge jersey",
            "Cotton, wool & blended yarns",
          ],
          images: [
            { src: "/image/textile/apparel/knit-1.jpg", alt: "A model in a soft beige knitted sweater by a window" },
            { src: "/image/textile/apparel/knit-2.jpg", alt: "Neutral knitted sweaters being folded" },
            { src: "/image/textile/apparel/knit-3.jpg", alt: "Close detail of a ribbed knit cuff" },
            { src: "/image/textile/apparel/knit-4.jpg", alt: "A soft beige roll-neck sweater" },
          ],
        },
        {
          name: "Denim & Woven",
          tagline: "Jeans, jackets & shirting",
          desc:
            "Woven garments built around Pakistan's deep denim base — five-pocket jeans, jackets, shirts and chinos, in the washes, fades and finishes your range calls for.",
          items: [
            "Five-pocket jeans & jackets",
            "Woven shirts & chinos",
            "Washes, fades & finishes",
            "Stretch & rigid denim",
          ],
          images: [
            { src: "/image/textile/apparel/denim-1.jpg", alt: "Folded denim jeans on a soft pink background" },
            { src: "/image/textile/apparel/denim-2.jpg", alt: "A neat stack of folded light-blue jeans" },
            { src: "/image/textile/apparel/denim-3.jpg", alt: "Close detail of folded jeans and pocket stitching" },
            { src: "/image/textile/apparel/denim-4.jpg", alt: "A stack of folded indigo denim" },
          ],
        },
        {
          name: "Uniforms & Workwear",
          tagline: "Corporate, school & industrial",
          desc:
            "Programme-run uniforms and workwear — corporate, hospitality, school and industrial — produced to a fixed spec for reliable repeat ordering at scale.",
          items: [
            "Corporate & hospitality uniforms",
            "School & academic wear",
            "Industrial & hi-vis workwear",
            "Polo, oxford & chino programmes",
          ],
          images: [
            { src: "/image/textile/apparel/uniform-1.jpg", alt: "A minimalist rail of neutral garments" },
            { src: "/image/textile/apparel/uniform-2.jpg", alt: "Grey garments hung on a clothing rail" },
            { src: "/image/textile/apparel/uniform-3.jpg", alt: "A folded stack of uniform shirts" },
            { src: "/image/textile/apparel/uniform-4.jpg", alt: "A clothing rail of neutral-toned apparel" },
          ],
        },
        {
          name: "Children's & Baby Wear",
          layout: "tall-left",
          tagline: "Soft, safe everyday kids' clothing",
          desc:
            "Gentle-on-skin children's and baby clothing in soft cottons and certified, low-irritant finishes — bodysuits, sets and everyday basics, made to the safety standards retailers require.",
          items: [
            "Bodysuits, rompers & sleepsuits",
            "Tops, leggings & sets",
            "Soft, certified cottons",
            "OEKO-TEX low-irritant finishes",
          ],
          images: [
            { src: "/image/textile/apparel/kids-1.jpg", alt: "Delicate white lace-collar baby dresses" },
            { src: "/image/textile/apparel/kids-2.jpg", alt: "A neutral baby-clothing flat lay with flowers" },
            { src: "/image/textile/apparel/kids-3.jpg", alt: "A folded beige baby onesie and accessories" },
          ],
        },
        {
          name: "Accessories",
          layout: "duo",
          tagline: "Socks, beanies, scarves & bags",
          desc:
            "The add-on lines that round out an order — knitted socks, beanies, scarves and bags, produced to the same spec and finish as the main collection.",
          items: [
            "Socks & hosiery",
            "Beanies, scarves & gloves",
            "Caps & headwear",
            "Bags & totes",
          ],
          images: [
            { src: "/image/textile/apparel/acc-1.jpg", alt: "Soft knitted beanies and socks in neutral tones" },
            { src: "/image/textile/apparel/acc-2.jpg", alt: "Knitted socks in warm neutral colours" },
          ],
        },
        {
          name: "Skirts & Dresses",
          tagline: "Skirts, midi & maxi dresses",
          desc:
            "Woven and jersey skirts and dresses — A-line, pleated and midi silhouettes in soft solids, prints and linens, cut and finished to your seasonal range.",
          items: [
            "A-line, pleated & denim skirts",
            "Midi & maxi dresses",
            "Woven, linen & jersey dresses",
            "Seasonal prints & solids",
          ],
          images: [
            { src: "/image/textile/apparel/skirts-1.jpg", alt: "An elegant white dress styled by a vintage screen" },
            { src: "/image/skirt-v1.jpg", alt: "A woman in a floral summer dress outdoors" },
            { src: "/image/textile/apparel/skirts-3.jpg", alt: "Two women in summer dresses" },
            { src: "/image/textile/apparel/skirts-4.jpg", alt: "Models in white tops and denim skirts" },
          ],
        },
        {
          name: "Leather Jackets & Goods",
          layout: "tall-left",
          tagline: "Jackets, bags & accessories",
          desc:
            "Genuine and faux-leather jackets and goods drawing on Sialkot's leather heritage — biker, bomber and blazer styles, plus bags and accessories, in rich tans and classic black.",
          items: [
            "Leather & faux-leather jackets",
            "Biker, bomber & blazer styles",
            "Bags, belts & wallets",
            "Genuine & PU options",
          ],
          images: [
            { src: "/image/textile/apparel/leather-1.jpg", alt: "A man in a black leather jacket" },
            { src: "/image/textile/apparel/leather-2.jpg", alt: "A woman in a black leather jacket" },
            { src: "/image/textile/apparel/leather-3.jpg", alt: "A man in a black leather jacket" },
          ],
        },
      ],
    },
  },
  {
    slug: "sportswear-activewear",
    name: "Sportswear & Activewear",
    eyebrow: "Products · Sportswear & Activewear",
    short: "Gymwear, teamwear and performance kit from the Sialkot hub.",
    headline: "Performance kit from one of the world's leading hubs",
    summary: "Sialkot is globally recognised for sportswear, teamwear and customised athletic apparel.",
    icon: Dumbbell,
    image: "/image/textile/products/sportswear-activewear.jpg",
    intro:
      "Sialkot is one of the world's leading hubs for sportswear, teamwear and customised athletic apparel — with sublimation printing and low minimum orders. It serves a fast-growing global market driven by fitness, athleisure and e-commerce fitness brands.",
    included: [
      "Gymwear and leggings; sports bras.",
      "Performance tees, tracksuits and hoodies.",
      "Teamwear and custom kit (sublimated).",
      "Technical and performance fabrics.",
    ],
    applications: [
      "Athleisure & activewear brands",
      "Sports teams & clubs",
      "Gym & fitness chains",
      "E-commerce fitness labels",
      "Schools & academies",
    ],
    certList: ["OEKO-TEX", "Recycled / GRS", "Sedex"],
    facts: {
      strength: "Sialkot custom and private-label sportswear, sublimation capability, low MOQs.",
      globalDemand: "A fast-growing global market driven by fitness, athleisure and e-commerce fitness brands across the EU, USA, Middle East and UK.",
      marketSize: "Activewear is one of the fastest-growing apparel segments worldwide, expanding at mid-to-high single digits annually.",
      certifications: "OEKO-TEX and recycled-material options available.",
    },
    demandDrivers: [
      { title: "Athleisure everywhere", desc: "Activewear is now everyday wear — one of the fastest-growing apparel segments across global retail." },
      { title: "Women's activewear", desc: "The largest, fastest-growing segment — leggings, sports bras, matching sets and inclusive sizing." },
      { title: "Sustainable performance", desc: "Brands increasingly require recycled-polyester and eco-friendly performance fabrics." },
      { title: "Low-MOQ private label", desc: "E-commerce and DTC fitness brands outsource production while they focus on marketing and community." },
    ],
    strengths: [
      "Sialkot — one of the world's leading hubs for sportswear and teamwear.",
      "Advanced sublimation printing for custom kit and club merchandise.",
      "Performance-fabric expertise — moisture-wicking, four-way stretch, compression.",
      "Low minimum orders with full custom branding.",
      "Proven private-label production for international brands.",
      "OEKO-TEX and recycled / GRS material options.",
    ],
    strengthsNote:
      "Pakistani sourcing networks have supplied major international sportswear names — including Adidas, Puma, Hummel, Hugo Boss and Kempa.",
    showcase: {
      eyebrow: "The collection",
      title: "Performance kit, from the Sialkot hub",
      intro:
        "Sialkot is one of the world's leading hubs for sportswear and teamwear — pairing sublimation printing and low minimums with genuine performance-fabric expertise, across gymwear, training and custom club kit.",
      heroImage: {
        src: "/image/textile/sportswear/gym-1-v4.jpg",
        alt: "A woman in a white activewear jacket and leggings against a light backdrop",
      },
      groups: [
        {
          name: "Gymwear & Activewear",
          tagline: "Leggings, sports bras & sets",
          desc:
            "The fastest-growing segment — leggings, sports bras and matching co-ords in seamless and sculpting fits, with the stretch and recovery that everyday activewear demands.",
          items: [
            "Leggings & cycling shorts",
            "Sports bras & crop tops",
            "Matching co-ord sets",
            "Seamless & sculpting fits",
          ],
          images: [
            { src: "/image/textile/sportswear/gym-1-v4.jpg", alt: "A woman in a white activewear jacket and leggings" },
            { src: "/image/textile/sportswear/gym-2-v4.jpg", alt: "A woman in a taupe activewear set" },
            { src: "/image/textile/sportswear/gym-3-v4.jpg", alt: "A woman in grey activewear leaning on a wall" },
            { src: "/image/textile/sportswear/gym-4-v4.jpg", alt: "A woman in a soft teal tracksuit" },
          ],

        },
        {
          name: "Performance & Training",
          tagline: "Tees, tracksuits & hoodies",
          desc:
            "Training-day essentials — performance tees, tracksuits, hoodies and shorts in moisture-wicking knits, built to move and to survive heavy rotation.",
          items: [
            "Performance tees & tanks",
            "Tracksuits & joggers",
            "Training hoodies & quarter-zips",
            "Shorts & base layers",
          ],
          images: [
            { src: "/image/textile/sportswear/perf-1.jpg", alt: "A man in a grey training tracksuit" },
            { src: "/image/textile/sportswear/perf-2.jpg", alt: "A woman in a grey performance hoodie" },
            { src: "/image/textile/sportswear/perf-3.jpg", alt: "A folded stack of joggers" },
            { src: "/image/textile/sportswear/perf-4.jpg", alt: "Back detail of a grey training hoodie" },
          ],
        },
        {
          name: "Teamwear & Custom Kit",
          tagline: "Sublimated club & team kit",
          desc:
            "Fully sublimated club and team kit with low minimums and full custom branding — jerseys, shorts and warm-up wear for clubs, academies and brands.",
          items: [
            "Sublimated jerseys & shorts",
            "Football, rugby & cricket kit",
            "Training & warm-up wear",
            "Full custom branding & low MOQs",
          ],
          images: [
            { src: "/image/textile/sportswear/team-1.jpg", alt: "A team jersey on a hanger" },
            { src: "/image/textile/sportswear/team-2.jpg", alt: "A player in a blue team jersey" },
            { src: "/image/textile/sportswear/team-3.jpg", alt: "Back of a yellow team kit on the pitch" },
          ],
        },
        {
          name: "Technical Fabrics",
          tagline: "Moisture-wicking & 4-way stretch",
          desc:
            "The engineering behind the kit — moisture-wicking knits, four-way stretch, compression and mesh ventilation, with recycled-polyester options on request.",
          items: [
            "Moisture-wicking knits",
            "Four-way stretch & compression",
            "Mesh & ventilation panels",
            "Recycled / GRS options",
          ],
          images: [
            { src: "/image/textile/sportswear/tech-1.jpg", alt: "Soft pastel sports bras showing fabric detail" },
            { src: "/image/textile/sportswear/tech-2.jpg", alt: "Close detail of grey performance mesh fabric" },
            { src: "/image/textile/sportswear/tech-3.jpg", alt: "Detail of a seamless performance top" },
            { src: "/image/textile/sportswear/tech-4.jpg", alt: "Close detail of breathable mesh knit" },
          ],
        },
        {
          name: "Outerwear & Layers",
          layout: "tall-left",
          tagline: "Jackets, windbreakers & vests",
          desc:
            "Train-through-the-seasons layers — windbreakers, track jackets, gilets and mid-layers in water-resistant and breathable fabrics, finished for the gym, the trail and the everyday.",
          items: [
            "Windbreakers & track jackets",
            "Gilets & mid-layers",
            "Water-resistant & breathable shells",
            "Zip, bonded & taped finishes",
          ],
          images: [
            { src: "/image/textile/sportswear/outer-1.jpg", alt: "A model in a soft khaki windbreaker" },
            { src: "/image/textile/sportswear/outer-2.jpg", alt: "A grey performance sport jacket" },
            { src: "/image/textile/sportswear/outer-3.jpg", alt: "A grey jacket on a hanger" },
          ],
        },
        {
          name: "Sports Accessories",
          layout: "duo",
          tagline: "Caps, bags, socks & support",
          desc:
            "The kit around the kit — performance socks, caps, bags and training accessories, branded to match and produced alongside the main programme.",
          items: [
            "Performance & compression socks",
            "Caps, headbands & gloves",
            "Gym bags & drawstring sacks",
            "Support & training accessories",
          ],
          images: [
            { src: "/image/textile/sportswear/sacc-1.jpg", alt: "A sports duffel gym bag" },
            { src: "/image/textile/sportswear/sacc-2.jpg", alt: "Rolled sports socks on a neutral background" },
          ],
        },
      ],
    },
  },
  {
    slug: "healthcare-textile",
    name: "Healthcare Textile",
    eyebrow: "Products · Healthcare Textile",
    short: "Scrubs, gowns, hospital linen and antimicrobial textiles.",
    headline: "Institutional textiles for healthcare systems worldwide",
    summary: "Built for durability, hygiene and frequent industrial laundering.",
    icon: Stethoscope,
    image: "/image/textile/products/healthcare-textile.jpg",
    intro:
      "Pakistan manufactures institutional linen and uniforms built for durability, hygiene and frequent industrial laundering, with CE/AAMI-aware surgical and antimicrobial capability. Hospitals, care homes, clinics and laboratories worldwide represent continuous, high-volume demand.",
    included: [
      "Medical scrubs; nurse and doctor uniforms.",
      "Patient gowns.",
      "Hospital bed linen and draw sheets.",
      "Surgical drapes and theatre linen.",
      "Antimicrobial and care-home textiles.",
    ],
    applications: [
      "Public & private hospitals",
      "Care homes & clinics",
      "National health systems",
      "Laboratories",
      "Medical distributors",
    ],
    certList: ["CE", "AAMI", "ISO 13485", "OEKO-TEX"],
    facts: {
      strength: "Institutional linen and uniform manufacturing, with CE/AAMI-aware surgical and antimicrobial capability.",
      globalDemand: "Public and private hospitals, care homes, clinics and laboratories worldwide — including the NHS in the UK and large public health systems across the EU and Middle East.",
      marketSize: "The global medical-textile market is multi-billion dollar and growing steadily as healthcare capacity expands.",
      certifications: "CE / AAMI / ISO 13485, OEKO-TEX available through our network.",
    },
    demandDrivers: [
      { title: "Continuous institutional demand", desc: "Hospitals, care homes and clinics worldwide need a constant, high-volume supply of linen and uniforms." },
      { title: "Infection control", desc: "Stricter hygiene standards drive demand for antimicrobial, high-temperature-washable textiles." },
      { title: "Antimicrobial textiles", desc: "The global antimicrobial hospital-textile sector exceeded US$8.5bn in 2024 and is growing fast." },
      { title: "Outsourced procurement", desc: "Health systems increasingly source through linen-management and procurement contractors — an opening for overseas manufacturers." },
    ],
    strengths: [
      "Large-scale institutional linen and uniform manufacturing.",
      "Built for durability, hygiene and frequent industrial laundering.",
      "CE/AAMI-aware surgical and antimicrobial capability.",
      "Cotton and poly-cotton expertise carried over from hotel and hospitality linen.",
      "Competitive pricing on long-term, high-volume programmes.",
      "CE, AAMI, ISO 13485 and OEKO-TEX certified options.",
    ],
    showcase: {
      eyebrow: "The collection",
      title: "Institutional textiles, built to last",
      intro:
        "Built for durability, hygiene and frequent industrial laundering — scrubs, gowns, hospital linen and surgical textiles for health systems, care homes and clinics worldwide, with CE/AAMI-aware capability.",
      heroImage: {
        src: "/image/textile/healthcare/linen-2.jpg",
        alt: "Soft white hospital-grade bed linen in daylight",
      },
      groups: [
        {
          name: "Scrubs & Medical Uniforms",
          tagline: "Scrubs, tunics & lab coats",
          desc:
            "Hard-wearing scrubs, tunics and uniforms in poly-cotton blends that hold colour and shape through repeated high-temperature laundering — with antimicrobial finishes on request.",
          items: [
            "Medical scrubs & tunics",
            "Nurse & doctor uniforms",
            "Lab coats & theatre wear",
            "Antimicrobial finishes",
          ],
          images: [
            { src: "/image/textile/healthcare/scrubs-1.jpg", alt: "A healthcare worker in navy medical scrubs" },
            { src: "/image/textile/healthcare/scrubs-2.jpg", alt: "A clinician in soft grey scrubs" },
            { src: "/image/textile/healthcare/scrubs-3.jpg", alt: "Green scrubs with a stethoscope" },
            { src: "/image/textile/healthcare/scrubs-4.jpg", alt: "Detail of a navy scrub uniform" },
          ],
        },
        {
          name: "Patient Gowns & Provider Wear",
          tagline: "Gowns & care-setting uniforms",
          desc:
            "Patient gowns and care-setting uniforms in easy-wash, hard-wearing fabrics — available in reusable and single-use grades for hospitals, clinics and care homes.",
          items: [
            "Patient & examination gowns",
            "Care-home uniforms",
            "Reusable & single-use grades",
            "Easy-wash, hard-wearing fabrics",
          ],
          images: [
            { src: "/image/textile/healthcare/care-1.jpg", alt: "A smiling nurse in uniform" },
            { src: "/image/textile/healthcare/care-2.jpg", alt: "Two care workers in medical uniforms" },
            { src: "/image/textile/healthcare/care-3.jpg", alt: "A provider in navy uniform with a tablet" },
            { src: "/image/textile/healthcare/care-4.jpg", alt: "Two nurses in teal scrubs" },
          ],
        },
        {
          name: "Hospital Bed Linen & Draw Sheets",
          tagline: "Sheets, draw sheets & blankets",
          desc:
            "High-temperature-washable bed linen, draw sheets and blankets carried over from Pakistan's hotel and hospitality expertise — durable, hygienic and built for institutional laundries.",
          items: [
            "Bed sheets & pillowcases",
            "Draw sheets & under-pads",
            "Cellular & thermal blankets",
            "High-temperature-washable cotton",
          ],
          images: [
            { src: "/image/textile/healthcare/linen-1.jpg", alt: "A folded stack of clean white bed linen" },
            { src: "/image/textile/healthcare/linen-2.jpg", alt: "Soft white bed linen in daylight" },
            { src: "/image/textile/healthcare/linen-3.jpg", alt: "Crisp white sheeting in soft light" },
            { src: "/image/textile/healthcare/linen-4.jpg", alt: "White hospital-grade sheeting" },
          ],
        },
        {
          name: "Surgical Drapes & Theatre Linen",
          tagline: "CE/AAMI-aware theatre textiles",
          desc:
            "Theatre textiles produced with surgical-barrier capability in mind — drapes, gowns and wraps, with CE / AAMI / ISO 13485-aware manufacturing for export health systems.",
          items: [
            "Surgical drapes & gowns",
            "Theatre linen & wraps",
            "Sterile-barrier fabrics",
            "CE / AAMI / ISO 13485 aware",
          ],
          images: [
            { src: "/image/textile/healthcare/surgical-1.jpg", alt: "A green surgical drape with instruments laid out" },
            { src: "/image/textile/healthcare/surgical-2.jpg", alt: "Theatre lights above an operating table" },
            { src: "/image/textile/healthcare/surgical-3.jpg", alt: "An operating theatre prepared for surgery" },
          ],
        },
        {
          name: "Antimicrobial & Care-Home Textiles",
          layout: "top-wide",
          tagline: "Infection-control fabrics",
          desc:
            "Soft, hard-wearing textiles for long-term care — bedding, blankets and uniforms with antimicrobial, high-temperature-washable finishes that hold up to constant institutional laundering.",
          items: [
            "Antimicrobial bedding & blankets",
            "Care-home uniforms & linen",
            "High-temperature-washable fabrics",
            "Soft, skin-friendly finishes",
          ],
          images: [
            { src: "/image/textile/healthcare/anti-1.jpg", alt: "Neatly folded white and cream care textiles" },
            { src: "/image/textile/healthcare/anti-2.jpg", alt: "Soft folded cream towels on a wooden stool" },
            { src: "/image/textile/healthcare/anti-3.jpg", alt: "A stack of soft pastel folded linens" },
          ],
        },
        {
          name: "Towels & Wipes",
          layout: "duo",
          tagline: "Huck towels, cloths & wipes",
          desc:
            "The high-turnover essentials every facility runs through — huck towels, washcloths and reusable cloths in absorbent cotton, built for repeated high-temperature laundering.",
          items: [
            "Huck & surgical towels",
            "Washcloths & flannels",
            "Reusable cleaning cloths",
            "Absorbent cotton & blends",
          ],
          images: [
            { src: "/image/textile/healthcare/towels-1.jpg", alt: "A neat stack of folded white towels" },
            { src: "/image/textile/healthcare/towels-2.jpg", alt: "Gloved hands folding clean white towels" },
          ],
        },
      ],
    },
  },
];

/* ── Services — aligned to the source build guide (UPTIB_Textile_Website_Content §2.4):
   Marketing & Sales · E-commerce & Warehouse · Buying House (Outsourcing) · Logistics.
   Written global-first; UK is one of several destination markets. ── */
export const services: Service[] = [
  {
    slug: "marketing-sales",
    name: "Marketing & Sales",
    audience: "For Pakistani exporters",
    eyebrow: "Services · Marketing & Sales",
    short: "Visibility, B2B matchmaking and market intelligence — get your products in front of global buyers.",
    headline: "Reach global buyers and grow your exports",
    summary: "We make Pakistani manufacturers visible, credible and reachable to buyers worldwide — and generate the demand that turns into orders.",
    icon: Megaphone,
    primaryCta: { label: "Become a member", href: "/membership" },
  },
  {
    slug: "ecommerce-warehouse",
    name: "E-commerce & Warehouse",
    audience: "For exporters & sellers",
    eyebrow: "Services · E-commerce & Warehouse",
    short: "Sell on Amazon and store close to customers — account setup, listings, FBA prep, warehousing and fulfilment.",
    headline: "Sell online — and store close to your customers",
    summary: "Reach shoppers directly on Amazon and online marketplaces, with the warehousing and fulfilment to back it up.",
    icon: Warehouse,
    primaryCta: { label: "Start selling on Amazon", href: "/contact" },
  },
  {
    slug: "buying-house",
    name: "Buying House (Outsourcing)",
    audience: "For international buyers",
    eyebrow: "Services · Buying House (Outsourcing)",
    short: "Your outsourced Pakistan procurement house — source, sample, inspect and deliver, de-risked.",
    headline: "Source textiles from Pakistan — without the risk",
    summary: "Your outsourced Pakistan procurement department: we find the factory, control the quality, handle the paperwork and deliver.",
    icon: ShoppingCart,
    primaryCta: { label: "Request a quote", href: "/contact" },
  },
  {
    slug: "logistics",
    name: "Logistics",
    audience: "For buyers & exporters",
    eyebrow: "Services · Logistics",
    short: "Freight, customs clearance, export documentation and Importer/Exporter of Record setup.",
    headline: "From a Pakistani factory to your door",
    summary: "We move the goods and handle the paperwork — so a low-cost origin becomes a low-hassle one.",
    icon: Truck,
    primaryCta: { label: "Talk to us about logistics", href: "/contact" },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getService = (slug: string) => services.find((s) => s.slug === slug);
