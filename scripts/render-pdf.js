/* eslint-disable */
// Renders one structured-content module to a PDF in public/documents/.
// Usage:  node scripts/render-pdf.js scripts/pdf-content/01-code-of-conduct.js

const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'documents');
// New official logo (rasterized from public/logo.svg via scripts/svg-to-png.js).
const LOGO = path.join(ROOT, 'scripts', 'pdf-content', 'logo.png');

const BRAND = {
  name: 'UK Pakistan Tech Forum',
  short: 'UPTECH',
  fullLegal: 'UK-Pakistan Tech Forum Ltd',
  address: '134-136 Westbourne Terrace, London, W2 6QB, United Kingdom',
  email: 'info@ukpaktech.org.uk',
};

const C = {
  ink:    '#111827',
  body:   '#1F2937',
  muted:  '#6B7280',
  rule:   '#D1D5DB',
  bg:     '#F3F4F6',
  white:  '#FFFFFF',
};

const PAGE_MARGIN = { top: 76, bottom: 64, left: 56, right: 56 };

function drawHeader(doc, accent) {
  const w = doc.page.width;
  const m = doc.page.margins;

  // safety: make sure doc.y is in-page so text() calls below don't auto-page
  doc.x = m.left; doc.y = 18;

  // top accent bar
  doc.rect(0, 0, w, 4).fill(accent);

  // logo
  try { doc.image(LOGO, m.left, 18, { fit: [34, 34] }); } catch (_) {}

  // brand
  doc.fillColor(C.ink).font('Helvetica-Bold').fontSize(10)
    .text(BRAND.name, m.left + 42, 22, { lineBreak: false });
  doc.fillColor(C.muted).font('Helvetica').fontSize(7.5)
    .text(BRAND.short + '  ·  ' + BRAND.address, m.left + 42, 36, {
      width: w - m.left - m.right - 42, lineBreak: false, ellipsis: true,
    });

  // hairline
  doc.moveTo(m.left, 56).lineTo(w - m.right, 56)
    .lineWidth(0.5).strokeColor(C.rule).stroke();
}

function drawFooter(doc, accent, pageNum, total) {
  const w = doc.page.width;
  const h = doc.page.height;
  const m = doc.page.margins;
  const y = h - m.bottom + 22;

  // pdfkit's text() auto-adds a page when cursor goes past maxY (page.height - margin.bottom).
  // Footer text sits *inside* the bottom margin, so we temporarily zero it out.
  const savedBottom = m.bottom;
  m.bottom = 0;
  doc.x = m.left; doc.y = m.top;

  doc.moveTo(m.left, y - 10).lineTo(w - m.right, y - 10)
    .lineWidth(0.5).strokeColor(C.rule).stroke();

  doc.fillColor(C.muted).font('Helvetica').fontSize(8);
  doc.text(BRAND.fullLegal + '  ·  ' + BRAND.email, m.left, y, {
    width: (w - m.left - m.right) * 0.7, lineBreak: false,
  });
  doc.text(`Page ${pageNum} of ${total}`,
    w - m.right - 100, y, { width: 100, align: 'right', lineBreak: false });

  m.bottom = savedBottom;
}

function renderCover(doc, def) {
  const w = doc.page.width;
  const h = doc.page.height;
  const m = doc.page.margins;
  const innerW = w - m.left - m.right;

  // top accent bar
  doc.rect(0, 0, w, 4).fill(def.accent);

  // logo + brand (top)
  try { doc.image(LOGO, m.left, 50, { fit: [60, 60] }); } catch (_) {}
  doc.fillColor(C.ink).font('Helvetica-Bold').fontSize(14)
    .text(BRAND.name, m.left + 70, 60, { lineBreak: false });
  doc.fillColor(C.muted).font('Helvetica').fontSize(10)
    .text(BRAND.short, m.left + 70, 80, { lineBreak: false });

  // Title block, centered around 1/3 of page
  const titleY = h * 0.36;
  doc.fillColor(def.accent).font('Helvetica-Bold').fontSize(10)
    .text('OFFICIAL DOCUMENT', m.left, titleY, { width: innerW, characterSpacing: 2 });

  doc.fillColor(C.ink).font('Helvetica-Bold').fontSize(32)
    .text(def.title, m.left, titleY + 18, { width: innerW, lineGap: 2 });

  // accent rule
  const ruleY = doc.y + 14;
  doc.moveTo(m.left, ruleY).lineTo(m.left + 64, ruleY)
    .lineWidth(2.5).strokeColor(def.accent).stroke();

  doc.fillColor(C.body).font('Helvetica').fontSize(12)
    .text(def.subtitle, m.left, ruleY + 22, { width: innerW, lineGap: 2 });

  // Issuer card near bottom
  const cardY = h - m.bottom - 132;
  const cardH = 110;
  doc.rect(m.left, cardY, innerW, cardH).fill(C.bg);
  doc.rect(m.left, cardY, 4, cardH).fill(def.accent);

  doc.fillColor(C.muted).font('Helvetica-Bold').fontSize(8)
    .text('ISSUED BY', m.left + 18, cardY + 14, { characterSpacing: 1.5, lineBreak: false });

  doc.fillColor(C.ink).font('Helvetica-Bold').fontSize(12)
    .text(BRAND.fullLegal, m.left + 18, cardY + 30, { width: innerW - 36 });

  doc.fillColor(C.body).font('Helvetica').fontSize(9.5)
    .text(BRAND.address, m.left + 18, cardY + 50, { width: innerW - 36, lineGap: 2 });
  doc.text(BRAND.email, m.left + 18, doc.y + 2, { width: innerW - 36 });

  const issued = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
  doc.fillColor(C.muted).font('Helvetica-Oblique').fontSize(8.5)
    .text('Issued: ' + issued, m.left + 18, cardY + cardH - 18, { lineBreak: false });
}

