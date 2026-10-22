/**
 * The email the team gets for each form submission: who sent it and when,
 * buttons to reply and to open the sheet, and every field in the sheet's
 * column order, with messages and other long answers in a block of their own.
 * The API routes send the result with sendAlert (lib/mailer.ts).
 *
 * It has no imports, so scripts/test-email.ts can preview it with a sample.
 */

const SITE = "Pak Textiles Global Partners";
const DOMAIN = "paktextileglobal.com";
/** The sheets record UTC (ISO) timestamps, so the email does too. */
const TIME_ZONE = "UTC";

// The brand palette of app/globals.css: ink navy, taupe and ivory.
const HEADER = "#394F73";
const HEADER_RULE = "#D8CDBA";
const KICKER = "#D8CDBA";
const BUTTON = "#394F73";
const BUTTON_TEXT = "#FFFFFF";
const LINK = "#394F73";
const HEADING = "#1A1A1A";
const TEXT = "#4A4A46";
const MUTED = "#8A857C";
const EMPTY = "#B3ADA3";
const RULE = "#E5DFD3";
const OUTLINE = "#D8CDBA";
const BACKDROP = "#ECE5D8";
const PANEL = "#F6F2EA";
const BLOCK_EDGE = "#8C9AAB";
const TAG = "#F6F2EA";
const TAG_TEXT = "#394F73";

export type LeadEmailInput = {
  /** What came in, as a noun: the heading reads "New <label>". */
  label: string;
  /** The tag above the heading, such as the sheet tab; the label when left out. */
  tag?: string;
  subject: string;
  /** The submission, field by field, in the sheet's column order. */
  rows: Array<[string, unknown]>;
  name?: string;
  email?: string;
  receivedAt?: Date;
  /** A line under the sender, such as what to do next. */
  intro?: string;
  sheetUrl?: string;
  /** An extra button, such as a link to an admin page. */
  action?: { label: string; href: string };
};

export type LeadEmail = { subject: string; text: string; html: string; replyTo?: string };

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

/** Escaped, keeping the sender's line breaks. */
const toHtml = (s: string) => escapeHtml(s).replace(/\r?\n/g, "<br>");

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const isUrl = (s: string) => /^https?:\/\/\S+$/i.test(s);

/** Messages and other long answers read better as a block than a table cell. */
const isLong = (s: string) => s.length > 120 || s.includes("\n");

const formatTime = (d: Date) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: TIME_ZONE,
    timeZoneName: "short",
  }).format(d);

