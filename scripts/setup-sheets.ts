/**
 * One-time setup script: creates tabs and header rows in both Google Sheets.
 * Run with:  npx tsx scripts/setup-sheets.ts
 */

import { config } from "dotenv";
config({ path: ".env.local" });

import { google } from "googleapis";

const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!;
const key = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");
const CONTACT_SHEET_ID = process.env.CONTACT_SHEET_ID!;
const MEMBERSHIP_SHEET_ID = process.env.MEMBERSHIP_SHEET_ID!;

const auth = new google.auth.JWT({ email, key, scopes: ["https://www.googleapis.com/auth/spreadsheets"] });
const sheets = google.sheets({ version: "v4", auth });

// ── Contact Sheet ────────────────────────────────────────────────────────────
const CONTACT_TAB = "Submissions";
const CONTACT_HEADERS = [
  "Timestamp",
  "Full Name",
  "Email",
  "Phone",
  "Organisation",
  "Enquiry Type",
  "Message",
];

// ── Membership Sheet ─────────────────────────────────────────────────────────
const MEMBERSHIP_TABS = [
  "Chairman's Circle",
  "Corporate",
  "SME Scale-up",
  "Startup",
  "Associates",
  "Academic Institutions",
  "Individual",
];

const MEMBERSHIP_HEADERS = [
  "Timestamp",
  "Membership Type",
  "Organisation Name",
  "Address",
  "Postcode",
  "Country",
  "Organisation Phone",
  "Website",
  "Revenue",
  "Employees",
  "Core Products/Services",
  "Website Link",
  "Publicly Listed",
  "Member Directory",
  "Mailing List",
  "Selected Sectors",
  "Other Sector",
  "UK Offices",
  "Other UK City",
  "Pakistan Offices",
  "Other Pakistan City",
  "UK Employees",
  "Pakistan Employees",
  "Organisation Profile",
  "CEO First Name",
  "CEO Last Name",
  "CEO Job Title",
  "CEO Nationality",
  "CEO Email",
  "CEO Phone",
  "CEO Mobile",
  "CEO LinkedIn",
  "Primary First Name",
  "Primary Last Name",
  "Primary Job Title",
  "Primary Nationality",
  "Primary Email",
  "Primary Phone",
  "Secondary First Name",
  "Secondary Last Name",
  "Secondary Job Title",
  "Secondary Email",
  "Secondary Phone",
  "Secondary Mobile",
  "Pakistan First Name",
  "Pakistan Last Name",
  "Pakistan Job Title",
  "Pakistan Email",
  "Pakistan Phone",
  "Pakistan Address",
  "Referrer Name",
  "Referrer Organisation",
  "Referrer Email",
  "Referrer Phone",
];

// Column widths in pixels — wider for longer content
const CONTACT_COL_WIDTHS = [180, 180, 220, 150, 200, 160, 350];
const MEMBERSHIP_COL_WIDTHS = [
  180, 160, 220, 250, 100, 120, 160, 200, 120, 100, // Timestamp → Employees
  250, 100, 100, 100, 100, 250, 180,                  // Core Products → Other Sector
  200, 160, 200, 160, 120, 120,                        // UK Offices → Pakistan Employees
  350,                                                  // Organisation Profile
  140, 140, 160, 140, 220, 160, 160, 220,              // CEO fields
  140, 140, 160, 140, 220, 160,                         // Primary Contact
  140, 140, 160, 220, 160, 160,                         // Secondary Contact
  140, 140, 160, 220, 160, 250,                         // Pakistan Contact
  180, 200, 220, 160,                                   // Referrer
];

async function getSheetId(spreadsheetId: string, tabName: string): Promise<number> {
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const sheet = meta.data.sheets?.find((s) => s.properties?.title === tabName);
  return sheet?.properties?.sheetId ?? 0;
}

async function ensureTab(spreadsheetId: string, tabName: string) {
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const exists = meta.data.sheets?.some((s) => s.properties?.title === tabName);
  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: tabName } } }],
      },
    });
    console.log(`  + Created tab: "${tabName}"`);
  } else {
    console.log(`  - Tab already exists: "${tabName}"`);
  }
}

