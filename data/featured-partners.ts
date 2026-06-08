export interface FeaturedPartner {
  id: number;
  slug: string;
  name: string;
  description: string;
  image: string;
  href: string;
  category: string;
  featured: boolean;
  order: number;
}

export const featuredPartners: FeaturedPartner[] = [
  {
    id: 1,
    slug: "prob-n-tech",
    name: "Prob N Tech",
    description:
      "AI-powered automation, custom software, and digital growth systems that help teams work faster and scale consistently across borders.",
    image: "/image/members/prob-n-tech.svg",
    href: "https://probntech.com",
    category: "AI & Data",
    featured: true,
    order: 1,
  },
  {
    id: 2,
    slug: "nexbridge-solutions",
    name: "NexBridge Solutions",
    description:
      "Cross-border fintech infrastructure connecting UK and Pakistani banking ecosystems with secure, real-time payment rails.",
    image: "/image/partners/nexbridge-solutions.webp",
    href: "https://nexbridge.io",
    category: "Fintech",
    featured: true,
    order: 2,
  },
  {
    id: 3,
    slug: "cyberfort-pk",
    name: "CyberFort PK",
    description:
      "Enterprise-grade cybersecurity audits, penetration testing, and compliance consulting for organisations operating in South Asia and the UK.",
    image: "/image/partners/cyberfort-pk.webp",
    href: "https://cyberfort.pk",
    category: "Cybersecurity",
    featured: true,
    order: 3,
  },
  {
    id: 4,
    slug: "cloudara",
    name: "Cloudara",
    description:
      "Multi-cloud architecture, DevOps automation, and managed infrastructure services designed for fast-scaling SaaS startups.",
    image: "/image/partners/cloudara.webp",
    href: "https://cloudara.dev",
    category: "Cloud",
    featured: true,
    order: 4,
  },
  {
    id: 5,
    slug: "greenbit-analytics",
    name: "GreenBit Analytics",
    description:
      "Sustainability-focused data analytics helping enterprises measure, report, and reduce their carbon footprint using AI-driven insights.",
    image: "/image/partners/greenbit-analytics.webp",
    href: "https://greenbit.ai",
    category: "AI & Data",
    featured: true,
    order: 5,
  },
  {
    id: 6,
    slug: "eduvance-global",
    name: "Eduvance Global",
    description:
      "EdTech platform delivering accredited UK tech certifications to Pakistani professionals through live virtual classrooms.",
    image: "/image/partners/eduvance-global.webp",
    href: "https://eduvance.global",
    category: "Consulting",
    featured: true,
    order: 6,
  },
  {
    id: 7,
    slug: "medilink-health",
    name: "MediLink Health",
    description:
      "Telemedicine and health-data interoperability solutions bridging UK NHS standards with Pakistani healthcare providers.",
    image: "/image/partners/medilink-health.webp",
    href: "https://medilink.health",
    category: "HealthTech",
    featured: true,
    order: 7,
  },
  {
    id: 8,
    slug: "tradeflow-ai",
    name: "TradeFlow AI",
    description:
      "AI-driven trade compliance and logistics optimisation for UK–Pakistan import/export businesses, cutting clearance times by 60%.",
    image: "/image/partners/tradeflow-ai.webp",
    href: "https://tradeflow.ai",
    category: "AI & Data",
    featured: true,
    order: 8,
  },
];

export const partnerCategories = [
  "All",
  "AI & Data",
  "Fintech",
  "Cybersecurity",
  "Cloud",
  "Consulting",
  "HealthTech",
];
