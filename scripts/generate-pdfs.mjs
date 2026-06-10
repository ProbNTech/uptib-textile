/**
 * PDF Generator — Matches the UPTECH centered header design
 * (same as Membership T&C, MoU, Sales Commission PDFs)
 *
 * Design spec (from the original PDFs):
 *   - Centered "UK-PAKISTAN TECHNOLOGY COUNCIL" in large navy spaced letters
 *   - Centered "UPTECH" below in smaller text
 *   - Centered address below
 *   - Navy horizontal rule
 *   - Document title centered, bold, large
 *   - Optional subtitle centered, italic
 *   - Numbered section headings in navy blue, bold
 *   - Body text justified, with bullet lists
 *   - Footer: thin rule + centered "UK-Pakistan Technology Council (UPTECH) • 134-136 Westbourne Terrace, London, W2 6QB, UK"
 *
 * Usage: node scripts/generate-pdfs.mjs
 */

import { PDFDocument, StandardFonts, rgb, PageSizes } from "pdf-lib";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "..", "public", "documents");

if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

// ── Design Constants ────────────────────────────────────────────────────────
const NAVY = rgb(0.122, 0.204, 0.373);        // #1F3460 — navy blue for headings
const BLACK = rgb(0, 0, 0);
const GRAY = rgb(0.4, 0.4, 0.4);
const RULE_COLOR = rgb(0.275, 0.345, 0.459);   // steel blue for rules

const PAGE_W = PageSizes.A4[0]; // 595.28
const PAGE_H = PageSizes.A4[1]; // 841.89
const MARGIN_LEFT = 60;
const MARGIN_RIGHT = 60;
const MARGIN_TOP = 60;
const MARGIN_BOTTOM = 60;
const CONTENT_W = PAGE_W - MARGIN_LEFT - MARGIN_RIGHT;
const FOOTER_Y = 30;

