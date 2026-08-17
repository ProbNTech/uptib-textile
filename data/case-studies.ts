// Sourcing case studies.
//
// The August 2026 content audit asked for at least one concrete sourcing case
// study carrying order volume, timeline and outcome, to substantiate the
// service claims made elsewhere on the site.
//
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO TURN THIS INTO A REAL ANONYMISED CASE STUDY
//
// The entry below is marked `representative: true`, which renders a visible
// notice stating the figures illustrate a typical engagement rather than a
// specific client's order. That notice is what keeps the section honest while
// no real order has been written up.
//
// When a real order is available:
//   1. Replace the figures below with that order's actual numbers.
//   2. Set `representative: false`.
// The notice disappears automatically and the section becomes a genuine
// anonymised case study, fully satisfying the audit recommendation.
//
// Do not set `representative: false` while the figures are still illustrative.
// ─────────────────────────────────────────────────────────────────────────────

export interface CaseStudyStage {
  /** e.g. "Weeks 2 to 4" */
  period: string;
  title: string;
  detail: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  note: string;
}

export interface CaseStudy {
  /** True while the figures illustrate a typical order rather than a real one. */
  representative: boolean;
  eyebrow: string;
  title: string;
  intro: string;
  buyer: string;
  category: string;
  /** The audit's three required data points. */
  metrics: [CaseStudyMetric, CaseStudyMetric, CaseStudyMetric];
  stages: CaseStudyStage[];
  outcomes: string[];
  /** Order lines, to show the volume is a real mix rather than one SKU. */
  breakdown: { sku: string; qty: string }[];
}

export const sourcingCaseStudy: CaseStudy = {
  representative: true,
  eyebrow: "Case study",
  title: "Hotel linen and towelling for a European hospitality supplier",
  intro:
    "A worked example of a complete sourcing engagement, from the buyer's first brief to delivered goods, with the volume, the schedule and the result set out in full.",
  buyer: "European hospitality supplier",
  category: "Home & hospitality textiles",

  metrics: [
    {
      label: "Order volume",
      value: "24,000 pieces",
      note: "Across six product lines, split by size and colourway",
    },
    {
      label: "Timeline",
      value: "14 weeks",
      note: "Brief received to goods delivered in the buyer's market",
    },
    {
      label: "Outcome",
      value: "Shipped in full",
      note: "Passed final inspection at AQL 2.5 and cleared on GSP+ terms",
    },
  ],

  breakdown: [
    { sku: "Bath towels, 500 GSM", qty: "8,000 pcs" },
    { sku: "Hand towels, 500 GSM", qty: "6,000 pcs" },
    { sku: "Flat and fitted sheeting", qty: "4,500 pcs" },
    { sku: "Pillowcases", qty: "3,500 pcs" },
    { sku: "Bath mats", qty: "1,200 pcs" },
    { sku: "Bathrobes", qty: "800 pcs" },
  ],

  stages: [
    {
      period: "Week 1",
      title: "Brief and factory shortlist",
      detail:
        "Specification, quantities, target landed price and delivery window agreed. Three mills shortlisted on terry and sheeting capability, certification status and free capacity in the required window.",
    },
    {
      period: "Weeks 2 to 4",
      title: "Sampling",
      detail:
        "Samples produced against specification across all six lines, with alternative GSM and construction options presented where they improved cost or durability.",
    },
    {
      period: "Week 5",
      title: "Approval and costing",
      detail:
        "Physical samples signed off as the production standard. Costings, lead time and payment terms agreed in writing, with commission included in the quoted price.",
    },
    {
      period: "Weeks 6 to 11",
      title: "Bulk production",
      detail:
        "Production booked and run against the approved sample, with an in-line inspection at roughly the halfway point so any deviation is caught while it is still correctable.",
    },
    {
      period: "Week 12",
      title: "Final inspection and documentation",
      detail:
        "Independent final pre-shipment inspection to AQL 2.5, followed by certification evidence, labelling checks, packing lists and full export documentation.",
    },
    {
      period: "Weeks 13 to 14",
      title: "Freight and delivery",
      detail:
        "Consolidation and freight from Port Qasim, customs documentation prepared for entry, and delivery into the buyer's market.",
    },
  ],

  outcomes: [
    "All six lines shipped complete, with no short shipment against the order",
    "Final pre-shipment inspection passed at AQL 2.5 against the approved sample",
    "OEKO-TEX certified goods, with certificate evidence supplied at documentation stage",
    "GSP+ preferential duty reflected in the buyer's landed cost, not quoted separately",
    "One point of contact accountable for the order from brief through to delivery",
  ],
};
