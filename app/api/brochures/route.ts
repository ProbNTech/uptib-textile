import { NextRequest, NextResponse, after } from "next/server";
import { appendRow } from "@/lib/google-sheets";
import { sendAlert } from "@/lib/mailer";
import { renderLeadEmail } from "@/lib/lead-email";
import { BROCHURE_HEADERS, TABS, sheetIdFor, sheetUrlFor } from "@/lib/leads";
import { brochureBySlug, type BrochureSlug } from "@/data/brochures";

/* Where each catalogue lives in /public. The random suffix keeps the URL
   unguessable and this route is the only place a browser learns it, after the
   download form has been submitted. To replace a brochure, add the new PDF
   under a fresh suffix, update this map, and re-run
   scripts/render-brochure-covers.py. */
const FILES: Record<BrochureSlug, string> = {
  "home-textiles": "/brochures/home-textiles-e5e51c5a36.pdf",
  "hospitality-linen": "/brochures/hospitality-linen-11e9b68ecc.pdf",
  "towel-collection": "/brochures/towel-collection-ee41ed3799.pdf",
  "hospital-textiles": "/brochures/hospital-textiles-3d66679244.pdf",
  uniforms: "/brochures/uniforms-241eb34657.pdf",
};

const text = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/* Approximate country from the host's geo header (Vercel or Cloudflare),
   blank when neither is present. */
function countryFrom(req: NextRequest): string {
  const code = (req.headers.get("x-vercel-ip-country") || req.headers.get("cf-ipcountry") || "")
    .trim()
    .toUpperCase();
  if (!/^[A-Z]{2}$/.test(code) || code === "XX") return "";
  try {
    return new Intl.DisplayNames(["en-GB"], { type: "region" }).of(code) ?? code;
  } catch {
    return code;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const brochure = brochureBySlug(text(body.brochure, 60));
    if (!brochure) {
      return NextResponse.json({ error: "Unknown brochure." }, { status: 400 });
    }

    // Server-side validation — mirrors the client rules in BrochureGate.
    const name = text(body.name, 120);
    const email = text(body.email, 200);
    const company = text(body.company, 160);

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Name, email and company are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (body.consent !== true) {
      return NextResponse.json(
        { error: "Please accept the privacy policy." },
        { status: 400 }
      );
    }

    const download = {
      url: FILES[brochure.slug],
      filename: `Pak-Textiles-${brochure.title.replace(/\s+/g, "-")}.pdf`,
    };

    // Honeypot: a hidden field real visitors never fill. Bots get the file but no row.
    if (text(body.website, 200)) return NextResponse.json(download);

    const returning = body.returning === true;
    const values = [
      new Date().toISOString(),
      name,
      email,
      company,
      brochure.title,
      returning ? "Additional download" : "New lead",
      countryFrom(req),
      text(body.page, 200) || "/",
      "Yes",
    ];

    // Log once the response is out, so the download starts straight away.
    after(async () => {
      try {
        await appendRow(sheetIdFor("brochure"), TABS.brochure, BROCHURE_HEADERS, values);
      } catch (sheetErr) {
        console.error("Brochure download sheet append failed:", sheetErr);
      }

      // One alert per new lead; additional downloads are in the sheet only.
      if (returning) return;
      try {
        await sendAlert(
          renderLeadEmail({
            label: "brochure download",
            tag: TABS.brochure,
            subject: `New brochure download: ${brochure.title} - ${name} (${company})`,
            // Every column but the timestamp, which shows under the heading.
            rows: BROCHURE_HEADERS.map((h, i): [string, unknown] => [h, values[i]]).slice(1),
            name,
            email,
            receivedAt: new Date(values[0]),
            sheetUrl: sheetUrlFor("brochure"),
          })
        );
      } catch (mailErr) {
        console.error("Brochure download alert email failed:", mailErr);
      }
    });

    return NextResponse.json(download);
  } catch (error) {
    console.error("Brochure download error:", error);
    return NextResponse.json(
      { error: "Failed to prepare your download. Please try again." },
      { status: 500 }
    );
  }
}
