export interface PartnerSolution {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  image: string;
  href: string;
  partnerName: string;
  partnerSlug: string;
  partnerLogo?: string;
  featured: boolean;
  order: number;
}

// Real UPTIB member manufacturers & sourcing partners, drawn from the textile
// company knowledge base (Textile_Company_Database.md, Part A). Capability and
// product detail are recorded factually from each company's own site.
export const partnerSolutions: PartnerSolution[] = [
  {
    id: 1,
    slug: "pakistan-fibres-home-linen",
    name: "Towels, bed & hotel linen",
    tagline: "Export-grade towels and institutional linen.",
    description:
      "Vertically integrated maker of ring-spun towels (400–700+ GSM), fitted & flat sheets, duvets and hotel & hospital linen — built for hundreds of industrial washes and supplied across the Gulf, Europe and North America.",
    category: "Home & Hospitality Textiles",
    image: "/image/textile/products/bedding-linen.jpg",
    href: "https://pakistanfibres.com/",
    partnerName: "Pakistan Fibres",
    partnerSlug: "pakistan-fibres",
    partnerLogo: "/image/textile/logos/pakistan-fibres.svg",
    featured: true,
    order: 1,
  },
  {
    id: 2,
    slug: "lahore-textiles-private-label",
    name: "Private-label apparel",
    tagline: "OEM hoodies, shirts and uniforms — 100-pc MOQ.",
    description:
      "Custom clothing manufacturer with cutting, stitching, printing, embroidery and packaging in-house — 50+ premium fabrics, AQL quality control and a 100-piece-per-design MOQ, exporting to 30+ countries.",
    category: "Apparel & Knitwear",
    image: "/image/textile/products/apparel-accessories.jpg",
    href: "https://lahoretextiles.com/",
    partnerName: "Lahore Textiles",
    partnerSlug: "lahore-textiles",
    partnerLogo: "/image/textile/logos/lahore-textiles.png",
    featured: true,
    order: 2,
  },
  {
    id: 3,
    slug: "extreme-sportswear-custom-kit",
    name: "Custom & sublimated sportswear",
    tagline: "Teamwear and activewear from 50 pieces.",
    description:
      "Sialkot OEM sportswear maker for 3,000+ brands — gymwear, sublimated kits and teamwear with full in-house design-to-dispatch and one of the industry's lowest MOQs at 50 pieces per colour and design.",
    category: "Sportswear & Activewear",
    image: "/image/textile/products/sportswear-activewear.jpg",
    href: "https://xsportswears.com/",
    partnerName: "Extreme Sportswear",
    partnerSlug: "extreme-sportswear",
    partnerLogo: "/image/textile/logos/extreme-sportswear.png",
    featured: true,
    order: 3,
  },
  {
    id: 4,
    slug: "albeeza-medical-uniforms",
    name: "Medical scrubs & uniforms",
    tagline: "Healthcare and corporate uniforms.",
    description:
      "Custom uniform manufacturer specialising in scrubs, lab coats, nurse and doctor uniforms and patient gowns — breathable, durable fabrics with low MOQs for startups and bulk capacity, exporting worldwide.",
    category: "Healthcare Textiles",
    image: "/image/textile/products/healthcare-textile.jpg",
    href: "https://albeezaapparel.com/",
    partnerName: "Albeeza Apparel",
    partnerSlug: "albeeza-apparel",
    partnerLogo: "/image/textile/logos/albeeza-apparel.jpg",
    featured: true,
    order: 4,
  },
  {
    id: 5,
    slug: "utex-fiber-to-garment-sourcing",
    name: "Fiber-to-garment sourcing",
    tagline: "Factory-direct sourcing & QA, 30+ countries.",
    description:
      "Faisalabad buying house with 22+ years' experience — factory-direct pricing, on-ground QC, the GSP+ advantage and WRAP / OEKO-TEX / GOTS / SEDEX-certified partners across home, hospitality, medical and apparel textiles.",
    category: "Sourcing & Buying House",
    image: "/image/textile/manufacturers.jpg",
    href: "https://www.utexinternational.com/en",
    partnerName: "Utex International",
    partnerSlug: "utex-international",
    partnerLogo: "/image/textile/logos/utex-international.png",
    featured: true,
    order: 5,
  },
  {
    id: 6,
    slug: "texkoncept-hospitality-linen",
    name: "Hotel & hospital linen sourcing",
    tagline: "Single-point sourcing & QA to AQL.",
    description:
      "Sourcing and quality-assurance agency supplying hotel and hospital bed linen, towels and workwear to USA and European buyers through an ISO / OEKO-TEX-audited multi-factory network — one contact from sampling to export docs.",
    category: "Home & Hospitality Textiles",
    image: "/image/textile/exporters.jpg",
    href: "https://texkoncept.com/",
    partnerName: "TexKoncept",
    partnerSlug: "texkoncept",
    partnerLogo: "/image/textile/logos/texkoncept.png",
    featured: true,
    order: 6,
  },
];