export function renderLeadEmail(lead: LeadEmailInput): LeadEmail {
  const { label, subject, intro, sheetUrl, action } = lead;
  const heading = `New ${label}`;
  const tag = lead.tag || label.charAt(0).toUpperCase() + label.slice(1);
  const name = lead.name?.trim() ?? "";
  const email = lead.email?.trim() ?? "";
  const first = name.split(/\s+/)[0];
  const at = lead.receivedAt && !Number.isNaN(lead.receivedAt.getTime()) ? lead.receivedAt : new Date();
  const when = formatTime(at);
  const rows = lead.rows.map(([header, value]): [string, string] => [header, value == null ? "" : String(value).trim()]);
  const replyUrl = email ? `mailto:${email}?subject=${encodeURIComponent(`Re: your ${label}`)}` : "";
  const footer = `Sent automatically by the website at ${DOMAIN}.${sheetUrl ? " The submission is also saved in the forms sheet." : ""}`;
  const replyNote = email ? `Reply to this email to write to ${first || email} directly.` : "";

  const text = [
    heading,
    `From ${name ? `${name}${email ? ` (${email})` : ""}` : email || "the website"}, ${when}`,
    ...(intro ? ["", intro] : []),
    "",
    ...rows.map(([header, value]) => (isLong(value) ? `\n${header}:\n${value}\n` : `${header}: ${value || "Not given"}`)),
    "",
    footer,
    ...(sheetUrl ? [`Open the sheet: ${sheetUrl}`] : []),
    ...(action ? [`${action.label}: ${action.href}`] : []),
    ...(replyNote ? [replyNote] : []),
  ].join("\n");

  const link = (href: string, label: string) => `<a href="${escapeHtml(href)}" style="color:${LINK}">${escapeHtml(label)}</a>`;
  const valueHtml = (value: string) => {
    if (!value) return `<span style="color:${EMPTY};font-weight:normal">Not given</span>`;
    if (isEmail(value)) return link(`mailto:${value}`, value);
    if (isUrl(value)) return link(value, value);
    return toHtml(value);
  };
  const rule = `border-bottom:1px solid ${RULE}`;
  const tableRows = rows
    .map(([header, value]) => {
      if (isLong(value)) {
        return `<tr><td colspan="2" style="padding:12px 0 14px;${rule}">
          <div style="color:${MUTED};font-size:13px;line-height:1.5">${escapeHtml(header)}</div>
          <div style="margin-top:8px;padding:12px 14px;background:${PANEL};border-left:3px solid ${BLOCK_EDGE};color:${TEXT};font-size:14px;line-height:1.65;word-break:break-word">${valueHtml(value)}</div>
        </td></tr>`;
      }
      return `<tr>
        <td valign="top" style="padding:10px 12px 10px 0;width:38%;color:${MUTED};font-size:13px;line-height:1.5;${rule}">${escapeHtml(header)}</td>
        <td valign="top" style="padding:10px 0;color:${HEADING};font-size:14px;line-height:1.5;font-weight:bold;word-break:break-word;${rule}">${valueHtml(value)}</td>
      </tr>`;
    })
    .join("");

  const button = (href: string, label: string, solid: boolean) =>
    `<a href="${escapeHtml(href)}" style="display:inline-block;margin:0 8px 8px 0;padding:${solid ? "11px 22px" : "10px 21px"};border-radius:999px;font-size:14px;font-weight:bold;text-decoration:none;${
      solid ? `background:${BUTTON};color:${BUTTON_TEXT}` : `background:#ffffff;color:${LINK};border:1px solid ${OUTLINE}`
    }">${escapeHtml(label)}</a>`;
  const buttons = [
    replyUrl ? button(replyUrl, first ? `Reply to ${first}` : "Reply by email", true) : "",
    action ? button(action.href, action.label, !replyUrl) : "",
    sheetUrl ? button(sheetUrl, "Open the sheet", !replyUrl && !action) : "",
  ].join("");
  const fromLine = name
    ? `From <strong style="color:${HEADING}">${escapeHtml(name)}</strong>${email ? ` (${link(`mailto:${email}`, email)})` : ""}`
    : `From ${email ? link(`mailto:${email}`, email) : "the website"}`;

  // Tables and inline styles: what email clients (Outlook, Gmail) reliably show.
  const html = `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(subject)}</title></head>
<body style="margin:0;padding:0;background:${BACKDROP}">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHtml(`${name || email || heading}, ${when}`)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BACKDROP};padding:24px 12px">
<tr><td align="center">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:14px;overflow:hidden;font-family:Arial,Helvetica,sans-serif">
    <tr><td style="background:${HEADER};padding:22px 28px;border-bottom:4px solid ${HEADER_RULE}">
      <div style="color:${KICKER};font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">Website submission</div>
      <div style="margin-top:5px;color:#ffffff;font-size:18px;font-weight:bold">${escapeHtml(SITE)}</div>
    </td></tr>
    <tr><td style="padding:28px 28px 0">
      <span style="display:inline-block;padding:5px 12px;border-radius:999px;background:${TAG};color:${TAG_TEXT};font-size:12px;font-weight:bold">${escapeHtml(tag)}</span>
      <h1 style="margin:14px 0 8px;color:${HEADING};font-size:24px;line-height:1.25;font-weight:bold">${escapeHtml(heading)}</h1>
      <p style="margin:0;color:${MUTED};font-size:14px;line-height:1.6">${fromLine}<br>${escapeHtml(when)}</p>
      ${intro ? `<p style="margin:14px 0 0;color:${TEXT};font-size:14px;line-height:1.6">${toHtml(intro)}</p>` : ""}
    </td></tr>
    ${buttons ? `<tr><td style="padding:20px 28px 0">${buttons}</td></tr>` : ""}
    <tr><td style="padding:20px 28px 24px">
      <div style="padding-bottom:6px;${rule};color:${MUTED};font-size:11px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase">Submission details</div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${tableRows}</table>
    </td></tr>
    <tr><td style="background:${PANEL};padding:16px 28px;color:${MUTED};font-size:12px;line-height:1.6">
      ${escapeHtml(footer)}${replyNote ? `<br>${escapeHtml(replyNote)}` : ""}
    </td></tr>
  </table>
</td></tr>
</table>
</body></html>`;

  return { subject, text, html, replyTo: email || undefined };
}
