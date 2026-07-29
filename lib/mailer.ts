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
};

export async function sendAlert({ subject, text, html, replyTo }: AlertEmail) {
  const from =
    envValue("DEFAULT_FROM_EMAIL", "SMTP_FROM", "EMAIL_HOST_USER", "SMTP_USER");
  // Comma-separated lists are allowed, so the notification can go to more than
  // one inbox once testing is over.
  const to = envValue("LEADS_NOTIFY_EMAIL", "ALERT_TO");

  if (!to) throw new Error("Missing LEADS_NOTIFY_EMAIL env var");

  const transporter = getTransporter();

  await transporter.sendMail({
    from,
    to,
    replyTo,
    subject,
    text,
    html,
  });
}

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMPTY_PLACEHOLDER = "-";

function displayValue(v: unknown): string {
  if (v === undefined || v === null) return EMPTY_PLACEHOLDER;
  const s = String(v).trim();
  return s === "" ? EMPTY_PLACEHOLDER : s;
}

export function renderRowsHtml(rows: Array<[string, unknown]>): string {
  const items = rows
    .map(([k, v]) => {
      const value = displayValue(v);
      const isEmpty = value === EMPTY_PLACEHOLDER;
      return `<tr><td style="padding:6px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;vertical-align:top;white-space:nowrap;">${escapeHtml(
        k
      )}</td><td style="padding:6px 12px;border:1px solid #e5e7eb;${
        isEmpty ? "color:#9ca3af;" : ""
      }">${escapeHtml(value)}</td></tr>`;
    })
    .join("");

  return `<table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px;color:#111827;">${items}</table>`;
}

export function renderRowsText(rows: Array<[string, unknown]>): string {
  return rows
    .map(([k, v]) => `${k}: ${displayValue(v)}`)
    .join("\n");
}
