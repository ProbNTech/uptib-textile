// ─── Pakistan Textile & Apparel — Global Export Market Data ──────────────────
// Source: "Pakistan Export Market Report 2026–2030" (UPTIB source docs).
// Figures are indicative third-party / industry estimates; refresh before launch.
// Flags live at /image/flags/{iso2}.svg

// ─── Global opportunity headline stats ──────────────────────────────────────
export const globalStats = [
  { end: 359, prefix: "$", suffix: "B", decimals: 0, label: "US apparel market (2024) — the world's largest" },
  { end: 252, prefix: "$", suffix: "B", decimals: 0, label: "US textile market (2022), projected >$320B by 2030" },
  { end: 63.6, prefix: "$", suffix: "B", decimals: 1, label: "UK textile & apparel market (2025)" },
  { end: 62.7, prefix: "$", suffix: "B", decimals: 1, label: "European sportswear market (2025)" },
];

// ─── Product / category strengths ────────────────────────────────────────────
import { BedDouble, Shirt, Activity, Stethoscope, type LucideIcon } from "lucide-react";

export interface Segment {
  title: string;
  image: string;
  icon: LucideIcon;
  tags: string;
  desc: string;
  blurb: string;
  points: string[];
}

export const segments: Segment[] = [
  {
    title: "Home Textiles & Linens",
    image: "/image/textile/products/bedding-linen.jpg",
    icon: BedDouble,
    tags: "Bed linen, Towels, Terry",
    desc: "Pakistan's #1 export across Europe",
    blurb:
      "A world-leading origin for bed linen, towels, terry and hospitality textiles — and Pakistan's single largest export across most European markets.",
    points: ["Bed & bath linen", "Terry towels", "Hotel & hospitality linens", "Kitchen & table linens"],
  },
  {
    title: "Apparel & Denim",
    image: "/image/textile/products/apparel-accessories.jpg",
    icon: Shirt,
    tags: "Knits, Woven, Denim",
    desc: "Vertically integrated, cost-competitive apparel",
    blurb:
      "Vertically integrated from cotton to finished garment, giving a decisive cost edge in knit, woven and denim apparel for global fashion and value retailers.",
    points: ["Knit apparel (HS 61)", "Woven apparel (HS 62)", "Denim & workwear", "Private-label fashion"],
  },
  {
    title: "Sportswear & Activewear",
    image: "/image/textile/products/sportswear-activewear.jpg",
    icon: Activity,
    tags: "Performance, Gym, Teamwear",
    desc: "Fast-growing OEM & private-label capability",
    blurb:
      "Strong OEM and private-label capability in performance garments, teamwear and compression wear — one of the fastest-growing export opportunities.",
    points: ["Performance knitwear", "Gym & activewear", "Compression garments", "Team & club kit"],
  },
  {
    title: "Healthcare & Medical Textiles",
    image: "/image/textile/products/healthcare-textile.jpg",
    icon: Stethoscope,
    tags: "Surgical, PPE, Nonwovens",
    desc: "Emerging, higher-margin technical frontier",
    blurb:
      "An emerging, higher-margin frontier: surgical gowns, hospital linens, PPE and nonwovens — the fastest-growing technical-textile application worldwide.",
    points: ["Surgical gowns & scrubs", "Hospital bedding", "PPE & infection control", "Nonwoven medical fabrics"],
  },
];

// ─── Regions ──────────────────────────────────────────────────────────────────
export interface RegionTable {
  columns: string[];
  rows: { flag?: string; cells: string[] }[];
}

export interface Region {
  id: string;
  name: string;
  short: string;
  flags: string[];
  image: string;
  tagline: string;
  overview: string;
  stats: { value: string; label: string }[];
  table: RegionTable;
  extra?: { title: string; rows: { label: string; value: string }[] };
  opportunities: string[];
}

