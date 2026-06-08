import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const doc = new jsPDF({ unit: "mm", format: "a4" });
const pageWidth = 210;
const pageHeight = 297;
const margin = 20;
const contentWidth = pageWidth - margin * 2;
let y = 0;

// Brand colors
const BLUE = [37, 99, 235];
const GREEN = [34, 197, 94];
const RED = [196, 30, 58];
const DARK = [28, 31, 46];
const GRAY = [90, 95, 114];
const LIGHT_BG = [248, 247, 245];

function checkPage(needed = 20) {
  if (y + needed > pageHeight - 25) {
    // Footer on current page
    addFooter();
    doc.addPage();
    y = 20;
    return true;
  }
  return false;
}

function addFooter() {
  doc.setFontSize(7);
  doc.setTextColor(...GRAY);
  doc.text("UPTECH — UK Pakistan Tech Council", margin, pageHeight - 10);
  doc.text("Confidential — Arbitration Framework Policy v1.0", pageWidth / 2, pageHeight - 10, { align: "center" });
  doc.text(`Page ${doc.getNumberOfPages()}`, pageWidth - margin, pageHeight - 10, { align: "right" });
}

function drawSectionHeader(title, color = BLUE) {
  checkPage(25);
  // Accent bar
  doc.setFillColor(...color);
  doc.rect(margin, y, contentWidth, 1, "F");
  y += 5;
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...DARK);
  doc.text(title, margin, y + 5);
  y += 12;
  // Thin line under title
  doc.setDrawColor(216, 213, 207);
  doc.setLineWidth(0.3);
  doc.line(margin, y, margin + contentWidth, y);
  y += 6;
}

function drawSubHeader(title) {
  checkPage(15);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...DARK);
  doc.text(title, margin, y);
  y += 6;
}

function drawParagraph(text, indent = 0) {
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...GRAY);
  const lines = doc.splitTextToSize(text, contentWidth - indent);
  for (const line of lines) {
    checkPage(6);
    doc.text(line, margin + indent, y);
    y += 4.5;
  }
  y += 2;
}

function drawBullet(text, color = GREEN, indent = 0) {
  checkPage(8);
  doc.setFillColor(...color);
  doc.circle(margin + indent + 2, y - 1.2, 1, "F");
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...GRAY);
  const lines = doc.splitTextToSize(text, contentWidth - indent - 8);
  for (let i = 0; i < lines.length; i++) {
    if (i > 0) checkPage(5);
    doc.text(lines[i], margin + indent + 6, y);
    y += 4.5;
  }
}

function drawLabelValue(label, value, color = BLUE) {
  checkPage(8);
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...color);
  doc.text(label, margin + 6, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...GRAY);
  const labelWidth = doc.getTextWidth(label + "  ");
  const lines = doc.splitTextToSize(value, contentWidth - 6 - labelWidth);
  doc.text(lines[0], margin + 6 + labelWidth, y);
  y += 4.5;
  for (let i = 1; i < lines.length; i++) {
    checkPage(5);
    doc.text(lines[i], margin + 6, y);
    y += 4.5;
  }
}

