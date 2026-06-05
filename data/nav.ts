import type { NavItem } from "@/types";

export const productLeaves = [
  {
    label: "Bedding & Linen",
    href: "/products/bedding-linen",
    description: "Bed linen, towels, hotel & bath textiles.",
    icon: "bedding-linen",
  },
  {
    label: "Apparel & Accessories",
    href: "/products/apparel-accessories",
    description: "Private-label fashion, denim, knitwear, uniforms.",
    icon: "apparel-accessories",
  },
  {
    label: "Sportswear & Activewear",
    href: "/products/sportswear-activewear",
    description: "Gymwear, teamwear, performance kit.",
    icon: "sportswear-activewear",
  },
  {
    label: "Healthcare Textile",
    href: "/products/healthcare-textile",
    description: "Scrubs, gowns, hospital linen.",
    icon: "healthcare-textile",
  },
];

export const serviceLeaves = [
  {
    label: "Marketing & Sales",
    href: "/services/marketing-sales",
    description: "Reach UK buyers; membership.",
    icon: "marketing-sales",
  },
  {
    label: "E-commerce & Warehouse",
    href: "/services/ecommerce-warehouse",
    description: "Amazon + UK warehousing & fulfilment.",
    icon: "ecommerce-warehouse",
  },
  {
    label: "Buying House (Outsourcing)",
    href: "/services/buying-house",
    description: "Source from Pakistan, de-risked.",
    icon: "buying-house",
  },
  {
    label: "Logistics",
    href: "/services/logistics",
    description: "Freight, customs, IOR/EOR, documentation.",
    icon: "logistics",
  },
];

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products", children: productLeaves },
  { label: "Services", href: "/services", children: serviceLeaves },
  { label: "Directory", href: "/directory" },
  { label: "Contact", href: "/contact" },
];