export const regions: Region[] = [
  {
    id: "north-america",
    name: "North America",
    short: "North America",
    flags: ["us", "ca"],
    image: "/image/textile/products/apparel-accessories.jpg",
    tagline: "The largest apparel market on earth — plus a maturing Canadian opening",
    overview:
      "The United States is the world's largest apparel market, where Pakistan already ranks among the top-10 textile suppliers. Canada offers an attractive, less-contested opening — it imports most of its textiles and apparel and rewards reliable home-textile, denim and sportswear partners.",
    stats: [
      { value: "$4.3B+", label: "Pakistan textile-related exports to the US (2025)" },
      { value: "Top 10", label: "Pakistan's rank among US textile suppliers" },
      { value: "$2–4B", label: "Canada's home-textile import market" },
    ],
    table: {
      columns: ["Sector", "Market size", "Pakistan's exports", "Opportunity"],
      rows: [
        { flag: "us", cells: ["United States — Textiles (all)", "$252B (2022) → >$320B by 2030", ">$4.3B / yr (2025)", "Among top-10 US suppliers"] },
        { flag: "us", cells: ["United States — Apparel", "$359B (2024), world's largest", "Knit $1.42B · Woven $1.14B (2025)", "9th–10th largest US supplier"] },
        { flag: "us", cells: ["United States — Sportswear", "$52.3B (2025)", "$300–500M+ within apparel", "Strong in performance & teamwear"] },
        { flag: "us", cells: ["United States — Medical textiles", "Fastest-growing textile segment", "≈$141–143M (2024–25)", "Small but rapidly growing"] },
        { flag: "ca", cells: ["Canada — Textile & Apparel", "$35–45B combined", "$400–700M / yr (all categories)", "High — less competition than US"] },
      ],
    },
    extra: {
      title: "US apparel exports from Pakistan (2025)",
      rows: [
        { label: "Knit apparel (HS 61)", value: "$1.42B" },
        { label: "Woven apparel (HS 62)", value: "$1.14B" },
        { label: "Other made-up textile articles", value: "$1.62B" },
        { label: "Total textile & apparel related", value: "$4.18B" },
      ],
    },
    opportunities: [
      "Premium home textiles — bed linen, towels and hotel linens",
      "Sustainable & organic-cotton apparel for US retailers",
      "Sportswear & athleisure via OEM / private label",
      "Medical textiles & PPE — the fastest-growing US segment",
      "Canada: knit & woven garments, denim, socks and workwear",
    ],
  },
  {
    id: "united-kingdom",
    name: "United Kingdom",
    short: "UK",
    flags: ["gb"],
    image: "/image/textile/products/bedding-linen.jpg",
    tagline: "A long-standing, relationship-rich destination across every category",
    overview:
      "The UK remains one of Pakistan's most important export destinations, built on preferential access and decades-old sourcing relationships. Demand is strong across apparel, home textiles, sportswear and healthcare textiles — with sustainability and ethical sourcing now central purchasing criteria.",
    stats: [
      { value: "£1.5–2.0B", label: "Pakistan's annual textile exports to the UK" },
      { value: "$85.9B", label: "UK apparel market (2024)" },
      { value: "15%", label: "UK share of the European textile market" },
    ],
    table: {
      columns: ["Sector", "UK market size", "Pakistan's position", "Opportunity"],
      rows: [
        { flag: "gb", cells: ["Textile & Apparel (combined)", "$63.6B (2025)", "£1.5–2.0B / yr combined", "£800M – £1.2B"] },
        { flag: "gb", cells: ["Apparel", "$85.9B (2024)", "Largest export category to the UK", "£500M – £800M"] },
        { flag: "gb", cells: ["Sportswear", "$6.8B (2025)", "Growing — activewear & teamwear", "£100M – £250M"] },
        { flag: "gb", cells: ["Medical textiles", "$1.8B projected", "Small but expanding", "£30M – £100M"] },
      ],
    },
    opportunities: [
      "Private-label & value-priced fashion for major UK retailers",
      "Sustainable cotton garments and school uniforms / workwear",
      "Home textiles — bed linen, towels and knitwear",
      "Activewear, gym wear, compression and football / cricket kit",
      "Medical garments, hospital linens and infection-control textiles",
    ],
  },
  {
    id: "europe",
    name: "Continental Europe",
    short: "Europe",
    flags: ["de", "fr", "it", "es", "nl", "pl"],
    image: "/image/textile/manufacturers.jpg",
    tagline: "Germany, France, Italy, Spain, the Netherlands and Poland anchor the demand",
    overview:
      "For Pakistani exporters, Europe's largest opportunities concentrate in Germany, France, Italy, Spain, the Netherlands and Poland — together accounting for the majority of European textile and apparel imports. The European sportswear market alone was valued at ~$62.7B in 2025 and is forecast to grow rapidly. GSP+ duty-free access into the EU is a genuine competitive edge.",
    stats: [
      { value: "$62.7B", label: "European sportswear market (2025)" },
      { value: "20%", label: "Germany's share — Europe's largest textile market" },
      { value: "6", label: "Core EU markets driving most imports" },
    ],
    table: {
      columns: ["Country", "Textile market", "Apparel import rank", "Sportswear / Healthcare"],
      rows: [
        { flag: "de", cells: ["Germany", "Largest in Europe (20% share)", "#1 apparel importer in the EU", "Very High / Very High"] },
        { flag: "fr", cells: ["France", "16% of European market", "#2 apparel importer in the EU", "High / High"] },
        { flag: "it", cells: ["Italy", "19% of European market", "Top-5 EU apparel importer", "Medium-High / Medium"] },
        { flag: "es", cells: ["Spain", "12% of European market", "#3 apparel importer in the EU", "High / Medium"] },
        { flag: "nl", cells: ["Netherlands", "Major EU distribution hub", "#4 apparel importer in the EU", "High / High"] },
        { flag: "pl", cells: ["Poland", "Fast-growing market", "#6 apparel importer in the EU", "High / Medium"] },
        { flag: "be", cells: ["Belgium", "Logistics & sourcing hub", "Top-10 importer", "Medium / High"] },
        { flag: "pt", cells: ["Portugal", "Smaller, premium market", "Strong manufacturing base", "Medium / Medium"] },
      ],
    },
    opportunities: [
      "Germany — knitwear, denim, workwear, technical & medical textiles; Europe's top market for certified, sustainable goods",
      "France — fashion apparel, premium & sustainable cotton, home textiles, medical nonwovens",
      "Italy — cotton garments, denim, private-label and sustainable fashion for a premium market",
      "Spain — fast-fashion sourcing with competitive pricing and a growing sportswear segment",
      "Netherlands — the gateway hub: apparel, sportswear, medical products and e-commerce fulfilment",
    ],
  },
  {
    id: "middle-east",
    name: "Middle East (GCC)",
    short: "Middle East",
    flags: ["sa", "ae", "qa", "kw"],
    image: "/image/textile/products/healthcare-textile.jpg",
    tagline: "Import-led Gulf markets, with Saudi Arabia and the UAE in the lead",
    overview:
      "The GCC imports a large share of its textiles, apparel, sportswear and healthcare products. The UAE serves as both a consumer market and a re-export hub, while Saudi Arabia offers the largest single GCC opportunity — driven by population growth, healthcare investment and retail expansion.",
    stats: [
      { value: "$18–22B", label: "Saudi Arabia — the largest GCC apparel market" },
      { value: "Re-export", label: "UAE doubles as a consumer market and regional hub" },
      { value: "6", label: "GCC markets actively importing textiles" },
    ],
    table: {
      columns: ["Country", "Apparel market", "Sportswear demand", "Healthcare demand"],
      rows: [
        { flag: "sa", cells: ["Saudi Arabia", "$18–22B", "Very High", "Very High"] },
        { flag: "ae", cells: ["United Arab Emirates", "$12–15B", "Very High", "High"] },
        { flag: "qa", cells: ["Qatar", "$2–3B", "High", "High"] },
        { flag: "kw", cells: ["Kuwait", "$2–3B", "High", "High"] },
        { flag: "om", cells: ["Oman", "$1–2B", "Medium", "Medium"] },
        { flag: "bh", cells: ["Bahrain", "$0.8–1.2B", "Medium", "Medium"] },
      ],
    },
    opportunities: [
      "Apparel and value fashion for fast-growing Gulf retail",
      "Hospitality & institutional textiles for hotels and venues",
      "Sportswear and activewear for young, active populations",
      "Medical textiles & PPE for expanding healthcare systems",
      "Re-export through the UAE into wider MENA markets",
    ],
  },
];

