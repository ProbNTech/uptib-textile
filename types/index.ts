import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Products                                                            */
/* ------------------------------------------------------------------ */

export type ProductSlug =
  | "bedding-linen"
  | "apparel-accessories"
  | "sportswear-activewear"
  | "healthcare-textile";

export type ProductFacts = {
  strength: string;
  ukDemand: string;
  marketSize: string;
  certifications: string;
};

export type MarketRow = { label: string; value: string };

export type ProductSubgroup = {
  title: string;
  items: string[];
};

export type Product = {
  slug: ProductSlug;
  eyebrow: string;
  title: string;
  cardTitle: string;
  cardBlurb: string;
  summary: string;
  intro: string;
  /** Longer 2–3 paragraph narrative for the detail page. */
  overview: string[];
  primaryCta: string;
  icon: string;
  badge?: string;
  included: string[];
  /** Optional grouped product sub-lists (e.g. men's / women's / children's). */
  subgroups?: ProductSubgroup[];
  /** Why Pakistan is competitive here. */
  whyPakistan: string[];
  /** UK buyer segments for this category. */
  whoBuys: string[];
  /** Best-selling / high-demand products in the UK. */
  bestSellers: string[];
  /** Category-specific UK trends. */
  trends?: string[];
  /** Headline market figures rendered as a small table. */
  marketRows: MarketRow[];
  facts: ProductFacts;
};

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type ServiceSlug =
  | "marketing-sales"
  | "ecommerce-warehouse"
  | "buying-house"
  | "logistics";

export type CalloutTone = "blue" | "green" | "navy" | "red" | "gold";

export type Phase = {
  name: string;
  title: string;
  body: string;
};

export type MembershipTier = {
  tier: string;
  price: string;
  includes: string;
  bestFor: string;
  featured?: boolean;
};

export type ProcessStep = {
  step: number;
  title: string;
  body: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type ServiceCallout = {
  tone: CalloutTone;
  title: string;
  body: string;
};

export type ServiceList = {
  title: string;
  items: string[];
};

export type Service = {
  slug: ServiceSlug;
  eyebrow: string;
  title: string;
  cardTitle: string;
  cardBlurb: string;
  summary: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
  icon: string;
  whatItIs: string;
  /** Longer narrative paragraphs for the detail page. */
  overview?: string[];
  whatWeDo: string[];
  /** Optional additional grouped lists (e.g. Amazon + warehousing). */
  extraLists?: ServiceList[];
  marketplaces?: string[];
  /** Phased programme (e.g. the marketing engine). */
  phases?: Phase[];
  /** Headline benefits / value props. */
  benefits?: string[];
  /** Market-context figures rendered as a small table. */
  marketRows?: MarketRow[];
  membership?: MembershipTier[];
  process?: ProcessStep[];
  processTitle?: string;
  processEyebrow?: string;
  waysToWork?: { title: string; body: string }[];
  faqs?: Faq[];
  callout?: ServiceCallout;
};

/* ------------------------------------------------------------------ */
/* Directory                                                           */
/* ------------------------------------------------------------------ */

export type City = "Faisalabad" | "Sialkot" | "Lahore" | "Karachi" | "Multan";

export type CompanyType =
  | "Manufacturer"
  | "Sourcing house"
  | "Manufacturer / sourcing";

export type ProductCategory =
  | "Bedding & Linen"
  | "Apparel & Accessories"
  | "Sportswear & Activewear"
  | "Healthcare Textile";

export type Certification =
  | "GOTS"
  | "OEKO-TEX"
  | "BCI"
  | "Sedex"
  | "WRAP"
  | "ISO"
  | "CE"
  | "AAMI"
  | "EN ISO";

export type Company = {
  name: string;
  location: City;
  type: CompanyType;
  categories: ProductCategory[];
  keyProducts: string[];
  certifications: Certification[];
  moq?: string;
  lead?: string;
  markets?: string;
  experience?: string;
  note?: string;
};

/* ------------------------------------------------------------------ */
/* Misc shared shapes                                                  */
/* ------------------------------------------------------------------ */

export type Stat = {
  value: string;
  label: string;
};

export type NavLeaf = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavLeaf[];
};

export type IconName = keyof typeof import("lucide-react");

export type { LucideIcon };
