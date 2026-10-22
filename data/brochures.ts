/* ─── Product catalogues (home page "Catalogues" section) ───
   Client-safe metadata only. The PDF file paths are deliberately NOT here:
   they live in app/api/brochures/route.ts and are only handed out after the
   download form is submitted, so they never appear in the page source.

   Cover and inside images are rendered from the PDFs by
   scripts/render-brochure-covers.py, which also prints `pages` and `sizeMb`. */

export const brochureSlugs = [
  "home-textiles",
  "hospitality-linen",
  "towel-collection",
  "hospital-textiles",
  "uniforms",
] as const;

export type BrochureSlug = (typeof brochureSlugs)[number];

export type Brochure = {
  slug: BrochureSlug;
  title: string;
  /** Short sector label shown above the title. */
  sector: string;
  description: string;
  /** The categories on the brochure's contents page. */
  contents: string[];
  pages: number;
  sizeMb: number;
  cover: string;
  inside: string;
};

export const brochures: Brochure[] = [
  {
    slug: "home-textiles",
    title: "Home Textile Collection",
    sector: "Home textiles",
    description:
      "Bedsheets, comforters, duvets and pillows, with fabrics, thread counts and sizes for every range.",
    contents: ["Bedsheets", "Comforters", "Pillows & pillow covers", "Duvets", "Mattress protectors", "Blankets & throws"],
    pages: 23,
    sizeMb: 13.1,
    cover: "/image/brochures/home-textiles-cover.jpg",
    inside: "/image/brochures/home-textiles-inside.jpg",
  },
  {
    slug: "hospitality-linen",
    title: "Hospitality Linen",
    sector: "Hotels & resorts",
    description:
      "Bed linen, towels, table linen and bathrobes made for hotels, resorts and serviced apartments.",
    contents: ["Bed linen", "Towels", "Table linen", "Bathrobes", "Mattress pads", "Hospitality essentials"],
    pages: 24,
    sizeMb: 11.4,
    cover: "/image/brochures/hospitality-linen-cover.jpg",
    inside: "/image/brochures/hospitality-linen-inside.jpg",
  },
  {
    slug: "towel-collection",
    title: "Towel Collection",
    sector: "Bath & kitchen",
    description:
      "Bath, hand, face and guest towels, kitchen towels and bath mats, with materials, weaves and sizes.",
    contents: ["Bath towels", "Hand towels", "Face towels & washcloths", "Guest towels", "Kitchen & tea towels", "Bath mats"],
    pages: 18,
    sizeMb: 11.3,
    cover: "/image/brochures/towel-collection-cover.jpg",
    inside: "/image/brochures/towel-collection-inside.jpg",
  },
  {
    slug: "hospital-textiles",
    title: "Hospital Textile",
    sector: "Healthcare",
    description:
      "Hospital linen, scrubs, doctor and patient gowns, and OPD and OT kits for hospitals and clinics.",
    contents: ["Hospital linen", "Medical scrubs", "Doctor gowns", "Patient gowns", "OPD kits", "OT kits"],
    pages: 20,
    sizeMb: 18.1,
    cover: "/image/brochures/hospital-textiles-cover.jpg",
    inside: "/image/brochures/hospital-textiles-inside.jpg",
  },
  {
    slug: "uniforms",
    title: "Uniform Catalogue",
    sector: "Workwear & uniforms",
    description:
      "Medical scrubs, lab coats, chef whites, workwear, high-visibility vests and safety gloves.",
    contents: [
      "Medical scrubs",
      "Lab coats",
      "Patient uniforms",
      "Chef uniforms",
      "Worker wear",
      "High-visibility vests",
      "Industrial gloves",
      "Construction gloves",
    ],
    pages: 25,
    sizeMb: 13.6,
    cover: "/image/brochures/uniforms-cover.jpg",
    inside: "/image/brochures/uniforms-inside.jpg",
  },
];

export const brochureBySlug = (slug: string): Brochure | undefined =>
  brochures.find((b) => b.slug === slug);

export const totalBrochurePages = brochures.reduce((sum, b) => sum + b.pages, 0);
