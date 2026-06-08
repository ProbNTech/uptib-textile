import {
  Brain,
  Boxes,
  Code2,
  Compass,
  Cloud,
  ShieldAlert,
  Cpu,
  Sparkles,
  Database,
  BedDouble,
  Shirt,
  Dumbbell,
  Stethoscope,
  Handshake,
  Layers,
  type LucideIcon,
} from "lucide-react";
import type { CompanyCategory } from "@/data/companies";

export interface CategoryStyle {
  /** Solid brand colour used for accents (top strip, chips). */
  color: string;
  /** Lighter tone used in glows. */
  accent: string;
  /** Two-stop CSS gradient string (used in linear-gradient(...)). */
  gradient: string;
  icon: LucideIcon;
  short: string;
}

const FALLBACK: CategoryStyle = {
  color: "#64748B",
  accent: "#94A3B8",
  gradient: "linear-gradient(135deg, #64748B 0%, #94A3B8 100%)",
  icon: Sparkles,
  short: "Technology",
};

/**
 * Single source of truth for category visual identity.
 * Used by CompanyCard, IndustriesSpotlight, FeaturedSpotlight, filter chips.
 */
export const CATEGORY_STYLE: Record<CompanyCategory, CategoryStyle> = {
  "AI & Automation": {
    color: "#047857",
    accent: "#6FA9FF",
    gradient: "linear-gradient(135deg, #047857 0%, #6FA9FF 100%)",
    icon: Brain,
    short: "AI agents, automation pipelines and ML systems.",
  },
  "SaaS Products": {
    color: "#01A95C",
    accent: "#6FE7B4",
    gradient: "linear-gradient(135deg, #01A95C 0%, #6FE7B4 100%)",
    icon: Boxes,
    short: "Productised platforms shipped to underserved markets.",
  },
  "Software Development": {
    color: "#06B6D4",
    accent: "#67E8F9",
    gradient: "linear-gradient(135deg, #06B6D4 0%, #67E8F9 100%)",
    icon: Code2,
    short: "Bespoke web, mobile and enterprise engineering.",
  },
  Consulting: {
    color: "#F59E0B",
    accent: "#FCD34D",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)",
    icon: Compass,
    short: "PMaaS, transformation and strategic delivery.",
  },
  Cybersecurity: {
    color: "#047857",
    accent: "#FCA5A5",
    gradient: "linear-gradient(135deg, #047857 0%, #FCA5A5 100%)",
    icon: ShieldAlert,
    short: "Pen-testing, SOC and managed security.",
  },
  Cloud: {
    color: "#6366F1",
    accent: "#A5B4FC",
    gradient: "linear-gradient(135deg, #6366F1 0%, #A5B4FC 100%)",
    icon: Cloud,
    short: "Cloud-native platforms and DevOps engineering.",
  },
  AI: {
    color: "#7C3AED",
    accent: "#C4B5FD",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #C4B5FD 100%)",
    icon: Cpu,
    short: "Applied AI services.",
  },
  IT: {
    color: "#475569",
    accent: "#94A3B8",
    gradient: "linear-gradient(135deg, #475569 0%, #94A3B8 100%)",
    icon: Sparkles,
    short: "IT support and managed services.",
  },
  Software: {
    color: "#0EA5E9",
    accent: "#7DD3FC",
    gradient: "linear-gradient(135deg, #0EA5E9 0%, #7DD3FC 100%)",
    icon: Code2,
    short: "Custom software delivery.",
  },
  Data: {
    color: "#10B981",
    accent: "#86EFAC",
    gradient: "linear-gradient(135deg, #10B981 0%, #86EFAC 100%)",
    icon: Database,
    short: "Data engineering and analytics.",
  },
  "Home & Hospitality Textiles": {
    color: "#047857",
    accent: "#6EE7B7",
    gradient: "linear-gradient(135deg, #047857 0%, #6EE7B7 100%)",
    icon: BedDouble,
    short: "Bedding, towels and hotel & hospital linen.",
  },
  "Apparel & Knitwear": {
    color: "#2563EB",
    accent: "#93C5FD",
    gradient: "linear-gradient(135deg, #2563EB 0%, #93C5FD 100%)",
    icon: Shirt,
    short: "Private-label and OEM apparel, woven and knit.",
  },
  "Sportswear & Activewear": {
    color: "#0D9488",
    accent: "#5EEAD4",
    gradient: "linear-gradient(135deg, #0D9488 0%, #5EEAD4 100%)",
    icon: Dumbbell,
    short: "Custom and sublimated sportswear and teamwear.",
  },
  "Healthcare Textiles": {
    color: "#0891B2",
    accent: "#67E8F9",
    gradient: "linear-gradient(135deg, #0891B2 0%, #67E8F9 100%)",
    icon: Stethoscope,
    short: "Scrubs, gowns, uniforms and hospital linen.",
  },
  "Sourcing & Buying House": {
    color: "#059669",
    accent: "#6EE7B7",
    gradient: "linear-gradient(135deg, #059669 0%, #6EE7B7 100%)",
    icon: Handshake,
    short: "Sourcing, buying-house and quality-assurance services.",
  },
  "Yarn & Fabric": {
    color: "#16A34A",
    accent: "#86EFAC",
    gradient: "linear-gradient(135deg, #16A34A 0%, #86EFAC 100%)",
    icon: Layers,
    short: "Spinning, weaving, yarn and greige fabric.",
  },
};

export function getCategoryStyle(category: CompanyCategory | string | undefined): CategoryStyle {
  if (!category) return FALLBACK;
  return CATEGORY_STYLE[category as CompanyCategory] ?? FALLBACK;
}
