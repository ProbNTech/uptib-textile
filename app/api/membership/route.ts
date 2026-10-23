import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";
import { sendAlert } from "@/lib/mailer";
import { renderLeadEmail } from "@/lib/lead-email";
import { TABS, sheetIdFor, sheetUrlFor } from "@/lib/leads";


const COUNTRY_LABELS: Record<string, string> = {
  uk: "United Kingdom",
  pakistan: "Pakistan",
};

const hasCityList = (country: string) => country === "uk" || country === "pakistan";

const HEADERS = [
  "Timestamp",
  // Organisation
  "Organisation Name",
  "Employees",
  "Registration No.",
  "Country",
  "City",
  "Address",
  "Postal Code",
  "Phone",
  "WhatsApp",
  "Website",
  "Core Products/Services",
  "Organisation Profile",
  // Industry
  "Sectors",
  "Other Sector",
  // Applicant
  "Contact Name",
  "Contact Job Title",
  "Contact Email",
  "Contact Phone",
  "Contact Nationality",
  // Consents
  "Terms Accepted",
  "Membership Terms Accepted",
  "Arbitration Accepted",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.orgName?.trim()) {
      return NextResponse.json(
        { error: "Organisation name is required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    const country = body.country
      ? COUNTRY_LABELS[body.country] || body.country
      : "";

    // City: UK/Pakistan use the `city` dropdown (with an "other" escape hatch → cityOther).
    // Any other country uses the free-text `cityOther` input directly.
    const city = !hasCityList(body.country)
      ? body.cityOther?.trim() || ""
      : body.city === "other"
      ? body.cityOther?.trim() || ""
      : body.city?.trim() || "";

    const values = [
      timestamp,
      // Organisation
      body.orgName?.trim() || "",
      body.employees || "",
      body.registrationNo?.trim() || "",
      country,
      city,
      body.address?.trim() || "",
      body.postalCode?.trim() || "",
      body.orgPhone?.trim() || "",
      body.whatsapp?.trim() || "",
      body.website?.trim() || "",
      body.coreProducts?.trim() || "",
      body.orgProfile?.trim() || "",
      // Industry
      Array.isArray(body.selectedSectors) ? body.selectedSectors.join(", ") : "",
      body.otherSector?.trim() || "",
      // Applicant
      body.personName?.trim() || "",
      body.personJobTitle?.trim() || "",
      body.personEmail?.trim() || "",
      body.personPhone?.trim() || "",
      body.personNationality?.trim() || "",
      // Consents
      body.termsAccepted ? "Yes" : "No",
      body.membershipTermsAccepted ? "Yes" : "No",
      body.arbitrationAccepted ? "Yes" : "No",
    ];

    await appendRow(sheetIdFor("membership"), TABS.membership, HEADERS, values);

    try {
      await sendAlert(
        renderLeadEmail({
          label: "membership application",
          tag: TABS.membership,
          subject: `New membership application - ${body.orgName?.trim() || "(unknown org)"}`,
          // Every column but the timestamp, which shows under the heading.
          rows: HEADERS.map((h, i): [string, unknown] => [h, values[i]]).slice(1),
          name: body.personName?.trim(),
          email: body.personEmail?.trim(),
          receivedAt: new Date(timestamp),
          sheetUrl: sheetUrlFor("membership"),
        })
      );
    } catch (mailErr) {
      console.error("Membership form alert email failed:", mailErr);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Membership form error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}
