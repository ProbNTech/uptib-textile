/**
 * Diagnostic: confirms the service account can reach each lead spreadsheet and
 * that the SMTP credentials authenticate. Sends nothing and writes nothing.
 *
 *   npx tsx scripts/check-sheet-access.ts
 */

import { config } from "dotenv";
config({ path: ".env" });
config({ path: ".env.local", override: true });

import { google } from "googleapis";
import nodemailer from "nodemailer";

const envValue = (...names: string[]) => {
  for (const name of names) {
    const value = process.env[name]?.trim();
    if (value) return value;
  }
  return undefined;
};

async function checkMail() {
  const host = envValue("EMAIL_HOST", "SMTP_HOST");
  const port = Number(envValue("EMAIL_PORT", "SMTP_PORT") ?? 587);
  const user = envValue("EMAIL_HOST_USER", "SMTP_USER");
  const pass = envValue("EMAIL_HOST_PASSWORD", "SMTP_PASS");
  const to = envValue("LEADS_NOTIFY_EMAIL", "ALERT_TO");

  console.log(`\nSMTP: ${user} via ${host}:${port} -> notifies ${to}`);
  if (!host || !user || !pass) {
    console.log("  FAILED: missing SMTP credentials");
    return;
  }
  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
    await transporter.verify();
    console.log("  OK: credentials accepted, ready to send");
  } catch (e) {
    console.log(`  FAILED: ${(e as Error).message}`);
  }
}

async function main() {
  const email =
    process.env.GOOGLE_CLIENT_EMAIL?.trim() ||
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  console.log("Service account:", email);

  const auth = new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  const targets: [string, string | undefined][] = [
    ["contact", process.env.GOOGLE_CONTACT_SHEET_ID],
    ["registration", process.env.GOOGLE_REGISTRATION_SHEET_ID],
  ];

  for (const [label, id] of targets) {
    if (!id?.trim()) {
      console.log(`  ${label}: no spreadsheet ID set`);
      continue;
    }
    try {
      const meta = await sheets.spreadsheets.get({ spreadsheetId: id.trim() });
      console.log(
        `  ${label}: OK "${meta.data.properties?.title}" | tabs: ${meta.data.sheets
          ?.map((s) => s.properties?.title)
          .join(", ")}`
      );
    } catch (e) {
      const err = e as { code?: unknown; message?: string };
      console.log(`  ${label}: FAILED (${err.code}) ${err.message}`);
    }
  }

  await checkMail();
}

main();
