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
  color: "#8C9AAB",
  accent: "#94A3B8",
  gradient: "linear-gradient(135deg, #8C9AAB 0%, #94A3B8 100%)",
  icon: Sparkles,
  short: "Technology",
};

/**
 * Single source of truth for category visual identity.
 * Used by CompanyCard, IndustriesSpotlight, FeaturedSpotlight, filter chips.
 */
export const CATEGORY_STYLE: Record<CompanyCategory, CategoryStyle> = {
  "AI & Automation": {
    color: "#394F73",
    accent: "#8A857C",
    gradient: "linear-gradient(135deg, #78899B 0%, #8A857C 100%)",
    icon: Brain,
    short: "AI agents, automation pipelines and ML systems.",
  },
  "SaaS Products": {
    color: "#A3AEBC",
    accent: "#D8CDBA",
    gradient: "linear-gradient(135deg, #A3AEBC 0%, #D8CDBA 100%)",
    icon: Boxes,
    short: "Productised platforms shipped to underserved markets.",
  },
  "Software Development": {
    color: "#8A857C",
    accent: "#D8CDBA",
    gradient: "linear-gradient(135deg, #8A857C 0%, #D8CDBA 100%)",
    icon: Code2,
    short: "Bespoke web, mobile and enterprise engineering.",
  },
  Consulting: {
    color: "#8A857C",
    accent: "#D8CDBA",
    gradient: "linear-gradient(135deg, #8A857C 0%, #D8CDBA 100%)",
    icon: Compass,
    short: "PMaaS, transformation and strategic delivery.",
  },
  Cybersecurity: {
    color: "#394F73",
    accent: "#FCA5A5",
    gradient: "linear-gradient(135deg, #78899B 0%, #FCA5A5 100%)",
    icon: ShieldAlert,
    short: "Pen-testing, SOC and managed security.",
  },
  Cloud: {
    color: "#8C9AAB",
    accent: "#B3AA98",
    gradient: "linear-gradient(135deg, #8C9AAB 0%, #B3AA98 100%)",
    icon: Cloud,
    short: "Cloud-native platforms and DevOps engineering.",
  },
  AI: {
    color: "#8C9AAB",
    accent: "#B3AA98",
    gradient: "linear-gradient(135deg, #8C9AAB 0%, #B3AA98 100%)",
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
    color: "#A3AEBC",
    accent: "#B3AA98",
    gradient: "linear-gradient(135deg, #A3AEBC 0%, #B3AA98 100%)",
    icon: Code2,
    short: "Custom software delivery.",
  },
  Data: {
    color: "#394F73",
    accent: "#D8CDBA",
    gradient: "linear-gradient(135deg, #78899B 0%, #D8CDBA 100%)",
    icon: Database,
    short: "Data engineering and analytics.",
  },
  "Home & Hospitality Textiles": {
    color: "#394F73",
    accent: "#B3AA98",
    gradient: "linear-gradient(135deg, #78899B 0%, #B3AA98 100%)",
    icon: BedDouble,
    short: "Bedding, towels and hotel & hospital linen.",
  },
  "Apparel & Knitwear": {
    color: "#8C9AAB",
    accent: "#B3AA98",
    gradient: "linear-gradient(135deg, #8C9AAB 0%, #B3AA98 100%)",
    icon: Shirt,
    short: "Private-label and OEM apparel, woven and knit.",
  },
  "Sportswear & Activewear": {
    color: "#A3AEBC",
    accent: "#D8CDBA",
    gradient: "linear-gradient(135deg, #A3AEBC 0%, #D8CDBA 100%)",
    icon: Dumbbell,
    short: "Custom and sublimated sportswear and teamwear.",
  },
  "Healthcare Textiles": {
    color: "#A3AEBC",
    accent: "#D8CDBA",
    gradient: "linear-gradient(135deg, #A3AEBC 0%, #D8CDBA 100%)",
    icon: Stethoscope,
    short: "Scrubs, gowns, uniforms and hospital linen.",
  },
  "Sourcing & Buying House": {
    color: "#394F73",
    accent: "#B3AA98",
    gradient: "linear-gradient(135deg, #647689 0%, #B3AA98 100%)",
    icon: Handshake,
    short: "Sourcing, buying-house and quality-assurance services.",
  },
  "Yarn & Fabric": {
    color: "#A3AEBC",
    accent: "#D8CDBA",
    gradient: "linear-gradient(135deg, #A3AEBC 0%, #D8CDBA 100%)",
    icon: Layers,
    short: "Spinning, weaving, yarn and greige fabric.",
  },
};

export function getCategoryStyle(category: CompanyCategory | string | undefined): CategoryStyle {
  if (!category) return FALLBACK;
  return CATEGORY_STYLE[category as CompanyCategory] ?? FALLBACK;
}
