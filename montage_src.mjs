import sharp from 'sharp';
import fs from 'fs';

const dir = '.imgsrc';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));
const byGroup = {};
for (const f of files) { const g = f.split('__')[0]; (byGroup[g] ||= []).push(f); }

const cell = 300, pad = 8, labelH = 26, cols = 4;
for (const [g, list] of Object.entries(byGroup)) {
  const rows = Math.ceil(list.length / cols);
  const W = cols * (cell + pad) + pad;
  const H = rows * (cell + labelH + pad) + pad;
  const comp = [];
  for (let i = 0; i < list.length; i++) {
    const f = list[i];
    const c = i % cols, r = Math.floor(i / cols);
    const x = pad + c * (cell + pad);
    const y = pad + r * (cell + labelH + pad);
    const id = f.replace('.jpg', '').split('__')[1];
    let thumb;
    try { thumb = await sharp(`${dir}/${f}`).resize(cell, cell, { fit: 'cover' }).jpeg().toBuffer(); }
    catch { thumb = await sharp({ create: { width: cell, height: cell, channels: 3, background: '#ddd' } }).jpeg().toBuffer(); }
    comp.push({ input: thumb, top: y + labelH, left: x });
    const label = Buffer.from(`<svg width="${cell}" height="${labelH}"><rect width="100%" height="100%" fill="#111"/><text x="8" y="19" font-family="sans-serif" font-size="18" fill="#fff">${id}</text></svg>`);
    comp.push({ input: label, top: y, left: x });
  }
  await sharp({ create: { width: W, height: H, channels: 3, background: '#fff' } }).composite(comp).png().toFile(`${dir}/G_${g}.png`);
  console.log('G_' + g, list.length);
}