function drawTableRow(cells, isHeader = false, colors = [BLUE]) {
  checkPage(10);
  const colWidths = cells.length === 2 ? [contentWidth * 0.65, contentWidth * 0.35] : [contentWidth / cells.length];

  if (isHeader) {
    doc.setFillColor(...(colors[0] || BLUE));
    doc.rect(margin, y - 4, contentWidth, 7, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
  } else {
    doc.setFillColor(248, 247, 245);
    doc.rect(margin, y - 4, contentWidth, 7, "F");
    doc.setTextColor(...GRAY);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
  }

  let x = margin + 3;
  cells.forEach((cell, i) => {
    doc.text(cell, x, y);
    x += colWidths[i] || colWidths[0];
  });
  y += 6;
}

// ─────────────────────────────────────────────
// PAGE 1 — COVER
// ─────────────────────────────────────────────
// Dark header band
doc.setFillColor(...DARK);
doc.rect(0, 0, pageWidth, 130, "F");

// Accent line
doc.setFillColor(...RED);
doc.rect(0, 130, pageWidth, 2, "F");

// UPTECH text
doc.setFontSize(10);
doc.setFont("helvetica", "bold");
doc.setTextColor(255, 255, 255);
doc.text("UPTECH", margin, 35);

doc.setFontSize(8);
doc.setFont("helvetica", "normal");
doc.setTextColor(200, 200, 200);
doc.text("UK Pakistan Tech Council", margin, 41);

// Main title
doc.setFontSize(28);
doc.setFont("helvetica", "bold");
doc.setTextColor(255, 255, 255);
doc.text("Arbitration", margin, 70);
doc.text("Framework Policy", margin, 82);

// Version
doc.setFontSize(10);
doc.setFont("helvetica", "normal");
doc.setTextColor(200, 200, 200);
doc.text("Version 1.0  |  Policy Document", margin, 95);

// Accent dots
[BLUE, GREEN, RED].forEach((c, i) => {
  doc.setFillColor(...c);
  doc.circle(margin + i * 8, 108, 2.5, "F");
});

// Subtitle below header
y = 145;
doc.setFontSize(11);
doc.setFont("helvetica", "normal");
doc.setTextColor(...DARK);
const subtitleLines = doc.splitTextToSize(
  "A comprehensive framework for resolving disputes arising in technology agreements, SaaS platforms, digital assets, software development contracts, and intellectual property transactions.",
  contentWidth
);
subtitleLines.forEach((line) => {
  doc.text(line, margin, y);
  y += 5.5;
});

y += 8;

// Info box
doc.setFillColor(...LIGHT_BG);
doc.roundedRect(margin, y, contentWidth, 40, 3, 3, "F");
doc.setDrawColor(216, 213, 207);
doc.roundedRect(margin, y, contentWidth, 40, 3, 3, "S");

const infoY = y + 8;
const infoItems = [
  ["Governing Law:", "Arbitration Act 1996 (UK)"],
  ["Applicable Rules:", "LCIA Rules / UPTECH Digital Arbitration Rules"],
  ["Seat of Arbitration:", "London, England"],
  ["Language:", "English"],
];
doc.setFontSize(8);
infoItems.forEach((item, i) => {
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...DARK);
  doc.text(item[0], margin + 6, infoY + i * 8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...GRAY);
  doc.text(item[1], margin + 40, infoY + i * 8);
});

y += 50;

// Classification
doc.setFontSize(7);
doc.setTextColor(...RED);
doc.setFont("helvetica", "bold");
doc.text("CONFIDENTIAL", margin, y);
doc.setFont("helvetica", "normal");
doc.setTextColor(...GRAY);
doc.text("This document is proprietary to UPTECH — UK Pakistan Tech Council. Unauthorised distribution is prohibited.", margin, y + 5);

addFooter();

// ─────────────────────────────────────────────
// PAGE 2 — Table of Contents
// ─────────────────────────────────────────────
doc.addPage();
y = 25;

drawSectionHeader("Table of Contents", DARK);

const tocItems = [
  ["1.", "Framework Scope & Purpose", "3"],
  ["2.", "Legal Basis", "3"],
  ["3.", "Arbitration Acceptance Agreement", "4"],
  ["4.", "Key Principles", "5"],
  ["5.", "Arbitration Procedure", "5"],
  ["6.", "Arbitrator Appointment Procedure", "7"],
  ["7.", "Cost Schedule & Fees", "7"],
  ["8.", "UPTECH Digital Arbitration Platform", "8"],
  ["9.", "Digital & Smart Contract Dispute Resolution", "9"],
  ["10.", "Sample Arbitration Clause", "9"],
  ["11.", "Frequently Asked Questions", "10"],
  ["12.", "Governance & Policy Review", "11"],
];

tocItems.forEach((item) => {
  checkPage(8);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...BLUE);
  doc.text(item[0], margin + 4, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...DARK);
  doc.text(item[1], margin + 14, y);
  // Dotted line
  doc.setDrawColor(216, 213, 207);
  doc.setLineDashPattern([0.5, 1.5], 0);
  const textEnd = margin + 14 + doc.getTextWidth(item[1]) + 3;
  doc.line(textEnd, y, pageWidth - margin - 12, y);
  doc.setLineDashPattern([], 0);
  doc.setTextColor(...GRAY);
  doc.text(item[2], pageWidth - margin - 4, y, { align: "right" });
  y += 8;
});