// ── Helper: word-wrap text to fit a width ───────────────────────────────────
function wrapText(text, font, fontSize, maxWidth) {
  if (!text) return [];
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const testWidth = font.widthOfTextAtSize(testLine, fontSize);
    if (testWidth > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

// ── Helper: center text on page ─────────────────────────────────────────────
function centerX(text, font, fontSize) {
  const tw = font.widthOfTextAtSize(text, fontSize);
  return (PAGE_W - tw) / 2;
}

// ── PDF Builder Class ───────────────────────────────────────────────────────
class UptechPdfBuilder {
  constructor() {
    this.doc = null;
    this.page = null;
    this.y = 0;
    this.fonts = {};
    this.pageCount = 0;
  }

  async init() {
    this.doc = await PDFDocument.create();
    this.fonts.regular = await this.doc.embedFont(StandardFonts.TimesRoman);
    this.fonts.bold = await this.doc.embedFont(StandardFonts.TimesRomanBold);
    this.fonts.italic = await this.doc.embedFont(StandardFonts.TimesRomanItalic);
    this.addPage();
  }

  addPage() {
    this.page = this.doc.addPage(PageSizes.A4);
    this.y = PAGE_H - MARGIN_TOP;
    this.pageCount++;
    this.drawFooter();
  }

  drawFooter() {
    const footerText = "UK-Pakistan Technology Council (UPTECH) \u2022 134-136 Westbourne Terrace, London, W2 6QB, UK";
    const footerFont = this.fonts.regular;
    const footerSize = 8;
    // Rule
    this.page.drawLine({
      start: { x: MARGIN_LEFT, y: FOOTER_Y + 14 },
      end: { x: PAGE_W - MARGIN_RIGHT, y: FOOTER_Y + 14 },
      thickness: 0.5,
      color: RULE_COLOR,
    });
    // Text
    this.page.drawText(footerText, {
      x: centerX(footerText, footerFont, footerSize),
      y: FOOTER_Y,
      size: footerSize,
      font: footerFont,
      color: GRAY,
    });
  }

  ensureSpace(needed) {
    if (this.y - needed < MARGIN_BOTTOM + 30) {
      this.addPage();
    }
  }

  // ── Centered Header (matches Membership T&C / MoU design) ──────────────
  drawHeader() {
    const { bold, regular } = this.fonts;

    // "UK-PAKISTAN TECHNOLOGY COUNCIL" — large, centered, navy, letter-spaced
    const title = "U K - P A K I S T A N   T E C H N O L O G Y   C O U N C I L";
    const titleSize = 14;
    this.page.drawText(title, {
      x: centerX(title, bold, titleSize),
      y: this.y,
      size: titleSize,
      font: bold,
      color: NAVY,
    });
    this.y -= 18;

    // "UPTECH" — centered, smaller
    const sub1 = "UPTECH";
    const sub1Size = 10;
    this.page.drawText(sub1, {
      x: centerX(sub1, regular, sub1Size),
      y: this.y,
      size: sub1Size,
      font: regular,
      color: NAVY,
    });
    this.y -= 14;

    // Address — centered, small
    const addr = "134-136 Westbourne Terrace, London, W2 6QB, United Kingdom";
    const addrSize = 8.5;
    this.page.drawText(addr, {
      x: centerX(addr, regular, addrSize),
      y: this.y,
      size: addrSize,
      font: regular,
      color: GRAY,
    });
    this.y -= 10;

    // Horizontal rule
    this.page.drawLine({
      start: { x: MARGIN_LEFT, y: this.y },
      end: { x: PAGE_W - MARGIN_RIGHT, y: this.y },
      thickness: 1,
      color: RULE_COLOR,
    });
    this.y -= 28;
  }

  // ── Document Title (centered, bold, large) ─────────────────────────────
  drawTitle(title, subtitle) {
    const { bold, italic } = this.fonts;

    const titleSize = 16;
    const lines = wrapText(title, bold, titleSize, CONTENT_W - 40);
    for (const line of lines) {
      this.page.drawText(line, {
        x: centerX(line, bold, titleSize),
        y: this.y,
        size: titleSize,
        font: bold,
        color: BLACK,
      });
      this.y -= 22;
    }

    if (subtitle) {
      this.y -= 2;
      const subSize = 10;
      const subLines = wrapText(subtitle, italic, subSize, CONTENT_W - 60);
      for (const line of subLines) {
        this.page.drawText(line, {
          x: centerX(line, italic, subSize),
          y: this.y,
          size: subSize,
          font: italic,
          color: GRAY,
        });
        this.y -= 14;
      }
    }

    this.y -= 10;
  }

  // ── Section Heading (navy, bold, numbered) ─────────────────────────────
  drawSectionHeading(text) {
    this.ensureSpace(30);
    this.y -= 10;
    const size = 12;
    const lines = wrapText(text, this.fonts.bold, size, CONTENT_W);
    for (const line of lines) {
      this.page.drawText(line, {
        x: MARGIN_LEFT,
        y: this.y,
        size,
        font: this.fonts.bold,
        color: NAVY,
      });
      this.y -= 17;
    }
    this.y -= 2;
  }

  // ── Sub-heading (navy, bold, smaller) ──────────────────────────────────
  drawSubHeading(text) {
    this.ensureSpace(25);
    this.y -= 4;
    const size = 10.5;
    const lines = wrapText(text, this.fonts.bold, size, CONTENT_W);
    for (const line of lines) {
      this.page.drawText(line, {
        x: MARGIN_LEFT,
        y: this.y,
        size,
        font: this.fonts.bold,
        color: NAVY,
      });
      this.y -= 15;
    }
    this.y -= 2;
  }

  // ── Paragraph text ────────────────────────────────────────────────────
  drawParagraph(text, opts = {}) {
    const size = opts.size || 10;
    const font = opts.bold ? this.fonts.bold : (opts.italic ? this.fonts.italic : this.fonts.regular);
    const color = opts.color || BLACK;
    const indent = opts.indent || 0;
    const maxW = CONTENT_W - indent;
    const lines = wrapText(text, font, size, maxW);

    for (const line of lines) {
      this.ensureSpace(14);
      this.page.drawText(line, {
        x: MARGIN_LEFT + indent,
        y: this.y,
        size,
        font,
        color,
      });
      this.y -= 14;
    }
    this.y -= 3;
  }

  // ── Bold-lead paragraph (e.g. "1.1 Eligibility — ...") ────────────────
  drawBoldLeadParagraph(boldPart, normalPart) {
    const size = 10;
    const { bold, regular } = this.fonts;
    const fullText = `${boldPart} ${normalPart}`;
    // Use bold font for width calc since the first line contains bold text;
    // this prevents the bold portion from overflowing the line width
    const lines = wrapText(fullText, bold, size, CONTENT_W);

    for (let i = 0; i < lines.length; i++) {
      this.ensureSpace(14);
      const line = lines[i];

      if (i === 0) {
        // First line: render bold part then normal part
        const boldWidth = bold.widthOfTextAtSize(boldPart + " ", size);
        // Check if bold part fits in first line
        if (boldWidth < CONTENT_W) {
          this.page.drawText(boldPart, {
            x: MARGIN_LEFT,
            y: this.y,
            size,
            font: bold,
            color: BLACK,
          });
          const remainder = line.substring(boldPart.length).trimStart();
          if (remainder) {
            this.page.drawText(" " + remainder, {
              x: MARGIN_LEFT + bold.widthOfTextAtSize(boldPart, size),
              y: this.y,
              size,
              font: regular,
              color: BLACK,
            });
          }
        } else {
          this.page.drawText(line, {
            x: MARGIN_LEFT,
            y: this.y,
            size,
            font: bold,
            color: BLACK,
          });
        }
      } else {
        this.page.drawText(line, {
          x: MARGIN_LEFT,
          y: this.y,
          size,
          font: regular,
          color: BLACK,
        });
      }
      this.y -= 14;
    }
    this.y -= 3;
  }

  // ── Bullet item ───────────────────────────────────────────────────────
  drawBullet(text, opts = {}) {
    const size = opts.size || 10;
    const indent = opts.indent || 15;
    const bulletChar = "\u2022";
    const font = this.fonts.regular;
    const boldFont = this.fonts.bold;

    const textIndent = indent + 12;
    const maxW = CONTENT_W - textIndent;

    // Pre-calculate how many lines this bullet needs so we can ensure
    // at least the first two lines (bullet + first text line) fit on the
    // current page. This prevents orphaned bullet dots.
    const preLines = wrapText(text, font, size, maxW);
    const firstChunkHeight = Math.min(preLines.length, 2) * 14;
    this.ensureSpace(firstChunkHeight);

    // Draw bullet
    this.page.drawText(bulletChar, {
      x: MARGIN_LEFT + indent,
      y: this.y,
      size,
      font,
      color: BLACK,
    });

    // Handle bold-lead bullets ("Term — definition")
    const emDashIdx = text.indexOf(" \u2014 ");
    const dashIdx = text.indexOf(" \u2013 ");
    const sepIdx = emDashIdx !== -1 ? emDashIdx : dashIdx;

    if (sepIdx !== -1 && !opts.noBoldLead) {
      const boldPart = text.substring(0, sepIdx);
      const fullLines = wrapText(text, font, size, maxW);

      for (let i = 0; i < fullLines.length; i++) {
        if (i > 0) this.ensureSpace(14);
        const line = fullLines[i];

        if (i === 0) {
          // Bold the lead part
          const bw = boldFont.widthOfTextAtSize(boldPart, size);
          if (bw < maxW) {
            this.page.drawText(boldPart, {
              x: MARGIN_LEFT + textIndent,
              y: this.y,
              size,
              font: boldFont,
              color: BLACK,
            });
            const rest = line.substring(boldPart.length);
            if (rest) {
              this.page.drawText(rest, {
                x: MARGIN_LEFT + textIndent + bw,
                y: this.y,
                size,
                font,
                color: BLACK,
              });
            }
          } else {
            this.page.drawText(line, { x: MARGIN_LEFT + textIndent, y: this.y, size, font: boldFont, color: BLACK });
          }
        } else {
          this.page.drawText(line, { x: MARGIN_LEFT + textIndent, y: this.y, size, font, color: BLACK });
        }
        this.y -= 14;
      }
    } else {
      const lines = wrapText(text, font, size, maxW);
      for (let i = 0; i < lines.length; i++) {
        if (i > 0) this.ensureSpace(14);
        this.page.drawText(lines[i], {
          x: MARGIN_LEFT + textIndent,
          y: this.y,
          size,
          font: opts.bold ? boldFont : font,
          color: BLACK,
        });
        this.y -= 14;
      }
    }
    this.y -= 1;
  }

  // ── Spacer ─────────────────────────────────────────────────────────────
  space(px = 8) {
    this.y -= px;
  }

  // ── Save to file ──────────────────────────────────────────────────────
  async save(filename) {
    const bytes = await this.doc.save();
    const path = join(OUTPUT_DIR, filename);
    writeFileSync(path, bytes);
    console.log(`  ✓ ${filename} (${(bytes.length / 1024).toFixed(0)} KB, ${this.pageCount} pages)`);
    return path;
  }
}


// ═══════════════════════════════════════════════════════════════════════════
//  DOCUMENT DEFINITIONS
// ═══════════════════════════════════════════════════════════════════════════

async function generateArbitrationFramework() {
  const b = new UptechPdfBuilder();
  await b.init();
  b.drawHeader();
  b.drawTitle("UPTECH ARBITRATION FRAMEWORK POLICY", "Version 1.0 \u2014 Dispute Resolution under the Arbitration Act 1996 (UK)");

  b.drawSectionHeading("1. Introduction & Scope");
  b.drawParagraph("This policy establishes the UPTECH Arbitration Framework for resolving disputes arising in technology agreements, SaaS platforms, digital assets, software development contracts, and intellectual property transactions.");
  b.drawParagraph("The purpose of the Framework is to provide a fast, confidential, and enforceable dispute resolution process that leverages technology while complying with UK law (Arbitration Act 1996) and international arbitration standards.");
  b.drawParagraph("This Framework applies to all contracts entered into by UPTECH involving technology services, software licensing, SaaS, and platform agreements, as well as disputes between UPTECH and clients, vendors, technology partners, and investors where contracts reference arbitration.");
  b.drawParagraph("Applies To:", { bold: true });
  b.drawBullet("Technology services & software licensing", { noBoldLead: true });
  b.drawBullet("SaaS & platform agreements", { noBoldLead: true });
  b.drawBullet("Digital asset & blockchain disputes", { noBoldLead: true });
  b.drawBullet("Intellectual property transactions", { noBoldLead: true });
  b.drawBullet("Disputes with clients, vendors, and partners", { noBoldLead: true });
  b.drawBullet("Investor disputes (where contracts reference arbitration)", { noBoldLead: true });
  b.drawParagraph("Excluded: Employment disputes (separate HR policy) and regulatory/statutory enforcement matters.", { italic: true });

  b.drawSectionHeading("2. Legal Basis");
  b.drawBoldLeadParagraph("2.1 Arbitration Act 1996 (UK)", "\u2014 The primary governing legislation for all arbitration proceedings under the UPTECH Framework.");
  b.drawBoldLeadParagraph("2.2 LCIA Rules", "\u2014 London Court of International Arbitration Rules applied for structured and professional conduct of arbitration.");
  b.drawBoldLeadParagraph("2.3 New York Convention (1958)", "\u2014 Ensures arbitration awards are binding, final, and enforceable internationally across 170+ countries.");

  b.drawSectionHeading("3. Key Principles");
  b.drawBullet("Party Autonomy \u2014 Parties can select arbitrators, agree on rules, and decide procedures within the framework.");
  b.drawBullet("Expert Arbitrators \u2014 Arbitrators with technical and industry expertise are appointed to ensure informed decisions.");
  b.drawBullet("Speed & Efficiency \u2014 Digital processes aim to resolve disputes within 30\u201390 days.");
  b.drawBullet("Confidentiality \u2014 All proceedings, submissions, and awards are confidential.");
  b.drawBullet("Global Enforceability \u2014 Awards designed to be enforceable internationally under recognised conventions.");

  b.drawSectionHeading("4. Arbitration Acceptance Agreement");
  b.drawParagraph("Under the Arbitration Act 1996 \u2014 United Kingdom. Parties sign a formal Arbitration Acceptance Agreement covering the following key provisions:");
  b.drawBullet("Agreement to arbitrate all disputes", { noBoldLead: true });
  b.drawBullet("Governing law: Laws of England and Wales", { noBoldLead: true });
  b.drawBullet("Arbitration procedure under the Arbitration Act 1996", { noBoldLead: true });
  b.drawBullet("Appointment of independent arbitrator(s)", { noBoldLead: true });
  b.drawBullet("Seat and venue: London, England (or agreed alternative)", { noBoldLead: true });
  b.drawBullet("Confidentiality of all proceedings and awards", { noBoldLead: true });
  b.drawBullet("Binding and enforceable decision", { noBoldLead: true });
  b.drawBullet("Arbitrator authority to allocate costs", { noBoldLead: true });
  b.drawBullet("Waiver of court proceedings (except enforcement)", { noBoldLead: true });
  b.drawBullet("Voluntary acceptance by both parties", { noBoldLead: true });

  b.drawSectionHeading("5. Arbitration Procedure");
  b.drawSubHeading("5.1 Initiating Arbitration \u2014");
  b.drawBullet("Party raises dispute using the UPTECH digital arbitration platform", { noBoldLead: true });
  b.drawBullet("Include: nature of the dispute, relevant contracts, relief requested", { noBoldLead: true });
  b.drawBullet("Framework administrator acknowledges receipt within 3 business days", { noBoldLead: true });
  b.drawBullet("Preliminary review verifies eligibility and scope", { noBoldLead: true });

  b.drawSubHeading("5.2 Arbitrator Appointment \u2014");
  b.drawBullet("Single arbitrator for simple disputes (< \u00a3250,000)", { noBoldLead: true });
  b.drawBullet("Three-member tribunal for complex or high-value disputes", { noBoldLead: true });
  b.drawBullet("Arbitrators selected from UPTECH\u2019s Technical Arbitration Panel or mutually agreed", { noBoldLead: true });
  b.drawBullet("Appointment timeline: 7\u201314 days", { noBoldLead: true });
  b.drawBullet("All arbitrators must disclose potential conflicts before appointment", { noBoldLead: true });

  b.drawSubHeading("5.3 Case Management & Evidence \u2014");
  b.drawBullet("Procedural timetable set in consultation with parties", { noBoldLead: true });
  b.drawBullet("Submission deadlines for claims, counterclaims, and evidence", { noBoldLead: true });
  b.drawBullet("Electronic evidence admissible: code, logs, screenshots, blockchain records", { noBoldLead: true });
  b.drawBullet("Witness statements and expert testimony presented virtually or at hearings", { noBoldLead: true });
  b.drawBullet("All filings digitally managed via the UPTECH secure platform", { noBoldLead: true });

  b.drawSubHeading("5.4 Hearing & Award \u2014");
  b.drawBullet("Hearings: document-only, virtual (secure video), hybrid, or in-person", { noBoldLead: true });
  b.drawBullet("Arbitrator issues final written award with findings, reasoning, and remedies", { noBoldLead: true });
  b.drawBullet("Timeline: 30\u201360 days after final hearing", { noBoldLead: true });
  b.drawBullet("Awards are final under the Arbitration Act 1996", { noBoldLead: true });
  b.drawBullet("Internationally enforceable under the New York Convention", { noBoldLead: true });

  b.drawSectionHeading("6. Arbitrator Appointment Timeline");
  b.drawParagraph("Initial party selection attempt \u2014 7 days");
  b.drawParagraph("UPTECH Committee appointment (if no agreement) \u2014 5 days");
  b.drawParagraph("Conflict-of-interest disclosures \u2014 3 days");
  b.drawParagraph("Final appointment confirmation \u2014 2 days");

  b.drawSectionHeading("7. Cost Schedule");
  b.drawParagraph("Arbitrator Fees:", { bold: true });
  b.drawBullet("Single Arbitrator (simple dispute): \u00a33,000 \u2013 \u00a310,000", { noBoldLead: true });
  b.drawBullet("Three-Member Tribunal (complex/high-value): \u00a310,000 \u2013 \u00a330,000", { noBoldLead: true });
  b.drawBullet("Hourly Rate (additional services): \u00a3250 \u2013 \u00a3500/hr", { noBoldLead: true });
  b.drawParagraph("Platform & Admin Fees:", { bold: true });
  b.drawBullet("Digital platform usage fee: \u00a3500 flat per case", { noBoldLead: true });
  b.drawBullet("Additional document storage: \u00a350 per GB", { noBoldLead: true });
  b.drawBullet("Administrative fee: \u00a3250 \u2013 \u00a31,000", { noBoldLead: true });
  b.drawBullet("Scheduling & case management: \u00a3100 per party", { noBoldLead: true });

  b.drawSectionHeading("8. Digital Arbitration Platform");
  b.drawBullet("Secure Access \u2014 Two-factor authentication (2FA) with role-based access for Claimant, Respondent, Arbitrator, and Administrator.");
  b.drawBullet("Case Dashboard \u2014 Notifications, case summary with status and timeline, document repository, and encrypted messaging system.");
  b.drawBullet("Digital Filing \u2014 Submit notices, claims, defences, and evidence in PDF or approved digital formats with automatic timestamping.");
  b.drawBullet("Virtual Hearings \u2014 Integrated video conferencing for virtual and hybrid hearing sessions with secure platform-provided links.");
  b.drawBullet("Automated Reminders \u2014 Real-time alerts for deadlines, hearings, new messages, and procedural updates.");
  b.drawBullet("Security & Compliance \u2014 All communications encrypted. GDPR and UK data protection compliant. Access restricted to authorised users.");

  b.drawSectionHeading("9. Contact & Support");
  b.drawParagraph("24/7 technical support is available via the platform, chat, email, or phone. The UPTECH Arbitration Committee provides procedural guidance and handles all enquiries regarding arbitration proceedings.");
  b.drawParagraph("UK-Pakistan Technology Council (UPTECH)", { bold: true });
  b.drawParagraph("134-136 Westbourne Terrace, London, W2 6QB, United Kingdom");
  b.drawParagraph("Email: info@ukpaktech.org.uk");

  await b.save("UPTECH-Arbitration-Framework.pdf");
}

async function generateCodeOfConduct() {
  const b = new UptechPdfBuilder();
  await b.init();
  b.drawHeader();
  b.drawTitle("UPTECH CODE OF CONDUCT", "Binding on all members under the authority of the UPTECH Constitution");

  b.drawSectionHeading("1. Introduction");
  b.drawParagraph("The Code of Conduct for UK-Pakistan Tech Council is a foundational document established under the authority of our organisation\u2019s Constitution. It outlines the principles and standards that all members are expected to uphold in their professional and personal conduct.");
  b.drawParagraph("As a binding document, adherence to this Code is mandatory for all members, ensuring consistency, integrity, and professionalism in our collective endeavours. By adhering to these ethical and behavioural guidelines, we demonstrate our commitment to excellence, integrity, and mutual respect within our community and in our interactions with others.");
  b.drawParagraph("All members are required to give an undertaking to the effect that they would abide by the UPTECH Code of Conduct. The Code of Conduct also specifies the procedure for the action to be taken against concerned members for any breach of this Code.");

  b.drawSectionHeading("2. Core Principles");
  b.drawBullet("Integrity \u2014 Members will consistently demonstrate honesty and ethical behaviour in all actions and decisions.");
  b.drawBullet("Respect & Equality \u2014 Treat all members with dignity, equality, and cultural sensitivity, without discrimination based on any criteria.");
  b.drawBullet("Competence \u2014 Members will accurately represent their skills and experience and continuously strive to maintain professional competence.");
  b.drawBullet("Loyalty \u2014 Act with unwavering loyalty towards the Council and maintain confidentiality when entrusted with sensitive information.");
  b.drawBullet("Impartiality \u2014 Provide objective advice, disclosing any potential conflicts of interest promptly and transparently.");
  b.drawBullet("Ethical Conduct \u2014 Members will not pursue personal gain at the expense of the Council and actively work to enhance its reputation.");
  b.drawBullet("Non-discrimination \u2014 Refrain from engaging in discriminatory practices in any professional activities.");
  b.drawBullet("Continuous Development \u2014 Commit to lifelong learning, actively seeking opportunities to develop skills and knowledge, and encouraging fellow members to do the same.");
  b.drawBullet("Professionalism \u2014 Adhere to recognised professional standards, offering services and advice diligently and responsibly within their areas of expertise.");

  b.drawSectionHeading("3. Communication & Group Rules");
  b.drawParagraph("The following rules apply to all official UPTECH communication channels, including WhatsApp groups:");
  b.drawBullet("No personal attacks in group chats; violation may result in temporary or permanent ban.", { noBoldLead: true });
  b.drawBullet("Avoid posting irrelevant content or off-topic discussions.", { noBoldLead: true });
  b.drawBullet("No political, religious, sectarian, or biased content.", { noBoldLead: true });
  b.drawBullet("Obtain prior approval from Management before sharing advertisements.", { noBoldLead: true });
  b.drawBullet("Inform Group Admin or Management of any mobile number changes within 3 days.", { noBoldLead: true });
  b.drawBullet("Keep discussions aligned with the group\u2019s objectives.", { noBoldLead: true });
  b.drawBullet("Refrain from posting after 11:00 PM unless urgent matters arise.", { noBoldLead: true });
  b.drawBullet("Address grievances privately with Management, not publicly in the group.", { noBoldLead: true });

  b.drawSectionHeading("4. Disciplinary Procedure");
  b.drawParagraph("All members of the Council are expected to adhere to the Code of Conduct. In the event of a member wishing to file a complaint against other members for violating the Code, the following procedures apply:");
  b.drawBoldLeadParagraph("4.1 Filing a Complaint", "\u2014 All complaints must be submitted in writing and sent to the Management Committee of the Council. Any member is eligible to lodge a complaint.");
  b.drawBoldLeadParagraph("4.2 Investigation", "\u2014 Upon receipt, the complaint will undergo investigation by a Committee vested with the authority to summon any member(s) deemed relevant to the matter.");
  b.drawBoldLeadParagraph("4.3 Right to Respond", "\u2014 Should the Committee determine potential misconduct, the implicated member(s) will be afforded a 7-day period to respond to the allegations.");
  b.drawBoldLeadParagraph("4.4 Disciplinary Actions", "\u2014 Should the member(s) be found guilty, disciplinary actions may include caution, reprimand, suspension, or expulsion from Council membership.");
  b.drawBoldLeadParagraph("4.5 Dismissal of Complaint", "\u2014 If the complaint lacks merit following the Committee\u2019s evaluation, the complainant will be duly informed.");
  b.drawBoldLeadParagraph("4.6 Fair Hearing", "\u2014 In instances where the matter is referred to the Disciplinary Committee, formal proceedings will be arranged for a fair hearing of the charges.");
  b.drawBoldLeadParagraph("4.7 Escalation", "\u2014 If the Committee finds the response inadequate or no written representation is received, the matter will be escalated to the Disciplinary Committee.");

  b.drawSectionHeading("5. Confidentiality of Proceedings");
  b.drawParagraph("For caution and reprimand, the Council will disseminate details of the circumstances and outcome to all members without disclosing the member\u2019s identity. In cases of suspension or expulsion, the Council will, at its discretion, inform members confidentially.");

  b.drawSectionHeading("6. Right of Appeal");
  b.drawParagraph("Affected members retain the right to appeal the committee\u2019s decision within 7 days, submitting a written appeal. The Executive Committee will then review the appeal. The verdict rendered by the Executive Committee on the appeal(s) shall be final and non-negotiable.");

  b.drawSectionHeading("7. Contact");
  b.drawParagraph("UK-Pakistan Technology Council (UPTECH)", { bold: true });
  b.drawParagraph("134-136 Westbourne Terrace, London, W2 6QB, United Kingdom");
  b.drawParagraph("Email: info@ukpaktech.org.uk");

  await b.save("UPTECH-Code-of-Conduct.pdf");
}

async function generatePrivacyPolicy() {
  const b = new UptechPdfBuilder();
  await b.init();
  b.drawHeader();
  b.drawTitle("UPTECH PRIVACY POLICY");

  b.drawSectionHeading("1. Introduction");
  b.drawParagraph("UK-PAKISTAN TECH COUNCIL LTD (UPTECH) understands that your privacy is important to you and that you care about how your personal data is used. We respect and value the privacy of everyone who visits our website, www.ukpaktech.org.uk, and will only collect and use personal data in ways that are described here, and in a way that is consistent with our obligations and your rights under the law.");

  b.drawSectionHeading("2. How We Collect Information");
  b.drawParagraph("We collect information through:");
  b.drawBullet("Website registration forms and membership applications", { noBoldLead: true });
  b.drawBullet("Event registrations and newsletter sign-ups", { noBoldLead: true });
  b.drawBullet("Direct correspondence via email or post", { noBoldLead: true });
  b.drawBullet("Cookies and analytics on our website", { noBoldLead: true });
  b.drawBullet("Third-party referrals with your consent", { noBoldLead: true });

  b.drawSectionHeading("3. Information We Collect");
  b.drawParagraph("We may collect:");
  b.drawBullet("Name, job title, and company name", { noBoldLead: true });
  b.drawBullet("Contact information (email, phone, address)", { noBoldLead: true });
  b.drawBullet("Website usage data via cookies", { noBoldLead: true });
  b.drawBullet("Any other information you choose to provide", { noBoldLead: true });

  b.drawSectionHeading("4. How Your Information Is Used");
  b.drawParagraph("We use your information to:");
  b.drawBullet("Process membership applications and manage your account", { noBoldLead: true });
  b.drawBullet("Communicate council news, events, and opportunities", { noBoldLead: true });
  b.drawBullet("Provide services you have requested", { noBoldLead: true });
  b.drawBullet("Improve our website and services", { noBoldLead: true });
  b.drawBullet("Comply with legal obligations", { noBoldLead: true });
  b.drawBullet("Send marketing communications (with your consent)", { noBoldLead: true });

  b.drawSectionHeading("5. Data Retention");
  b.drawParagraph("We keep your information for no longer than is necessary:");
  b.drawBullet("Members: Through the contract period & up to 24 months after", { noBoldLead: true });
  b.drawBullet("Prospects: Up to 24 months from last contact", { noBoldLead: true });
  b.drawBullet("Statutory Board Members: Whilst serving and up to 6 months after term", { noBoldLead: true });
  b.drawBullet("Advisory Board Members: Whilst serving and up to 6 months after term", { noBoldLead: true });
  b.drawBullet("Stakeholders: Whilst serving and up to 6 months after term", { noBoldLead: true });
  b.drawBullet("Suppliers: Through the contract period & up to 24 months after", { noBoldLead: true });

  b.drawSectionHeading("6. Who Has Access");
  b.drawParagraph("Your personal data may be shared with:");
  b.drawBullet("UPTECH staff and board members on a need-to-know basis", { noBoldLead: true });
  b.drawBullet("Third-party service providers (IT, payment processors)", { noBoldLead: true });
  b.drawBullet("Legal or regulatory authorities where required by law", { noBoldLead: true });
  b.drawParagraph("We do not sell your data to third parties.");

  b.drawSectionHeading("7. Lawful Processing");
  b.drawParagraph("We rely on the following lawful grounds:");
  b.drawBullet("Performance of a Contract \u2014 Where we are entering into a contract with you.");
  b.drawBullet("Legal Obligation \u2014 Where necessary to comply with a legal or regulatory obligation.");
  b.drawBullet("Legitimate Interests \u2014 Where reasonably necessary to achieve our legitimate interests as a B2B strategic networking organisation.");
  b.drawBullet("Specific Consent \u2014 Where you have provided specific consent to us using your personal information.");

  b.drawSectionHeading("8. Marketing");
  b.drawParagraph("We will only send you marketing communications where you have given us consent or where we have a legitimate interest to do so. You may opt out at any time by contacting info@ukpaktech.org.uk or using the unsubscribe link in our emails.");

  b.drawSectionHeading("9. Your Rights");
  b.drawParagraph("Under UK data protection law, you have certain rights over the personal information that we hold about you:");
  b.drawBullet("Right of Access \u2014 You have a right to request access to the personal data that we hold about you.");
  b.drawBullet("Right to Correction \u2014 We shall update, archive or securely delete information if it goes out of date. You have the right to have inaccurate or incomplete information corrected.");
  b.drawBullet("Right to Restrict Use \u2014 You have a right to ask us to restrict the processing of some or all your personal information.");
  b.drawBullet("Right of Erasure \u2014 You may ask us to delete some or all your personal information.");
  b.drawBullet("Right to Portability \u2014 You may ask us to provide your data in a machine-readable format.");
  b.drawBullet("Right to Object \u2014 You have the right to object to processing based on legitimate interests, direct marketing, or statistical/research purposes.");
  b.drawParagraph("To exercise any of these rights, please email us at info@ukpaktech.org.uk with subject line: RIGHTS REQUEST. We will endeavour to respond within 10 working days.");

  b.drawSectionHeading("10. Security");
  b.drawParagraph("UPTECH uses reasonable measures to safeguard personal information. We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to only those employees, contractors or agents who have a legitimate business need.");

  b.drawSectionHeading("11. Contact");
  b.drawParagraph("For any questions about this Privacy Policy or our treatment of your Personal Information, please contact:");
  b.drawParagraph("UK-Pakistan Technology Council (UPTECH)", { bold: true });
  b.drawParagraph("134-136 Westbourne Terrace, London, W2 6QB, United Kingdom");
  b.drawParagraph("Email: info@ukpaktech.org.uk");

  await b.save("UPTECH-Privacy-Policy.pdf");
}

async function generateTermsAndConditions() {
  const b = new UptechPdfBuilder();
  await b.init();
  b.drawHeader();
  b.drawTitle("TERMS AND CONDITIONS", "Acceptance of Terms of Use for This Website");

  b.drawSectionHeading("1. Definitions and Interpretation");
  b.drawBoldLeadParagraph("1.1", "\u2014 \"Content\" means any and all text, images, audio, video, scripts, code, software, databases and any other form of information capable of being stored on a computer that appears on, or forms part of, Our Site.");
  b.drawBoldLeadParagraph("1.2", "\u2014 \"We\" or \"Us\" or \"Our\" means UK-PAKISTAN TECH COUNCIL LTD (UPTECH), a company registered in England, whose registered address is 5 Bishopsbourne, 134 Westbourne Terrace, London W2 6QB, United Kingdom.");

  b.drawSectionHeading("2. Information About Us");
  b.drawParagraph("Our Site is operated by UK-Pakistan Tech Council Ltd (UPTECH). We are registered in England and Wales.");

  b.drawSectionHeading("3. Access to Our Site");
  b.drawParagraph("Access to Our Site is free of charge. It is your responsibility to make any and all arrangements necessary in order to access Our Site. Access to Our Site is provided \"as is\" and on an \"as available\" basis.");

  b.drawSectionHeading("4. Changes to Our Site");
  b.drawParagraph("We may alter and update Our Site (or any part of it) at any time.");

  b.drawSectionHeading("5. Changes to These Terms");
  b.drawParagraph("We may alter these Terms and Conditions at any time. Any such changes will become binding on you upon your first use of Our Site after the changes have been implemented.");

  b.drawSectionHeading("6. Intellectual Property Rights");
  b.drawParagraph("All Content included on Our Site and the copyright and other intellectual property rights in that Content, unless specifically labelled otherwise, belongs to or has been licensed by Us. All Content is protected by applicable United Kingdom and international intellectual property laws and treaties.");
  b.drawParagraph("Subject to the exceptions below, you may not reproduce, copy, distribute, sell, rent, sub-licence, store, or in any other manner re-use Content from Our Site unless given express written permission to do so by Us. You may:");
  b.drawBullet("Access, view, and use Our Site in a web browser", { noBoldLead: true });
  b.drawBullet("Download Our Site (or any part of it) for caching", { noBoldLead: true });
  b.drawBullet("Print one copy of any page(s) from Our Site", { noBoldLead: true });
  b.drawBullet("Download extracts from pages on Our Site", { noBoldLead: true });
  b.drawParagraph("You may not use any Content saved or downloaded from Our Site for commercial purposes without first obtaining a licence from Us.");

  b.drawSectionHeading("7. Links to Our Site");
  b.drawParagraph("You may link to Our Site provided that you do so in a fair and legal way, you do not do so in a manner that is designed to suggest any form of association, endorsement or approval on Our part where none exists.");

  b.drawSectionHeading("8. Links to Other Sites");
  b.drawParagraph("Links to other sites may be included on Our Site. Unless expressly stated, these sites are not under Our control. We accept no responsibility or liability for the content of third-party sites.");

  b.drawSectionHeading("9. Disclaimers");
  b.drawParagraph("Nothing on Our Site constitutes advice. Content is provided for general information purposes only. We make reasonable efforts to ensure content is complete, accurate, and up-to-date, but we make no warranties that it is.");

  b.drawSectionHeading("10. Limitation of Liability");
  b.drawParagraph("To the fullest extent permissible by law, We accept no liability to any user for any loss or damage, whether foreseeable or otherwise, in contract, tort (including negligence), arising from the use of Our Site.");

  b.drawSectionHeading("11. Privacy and Cookies");
  b.drawParagraph("Use of Our Site is also governed by Our Privacy Policy and Cookie Policy, available on Our Site. These policies are incorporated into these Terms and Conditions by this reference.");

  b.drawSectionHeading("12. Viruses and Security");
  b.drawParagraph("We exercise all reasonable skill and care to ensure that Our Site is free from viruses and other malware. We accept no liability for any loss or damage resulting from a virus or other malware that may adversely affect your hardware, software, data or other material that occurs as a result of your use of Our Site.");

  b.drawSectionHeading("13. Acceptable Use Policy");
  b.drawParagraph("You may only use Our Site in a manner that is lawful. You must not use Our Site for any fraudulent purposes, or in connection with a criminal offence or other unlawful activity.");

  b.drawSectionHeading("14. Law and Jurisdiction");
  b.drawParagraph("These Terms shall be governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.");

  b.drawSectionHeading("15. Contact");
  b.drawParagraph("To contact Us, please email info@ukpaktech.org.uk or write to:");
  b.drawParagraph("UK-Pakistan Technology Council (UPTECH)", { bold: true });
  b.drawParagraph("134-136 Westbourne Terrace, London, W2 6QB, United Kingdom");

  await b.save("UPTECH-Terms-and-Conditions.pdf");
}

async function generateGDPRPolicy() {
  const b = new UptechPdfBuilder();
  await b.init();
  b.drawHeader();
  b.drawTitle("UPTECH GDPR COMPLIANCE POLICY");

  b.drawSectionHeading("1. Data Subject Rights");
  b.drawParagraph("GDPR compliance requires data subjects to be granted certain rights. What follows are those rights relevant to the collection, processing, and storage of personal data on www.ukpaktech.org.uk:");
  b.drawBullet("Right to Access \u2014 Data subjects reserve the right to request and obtain confirmation that data is or is not being collected on them. This data can be manually requested via info@ukpaktech.org.uk and provided in an electronic format free of charge.");
  b.drawBullet("Right to Be Forgotten \u2014 Should data subjects wish to withdraw their consent and no longer allow UPTECH to store their personal data, this request can be made via info@ukpaktech.org.uk.");
  b.drawBullet("Data Portability \u2014 Data subjects are able to request, obtain, and/or transfer possession of collected data at any time, provided in an electronic format free of charge.");
  b.drawBullet("Breach Notification \u2014 Should UPTECH encounter a breach of personal data, a notification will be made within 72 hours of becoming aware of the breach.");

  b.drawSectionHeading("2. Your Rights Under UK Data Protection Law");
  b.drawParagraph("Under UK data protection law, you have certain rights over the personal information that we hold about you:");
  b.drawBullet("Right of Access \u2014 You have a right to request access to the personal data that we hold about you. You also have the right to request a copy of the information we hold about you.");
  b.drawBullet("Right to Correction \u2014 We shall update, archive or securely delete information if it goes out of date. You have the right to have inaccurate or incomplete information corrected.");
  b.drawBullet("Right to Restrict Use \u2014 You have a right to ask us to restrict the processing of some or all your personal information if there is a disagreement about its accuracy.");
  b.drawBullet("Right of Erasure \u2014 You may ask us to delete some or all your personal information and in certain cases, we will do so as far as we are required to.");
  b.drawBullet("Right to Portability \u2014 If we are processing your personal information based on your consent, or in order to carry out a contract with you, you may ask us to provide it in a machine-readable format.");
  b.drawBullet("Right to Object \u2014 You have the right to object to processing where we are using your personal information based on legitimate interests, for direct marketing, or for statistical/research purposes.");
  b.drawParagraph("To exercise any of the above rights, please email us at info@ukpaktech.org.uk and clearly state in the email subject line: RIGHTS REQUEST. We will endeavour to respond fully to all requests within 10 working days.");

  b.drawSectionHeading("3. Lawful Processing");
  b.drawParagraph("Data protection law requires us to rely on one or more lawful grounds to process your personal information:");
  b.drawBullet("Performance of a Contract \u2014 Where we are entering into a contract with you or performing our obligations under it.");
  b.drawBullet("Legal Obligation \u2014 Where necessary to comply with a legal or regulatory obligation to which we are subject.");
  b.drawBullet("Legitimate Interests \u2014 Where reasonably necessary to achieve our legitimate interests as a B2B strategic networking organisation.");
  b.drawBullet("Specific Consent \u2014 Where you have provided specific consent to us using your personal information in a certain way.");

  b.drawSectionHeading("4. Data Retention");
  b.drawParagraph("We keep your information for no longer than is necessary for the purposes it was collected for:");
  b.drawBullet("Members: Through the contract period & up to 24 months after", { noBoldLead: true });
  b.drawBullet("Prospects: Up to 24 months from last contact", { noBoldLead: true });
  b.drawBullet("Statutory Board Members: Whilst serving and up to 6 months after term", { noBoldLead: true });
  b.drawBullet("Advisory Board Members: Whilst serving and up to 6 months after term", { noBoldLead: true });
  b.drawBullet("Stakeholders: Whilst serving and up to 6 months after term", { noBoldLead: true });
  b.drawBullet("Suppliers: Through the contract period & up to 24 months after", { noBoldLead: true });

  b.drawSectionHeading("5. Security Measures");
  b.drawParagraph("UPTECH uses reasonable measures to safeguard personal information. We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.");

  b.drawSectionHeading("6. Contact");
  b.drawParagraph("For any questions about this GDPR Policy or to exercise your rights, please contact:");
  b.drawParagraph("UK-Pakistan Technology Council (UPTECH)", { bold: true });
  b.drawParagraph("134-136 Westbourne Terrace, London, W2 6QB, United Kingdom");
  b.drawParagraph("Email: info@ukpaktech.org.uk");

  await b.save("UPTECH-GDPR-Policy.pdf");
}

async function generateMarketingAgreement() {
  const b = new UptechPdfBuilder();
  await b.init();
  b.drawHeader();
  b.drawTitle("MARKETING AGREEMENT", "Terms and conditions governing the promotion, marketing, and showcase of products through the UK-Pakistan Technology Council network.");

  b.drawSectionHeading("1. Purpose");
  b.drawParagraph("The purpose of this Agreement is to define the terms under which the Council will promote, market, and showcase the Product Owner\u2019s products, solutions, or services to its network of members, stakeholders, and partners in the UK, Europe, Middle East and African continent.");

  b.drawSectionHeading("2. Scope of Services");
  b.drawParagraph("The Council agrees to:");
  b.drawBullet("Feature the Product Owner\u2019s offerings on UPTECH digital channels", { noBoldLead: true });
  b.drawBullet("Include products in relevant marketing campaigns", { noBoldLead: true });
  b.drawBullet("Present products at trade delegations and exhibitions", { noBoldLead: true });
  b.drawBullet("Feature in the UPTECH Technology Marketplace (TechMart)", { noBoldLead: true });
  b.drawBullet("Provide access to the Council\u2019s business network", { noBoldLead: true });

  b.drawSectionHeading("3. Commission Structure");
  b.drawParagraph("The Council shall receive a commission on all sales generated through its marketing efforts. The exact commission percentage shall be agreed upon in writing between the parties prior to commencement of marketing activities.");

  b.drawSectionHeading("4. Product Owner Obligations");
  b.drawParagraph("The Product Owner agrees to:");
  b.drawBullet("Provide accurate and up-to-date product information", { noBoldLead: true });
  b.drawBullet("Maintain product quality and support", { noBoldLead: true });
  b.drawBullet("Honour all pricing communicated through UPTECH channels", { noBoldLead: true });
  b.drawBullet("Respond to enquiries within reasonable timeframes", { noBoldLead: true });

  b.drawSectionHeading("5. Intellectual Property");
  b.drawParagraph("Each party retains ownership of their respective intellectual property. The Product Owner grants the Council a non-exclusive licence to use product descriptions, logos, and images for marketing purposes.");

  b.drawSectionHeading("6. Confidentiality");
  b.drawParagraph("Both parties agree to keep confidential all proprietary information shared during the course of this Agreement.");

  b.drawSectionHeading("7. Duration and Termination");
  b.drawParagraph("This Agreement shall commence on the date of signing and continue for an initial period of 12 months, renewable by mutual agreement. Either party may terminate with 30 days written notice.");

  b.drawSectionHeading("8. Liability");
  b.drawParagraph("Neither party shall be liable for indirect, consequential, or incidental damages arising from this Agreement.");

  b.drawSectionHeading("9. Governing Law");
  b.drawParagraph("This Agreement shall be governed by the laws of England and Wales.");
  b.space(8);
  b.drawParagraph("UK-Pakistan Technology Council (UPTECH)", { bold: true });
  b.drawParagraph("134-136 Westbourne Terrace, London, W2 6QB, United Kingdom");

  await b.save("UPTECH-Marketing-Agreement.pdf");
}

async function generateJobPromotionAgreement() {
  const b = new UptechPdfBuilder();
  await b.init();
  b.drawHeader();
  b.drawTitle("JOB PROMOTION AGREEMENT", "Terms and conditions governing the promotion of job opportunities through the UK-Pakistan Technology Council network and channels.");

  b.drawSectionHeading("1. Purpose");
  b.drawParagraph("This Agreement sets out the terms under which the Council will promote the Employer\u2019s job opportunities to its network of members, stakeholders, and partners in the UK, Europe, Middle East, African continent and Pakistan.");

  b.drawSectionHeading("2. Scope of Services");
  b.drawParagraph("The Council agrees to:");
  b.drawBullet("Publish job listings on UPTECH digital platforms", { noBoldLead: true });
  b.drawBullet("Share opportunities through the Council\u2019s professional network", { noBoldLead: true });
  b.drawBullet("Feature positions in relevant newsletters and communications", { noBoldLead: true });
  b.drawBullet("Promote roles at UPTECH events and trade delegations", { noBoldLead: true });

  b.drawSectionHeading("3. Commission Structure");
  b.drawParagraph("The Council shall receive a commission for each successful placement resulting from its promotion efforts. The exact commission percentage and payment terms shall be agreed upon in writing prior to commencement.");

  b.drawSectionHeading("4. Employer Obligations");
  b.drawParagraph("The Employer agrees to:");
  b.drawBullet("Provide accurate job descriptions and requirements", { noBoldLead: true });
  b.drawBullet("Maintain fair and lawful hiring practices", { noBoldLead: true });
  b.drawBullet("Process applications in a timely manner", { noBoldLead: true });
  b.drawBullet("Provide feedback on candidates referred through UPTECH", { noBoldLead: true });

  b.drawSectionHeading("5. Candidate Data Protection");
  b.drawParagraph("Both parties agree to handle all candidate personal data in accordance with UK GDPR and the Data Protection Act 2018.");

  b.drawSectionHeading("6. Intellectual Property");
  b.drawParagraph("Each party retains ownership of their respective intellectual property. The Employer grants the Council permission to use their company name and logo for job promotion purposes.");

  b.drawSectionHeading("7. Confidentiality");
  b.drawParagraph("Both parties agree to keep confidential all proprietary and candidate information shared during the course of this Agreement.");

  b.drawSectionHeading("8. Duration and Termination");
  b.drawParagraph("This Agreement shall commence on the date of signing and continue for an initial period of 12 months. Either party may terminate with 30 days written notice.");

  b.drawSectionHeading("9. Governing Law");
  b.drawParagraph("This Agreement shall be governed by the laws of England and Wales.");
  b.space(8);
  b.drawParagraph("UK-Pakistan Technology Council (UPTECH)", { bold: true });
  b.drawParagraph("134-136 Westbourne Terrace, London, W2 6QB, United Kingdom");

  await b.save("UPTECH-Job-Promotion-Agreement.pdf");
}

// ═══════════════════════════════════════════════════════════════════════════
//  MAIN
// ═══════════════════════════════════════════════════════════════════════════
async function main() {
  console.log("\n=== Generating UPTECH PDFs (Centered Header Design) ===\n");

  await generateArbitrationFramework();
  await generateCodeOfConduct();
  await generatePrivacyPolicy();
  await generateTermsAndConditions();
  await generateGDPRPolicy();
  await generateMarketingAgreement();
  await generateJobPromotionAgreement();

  console.log("\n=== All 7 PDFs generated successfully ===\n");
  console.log("PDFs NOT regenerated (already have correct design):");
  console.log("  - UPTECH-Membership-Terms-and-Conditions.pdf");
  console.log("  - UPTECH-Memorandum-of-Understanding.pdf");
  console.log("  - UPTECH-Sales-Commission-Agreement.pdf");
  console.log("");
}

main().catch(console.error);
