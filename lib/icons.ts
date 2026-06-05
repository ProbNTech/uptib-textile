import {
  BedDouble,
  Shirt,
  Dumbbell,
  Stethoscope,
  Megaphone,
  ShoppingCart,
  PackageSearch,
  Truck,
  ShieldCheck,
  Globe2,
  BadgeCheck,
  Building2,
  type LucideIcon,
} from "lucide-react";

/**
 * Data files reference icons by string name so content stays serialisable
 * and free of JSX. This map resolves those names to lucide components.
 */
export const iconMap: Record<string, LucideIcon> = {
  // products
  "bedding-linen": BedDouble,
  "apparel-accessories": Shirt,
  "sportswear-activewear": Dumbbell,
  "healthcare-textile": Stethoscope,
  // services
  "marketing-sales": Megaphone,
  "ecommerce-warehouse": ShoppingCart,
  "buying-house": PackageSearch,
  logistics: Truck,
  // why / trust
  vetted: ShieldCheck,
  quality: BadgeCheck,
  partner: Building2,
  gsp: Globe2,
};

export function getIcon(name: string | undefined): LucideIcon {
  return (name && iconMap[name]) || BadgeCheck;
}