// available vertical space remaining on the current page (for body content)
function availableY(doc) {
  return doc.page.height - doc.page.margins.bottom - 4;
}

function ensure(doc, needed) {
  if (doc.y + needed > availableY(doc)) doc.addPage();
}

function renderSections(doc, def) {
  const m = doc.page.margins;
  const w = doc.page.width;
  const innerW = w - m.left - m.right;

  for (const sec of def.sections) {
    // section heading — keep heading with at least 60pt of body (avoid orphans)
    ensure(doc, 110);
    const startY = doc.y;

    if (sec.n && sec.n !== '0') {
      // numbered badge (small accent square; widen for 2-char numbers / letters)
      const badgeW = sec.n.length > 1 ? 28 : 22;
      doc.rect(m.left, startY + 2, badgeW, 22).fill(def.accent);
      doc.fillColor(C.white).font('Helvetica-Bold').fontSize(11)
        .text(sec.n, m.left, startY + 7, { width: badgeW, align: 'center', lineBreak: false });
      doc.fillColor(C.ink).font('Helvetica-Bold').fontSize(15)
        .text(sec.heading, m.left + badgeW + 10, startY + 4, { width: innerW - badgeW - 10, lineGap: 2 });
    } else {
      // un-numbered section (e.g. Parties intro)
      doc.fillColor(C.ink).font('Helvetica-Bold').fontSize(15)
        .text(sec.heading, m.left, startY, { width: innerW, lineGap: 2 });
    }

    // accent rule under heading
    const ruleY = doc.y + 4;
    doc.moveTo(m.left, ruleY).lineTo(m.left + 36, ruleY)
      .lineWidth(2).strokeColor(def.accent).stroke();
    doc.y = ruleY + 8;

    // blocks
    for (const b of sec.blocks) {
      renderBlock(doc, b, def);
    }

    doc.y += 4; // section spacer
  }
}