addFooter();

// ─────────────────────────────────────────────
// PAGE 3 — Framework Scope & Purpose
// ─────────────────────────────────────────────
doc.addPage();
y = 20;

drawSectionHeader("1. Framework Scope & Purpose", BLUE);

drawParagraph("This policy establishes the UPTECH Arbitration Framework for resolving disputes arising in technology agreements, SaaS platforms, digital assets, software development contracts, and intellectual property transactions.");

drawParagraph("The purpose of the Framework is to provide a fast, confidential, and enforceable dispute resolution process that leverages technology while complying with UK law (Arbitration Act 1996) and international arbitration standards.");

drawParagraph("This Framework applies to all contracts entered into by UPTECH involving technology services, software licensing, SaaS, and platform agreements, as well as disputes between UPTECH and clients, vendors, technology partners, and investors where contracts reference arbitration.");

y += 3;
drawSubHeader("Applies To:");
[
  "Technology services & software licensing",
  "SaaS & platform agreements",
  "Digital asset & blockchain disputes",
  "Intellectual property transactions",
  "Disputes with clients, vendors, and partners",
  "Investor disputes (where contracts reference arbitration)",
].forEach((item) => drawBullet(item, GREEN, 4));

y += 2;
doc.setFontSize(8);
doc.setFont("helvetica", "bold");
doc.setTextColor(...RED);
doc.text("Excluded: ", margin + 4, y);
doc.setFont("helvetica", "normal");
doc.setTextColor(...GRAY);
doc.text("Employment disputes (separate HR policy) and regulatory/statutory enforcement matters.", margin + 4 + doc.getTextWidth("Excluded: "), y);
y += 10;

// ─────────────────────────────────────────────
// Legal Basis
// ─────────────────────────────────────────────
drawSectionHeader("2. Legal Basis", RED);

drawParagraph("The Framework is governed by established UK and international arbitration law, ensuring all awards are binding, final, and enforceable.");

y += 2;
const legalBasis = [
  { title: "Arbitration Act 1996 (UK)", desc: "The primary governing legislation for all arbitration proceedings under the UPTECH Framework.", color: BLUE },
  { title: "LCIA Rules", desc: "London Court of International Arbitration Rules applied for structured and professional conduct of arbitration.", color: GREEN },
  { title: "New York Convention (1958)", desc: "Ensures arbitration awards are binding, final, and enforceable internationally across 170+ countries.", color: RED },
];

legalBasis.forEach((item) => {
  checkPage(20);
  // Small colored bar
  doc.setFillColor(...item.color);
  doc.rect(margin + 4, y - 3, 2, 12, "F");
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...DARK);
  doc.text(item.title, margin + 10, y);
  y += 5;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...GRAY);
  const lines = doc.splitTextToSize(item.desc, contentWidth - 10);
  lines.forEach((line) => {
    doc.text(line, margin + 10, y);
    y += 4.5;
  });
  y += 4;
});

addFooter();

// ─────────────────────────────────────────────
// PAGE 4 — Arbitration Acceptance Agreement
// ─────────────────────────────────────────────
doc.addPage();
y = 20;

drawSectionHeader("3. Arbitration Acceptance Agreement", GREEN);

drawParagraph("Under the Arbitration Act 1996 — United Kingdom. Every relevant contract must include an arbitration clause.");
drawParagraph("Parties sign a formal Arbitration Acceptance Agreement covering the following key provisions:");

y += 2;
drawSubHeader("Agreement Clauses:");
[
  "Agreement to arbitrate all disputes",
  "Governing law: Laws of England and Wales",
  "Arbitration procedure under the Arbitration Act 1996",
  "Appointment of independent arbitrator(s)",
  "Seat and venue: London, England (or agreed alternative)",
  "Confidentiality of all proceedings and awards",
  "Binding and enforceable decision",
  "Arbitrator authority to allocate costs",
  "Waiver of court proceedings (except enforcement)",
  "Voluntary acceptance by both parties",
].forEach((item) => drawBullet(item, GREEN, 4));

