import type { FAQ } from "./FAQSection";

export const directoryFaqs: FAQ[] = [
  {
    question: "How are companies ranked?",
    answer:
      "Listings are ordered by aggregate rating first, then by review count as a tiebreaker. This surfaces well-rated firms that also carry a meaningful evidence base. You can re-sort by review count or name from the filter bar.",
  },
  {
    question: "Where do ratings come from?",
    answer:
      "Ratings and reviews are sourced from a Clutch-style third-party provider that aggregates verified client feedback. For now this directory uses demo data; live data will appear once the provider sync is connected.",
  },
  {
    question: "Can companies update their profile?",
    answer:
      "Profile fields shown here mirror the source provider. To correct or update a listing, companies should update their profile at the source — changes will flow through on the next sync cycle.",
  },
  {
    question: "Are these reviews verified?",
    answer:
      "Reviews aggregated from the source are typically verified by that provider. Cards marked as ‘Verified’ indicate listings the source has additionally confirmed. We recommend cross-checking before procurement.",
  },
  {
    question: "How often is data updated?",
    answer:
      "Once the live sync is enabled, data refreshes on a scheduled basis (typically daily). Until then, the directory shows curated placeholder data to demonstrate the experience.",
  },
];
