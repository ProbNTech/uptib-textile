/**
 * Where each lead form lands, and what its columns are called.
 *
 * Env names are resolved at call time (not module load) so a missing value
 * surfaces as a clear runtime error rather than a build-time crash. Each key
 * accepts several names because the deployment has moved from a single
 * SUBMISSIONS_SHEET_ID to one spreadsheet per form.
 */

const firstSet = (...names: string[]): string => {
  for (const name of names) {
    const value = process.env[name]?.trim();
    if (value) return value;
  }
  return "";
};

export type LeadKind = "contact" | "registration" | "membership" | "newsletter";

const SHEET_ENV: Record<LeadKind, string[]> = {
  contact: ["GOOGLE_CONTACT_SHEET_ID", "SUBMISSIONS_SHEET_ID"],
  registration: ["GOOGLE_REGISTRATION_SHEET_ID", "GOOGLE_CONTACT_SHEET_ID", "SUBMISSIONS_SHEET_ID"],
  membership: ["GOOGLE_MEMBERSHIP_SHEET_ID", "SUBMISSIONS_SHEET_ID", "GOOGLE_CONTACT_SHEET_ID"],
  newsletter: ["GOOGLE_NEWSLETTER_SHEET_ID", "SUBMISSIONS_SHEET_ID", "GOOGLE_CONTACT_SHEET_ID"],
};

export function sheetIdFor(kind: LeadKind): string {
  const id = firstSet(...SHEET_ENV[kind]);
  if (!id) {
    throw new Error(
      `Missing spreadsheet ID for ${kind} submissions. Set one of: ${SHEET_ENV[kind].join(", ")}`
    );
  }
  return id;
}

/* ── Tab names ─────────────────────────────────────────────────── */
export const TABS = {
  contact: "Contact",
  footer: "Footer Enquiries",
  registration: "Registrations",
  membership: "Memberships",
  newsletter: "Newsletter",
} as const;

/* ── Column headers ────────────────────────────────────────────────
   These are the single source of truth: the API routes build their row in
   this exact order, and scripts/setup-lead-sheets.ts writes them into the
   spreadsheets. Append new columns at the end so existing rows stay aligned. */

export const CONTACT_HEADERS = [
  "Timestamp",
  "Full Name",
  "Email",
  "Phone",
  "Subject",
  "Message",
];

export const FOOTER_HEADERS = ["Timestamp", "Full Name", "Email", "Subject", "Message"];

export const REGISTRATION_HEADERS = [
  "Timestamp",
  "Registering As",
  // Company
  "Company Name",
  "Business Type",
  "Registration No.",
  "Website",
  "Employees",
  "Years Trading",
  "Country",
  "City",
  "Address",
  // Primary contact
  "Contact Name",
  "Job Title",
  "Email",
  "Phone",
  "WhatsApp",
  "Preferred Contact",
  // Interests
  "Services Needed",
  "Product Categories",
  "Other Category",
  // Requirement
  "Order Volume / Capacity",
  "Timeline",
  "Target Markets",
  "Certifications",
  "Requirement Details",
  // Finish
  "Heard About Us Via",
  "Terms Accepted",
  "Marketing Opt-in",
];

export const NEWSLETTER_HEADERS = ["Timestamp", "Email", "Source"];
