import { google } from "googleapis";

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !key) {
    throw new Error("Missing Google service account credentials in environment variables");
  }

  return new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

/**
 * Ensure a sheet/tab exists in the spreadsheet. Creates it if missing.
 */
async function ensureSheet(spreadsheetId: string, sheetName: string) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const exists = meta.data.sheets?.some(
    (s) => s.properties?.title === sheetName
  );

  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: sheetName } } }],
      },
    });
  }
}

/**
 * Append a row to a specific sheet/tab. Adds a header row if the sheet is empty.
 */
export async function appendRow(
  spreadsheetId: string,
  sheetName: string,
  headers: string[],
  values: string[]
) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  await ensureSheet(spreadsheetId, sheetName);

  // Check if the sheet has a header row already
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `'${sheetName}'!A1:A1`,
  });

  if (!existing.data.values || existing.data.values.length === 0) {
    // Write header row first
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `'${sheetName}'!A1`,
      valueInputOption: "RAW",
      requestBody: { values: [headers] },
    });
  }

  // Append the data row
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `'${sheetName}'!A1`,
    valueInputOption: "RAW",
    requestBody: { values: [values] },
  });
}
