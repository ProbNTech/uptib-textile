/**
 * One-time setup: create the tabs and write the column headers into the lead
 * spreadsheets, so the first real submission lands under named columns.
 *
 * Safe to re-run: headers are rewritten in place, data rows are untouched, and
 * if a tab already holds rows without a header row one is inserted above them.
 *
 *   npx tsx scripts/setup-lead-sheets.ts
 */

import { config } from "dotenv";
config({ path: ".env" });
config({ path: ".env.local", override: true });

import { ensureHeaderRow } from "../lib/google-sheets";
import {
  CONTACT_HEADERS,
  FOOTER_HEADERS,
  NEWSLETTER_HEADERS,
  REGISTRATION_HEADERS,
  TABS,
  sheetIdFor,
} from "../lib/leads";

async function main() {
  const jobs: { label: string; sheetId: string; tab: string; headers: string[] }[] = [
    { label: "Contact", sheetId: sheetIdFor("contact"), tab: TABS.contact, headers: CONTACT_HEADERS },
    { label: "Footer enquiries", sheetId: sheetIdFor("contact"), tab: TABS.footer, headers: FOOTER_HEADERS },
    { label: "Registrations", sheetId: sheetIdFor("registration"), tab: TABS.registration, headers: REGISTRATION_HEADERS },
    { label: "Newsletter", sheetId: sheetIdFor("newsletter"), tab: TABS.newsletter, headers: NEWSLETTER_HEADERS },
  ];

  for (const job of jobs) {
    await ensureHeaderRow(job.sheetId, job.tab, job.headers);
    console.log(
      `  + ${job.label}: ${job.headers.length} columns written to tab "${job.tab}" (${job.sheetId.slice(0, 8)}…)`
    );
  }

  console.log("\nDone. Both sheets are ready to receive submissions.\n");
}

main().catch((err) => {
  console.error("Setup failed:", err?.message || err);
  process.exit(1);
});
