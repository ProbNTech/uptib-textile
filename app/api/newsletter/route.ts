import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";
import { renderRowsHtml, renderRowsText, sendAlert } from "@/lib/mailer";

const SHEET_ID = process.env.SUBMISSIONS_SHEET_ID!;
const TAB_NAME = "Newsletter";

const HEADERS = ["Timestamp", "Email", "Source"];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, source } = body;

    // Server-side validation
    if (!email?.trim()) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const cleanEmail = email.trim();
    const cleanSource = source?.trim() || "Newsletter form";

    const values = [timestamp, cleanEmail, cleanSource];

    await appendRow(SHEET_ID, TAB_NAME, HEADERS, values);

    try {
      const rows: Array<[string, unknown]> = [
        ["Submitted", timestamp],
        ["Email", cleanEmail],
        ["Source", cleanSource],
      ];

      await sendAlert({
        subject: `New newsletter subscriber — ${cleanEmail}`,
        text: renderRowsText(rows),
        html: `<p style="font-family:system-ui,sans-serif;font-size:14px;">New newsletter subscription via the Pak Textiles Global Partners website.</p>${renderRowsHtml(
          rows
        )}`,
        replyTo: cleanEmail,
      });
    } catch (mailErr) {
      console.error("Newsletter alert email failed:", mailErr);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter form error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
