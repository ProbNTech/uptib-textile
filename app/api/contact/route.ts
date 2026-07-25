import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";
import { renderRowsHtml, renderRowsText, sendAlert } from "@/lib/mailer";
import { CONTACT_HEADERS, FOOTER_HEADERS, TABS, sheetIdFor } from "@/lib/leads";

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
      const rows: Array<[string, unknown]> = headers.map((h, i) => [h, values[i]]);

      await sendAlert({
        subject: `New ${isFooter ? "footer enquiry" : "contact enquiry"}: ${enquiryType.trim()} - ${name.trim()}`,
        text: renderRowsText(rows),
        html: `<p style="font-family:system-ui,sans-serif;font-size:14px;">New enquiry submitted via the Pak Textiles Global Partners ${
          isFooter ? "footer form" : "contact form"
        }.</p>${renderRowsHtml(rows)}`,
        replyTo: email.trim(),
      });
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