async function styleHeaderRow(spreadsheetId: string, tabName: string, colCount: number, colWidths: number[]) {
  const sheetId = await getSheetId(spreadsheetId, tabName);

  const requests: any[] = [
    // Dark green background + white bold text on row 1
    {
      repeatCell: {
        range: { sheetId, startRowIndex: 0, endRowIndex: 1, startColumnIndex: 0, endColumnIndex: colCount },
        cell: {
          userEnteredFormat: {
            backgroundColor: { red: 0.133, green: 0.345, blue: 0.133 }, // dark green #224B22
            textFormat: { bold: true, fontSize: 10, foregroundColor: { red: 1, green: 1, blue: 1 } },
            horizontalAlignment: "CENTER",
            verticalAlignment: "MIDDLE",
            wrapStrategy: "WRAP",
            padding: { top: 4, bottom: 4, left: 6, right: 6 },
          },
        },
        fields: "userEnteredFormat(backgroundColor,textFormat,horizontalAlignment,verticalAlignment,wrapStrategy,padding)",
      },
    },
    // Freeze the header row
    {
      updateSheetProperties: {
        properties: { sheetId, gridProperties: { frozenRowCount: 1 } },
        fields: "gridProperties.frozenRowCount",
      },
    },
    // Set header row height
    {
      updateDimensionProperties: {
        range: { sheetId, dimension: "ROWS", startIndex: 0, endIndex: 1 },
        properties: { pixelSize: 38 },
        fields: "pixelSize",
      },
    },
  ];

  // Set individual column widths
  for (let i = 0; i < colWidths.length; i++) {
    requests.push({
      updateDimensionProperties: {
        range: { sheetId, dimension: "COLUMNS", startIndex: i, endIndex: i + 1 },
        properties: { pixelSize: colWidths[i] },
        fields: "pixelSize",
      },
    });
  }

  await sheets.spreadsheets.batchUpdate({ spreadsheetId, requestBody: { requests } });
  console.log(`  + Styled headers in "${tabName}" (dark green, white bold, columns sized)`);
}

async function writeHeaders(spreadsheetId: string, tabName: string, headers: string[]) {
  // Always overwrite headers to ensure they're correct
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `'${tabName}'!A1`,
    valueInputOption: "RAW",
    requestBody: { values: [headers] },
  });
  console.log(`  + Wrote ${headers.length} headers to "${tabName}"`);
}

async function deleteDefaultSheet1(spreadsheetId: string) {
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const sheet1 = meta.data.sheets?.find((s) => s.properties?.title === "Sheet1");
  const totalSheets = meta.data.sheets?.length || 0;
  if (sheet1 && totalSheets > 1) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ deleteSheet: { sheetId: sheet1.properties?.sheetId } }],
      },
    });
    console.log(`  + Removed default "Sheet1" tab`);
  }
}

async function main() {
  console.log("\n=== Setting up Contact Sheet ===");
  await ensureTab(CONTACT_SHEET_ID, CONTACT_TAB);
  await writeHeaders(CONTACT_SHEET_ID, CONTACT_TAB, CONTACT_HEADERS);
  await styleHeaderRow(CONTACT_SHEET_ID, CONTACT_TAB, CONTACT_HEADERS.length, CONTACT_COL_WIDTHS);
  await deleteDefaultSheet1(CONTACT_SHEET_ID);

  console.log("\n=== Setting up Membership Sheet ===");
  for (const tab of MEMBERSHIP_TABS) {
    await ensureTab(MEMBERSHIP_SHEET_ID, tab);
    await writeHeaders(MEMBERSHIP_SHEET_ID, tab, MEMBERSHIP_HEADERS);
    await styleHeaderRow(MEMBERSHIP_SHEET_ID, tab, MEMBERSHIP_HEADERS.length, MEMBERSHIP_COL_WIDTHS);
  }
  await deleteDefaultSheet1(MEMBERSHIP_SHEET_ID);

  console.log("\nDone! Both sheets are ready.\n");
}

main().catch((err) => {
  console.error("Setup failed:", err.message || err);
  process.exit(1);
});
