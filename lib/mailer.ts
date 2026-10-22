import nodemailer, { type Transporter } from "nodemailer";

let cached: Transporter | null = null;

/* Both naming schemes are accepted: EMAIL_* (current .env) and the older
   SMTP_* names still used by some deployments. */
const envValue = (...names: string[]): string | undefined => {
  for (const name of names) {
    const value = process.env[name]?.trim();
    if (value) return value;
  }
  return undefined;
};

function getTransporter(): Transporter {
  if (cached) return cached;

  const host = envValue("EMAIL_HOST", "SMTP_HOST");
  const port = Number(envValue("EMAIL_PORT", "SMTP_PORT") ?? 587);
  const user = envValue("EMAIL_HOST_USER", "SMTP_USER");
  const pass = envValue("EMAIL_HOST_PASSWORD", "SMTP_PASS");

  if (!host || !port || !user || !pass) {
    throw new Error(
      "Missing SMTP credentials. Set EMAIL_HOST, EMAIL_PORT, EMAIL_HOST_USER, EMAIL_HOST_PASSWORD."
    );
  }

  cached = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  return cached;
}

export type AlertEmail = {
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
  /** Overrides LEADS_NOTIFY_EMAIL (scripts/test-email.ts sends samples elsewhere). */
  to?: string;
};

export async function sendAlert({ subject, text, html, replyTo, to: recipient }: AlertEmail) {
  const from =
    envValue("DEFAULT_FROM_EMAIL", "SMTP_FROM", "EMAIL_HOST_USER", "SMTP_USER");
  // Comma-separated lists are allowed, so the notification can go to more than
  // one inbox once testing is over.
  const to = recipient || envValue("LEADS_NOTIFY_EMAIL", "ALERT_TO");

  if (!to) throw new Error("Missing LEADS_NOTIFY_EMAIL env var");

  const transporter = getTransporter();

  await transporter.sendMail({
    // A bare address gets the site's name, so the inbox shows who it is from.
    from: from && !from.includes("<") ? { name: "Pak Textiles Global Partners", address: from } : from,
    to,
    replyTo,
    subject,
    text,
    html,
  });
}
