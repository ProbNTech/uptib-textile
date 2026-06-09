/* ──────────────────────────────────────────────────────────────────
   UPTIB Textile — central content model.
   Single source of truth for products, services, stats and markets so
   copy is editable in one place (BUILD PROMPT §11). All copy is written
   GLOBAL-first: Pakistan → the world; UK is one example market.
─────────────────────────────────────────────────────────────────── */
import {
  BedDouble, Shirt, Dumbbell, Stethoscope,
  ShoppingCart, ClipboardCheck, Megaphone, Warehouse,
  ShieldCheck, Globe2, Handshake, BadgePercent,
  type LucideIcon,
} from "lucide-react";

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

/* ── Why UPTIB ── */
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
    name: "Bedding & Linen",
    eyebrow: "Products · Bedding & Linen",
    short: "Bed linen, towels, and hotel & bath textiles — Pakistan's strongest category.",
    headline: "Hotel-grade bedding and bath, made in Pakistan",
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
  },
];

/* ── Services (new taxonomy: Buying · Outsourcing · Marketing · Warehousing) ── */
export const services: Service[] = [
  {
    slug: "buying",
    name: "Buying",
    audience: "For international buyers",
    eyebrow: "Services · Buying",
    short: "Source finished textiles from Pakistan — quote to delivery, quality guaranteed.",
    headline: "Source finished textiles from Pakistan",
    summary: "For international buyers sourcing dependable Pakistani product, delivered on-spec and on-time.",
    icon: ShoppingCart,
    primaryCta: { label: "Request a quote", href: "/contact" },
  },
  {
    slug: "outsourcing",
    name: "Outsourcing",
    audience: "For overseas businesses",
    eyebrow: "Services · Outsourcing",
    short: "Your outsourced Pakistan procurement house — vetted factories, QA to AQL, docs and logistics.",
    headline: "Your outsourced Pakistan procurement department",
    summary: "Vetted factories, sample approval, multi-stage QA, export docs, shipping and customs — de-risked.",
    icon: ClipboardCheck,
    primaryCta: { label: "Talk to us about sourcing", href: "/contact" },
  },
  {
    slug: "marketing",
    name: "Marketing",
    audience: "For Pakistani exporters",
    eyebrow: "Services · Marketing",
    short: "Visibility, B2B matchmaking and market intelligence for exporters going global.",
    headline: "Reach global buyers and grow your exports",
    summary: "We make Pakistani manufacturers visible, credible and reachable to buyers worldwide.",
    icon: Megaphone,
    primaryCta: { label: "Become a member", href: "/membership" },
  },
  {
    slug: "warehousing",
    name: "Warehousing",
    audience: "For Pakistani exporters",
    eyebrow: "Services · Warehousing",
    short: "Warehousing, e-commerce and Amazon market access — sell direct to global consumers.",
    headline: "Sell online — and store close to your customers",
    summary: "Turn suppliers into brand owners selling directly to consumers in global marketplaces.",
    icon: Warehouse,
    primaryCta: { label: "Start selling online", href: "/contact" },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getService = (slug: string) => services.find((s) => s.slug === slug);
