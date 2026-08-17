// Membership tiers — the single source of truth.
//
// These are rendered in two places: the full tier cards on /membership, and
// the compact comparison strip in the manufacturer-facing block on the
// homepage. Keeping the content here means the homepage cannot drift out of
// step with the membership page, which is how the tiers came to be named on
// the homepage without being defined anywhere on it (August 2026 audit).
//
// Icons are intentionally not stored here: this file stays free of React
// imports, and each component maps its own icon by tier name.

export interface MembershipTier {
  name: string;
  tagline: string;
  /** Highlighted as the recommended tier. */
  featured: boolean;
  /** Full feature list, shown on /membership. */
  features: string[];
  /** One-line summary of who the tier suits, for the compact homepage strip. */
  suits: string;
}

export const membershipTiers: MembershipTier[] = [
  {
    name: "Basic",
    tagline: "Perfect for getting started.",
    featured: false,
    suits: "First-time exporters testing international demand",
    features: [
      "Company profile listing",
      "Buyer-directory access",
      "Monthly market reports",
      "Inclusion in the sourcing pool",
    ],
  },
  {
    name: "Professional",
    tagline: "For growing exporters ready to scale.",
    featured: true,
    suits: "Established suppliers widening their buyer base",
    features: [
      "Everything in Basic",
      "B2B matchmaking",
      "Buyer introductions",
      "Trade-event participation",
      "Lead-generation support",
    ],
  },
  {
    name: "Premium",
    tagline: "For established exporters expanding globally.",
    featured: false,
    suits: "Exporters scaling into several markets at once",
    features: [
      "Everything in Professional",
      "Dedicated market advisor",
      "Buyer-sourcing campaigns",
      "International representation",
      "Featured promotion",
    ],
  },
];
