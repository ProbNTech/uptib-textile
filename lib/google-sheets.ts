import { google } from "googleapis";

function getAuth() {
  // GOOGLE_CLIENT_EMAIL is the current name; the older
  // GOOGLE_SERVICE_ACCOUNT_EMAIL still works for existing deployments.
  const email =
    process.env.GOOGLE_CLIENT_EMAIL?.trim() ||
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !key) {
    throw new Error(
      "Missing Google service account credentials. Set GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY."
    );
  }

  return new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

type Sheets = ReturnType<typeof google.sheets>;

const client = (): Sheets => google.sheets({ version: "v4", auth: getAuth() });

/**
 * Ensure a sheet/tab exists in the spreadsheet, creating it if missing.
 * Returns its numeric sheetId (needed for structural batchUpdate requests).
 */
async function ensureSheet(sheets: Sheets, spreadsheetId: string, sheetName: string): Promise<number> {
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const existing = meta.data.sheets?.find((s) => s.properties?.title === sheetName);
  if (existing) return existing.properties?.sheetId ?? 0;

  const created = await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [{ addSheet: { properties: { title: sheetName } } }],
    },
  });
  return created.data.replies?.[0]?.addSheet?.properties?.sheetId ?? 0;
}

/**
 * Guarantee row 1 holds the given column names.
 *
 * Three cases, so a tab that was created by hand (or by an older version of
 * these headers) still ends up correct without trampling existing rows:
 *   - empty sheet            → write the headers into row 1
 *   - row 1 is the header row → rewrite it, picking up any newly added columns
 *   - row 1 is a data row     → insert a fresh row above it and write headers
 */
export async function ensureHeaderRow(
  spreadsheetId: string,
  sheetName: string,
  headers: string[]
) {
  const sheets = client();
  const sheetId = await ensureSheet(sheets, spreadsheetId, sheetName);

  const firstRow = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `'${sheetName}'!1:1`,
  });
  const cells = firstRow.data.values?.[0] ?? [];

  const looksLikeHeaderRow = cells.length > 0 && cells[0] === headers[0];

  if (cells.length > 0 && !looksLikeHeaderRow) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            insertDimension: {
              range: { sheetId, dimension: "ROWS", startIndex: 0, endIndex: 1 },
              inheritFromBefore: false,
            },
          },
        ],
      },
    });
  }

  const upToDate =
    looksLikeHeaderRow &&
    cells.length === headers.length &&
    headers.every((h, i) => cells[i] === h);
  if (upToDate) return;

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `'${sheetName}'!A1`,
    valueInputOption: "RAW",
    requestBody: { values: [headers] },
  });

  // Freeze + emphasise row 1 so the sheet stays readable as it fills up.
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          repeatCell: {
            range: { sheetId, startRowIndex: 0, endRowIndex: 1, startColumnIndex: 0, endColumnIndex: headers.length },
            cell: {
              userEnteredFormat: {
                backgroundColor: { red: 0.224, green: 0.31, blue: 0.451 }, // #394F73
                textFormat: { bold: true, fontSize: 10, foregroundColor: { red: 1, green: 1, blue: 1 } },
                verticalAlignment: "MIDDLE",
                wrapStrategy: "WRAP",
              },
            },
            fields: "userEnteredFormat(backgroundColor,textFormat,verticalAlignment,wrapStrategy)",
          },
        },
        {
          updateSheetProperties: {
            properties: { sheetId, gridProperties: { frozenRowCount: 1 } },
            fields: "gridProperties.frozenRowCount",
          },
        },
      ],
    },
  });
}

/**
 * Append a row to a specific sheet/tab, writing the header row first if the
 * tab does not have one yet.
 */
export async function appendRow(
  spreadsheetId: string,
  sheetName: string,
  headers: string[],
  values: string[]
) {
  await ensureHeaderRow(spreadsheetId, sheetName, headers);

  await client().spreadsheets.values.append({
    spreadsheetId,
    range: `'${sheetName}'!A1`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [values] },
  });
}