y += 4;
drawSubHeader("Contract Requirements:");
drawParagraph("Every relevant contract must include an arbitration clause specifying:");

[
  ["Agreement to Arbitrate: ", "Commitment to resolve disputes under this Framework"],
  ["Seat of Arbitration: ", "Typically London, England"],
  ["Governing Law: ", "Laws of England & Wales"],
  ["Number of Arbitrators: ", "One or three, based on dispute complexity"],
  ["Procedural Rules: ", "LCIA or UPTECH digital arbitration rules"],
  ["Language: ", "English as the language of proceedings"],
].forEach((item) => {
  drawLabelValue(item[0], item[1], BLUE);
});

y += 3;
drawParagraph("Note: Proceedings may take place in person or by electronic means as determined by the arbitrator. The decision or award shall be final and binding, and judgment may be entered in any court of competent jurisdiction.");

addFooter();

// ─────────────────────────────────────────────
// PAGE 5 — Key Principles
// ─────────────────────────────────────────────
doc.addPage();
y = 20;

drawSectionHeader("4. Key Principles", GREEN);

const principles = [
  { title: "Party Autonomy", desc: "Parties can select arbitrators, agree on rules, and decide procedures within the framework.", color: BLUE },
  { title: "Expert Arbitrators", desc: "Arbitrators with technical and industry expertise are appointed to ensure informed decisions.", color: GREEN },
  { title: "Speed & Efficiency", desc: "Digital processes aim to resolve disputes within 30–90 days.", color: RED },
  { title: "Confidentiality", desc: "All proceedings, submissions, and awards are confidential.", color: BLUE },
  { title: "Global Enforceability", desc: "Awards designed to be enforceable internationally under recognised conventions.", color: GREEN },
];

principles.forEach((p) => {
  checkPage(18);
  doc.setFillColor(...p.color);
  doc.rect(margin + 4, y - 3, 2, 12, "F");
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...DARK);
  doc.text(p.title, margin + 10, y);
  y += 5;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...GRAY);
  doc.text(p.desc, margin + 10, y);
  y += 8;
});

// ─────────────────────────────────────────────
// Arbitration Procedure
// ─────────────────────────────────────────────
y += 4;
drawSectionHeader("5. Arbitration Procedure", BLUE);

drawParagraph("A step-by-step guide to how disputes are handled from initiation to final award.");

const steps = [
  {
    num: "01", title: "Initiating Arbitration", color: BLUE,
    items: [
      "Party raises dispute using the UPTECH digital arbitration platform",
      "Include: nature of the dispute, relevant contracts, relief requested",
      "Framework administrator acknowledges receipt within 3 business days",
      "Preliminary review verifies eligibility and scope",
    ],
  },
  {
    num: "02", title: "Arbitrator Appointment", color: GREEN,
    items: [
      "Single arbitrator for simple disputes (< £250,000)",
      "Three-member tribunal for complex or high-value disputes",
      "Arbitrators selected from UPTECH's Technical Arbitration Panel or mutually agreed",
      "Appointment timeline: 7–14 days",
      "All arbitrators must disclose potential conflicts before appointment",
    ],
  },
  {
    num: "03", title: "Case Management & Evidence", color: RED,
    items: [
      "Procedural timetable set in consultation with parties",
      "Submission deadlines for claims, counterclaims, and evidence",
      "Electronic evidence admissible: code, logs, screenshots, blockchain records",
      "Witness statements and expert testimony presented virtually or at hearings",
      "All filings digitally managed via the UPTECH secure platform",
    ],
  },
  {
    num: "04", title: "Hearing & Award", color: BLUE,
    items: [
      "Hearings: document-only, virtual (secure video), hybrid, or in-person",
      "Arbitrator issues final written award with findings, reasoning, and remedies",
      "Timeline: 30–60 days after final hearing",
      "Awards are final under the Arbitration Act 1996",
      "Internationally enforceable under the New York Convention",
    ],
  },
];

steps.forEach((step) => {
  checkPage(35);
  // Step number circle
  doc.setFillColor(...step.color);
  doc.circle(margin + 7, y + 1, 5, "F");
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text(step.num, margin + 7, y + 2, { align: "center" });

  doc.setTextColor(...DARK);
  doc.setFontSize(11);
  doc.text(step.title, margin + 16, y + 2);
  y += 10;

  step.items.forEach((item) => drawBullet(item, step.color, 8));
  y += 4;
});

