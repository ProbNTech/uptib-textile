import type { Stat } from "@/types";

/** Hero / trust strip — refresh annually (source: content doc §3.4). */
export const heroStats: Stat[] = [
  { value: "US$2.27bn", label: "UK–Pakistan trade a year" },
  { value: "77%", label: "of it is textiles" },
  { value: "GSP+", label: "duty-free advantage" },
  { value: "London + Lahore", label: "offices" },
];

/** Wider set of credibility figures, used on About and facts contexts. */
export const marketStats: Stat[] = [
  { value: "US$2.27bn", label: "UK imports from Pakistan in a year" },
  { value: "Over 77%", label: "of those imports is clothing + textiles" },
  { value: "US$63.6bn", label: "the UK textile & apparel market" },
  { value: "US$7.2bn", label: "the UK home-textile market" },
  { value: "US$6.78bn", label: "the UK sportswear market, and growing" },
  { value: "US$1.84bn", label: "the UK medical / healthcare textile market" },
];

/** UK buyer segments (home / about). */
export const ukBuyers = [
  "Major retailers — Primark, ASDA, Tesco, M&S, Next",
  "Fashion buyers & sourcing houses",
  "Home-textile importers",
  "Hotel & hospitality procurement",
  "Amazon UK & e-commerce brands",
  "Sustainable-textile buyers",
];

/** Major UK buying trends 2026–2030 (home / about / products). */
export const buyingTrends = [
  {
    title: "Sustainable & ethical sourcing",
    body: "The single biggest purchasing trend. Many UK retailers now require GOTS, OEKO-TEX, BCI, Sedex, WRAP or ISO certification before onboarding a supplier.",
  },
  {
    title: "Private-label manufacturing",
    body: "Brands outsource production and focus on branding — driving demand for design support, packaging, small runs and fast turnaround.",
  },
  {
    title: "Premium home living",
    body: "Higher consumer spend on luxury bedding, hotel-quality towels and lifestyle home collections.",
  },
  {
    title: "E-commerce-driven sourcing",
    body: "Amazon UK sellers, Shopify brands and direct-to-consumer labels actively seeking reliable manufacturing partners.",
  },
  {
    title: "Recycled & circular textiles",
    body: "Recycled cotton and polyester and textile-to-textile recycling, ahead of stricter UK and EU sustainability regulation.",
  },
];

export const whyUptib = [
  {
    icon: "vetted",
    title: "A vetted network of Pakistani manufacturers",
    body: "Across every category — home textiles, apparel, sportswear and healthcare.",
  },
  {
    icon: "quality",
    title: "Quality control on the ground in Pakistan",
    body: "Independent inspection against your approved sample — not just the factory's word.",
  },
  {
    icon: "partner",
    title: "A UK-based, accountable partner",
    body: "One point of contact, from first enquiry to final delivery.",
  },
  {
    icon: "gsp",
    title: "The GSP+ duty-free advantage",
    body: "Preferential, duty-free entry for qualifying Pakistani textiles into the UK.",
  },
];
