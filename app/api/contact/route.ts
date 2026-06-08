import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";
import { renderRowsHtml, renderRowsText, sendAlert } from "@/lib/mailer";

const SHEET_ID = process.env.SUBMISSIONS_SHEET_ID!;

const FULL_HEADERS = [
  "Timestamp",
  "Full Name",
  "Email",
  "Phone",
  "Organisation",
  "Enquiry Type",
  "Message",
];

const FOOTER_HEADERS = [
  "Timestamp",
  "Full Name",
  "Email",
  "Enquiry Type",
  "Message",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, enquiryType, message, phone, organisation, source } = body;

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !enquiryType?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, enquiry type, and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const isFooter = source === "footer";
    const tabName = isFooter ? "Footer Enquiries" : "Contact";

    const values = isFooter
      ? [
          timestamp,
          name.trim(),
          email.trim(),
          enquiryType.trim(),
          message.trim(),
        ]
      : [
          timestamp,
          name.trim(),
          email.trim(),
          phone?.trim() || "",
          organisation?.trim() || "",
          enquiryType.trim(),
          message.trim(),
        ];

    await appendRow(SHEET_ID, tabName, isFooter ? FOOTER_HEADERS : FULL_HEADERS, values);

    try {
      const rows: Array<[string, unknown]> = isFooter
        ? [
            ["Submitted", timestamp],
            ["Source", "Footer form"],
            ["Name", name.trim()],
            ["Email", email.trim()],
            ["Enquiry Type", enquiryType.trim()],
            ["Message", message.trim()],
          ]
        : [
            ["Submitted", timestamp],
            ["Name", name.trim()],
            ["Email", email.trim()],
            ["Phone", phone?.trim()],
            ["Organisation", organisation?.trim()],
            ["Enquiry Type", enquiryType.trim()],
            ["Message", message.trim()],
          ];

      await sendAlert({
        subject: `${isFooter ? "New footer enquiry" : "New contact form"}: ${enquiryType.trim()} — ${name.trim()}`,
        text: renderRowsText(rows),
        html: `<p style="font-family:system-ui,sans-serif;font-size:14px;">New enquiry submitted via the UPTIB ${isFooter ? "footer form" : "contact form"}.</p>${renderRowsHtml(
          rows
        )}`,
        replyTo: email.trim(),
      });
    } catch (mailErr) {
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