addFooter();

// ─────────────────────────────────────────────
// Arbitrator Appointment Procedure
// ─────────────────────────────────────────────
doc.addPage();
y = 20;

drawSectionHeader("6. Arbitrator Appointment Procedure", GREEN);

drawParagraph("Parties attempt to mutually agree on arbitrators within 7 days of the Notice of Arbitration. If no agreement is reached, the UPTECH Arbitration Committee appoints from the Technical Arbitration Panel. All arbitrators must have relevant technical, industry, or legal expertise.");

y += 3;
drawSubHeader("Appointment Timeline:");

const timeline = [
  ["Initial party selection attempt", "7 days"],
  ["UPTECH Committee appointment (if no agreement)", "5 days"],
  ["Conflict-of-interest disclosures", "3 days"],
  ["Final appointment confirmation", "2 days"],
];

drawTableRow(["Step", "Duration"], true, [GREEN]);
timeline.forEach((row) => drawTableRow(row));

y += 5;
drawSubHeader("Conflict-of-Interest Process:");
[
  "All potential arbitrators must disclose any conflicts of interest",
  "Parties may raise objections within 3 business days of disclosure",
  "UPTECH Arbitration Committee resolves objections fairly and promptly",
  "Appointed arbitrators sign a declaration of compliance with the Framework",
  "All appointments formally documented via the digital platform",
].forEach((item) => drawBullet(item, GREEN, 4));

// ─────────────────────────────────────────────
// Cost Schedule
// ─────────────────────────────────────────────
y += 6;
drawSectionHeader("7. Cost Schedule & Fees", RED);

drawParagraph("Transparent pricing for arbitration services under the UPTECH Framework.");

y += 2;
drawSubHeader("Arbitrator Fees:");
drawTableRow(["Service", "Fee"], true, [BLUE]);
drawTableRow(["Single Arbitrator (simple dispute)", "£3,000 – £10,000"]);
drawTableRow(["Three-Member Tribunal (complex/high-value)", "£10,000 – £30,000"]);
drawTableRow(["Hourly Rate (additional services)", "£250 – £500/hr"]);

y += 4;
drawSubHeader("Platform & Admin Fees:");
drawTableRow(["Service", "Fee"], true, [GREEN]);
drawTableRow(["Digital platform usage fee", "£500 flat per case"]);
drawTableRow(["Additional document storage", "£50 per GB"]);
drawTableRow(["Administrative fee", "£250 – £1,000"]);
drawTableRow(["Scheduling & case management", "£100 per party"]);

y += 4;
drawSubHeader("Payment & Allocation:");
[
  "Parties bear their own legal representation costs",
  "Arbitrators may allocate costs based on outcome and complexity",
  "Platform and admin fees payable within 7 days of initiation",
  "Additional costs invoiced and payable within 14 days",
].forEach((item) => drawBullet(item, RED, 4));

addFooter();

// ─────────────────────────────────────────────
// Digital Platform
// ─────────────────────────────────────────────
doc.addPage();
y = 20;

drawSectionHeader("8. UPTECH Digital Arbitration Platform", BLUE);

drawParagraph("A secure, GDPR-compliant platform for managing the entire arbitration process digitally.");

const features = [
  { title: "Secure Access", desc: "Two-factor authentication (2FA) with role-based access for Claimant, Respondent, Arbitrator, and Administrator." },
  { title: "Case Dashboard", desc: "Notifications, case summary with status and timeline, document repository, and encrypted messaging system." },
  { title: "Digital Filing", desc: "Submit notices, claims, defences, and evidence in PDF or approved digital formats with automatic timestamping." },
  { title: "Virtual Hearings", desc: "Integrated video conferencing for virtual and hybrid hearing sessions with secure platform-provided links." },
  { title: "Automated Reminders", desc: "Real-time alerts for deadlines, hearings, new messages, and procedural updates to keep proceedings on track." },
  { title: "Security & Compliance", desc: "All communications encrypted. GDPR and UK data protection compliant. Access restricted to authorised users. Training sessions offered for first-time users." },
];