// ─── European country export footprints (Pakistan's current trade) ────────────
export interface CountryFootprint {
  country: string;
  flag: string;
  value: string;
  growth?: string;
  textileShare?: string;
  note: string;
  segments: { label: string; value: string }[];
}

export const europeFootprints: CountryFootprint[] = [
  {
    country: "Italy", flag: "it", value: "$1.1B / yr", growth: "$311M untapped → target >$2B", textileShare: "Anchor of bilateral trade",
    note: "Textiles & apparel generated €153M in Q2 2025 alone — the absolute anchor of a relationship pushing past $2B.",
    segments: [
      { label: "House & bed linens", value: "$204M" },
      { label: "Men's & boys' trousers", value: "$98.2M" },
      { label: "Women's & girls' apparel", value: "High-margin, growing" },
      { label: "Hosiery & knee-length stockings", value: "Specialist mills" },
    ],
  },
  {
    country: "Spain", flag: "es", value: "$1.69B / yr", growth: "+11.2% 5-yr CAGR", textileShare: "85%+ of exports",
    note: "Pakistan's third-largest EU trading partner; total bilateral trade ~$1.95B, heavily skewed in Pakistan's favour.",
    segments: [
      { label: "House linens", value: "$257M" },
      { label: "Men's non-knit suits & trousers", value: "$203M" },
      { label: "Women's non-knit apparel", value: "$199M" },
      { label: "Knitwear & hosiery", value: "Retail networks" },
    ],
  },
  {
    country: "Poland", flag: "pl", value: ">$1B / yr", growth: "+16.1% 5-yr CAGR", textileShare: "~90% of exports",
    note: "Poland has crossed the $1B milestone — one of the fastest-growing European corridors for Pakistani textiles.",
    segments: [
      { label: "House linens (bed & bath)", value: "$162M" },
      { label: "Men's non-knit suits & trousers", value: "$130M" },
      { label: "Women's non-knit apparel", value: "$95.2M" },
      { label: "Knitwear basics & jersey tees", value: ">$20M" },
    ],
  },
  {
    country: "Czech Republic", flag: "cz", value: "$150–180M / yr", growth: "+8.82% 5-yr CAGR", textileShare: "55%+ of exports",
    note: "Anchors total bilateral trade of $302–410M, serving domestic hospitality and commercial laundry networks.",
    segments: [
      { label: "House linens", value: "$54.6M" },
      { label: "Men's non-knit suits & trousers", value: "$53.4M" },
      { label: "Women's non-knit apparel", value: "$29.4M" },
      { label: "Knitwear & everyday hosiery", value: "Value-tier retail" },
    ],
  },
  {
    country: "Portugal", flag: "pt", value: "$222M / yr", textileShare: "91.7% of exports",
    note: "A specialised raw-to-intermediate loop: Portuguese mills buy Pakistani fabric and yarn to dye, print and process locally.",
    segments: [
      { label: "Pure woven cotton fabrics", value: "$56.8M" },
      { label: "Non-retail cotton yarn", value: "$26.4M" },
      { label: "Man-made staple fibres", value: "Growing" },
      { label: "Trousers & knit singlets / tees", value: "Untapped niche" },
    ],
  },
  {
    country: "Greece", flag: "gr", value: "$128–151M / yr", textileShare: "~70% of exports",
    note: "Greece's world-famous tourism and hospitality sectors sustain non-stop demand for durable commercial linens.",
    segments: [
      { label: "House linens (bed, bath & kitchen)", value: "$47.3M" },
      { label: "Bulk cotton fabric & yarn", value: "$8.87M" },
      { label: "Non-knit men's suits & trousers", value: "$7.52M" },
      { label: "Knit / crocheted apparel", value: "$5.98M" },
    ],
  },
  {
    country: "Bulgaria", flag: "bg", value: "$94.7M / yr", growth: "+21.6% 5-yr CAGR", textileShare: "~40% of exports",
    note: "Black Sea resort tourism drives high-volume demand for institutional linens and commercial towels.",
    segments: [
      { label: "House linens (bed, bath & kitchen)", value: "$21.4M" },
      { label: "Non-knit men's suits & trousers", value: "$7.68M" },
      { label: "Woven cotton fabrics & yarn", value: "Intermediate" },
      { label: "Knitwear basics & sportswear", value: "Discount retail" },
    ],
  },
  {
    country: "Slovakia", flag: "sk", value: "$50M / yr", growth: "+83.5% YoY surge", textileShare: "Automotive corridor",
    note: "Monthly exports surged 83.5% in early 2026 — driven by denim workwear and uniforms for the automotive sector.",
    segments: [
      { label: "Men's non-knit suits & trousers", value: "$20M" },
      { label: "House linens (bed & bath)", value: "$18M" },
      { label: "Knit socks, hosiery & basics", value: "$11.3M" },
      { label: "Plain woven cotton fabrics", value: "Emerging" },
    ],
  },
  {
    country: "Lithuania", flag: "lt", value: "$48.1M / yr", growth: "+8.28% 5-yr CAGR", textileShare: "Baltic corridor",
    note: "A focused Baltic corridor: industrial processors import raw Pakistani fabric to dye, treat and finish locally.",
    segments: [
      { label: "Light pure woven cotton fabrics", value: "$8.21M" },
      { label: "House linens (bed, bath & kitchen)", value: "$7.15M" },
      { label: "Light synthetic & poly-blend fabrics", value: "$6.83M" },
      { label: "Other made-up textile articles", value: "$6.9M" },
    ],
  },
  {
    country: "Romania", flag: "ro", value: "$40–50M / yr", textileShare: "Trade scaling to $500M",
    note: "Expanding rapidly within a broader bilateral partnership scaling toward $500M in total trade.",
    segments: [
      { label: "House linens (bed, bath & kitchen)", value: "$17.3M" },
      { label: "Mattresses & technical bedding", value: "$7.68M" },
      { label: "Knitwear & ready-made suits", value: "$5.64M" },
      { label: "Raw cotton yarn & woven fabrics", value: "Emerging" },
    ],
  },
  {
    country: "Hungary", flag: "hu", value: "$27.5M / yr", textileShare: "52%+ of exports",
    note: "A specialised entry point into Central Europe, dominated by institutional bedding for budget hotel networks.",
    segments: [
      { label: "House linens", value: "$27.5M" },
      { label: "Knitwear basics & jersey tees", value: "Emerging" },
      { label: "Woven cotton fabrics", value: "Finishing mills" },
    ],
  },
  {
    country: "Latvia", flag: "lv", value: "$16.8M / yr", textileShare: "64% of exports",
    note: "A tightly-focused Baltic niche feeding commercial hospitality and healthcare infrastructure.",
    segments: [
      { label: "House linens (bed, bath & kitchen)", value: "$4.92M" },
      { label: "Heavy pure woven cotton fabrics", value: "$3.14M" },
      { label: "Other made-up textile articles", value: "$1.82M" },
      { label: "Knitwear basics & jersey apparel", value: ">$1M" },
    ],
  },
  {
    country: "Estonia", flag: "ee", value: "$10.5M / yr", textileShare: "~70% of exports",
    note: "The most specialised Baltic destination, supplying boutique hospitality and corporate laundry operations.",
    segments: [
      { label: "House linens (bed, bath & kitchen)", value: "$3.85M" },
      { label: "Heavy pure woven cotton fabrics", value: "$2.41M" },
      { label: "Knitwear basics & jersey apparel", value: "$1.52M" },
      { label: "Other made-up textile articles", value: "$1.2M" },
    ],
  },
];

