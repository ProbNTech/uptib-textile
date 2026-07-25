import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";
import { renderRowsHtml, renderRowsText, sendAlert } from "@/lib/mailer";
import { REGISTRATION_HEADERS, TABS, sheetIdFor } from "@/lib/leads";

/* Labels for the values the form submits as codes. */
const ACCOUNT_TYPE_LABELS: Record<string, string> = {
  buyer: "Buyer / importer (sourcing from Pakistan)",
  exporter: "Manufacturer / exporter (selling globally)",
  both: "Both, or still exploring",
};

const COUNTRY_LABELS: Record<string, string> = {
  uk: "United Kingdom",
  pakistan: "Pakistan",
};

const hasCityList = (country: string) => country === "uk" || country === "pakistan";

const text = (v: unknown) => (typeof v === "string" ? v.trim() : "");
const list = (v: unknown) => (Array.isArray(v) ? v.filter(Boolean).join(", ") : "");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Server-side validation — mirrors the client rules in RegistrationForm.
    const missing: string[] = [];
    if (!text(body.accountType)) missing.push("registration type");
    if (!text(body.orgName)) missing.push("company name");
    if (!text(body.businessType)) missing.push("business type");
    if (!text(body.country)) missing.push("country");
    if (!text(body.personName)) missing.push("contact name");
    if (!text(body.personEmail)) missing.push("email address");
    if (!text(body.personPhone)) missing.push("phone number");
    if (!Array.isArray(body.selectedServices) || body.selectedServices.length === 0)
      missing.push("at least one service");
    if (!Array.isArray(body.selectedCategories) || body.selectedCategories.length === 0)
      missing.push("at least one product category");

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Please provide: ${missing.join(", ")}.` },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text(body.personEmail))) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (!body.termsAccepted) {
      return NextResponse.json(
        { error: "You must accept the terms and privacy policy." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const countryKey = text(body.country);
    const country = COUNTRY_LABELS[countryKey] || countryKey;

    // City: UK/Pakistan use the `city` dropdown (with an "other" escape hatch
    // to cityOther). Any other country uses the free-text `cityOther` input.
    const city = !hasCityList(countryKey)
      ? text(body.cityOther)
      : body.city === "other"
      ? text(body.cityOther)
      : text(body.city);

    // Order must match REGISTRATION_HEADERS exactly.
    const values = [
      timestamp,
      ACCOUNT_TYPE_LABELS[text(body.accountType)] || text(body.accountType),
      // Company
      text(body.orgName),
      text(body.businessType),
      text(body.registrationNo),
      text(body.website),
      text(body.employees),
      text(body.yearsTrading),
      country,
      city,
      text(body.address),
      // Primary contact
      text(body.personName),
      text(body.personJobTitle),
      text(body.personEmail),
      text(body.personPhone),
      text(body.whatsapp),
      text(body.preferredContact),
      // Interests
      list(body.selectedServices),
      list(body.selectedCategories),
      text(body.otherCategory),
      // Requirement
      text(body.orderVolume),
      text(body.timeline),
      text(body.targetMarkets),
      text(body.certifications),
      text(body.requirement),
      // Finish
      text(body.howHeard),
      body.termsAccepted ? "Yes" : "No",
      body.marketingOptIn ? "Yes" : "No",
    ];

    await appendRow(sheetIdFor("registration"), TABS.registration, REGISTRATION_HEADERS, values);

    try {
      const rows: Array<[string, unknown]> = REGISTRATION_HEADERS.map((h, i) => [h, values[i]]);

      await sendAlert({
        subject: `New registration: ${text(body.orgName)} (${
          ACCOUNT_TYPE_LABELS[text(body.accountType)] || text(body.accountType)
        })`,
        text: renderRowsText(rows),
        html: `<p style="font-family:system-ui,sans-serif;font-size:14px;">New registration submitted via the Pak Textiles Global Partners website.</p>${renderRowsHtml(
          rows
        )}`,
        replyTo: text(body.personEmail) || undefined,
      });
    } catch (mailErr) {
      // The lead is already safe in the sheet; never fail the request on email.
      console.error("Registration alert email failed:", mailErr);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Registration form error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}
