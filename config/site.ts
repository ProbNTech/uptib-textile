export const siteConfig = {
  name: "Pakistan Textile Partners",
  shortName: "Pakistan Textile Partners",
  tagline: "Pakistan Textile Partners",
  // Parent company — UPTIB. Used where the legal entity is named.
  parentName: "UK–Pakistan Trades & Investment Board",
  parentShortName: "UPTIB",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ukpaktrade.org.uk",
  portalUrl: process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.ukpaktrade.org.uk",
  description:
    "Pakistan Textile Partners connects Pakistan's textile manufacturing to global buyers and markets — bedding & linen, apparel, sportswear and healthcare textiles, with sourcing, outsourcing, marketing and warehousing services.",
  email: "info@ukpaktrade.org.uk",
  phone: "0044 7920 55 0000",
  social: {
    facebook: "https://facebook.com/ukpaktrade",
    instagram: "https://instagram.com/ukpaktrade",
    linkedin: "https://linkedin.com/company/ukpaktrade",
  },
  offices: {
    uk: {
      label: "UK Office",
      address: "134–136 Westbourne Terrace, London W2 6QB",
    },
    pakistan: {
      label: "Pakistan Office",
      address: "Office 108–110 Urooj Center, Farid Court Road, Lahore",
    },
  },
} as const;