// ─── Competitive landscape ────────────────────────────────────────────────────
export const competitors = [
  { name: "China", flag: "cn" },
  { name: "Bangladesh", flag: "bd" },
  { name: "Vietnam", flag: "vn" },
  { name: "India", flag: "in" },
  { name: "Türkiye", flag: "tr" },
];

export const advantages = [
  { title: "Cotton at the Source", desc: "One of the world's largest cotton producers — raw material on the doorstep, not on a ship." },
  { title: "Vertical Integration", desc: "Cotton to finished garment under one roof, from spinning and weaving to dyeing and stitching." },
  { title: "Manufacturing Depth", desc: "Decades of scale in knit, woven, denim and home textiles, with ~40 million people across the value chain." },
  { title: "Preferential Access", desc: "GSP+ duty-free access to the EU and long-standing UK sourcing relationships lower the landed cost." },
  { title: "Competitive Pricing", desc: "A structural cost edge over European and many Asian rivals on high-volume, value-tier production." },
  { title: "Higher Value per $", desc: "Fast-growing capability in sportswear, technical and medical textiles — the higher-margin frontier." },
];

// ─── Market-entry playbook ─────────────────────────────────────────────────────
// `image` renders as a faint photo at the foot of each playbook column.
export const entrySteps = [
  { title: "Certification Compliance", desc: "GOTS, BCI, OEKO-TEX and social-compliance audits to clear European and North American buyer gates.", image: "/image/textile/products/healthcare-textile.jpg" },
  { title: "Sustainability & Ethics", desc: "Organic and recycled cotton, transparent supply chains and ethical sourcing — now decisive purchasing criteria.", image: "/image/textile/products/bedding-linen.jpg" },
  { title: "Product Innovation", desc: "Move up the value curve into performance, technical and medical textiles where margins are strongest.", image: "/image/textile/products/sportswear-activewear.jpg" },
  { title: "Digital Marketing", desc: "Direct buyer outreach, B2B marketplaces and e-commerce fulfilment, including warehousing in EU hubs.", image: "/image/textile/products/apparel-accessories.jpg" },
  { title: "Buyer Diversification", desc: "Spread risk across the US, UK, EU and GCC rather than concentrating on any single destination.", image: "/image/textile/manufacturers.jpg" },
  { title: "Trade Exhibitions", desc: "Presence at international fairs and curated trade delegations to build durable buyer relationships.", image: "/image/textile/exporters.jpg" },
];