function renderBlock(doc, b, def) {
  const m = doc.page.margins;
  const w = doc.page.width;
  const innerW = w - m.left - m.right;

  if (b.type === 'p') {
    ensure(doc, 24);
    doc.fillColor(C.body).font('Helvetica').fontSize(10)
      .text(b.text, m.left, doc.y, { width: innerW, lineGap: 2, align: 'justify' });
    doc.y += 3;
    return;
  }

  if (b.type === 'bullet') {
    ensure(doc, 18);
    const y = doc.y;
    doc.circle(m.left + 4, y + 5, 1.6).fill(def.accent);
    doc.fillColor(C.body).font('Helvetica').fontSize(10)
      .text(b.text, m.left + 14, y, { width: innerW - 14, lineGap: 2 });
    doc.y += 1;
    return;
  }

  if (b.type === 'lbullet') {
    // labeled bullet: "Integrity — body text..."
    ensure(doc, 22);
    const y = doc.y;
    doc.circle(m.left + 4, y + 5, 1.8).fill(def.accent);

    // measure label width
    doc.font('Helvetica-Bold').fontSize(10);
    const labelW = doc.widthOfString(b.label) + 2;

    doc.fillColor(C.ink).text(b.label, m.left + 14, y, { lineBreak: false });
    doc.fillColor(C.body).font('Helvetica').fontSize(10)
      .text('  ' + b.text, m.left + 14 + labelW, y, {
        width: innerW - 14 - labelW, lineGap: 2,
      });
    doc.y += 2;
    return;
  }

  if (b.type === 'sub') {
    // sub-section: 4.1 heading then text indented
    ensure(doc, 30);
    const y = doc.y;
    doc.fillColor(def.accent).font('Helvetica-Bold').fontSize(10)
      .text(b.n, m.left + 14, y, { width: 28, lineBreak: false });
    doc.fillColor(C.ink).font('Helvetica-Bold').fontSize(10.5)
      .text(b.heading, m.left + 44, y, { width: innerW - 44, lineBreak: false });
    doc.fillColor(C.body).font('Helvetica').fontSize(10)
      .text(b.text, m.left + 44, doc.y + 1, { width: innerW - 44, lineGap: 2, align: 'justify' });
    doc.y += 2;
    return;
  }

  if (b.type === 'kicker') {
    // small bold uppercase header used to label a sub-group of blocks
    ensure(doc, 22);
    doc.y += 2;
    doc.fillColor(C.ink).font('Helvetica-Bold').fontSize(10)
      .text(b.text, m.left, doc.y, { width: innerW, characterSpacing: 0.5 });
    doc.y += 2;
    return;
  }

  if (b.type === 'subhead') {
    // numbered sub-heading (e.g. "5.1  Initiating Arbitration") inside a section
    ensure(doc, 22);
    doc.y += 2;
    const y = doc.y;
    doc.fillColor(def.accent).font('Helvetica-Bold').fontSize(10.5)
      .text(b.n, m.left, y, { width: 30, lineBreak: false });
    doc.fillColor(C.ink).font('Helvetica-Bold').fontSize(11)
      .text(b.text, m.left + 32, y, { width: innerW - 32, lineBreak: false });
    doc.y += 4;
    return;
  }

  if (b.type === 'note') {
    // Excluded/note callout
    ensure(doc, 30);
    doc.y += 2;
    const y = doc.y;
    const innerH = 0;
    doc.font('Helvetica-Bold').fontSize(10);
    const labelW = doc.widthOfString(b.label + ':') + 4;
    doc.fillColor(def.accent).text(b.label + ':', m.left, y, { lineBreak: false });
    doc.fillColor(C.body).font('Helvetica').fontSize(10)
      .text(b.text, m.left + labelW, y, { width: innerW - labelW, lineGap: 2 });
    doc.y += 3;
    return;
  }

  if (b.type === 'timeline') {
    // bordered row: label on left, value on right
    ensure(doc, 24);
    const y = doc.y;
    const rowH = 22;
    doc.rect(m.left, y, innerW, rowH).fill(C.bg);
    doc.rect(m.left, y, 3, rowH).fill(def.accent);
    doc.fillColor(C.ink).font('Helvetica').fontSize(10)
      .text(b.label, m.left + 12, y + 6, { width: innerW - 110, lineBreak: false });
    doc.fillColor(def.accent).font('Helvetica-Bold').fontSize(10)
      .text(b.value, m.left + innerW - 100, y + 6, { width: 92, align: 'right', lineBreak: false });
    doc.y = y + rowH + 4;
    return;
  }

  if (b.type === 'field') {
    // form field: label on left, blank line on right (for hand-fill)
    ensure(doc, 18);
    const y = doc.y;
    doc.fillColor(C.muted).font('Helvetica').fontSize(9)
      .text(b.label, m.left, y + 1, { width: 160, lineBreak: false });
    // underline
    doc.moveTo(m.left + 168, y + 10).lineTo(m.left + innerW, y + 10)
      .lineWidth(0.5).strokeColor(C.rule).stroke();
    doc.y = y + 14;
    return;
  }

  if (b.type === 'fieldRow') {
    // two fields side-by-side
    ensure(doc, 18);
    const y = doc.y;
    const colW = (innerW - 16) / 2;
    b.items.forEach((it, i) => {
      const x = m.left + i * (colW + 16);
      doc.fillColor(C.muted).font('Helvetica').fontSize(9)
        .text(it.label, x, y + 1, { width: 110, lineBreak: false });
      doc.moveTo(x + 116, y + 10).lineTo(x + colW, y + 10)
        .lineWidth(0.5).strokeColor(C.rule).stroke();
    });
    doc.y = y + 14;
    return;
  }

  if (b.type === 'signature') {
    ensure(doc, 70);
    doc.y += 4;
    const y = doc.y;
    // ACCEPTED stamp/seal
    const w2 = 180;
    const x2 = m.left + (innerW - w2) / 2;
    doc.rect(x2, y, w2, 28).lineWidth(1).strokeColor(def.accent).stroke();
    doc.fillColor(def.accent).font('Helvetica-Bold').fontSize(13)
      .text('ACCEPTED', x2, y + 8, { width: w2, align: 'center', characterSpacing: 4 });
    doc.y = y + 36;
    // signature lines
    const lineY = doc.y + 12;
    doc.moveTo(m.left, lineY).lineTo(m.left + (innerW - 24) / 2, lineY)
      .lineWidth(0.5).strokeColor(C.rule).stroke();
    doc.moveTo(m.left + (innerW - 24) / 2 + 24, lineY)
      .lineTo(m.left + innerW, lineY)
      .lineWidth(0.5).strokeColor(C.rule).stroke();
    doc.fillColor(C.muted).font('Helvetica').fontSize(8.5)
      .text('Signature', m.left, lineY + 4, { width: (innerW - 24) / 2, lineBreak: false });
    doc.text('Date', m.left + (innerW - 24) / 2 + 24, lineY + 4, {
      width: (innerW - 24) / 2, lineBreak: false,
    });
    doc.y = lineY + 16;
    return;
  }

  if (b.type === 'effectiveDate') {
    ensure(doc, 28);
    doc.y += 4;
    const y = doc.y;
    doc.fillColor(def.accent).font('Helvetica-Bold').fontSize(10)
      .text(b.label, m.left, y + 2, { width: 120, lineBreak: false });
    doc.moveTo(m.left + 124, y + 12).lineTo(m.left + innerW, y + 12)
      .lineWidth(0.5).strokeColor(C.rule).stroke();
    doc.y = y + 18;
    return;
  }

  if (b.type === 'witness') {
    ensure(doc, 40);
    doc.y += 6;
    const y = doc.y;
    doc.rect(m.left, y, innerW, 32).fill(C.bg);
    doc.fillColor(C.ink).font('Helvetica-Oblique').fontSize(10)
      .text(b.text, m.left + 12, y + 9, { width: innerW - 24, lineGap: 2, align: 'center' });
    doc.y = y + 40;
    return;
  }

  if (b.type === 'partyHeader') {
    // "Between" / "And" centered label between party blocks
    ensure(doc, 22);
    doc.y += 4;
    doc.fillColor(def.accent).font('Helvetica-Bold').fontSize(10)
      .text(b.label, m.left, doc.y, { width: innerW, align: 'center', characterSpacing: 3 });
    // small horizontal line under it
    const ly = doc.y + 4;
    const lineW = 40;
    doc.moveTo(m.left + (innerW - lineW) / 2, ly)
      .lineTo(m.left + (innerW + lineW) / 2, ly)
      .lineWidth(1).strokeColor(def.accent).stroke();
    doc.y = ly + 8;
    return;
  }

  if (b.type === 'partyBlock') {
    // First party (UPTECH): name + description + alias — dynamic height
    // Compute heights first so the background rect matches the content.
    const padX = 14, padY = 10;
    const txtW = innerW - 28;
    doc.font('Helvetica-Bold').fontSize(12);
    const nameH = doc.heightOfString(b.name, { width: txtW });
    doc.font('Helvetica').fontSize(9.5);
    const descH = doc.heightOfString(b.desc, { width: txtW, lineGap: 2 });
    const aliasH = b.alias ? 14 : 0;
    const totalH = padY + nameH + 4 + descH + (b.alias ? 4 + aliasH : 0) + padY;

    ensure(doc, totalH + 10);
    const y = doc.y;
    doc.rect(m.left, y, innerW, totalH).fill(C.bg);
    doc.rect(m.left, y, 3, totalH).fill(def.accent);

    let yy = y + padY;
    doc.fillColor(C.ink).font('Helvetica-Bold').fontSize(12)
      .text(b.name, m.left + padX, yy, { width: txtW });
    yy = doc.y + 4;
    doc.fillColor(C.body).font('Helvetica').fontSize(9.5)
      .text(b.desc, m.left + padX, yy, { width: txtW, lineGap: 2 });
    if (b.alias) {
      yy = doc.y + 4;
      doc.fillColor(def.accent).font('Helvetica-Oblique').fontSize(9)
        .text(b.alias, m.left + padX, yy, { width: txtW, lineBreak: false });
    }
    doc.y = y + totalH + 8;
    return;
  }

  if (b.type === 'partyForm') {
    // Second party: form fields for partner org details
    ensure(doc, 130);
    for (const it of b.items) {
      const y = doc.y;
      doc.fillColor(C.muted).font('Helvetica').fontSize(9)
        .text(it.label, m.left, y + 1, { width: 150, lineBreak: false, ellipsis: true });
      doc.moveTo(m.left + 158, y + 10).lineTo(m.left + innerW, y + 10)
        .lineWidth(0.5).strokeColor(C.rule).stroke();
      doc.y = y + 14;
    }
    if (b.alias) {
      doc.y += 2;
      doc.fillColor(def.accent).font('Helvetica-Oblique').fontSize(9)
        .text(b.alias, m.left, doc.y, { width: innerW, align: 'right', lineBreak: false });
      doc.y += 12;
    }
    return;
  }

  if (b.type === 'twocolSignature') {
    ensure(doc, 130);
    doc.y += 6;
    const y = doc.y;
    const colW = (innerW - 24) / 2;
    [b.left, b.right].forEach((side, i) => {
      const x = m.left + i * (colW + 24);
      doc.fillColor(def.accent).font('Helvetica-Bold').fontSize(10)
        .text(side.title, x, y, { width: colW, lineBreak: false });
      doc.fillColor(C.muted).font('Helvetica').fontSize(9)
        .text(side.subtitle, x, y + 14, { width: colW, lineBreak: false });

      // Name / Title / Date / Signature lines
      const labels = ['Name', 'Title', 'Date', 'Signature'];
      labels.forEach((lab, idx) => {
        const yy = y + 32 + idx * 22;
        doc.fillColor(C.muted).font('Helvetica').fontSize(8.5)
          .text(lab, x, yy, { width: 50, lineBreak: false });
        doc.moveTo(x + 54, yy + 10).lineTo(x + colW, yy + 10)
          .lineWidth(0.5).strokeColor(C.rule).stroke();
      });
    });
    doc.y = y + 32 + 4 * 22 + 6;
    return;
  }

  if (b.type === 'contact') {
    ensure(doc, 60);
    doc.rect(m.left, doc.y, innerW, 70).fill(C.bg);
    doc.rect(m.left, doc.y, 3, 70).fill(def.accent);
    const cy = doc.y;
    doc.fillColor(C.ink).font('Helvetica-Bold').fontSize(11)
      .text(b.org, m.left + 16, cy + 12, { width: innerW - 32 });
    doc.fillColor(C.body).font('Helvetica').fontSize(10)
      .text(b.address, m.left + 16, cy + 30, { width: innerW - 32 });
    doc.fillColor(C.body).font('Helvetica').fontSize(10)
      .text('Email: ' + b.email, m.left + 16, cy + 46, { width: innerW - 32 });
    doc.y = cy + 78;
    return;
  }

  if (b.type === 'spacer') {
    doc.y += (b.h || 6);
    return;
  }
}

