import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";
import { sendAlert } from "@/lib/mailer";
import { renderLeadEmail } from "@/lib/lead-email";
import { TABS, sheetIdFor, sheetUrlFor } from "@/lib/leads";


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

    await appendRow(sheetIdFor("newsletter"), TABS.newsletter, HEADERS, values);

    try {
      await sendAlert(
        renderLeadEmail({
          label: "newsletter subscription",
          tag: TABS.newsletter,
          subject: `New newsletter subscriber - ${cleanEmail}`,
          rows: [
            ["Email", cleanEmail],
            ["Source", cleanSource],
          ],
          email: cleanEmail,
          receivedAt: new Date(timestamp),
          sheetUrl: sheetUrlFor("newsletter"),
        })
      );
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