features.forEach((f) => {
  checkPage(18);
  doc.setFillColor(...BLUE);
  doc.rect(margin + 4, y - 3, 2, 12, "F");
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...DARK);
  doc.text(f.title, margin + 10, y);
  y += 5;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...GRAY);
  const lines = doc.splitTextToSize(f.desc, contentWidth - 14);
  lines.forEach((line) => {
    doc.text(line, margin + 10, y);
    y += 4.5;
  });
  y += 4;
});

// ─────────────────────────────────────────────
// Smart Contract Section
// ─────────────────────────────────────────────
y += 4;
drawSectionHeader("9. Digital & Smart Contract Dispute Resolution", GREEN);

drawParagraph("Where disputes involve blockchain or smart contracts, the arbitrator may review on-chain evidence, issue digital awards executable via smart contracts, and the Framework supports fully automated enforcement with parties' consent.");

addFooter();

// ─────────────────────────────────────────────
// Sample Clause
// ─────────────────────────────────────────────
doc.addPage();
y = 20;

drawSectionHeader("10. Recommended Arbitration Clause", GREEN);

drawParagraph("The following clause is recommended for inclusion in all relevant contracts:");

y += 2;
// Quote box
checkPage(50);
doc.setFillColor(245, 250, 245);
doc.roundedRect(margin + 4, y - 4, contentWidth - 8, 58, 2, 2, "F");
doc.setFillColor(...GREEN);
doc.rect(margin + 4, y - 4, 2, 58, "F");

y += 2;
doc.setFontSize(9);
doc.setFont("helvetica", "italic");
doc.setTextColor(...DARK);

const clause1 = '"Any dispute, controversy, or claim arising out of or relating to this Agreement, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by arbitration under the UPTECH Arbitration Framework."';
const clause1Lines = doc.splitTextToSize(clause1, contentWidth - 18);
clause1Lines.forEach((line) => {
  doc.text(line, margin + 10, y);
  y += 4.5;
});

y += 2;

const clause2 = '"The arbitration shall be conducted in accordance with the Arbitration Act 1996 (UK) and any applicable LCIA or UPTECH digital arbitration rules. The number of arbitrators shall be one for disputes under £250,000 or three for complex disputes, as determined by the UPTECH Arbitration Committee. The seat of arbitration shall be London, England. The language of arbitration shall be English. The arbitrator(s) shall have the authority to allocate costs and fees, and the award shall be final and binding upon the Parties."';
const clause2Lines = doc.splitTextToSize(clause2, contentWidth - 18);
clause2Lines.forEach((line) => {
  doc.text(line, margin + 10, y);
  y += 4.5;
});

y += 12;

// ─────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────
drawSectionHeader("11. Frequently Asked Questions", RED);

const faqs = [
  { q: "What types of disputes can be resolved under this framework?", a: "Technology service disputes, software licensing conflicts, intellectual property claims, digital asset or blockchain disputes, and platform governance disagreements." },
  { q: "How do I initiate arbitration?", a: "Submit a Notice of Dispute via the UPTECH Digital Arbitration Platform including details of the dispute, contract references, and requested relief." },
  { q: "How many arbitrators are appointed?", a: "Single arbitrator for simple disputes (< £250,000). Three-member tribunal for complex/high-value disputes or technical matters." },
  { q: "What is the typical timeline for arbitration?", a: "From Notice of Dispute to final award typically takes 30–90 days, depending on complexity. Arbitrator appointment takes 7–14 days, written submissions 2–4 weeks, and the final award is issued 30–60 days post-hearing." },
  { q: "Is the arbitration confidential?", a: "Yes, all proceedings, submissions, and awards are strictly confidential unless disclosure is required by law." },
  { q: "Can arbitration awards be enforced internationally?", a: "Yes, under the New York Convention and Arbitration Act 1996 (UK), awards are enforceable in 170+ participating jurisdictions." },
  { q: "What if a dispute involves smart contracts or blockchain?", a: "Arbitrators can review on-chain evidence and issue digital awards that may be executable via smart contracts with parties' consent." },
  { q: "How are costs allocated?", a: "Parties generally bear their own legal and expert fees. Arbitrators may allocate fees based on outcome, complexity, and procedural compliance. Platform and administrative fees are shared equally unless otherwise determined." },
  { q: "Who appoints the arbitrator(s)?", a: "Parties attempt to mutually agree on arbitrator(s) within 7 days. If no agreement is reached, the UPTECH Arbitration Committee appoints arbitrator(s) from the Technical Arbitration Panel. Arbitrators must have relevant technical, industry, or legal expertise." },
  { q: "Who can I contact for support?", a: "24/7 technical support is available via the platform, chat, email, or phone. The UPTECH Arbitration Committee provides procedural guidance and handles all enquiries regarding arbitration proceedings." },
];