async function main() {
  const arg = process.argv[2];
  if (!arg) {
    console.error('Usage: node scripts/render-pdf.js <content-file.js>');
    process.exit(1);
  }
  const def = require(path.resolve(arg));
  const out = path.join(OUT_DIR, def.file);

  const doc = new PDFDocument({
    size: 'A4',
    margins: PAGE_MARGIN,
    bufferPages: true,
    info: {
      Title: `${BRAND.short} – ${def.title}`,
      Author: BRAND.fullLegal,
      Subject: def.subtitle,
      Producer: BRAND.name,
    },
    autoFirstPage: false,
  });

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const stream = fs.createWriteStream(out);
  doc.pipe(stream);

  let pageNum = 0;
  doc.on('pageAdded', () => {
    pageNum++;
    if (pageNum > 1) {
      drawHeader(doc, def.accent);
      doc.x = doc.page.margins.left;
      doc.y = doc.page.margins.top;
    }
  });

  // Cover (page 1)
  doc.addPage();
  renderCover(doc, def);

  // Body (page 2+)
  doc.addPage();
  renderSections(doc, def);

  // Footers
  const range = doc.bufferedPageRange();
  const total = range.count;
  for (let i = 0; i < total; i++) {
    doc.switchToPage(range.start + i);
    drawFooter(doc, def.accent, i + 1, total);
  }

  doc.end();
  await new Promise(res => stream.on('finish', res));

  const stat = fs.statSync(out);
  console.log(`✓ ${path.basename(out)}  ${(stat.size / 1024).toFixed(1)} KB  ${total} pages`);
}

main().catch(e => { console.error(e); process.exit(1); });
