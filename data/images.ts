import type { ProductSlug, ServiceSlug } from "@/types";

/**
 * Central, verified photography map. Every image was visually checked for
 * subject. Paths are local (/public/assets/images) so next/image optimises
 * them with no remote config. Swap files in place to rebrand — keep the keys.
 */
export type SiteImage = { src: string; alt: string };

const img = (file: string, alt: string): SiteImage => ({
  src: `/assets/images/${file}`,
  alt,
});

export const images = {
  // Brand / context
  heroBg: img(
    "hero-bg.png",
    "Textile trade backdrop for the homepage hero",
  ),
  worldMap: img(
    "worldmap.jpg",
    "Earth at night from space, city lights glowing across the globe",
  ),
  ctaBg: img(
    "cta-bg.png",
    "Global textile trade backdrop for the closing call to action",
  ),
  bigBen: img("bigben.jpg", "Big Ben and the Houses of Parliament, London"),
  lahore: img("lahore.jpg", "Badshahi Mosque, Lahore, Pakistan"),
  londonSkyline: img(
    "london-skyline-bg.png",
    "Houses of Parliament and Big Ben — London skyline",
  ),
  minarePakistan: img(
    "minarepakistan.png",
    "Minar-e-Pakistan monument, Lahore",
  ),
  london: img(
    "london.jpg",
    "Aerial view of London and the River Thames at dusk",
  ),
  contactHeroBg: img(
    "contact-hero-bg.png",
    "Glowing world map with trade connections arcing across the globe",
  ),
  lounge: img(
    "fabric-texture.jpg",
    "Premium living room with a textured green sofa and cushions",
  ),

  // Product categories
  beddingLinen: img(
    "bedding-linen.jpg",
    "Styled bedroom with layered bed linen and cushions",
  ),
  towels: img("towels.jpg", "Folded cotton bath towels stacked neatly"),
  apparel: img(
    "apparel.jpg",
    "Rail of folded t-shirts and polo shirts in mixed colours",
  ),
  apparelRack: img("apparel-rack.jpg", "Clothing rail in a fashion showroom"),
  sportswear: img(
    "sportswear.jpg",
    "Athlete lifting a barbell in a gym, wearing performance kit",
  ),
  gym: img("gym.jpg", "Activewear and gym training"),
  healthcare: img(
    "healthcare2.jpg",
    "Hospital ward with made-up beds and institutional linen",
  ),

  // Services
  ecommerce: img(
    "ecommerce.jpg",
    "Retail checkout with a customer paying by phone",
  ),
  warehouse: img(
    "textile-factory.jpg",
    "Long warehouse aisle stacked with inventory",
  ),
  warehouseAlt: img("warehouse.jpg", "Warehouse storage shelving"),
  logistics: img(
    "logistics-port.jpg",
    "Container shipping port with stacked freight containers",
  ),
  retail: img("sewing.jpg", "Curated textile and apparel retail display"),
} as const;

export type ImageKey = keyof typeof images;

/** Primary photo per product category. */
export const productImage: Record<ProductSlug, SiteImage> = {
  "bedding-linen": images.beddingLinen,
  "apparel-accessories": images.apparel,
  "sportswear-activewear": images.sportswear,
  "healthcare-textile": images.healthcare,
};

/** Secondary photo per product category (detail/lifestyle). */
export const productImageAlt: Record<ProductSlug, SiteImage> = {
  "bedding-linen": images.towels,
  "apparel-accessories": images.apparelRack,
  "sportswear-activewear": images.gym,
  "healthcare-textile": images.lounge,
};

/** Tall portrait photo per product category (home showcase cards). */
export const productImageTall: Record<ProductSlug, SiteImage> = {
  "bedding-linen": img(
    "textile-images/bedding.jpg",
    "Hotel-quality bed linen and pillows",
  ),
  "apparel-accessories": img(
    "textile-images/apparel.jpg",
    "Rack of coloured garments and jackets",
  ),
  "sportswear-activewear": img(
    "textile-images/sportswear.jpg",
    "Woman in activewear carrying a yoga mat",
  ),
  "healthcare-textile": img(
    "textile-images/healthcare.png",
    "Medical professional in scrubs holding a surgical mask",
  ),
};

/** Primary photo per service. */
export const serviceImage: Record<ServiceSlug, SiteImage> = {
  "marketing-sales": images.retail,
  "ecommerce-warehouse": images.ecommerce,
  "buying-house": images.warehouse,
  logistics: images.logistics,
};
