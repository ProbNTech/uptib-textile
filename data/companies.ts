// Directory companies — mock data layer.
//
// This module is the single source of truth for the directory pages today.
// The data shape mirrors what a Clutch-style provider would return so the
// service layer (`lib/companyService.ts`) can be swapped to a real API or
// database without changing page/component code.
//
// All entries here are fictional placeholders. `websiteUrl` and
// `clutchProfileUrl` are intentionally OMITTED — UI shows "Profile coming
// soon" and hides the Website button until real, verified URLs are added.
// Never use example.com or other placeholder URLs in this file.

export type CompanyCategory =
  // Categories used by the mock-data directories (/top-ai-companies, /top-it-companies)
  | "AI"
  | "IT"
  | "Software"
  | "Cloud"
  | "Cybersecurity"
  | "Data"
  // Categories used by real UPTIB members on /pakistan-top-companies — chosen
  // to reflect what each company actually does (AI/automation, custom software,
  // SaaS, project consulting), not the generic CompanyService bucket.
  | "AI & Automation"
  | "Software Development"
  | "SaaS Products"
  | "Consulting"
  // Textile categories — used by the UPTIB textile manufacturer showcase
  | "Home & Hospitality Textiles"
  | "Apparel & Knitwear"
  | "Sportswear & Activewear"
  | "Healthcare Textiles"
  | "Sourcing & Buying House"
  | "Yarn & Fabric";

export interface DirectoryCompany {
  /** Stable identifier from the source system. */
  id: string;
  /** URL-friendly identifier. */
  slug: string;
  name: string;
  /** Primary category bucket — drives which directory the company appears in. */
  category: CompanyCategory;
  /** Free-form service tags shown on the card. */
  services: string[];
  /** Average rating, 0–5, one decimal. Omitted for verified members without external review data. */
  rating?: number;
  /** Total review count from the source. Omitted for verified members without external review data. */
  reviewCount?: number;
  /** "City, Country" — full readable string. */
  location: string;
  country: string;
  description: string;
  /** Optional hosted logo. When absent the card renders initials. */
  logoUrl?: string;
  /** Optional company website — only set when a real, verified URL is known. */
  websiteUrl?: string;
  /**
   * Optional public Clutch profile URL (or equivalent source profile).
   * When absent, the card shows a "Profile coming soon" placeholder instead
   * of linking out. Only populate this with real, verified profile URLs.
   */
  clutchProfileUrl?: string;
  /** Provenance label, shown on the card. */
  source: "Clutch" | "Mock" | "Member";
  /** Marked true when source has verified the listing. */
  verified: boolean;
}

/**
 * 16 placeholder companies covering AI and IT/Software/Cloud/Cybersecurity.
 * Logos and URLs are intentionally omitted — cards render initials and a
 * "Profile coming soon" label. Replace with API data via
 * `lib/companyService.ts` when a real source is wired up.
 */
