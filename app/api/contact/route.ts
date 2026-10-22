import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";
import { sendAlert } from "@/lib/mailer";
import { renderLeadEmail } from "@/lib/lead-email";
import { CONTACT_HEADERS, FOOTER_HEADERS, TABS, sheetIdFor, sheetUrlFor } from "@/lib/leads";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, enquiryType, message, phone, source } = body;

    // Server-side validation — mirrors the client rules in ContactForm.
    if (!name?.trim() || !email?.trim() || !enquiryType?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, subject and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    const isFooter = source === "footer";
    const headers = isFooter ? FOOTER_HEADERS : CONTACT_HEADERS;
    const tabName = isFooter ? TABS.footer : TABS.contact;

    const values = isFooter
      ? [timestamp, name.trim(), email.trim(), enquiryType.trim(), message.trim()]
      : [
          timestamp,
          name.trim(),
          email.trim(),
          phone?.trim() || "",
          enquiryType.trim(),
          message.trim(),
        ];

    await appendRow(sheetIdFor("contact"), tabName, headers, values);

    try {
      const label = isFooter ? "footer enquiry" : "contact enquiry";

      await sendAlert(
        renderLeadEmail({
          label,
          tag: tabName,
          subject: `New ${label}: ${enquiryType.trim()} - ${name.trim()}`,
          // Every column but the timestamp, which shows under the heading.
          rows: headers.map((h, i): [string, unknown] => [h, values[i]]).slice(1),
          name: name.trim(),
          email: email.trim(),
          receivedAt: new Date(timestamp),
          sheetUrl: sheetUrlFor("contact"),
        })
      );
    } catch (mailErr) {
      // The lead is already safe in the sheet; never fail the request on email.
      console.error("Contact form alert email failed:", mailErr);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}
