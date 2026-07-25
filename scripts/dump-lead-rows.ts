/**
 * Diagnostic: prints the header row and the last data row of each lead tab, so
 * you can confirm a submission landed under the right columns.
 *
 *   npx tsx scripts/dump-lead-rows.ts
 */

import { config } from "dotenv";
config({ path: ".env" });
config({ path: ".env.local", override: true });

import { google } from "googleapis";
import { TABS, sheetIdFor } from "../lib/leads";

async function main() {
  const auth = new google.auth.JWT({
    email:
      process.env.GOOGLE_CLIENT_EMAIL?.trim() ||
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim(),
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  const targets: [string, string][] = [
    [sheetIdFor("contact"), TABS.contact],
    [sheetIdFor("registration"), TABS.registration],
  ];

  for (const [spreadsheetId, tab] of targets) {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `'${tab}'`,
    });
    const rows = res.data.values ?? [];
    const headers = rows[0] ?? [];
    const last = rows[rows.length - 1] ?? [];
    console.log(`\n=== ${tab} — ${rows.length - 1} data row(s) ===`);
    if (rows.length < 2) {
      console.log("  (no data rows yet)");
      continue;
    }
    headers.forEach((h, i) => console.log(`  ${h}: ${last[i] ?? ""}`));
  }
  console.log("");
}

main().catch((err) => {
  console.error("Dump failed:", err?.message || err);
  process.exit(1);
});
