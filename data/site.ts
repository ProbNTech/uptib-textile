export const site = {
  name: "Pakistan Textile Partners",
  legalName: "UK Pakistan Trade & Investment Board",
  shortName: "Pakistan Textile Partners",
  parentName: "UK–Pakistan Trades & Investment Board",
  parentShortName: "UPTIB",
  tagline: "The trusted bridge for UK–Pakistan textile trade.",
  positioning:
    "Pakistan's finest textiles — sourced and sold for the UK. Marketing the supply. Sourcing the demand. Trusted by both.",
  description:
    "Pakistan Textile Partners trades quality Pakistani textiles and runs the services that move them — marketing, e-commerce, sourcing and logistics. A London-based platform for UK–Pakistan textile trade.",
  url: "https://textile.ukpaktrade.org.uk",
  parentUrl: "https://ukpaktrade.org.uk",
  offices: [
    {
      label: "UK Office",
      address: "134–136 Westbourne Terrace, London W2 6QB",
      phone: "0207 402 4071",
      phoneHref: "tel:+442074024071",
    },
    {
      label: "Pakistan Office",
      address: "Office 108–110 Urooj Center, Farid Court Road, Lahore",
      phone: "0092 42 37235280",
      phoneHref: "tel:+924237235280",
    },
  ],
  socials: [
    {
      label: "Facebook",
      handle: "@ukpaktrade",
      href: "https://facebook.com/ukpaktrade",
    },
    {
      label: "Instagram",
      handle: "@ukpaktrade",
      href: "https://instagram.com/ukpaktrade",
    },
    {
      label: "LinkedIn",
      handle: "@ukpaktrade",
      href: "https://linkedin.com/company/ukpaktrade",
    },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Cookies", href: "/cookies" },
    { label: "Terms", href: "/terms" },
  ],
  disclaimer:
    "Pakistan Textile Partners is the textile division of the UK Pakistan Trade & Investment Board (ukpaktrade.org.uk). Market and trade figures are indicative and refreshed periodically.",
} as const;

export type SiteConfig = typeof site;