faqs.forEach((faq, i) => {
  checkPage(22);
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...RED);
  doc.text(`Q${i + 1}: `, margin + 4, y);
  doc.setTextColor(...DARK);
  const qLines = doc.splitTextToSize(faq.q, contentWidth - 16);
  doc.text(qLines[0], margin + 14, y);
  y += 5;
  if (qLines[1]) { doc.text(qLines[1], margin + 14, y); y += 5; }

  doc.setFont("helvetica", "normal");
  doc.setTextColor(...GRAY);
  const aLines = doc.splitTextToSize(faq.a, contentWidth - 10);
  aLines.forEach((line) => {
    checkPage(5);
    doc.text(line, margin + 6, y);
    y += 4.5;
  });
  y += 4;
});

addFooter();

// ─────────────────────────────────────────────
// Governance & Review
// ─────────────────────────────────────────────
doc.addPage();
y = 20;

drawSectionHeader("12. Governance & Policy Review", BLUE);

drawSubHeader("Governance:");
drawParagraph("The UPTECH Arbitration Committee oversees implementation, arbitrator selection, and compliance. The Committee reports annually to the Board of Directors on arbitration activity, efficiency, and lessons learned.");
drawParagraph("The Framework maintains secure digital records of disputes, awards, and timelines. Analytics are used to improve process efficiency, identify recurring issues, and update rules.");

y += 3;
drawSubHeader("Policy Review:");
drawParagraph("This Framework is reviewed every 12 months to incorporate:");

[
  "Legal updates in UK arbitration law",
  "Technological innovations in digital dispute resolution",
  "Feedback from arbitrators, parties, and stakeholders",
].forEach((item) => drawBullet(item, GREEN, 4));

y += 10;

// Signature/approval section
checkPage(50);
doc.setFillColor(...LIGHT_BG);
doc.roundedRect(margin, y, contentWidth, 45, 3, 3, "F");
doc.setDrawColor(216, 213, 207);
doc.roundedRect(margin, y, contentWidth, 45, 3, 3, "S");

y += 8;
doc.setFontSize(10);
doc.setFont("helvetica", "bold");
doc.setTextColor(...DARK);
doc.text("Approved By", margin + 8, y);
y += 8;

doc.setDrawColor(...DARK);
doc.setLineWidth(0.5);
doc.line(margin + 8, y + 8, margin + 70, y + 8);
doc.line(margin + 90, y + 8, margin + 152, y + 8);

doc.setFontSize(8);
doc.setFont("helvetica", "normal");
doc.setTextColor(...GRAY);
doc.text("Director / Chairman Signature", margin + 8, y + 14);
doc.text("Date", margin + 90, y + 14);

y += 30;

// Final note
doc.setFontSize(7);
doc.setTextColor(...GRAY);
doc.text("This document is the property of UPTECH — UK Pakistan Tech Council.", margin, y);
y += 4;
doc.text("For enquiries: arbitration@ukpaktech.org.uk | www.ukpaktech.org.uk", margin, y);

addFooter();

// ─────────────────────────────────────────────
// SAVE
// ─────────────────────────────────────────────
const outputPath = path.join(__dirname, "..", "public", "documents", "UPTECH-Arbitration-Framework-Policy.pdf");
const pdfOutput = doc.output("arraybuffer");
fs.writeFileSync(outputPath, Buffer.from(pdfOutput));
console.log(`PDF generated: ${outputPath}`);
console.log(`Pages: ${doc.getNumberOfPages()}`);
