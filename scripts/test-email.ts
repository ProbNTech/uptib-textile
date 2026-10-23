/**
 * Sends a sample contact-enquiry notification, made by lib/lead-email.ts just
 * as a real one is, to check the SMTP account and the template. It goes to
 * LEADS_NOTIFY_EMAIL unless another address is given, with "[Test]" before its
 * subject. Nothing is written to the sheets.
 *
 *   npm run email:test
 *   npm run email:test -- someone@example.com
 */

import { config } from "dotenv";
config({ path: ".env" });
config({ path: ".env.local", override: true });

import { renderLeadEmail } from "../lib/lead-email";
import { sendAlert } from "../lib/mailer";
import { CONTACT_HEADERS, TABS, sheetUrlFor } from "../lib/leads";

const SAMPLE: Record<string, string> = {
  "Full Name": "Hamza Qureshi",
  Email: "hamza.qureshi@example.com",
  Phone: "+44 7700 900000",
  Subject: "Sourcing hospitality linen",
  Message:
    "Hello,\n\nWe run a group of boutique hotels in the UK and are looking for a Pakistani manufacturer for bed linen and towels, around 4,000 sets a year. Could you share minimum order quantities and lead times?\n\nThanks,\nHamza",
};

async function main() {
  const to = process.argv[2];
  const email = renderLeadEmail({
    label: "contact enquiry",
    tag: TABS.contact,
    subject: `New contact enquiry: ${SAMPLE.Subject} - ${SAMPLE["Full Name"]}`,
    rows: CONTACT_HEADERS.slice(1).map((h): [string, string] => [h, SAMPLE[h] ?? ""]),
    name: SAMPLE["Full Name"],
    email: SAMPLE.Email,
    sheetUrl: sheetUrlFor("contact"),
  });
  await sendAlert({ ...email, subject: `[Test] ${email.subject}`, to });
  console.log(`Sent "[Test] ${email.subject}" to ${to || "LEADS_NOTIFY_EMAIL"}.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
