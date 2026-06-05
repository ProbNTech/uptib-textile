import { NextResponse } from "next/server";
import { contactSchema, needRouting } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot tripped — pretend success so bots get no signal.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const route = needRouting[data.need];

  // TODO (client): wire this to email (e.g. Resend/SES) or your CRM.
  // The `route` value indicates which inbox/team should receive the enquiry.
  console.info("[contact] new enquiry", {
    route,
    name: data.name,
    company: data.company,
    email: data.email,
    need: data.need,
  });

  return NextResponse.json({ ok: true, route });
}