export const companies: DirectoryCompany[] = [
  {
    id: "mock-001",
    slug: "northwind-ai-labs",
    name: "Northwind AI Labs",
    category: "AI",
    services: ["Machine Learning", "LLM Engineering", "Computer Vision"],
    rating: 4.9,
    reviewCount: 127,
    location: "London, United Kingdom",
    country: "United Kingdom",
    description:
      "Applied AI consultancy building production LLM pipelines, RAG systems, and computer vision tooling for regulated industries.",
    source: "Mock",
    verified: true,
  },
  {
    id: "mock-002",
    slug: "lumen-automation",
    name: "Lumen Automation",
    category: "AI",
    services: ["Process Automation", "RPA", "AI Agents"],
    rating: 4.8,
    reviewCount: 96,
    location: "Manchester, United Kingdom",
    country: "United Kingdom",
    description:
      "End-to-end automation studio combining RPA, workflow orchestration, and bespoke AI agents for back-office operations.",
    source: "Mock",
    verified: true,
  },
  {
    id: "mock-003",
    slug: "indus-machine-intelligence",
    name: "Indus Machine Intelligence",
    category: "AI",
    services: ["NLP", "Predictive Analytics", "MLOps"],
    rating: 4.7,
    reviewCount: 81,
    location: "Lahore, Pakistan",
    country: "Pakistan",
    description:
      "ML engineering team specialising in NLP, time-series forecasting, and production MLOps for fintech and telco clients.",
    source: "Mock",
    verified: true,
  },
  {
    id: "mock-004",
    slug: "veridian-ai",
    name: "Veridian AI",
    category: "AI",
    services: ["Generative AI", "Chatbots", "Voice AI"],
    rating: 4.6,
    reviewCount: 64,
    location: "Berlin, Germany",
    country: "Germany",
    description:
      "Generative AI product studio shipping branded chat, voice, and multimodal copilots for B2B SaaS and retail brands.",
    source: "Mock",
    verified: false,
  },
  {
    id: "mock-005",
    slug: "halcyon-data-science",
    name: "Halcyon Data Science",
    category: "Data",
    services: ["Data Engineering", "BI", "Data Warehousing"],
    rating: 4.8,
    reviewCount: 102,
    location: "Edinburgh, United Kingdom",
    country: "United Kingdom",
    description:
      "Modern data stack specialists — Snowflake, dbt, and reverse-ETL pipelines paired with executive-ready analytics.",
    source: "Mock",
    verified: true,
  },
  {
    id: "mock-006",
    slug: "kestrel-software-group",
    name: "Kestrel Software Group",
    category: "Software",
    services: ["Custom Software", "Web Apps", "Mobile Apps"],
    rating: 4.9,
    reviewCount: 188,
    location: "London, United Kingdom",
    country: "United Kingdom",
    description:
      "Senior product engineering teams building bespoke web and mobile applications for FTSE-listed and growth-stage clients.",
    source: "Mock",
    verified: true,
  },
  {
    id: "mock-007",
    slug: "arclight-cloud",
    name: "Arclight Cloud",
    category: "Cloud",
    services: ["AWS", "DevOps", "Kubernetes"],
    rating: 4.7,
    reviewCount: 73,
    location: "Dublin, Ireland",
    country: "Ireland",
    description:
      "AWS Advanced Tier consultancy providing landing zones, platform engineering, and FinOps for regulated cloud workloads.",
    source: "Mock",
    verified: true,
  },
  {
    id: "mock-008",
    slug: "harbour-cybersecurity",
    name: "Harbour Cybersecurity",
    category: "Cybersecurity",
    services: ["Pen Testing", "SOC", "Compliance"],
    rating: 4.8,
    reviewCount: 91,
    location: "Birmingham, United Kingdom",
    country: "United Kingdom",
    description:
      "Offensive and defensive security firm — pen tests, managed SOC, and ISO 27001/SOC 2 readiness for scale-ups.",
    source: "Mock",
    verified: true,
  },
  {
    id: "mock-009",
    slug: "meridian-it-services",
    name: "Meridian IT Services",
    category: "IT",
    services: ["IT Support", "Managed Services", "Microsoft 365"],
    rating: 4.6,
    reviewCount: 142,
    location: "Bristol, United Kingdom",
    country: "United Kingdom",
    description:
      "Managed IT and Microsoft 365 partner for UK SMBs — 24/7 service desk, device management, and modern workplace rollouts.",
    source: "Mock",
    verified: false,
  },
  {
    id: "mock-010",
    slug: "saffron-digital",
    name: "Saffron Digital",
    category: "Software",
    services: ["React", "Node.js", "Product Engineering"],
    rating: 4.5,
    reviewCount: 58,
    location: "Karachi, Pakistan",
    country: "Pakistan",
    description:
      "Full-stack product team building React and Node.js platforms for UK and EU clients — design, build, and ongoing iteration.",
    source: "Mock",
    verified: false,
  },
  {
    id: "mock-011",
    slug: "polaris-it-solutions",
    name: "Polaris IT Solutions",
    category: "IT",
    services: ["Networking", "Infrastructure", "Help Desk"],
    rating: 4.4,
    reviewCount: 49,
    location: "Glasgow, United Kingdom",
    country: "United Kingdom",
    description:
      "Infrastructure, networking, and help desk services for mid-market organisations across financial and professional services.",
    source: "Mock",
    verified: false,
  },
  {
    id: "mock-012",
    slug: "atlas-ai-systems",
    name: "Atlas AI Systems",
    category: "AI",
    services: ["AI Strategy", "Model Fine-Tuning", "MLOps"],
    rating: 4.9,
    reviewCount: 154,
    location: "Amsterdam, Netherlands",
    country: "Netherlands",
    description:
      "Boutique AI strategy and engineering firm — model selection, fine-tuning, and MLOps for enterprise rollouts.",
    source: "Mock",
    verified: true,
  },
  {
    id: "mock-013",
    slug: "obsidian-software-works",
    name: "Obsidian Software Works",
    category: "Software",
    services: [".NET", "Azure", "Enterprise Software"],
    rating: 4.6,
    reviewCount: 87,
    location: "Warsaw, Poland",
    country: "Poland",
    description:
      "Enterprise .NET and Azure delivery partner with a long track record in logistics, manufacturing, and public sector.",
    source: "Mock",
    verified: true,
  },
  {
    id: "mock-014",
    slug: "beacon-cloud-services",
    name: "Beacon Cloud Services",
    category: "Cloud",
    services: ["Azure", "Terraform", "Platform Engineering"],
    rating: 4.5,
    reviewCount: 62,
    location: "Leeds, United Kingdom",
    country: "United Kingdom",
    description:
      "Azure-focused platform engineering team building internal developer platforms and Terraform-based landing zones.",
    source: "Mock",
    verified: false,
  },
  {
    id: "mock-015",
    slug: "sentinel-cyberworks",
    name: "Sentinel Cyberworks",
    category: "Cybersecurity",
    services: ["Threat Intel", "Incident Response", "Cloud Security"],
    rating: 4.7,
    reviewCount: 78,
    location: "Islamabad, Pakistan",
    country: "Pakistan",
    description:
      "Threat intelligence and incident response specialists with deep experience securing fintech and SaaS environments.",
    source: "Mock",
    verified: true,
  },
  {
    id: "mock-016",
    slug: "horizon-it-consulting",
    name: "Horizon IT Consulting",
    category: "IT",
    services: ["IT Strategy", "Digital Transformation", "ERP"],
    rating: 4.5,
    reviewCount: 110,
    location: "Madrid, Spain",
    country: "Spain",
    description:
      "Digital transformation consultancy guiding mid-market firms through IT strategy refresh and ERP modernisation.",
    source: "Mock",
    verified: true,
  },
];

/** Categories considered "IT-adjacent" for the IT directory views. */
export const IT_CATEGORIES: CompanyCategory[] = [
  "IT",
  "Software",
  "Cloud",
  "Cybersecurity",
  "Data",
];
