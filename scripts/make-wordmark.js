// One-off: extract the "PAKISTAN TEXTILE PARTNERS" wordmark band from the logo.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "public", "image", "main-logo-v1.png");

(async () => {
  const meta = await sharp(SRC).metadata();
  console.log("source:", meta.width + "x" + meta.height, "hasAlpha:", meta.hasAlpha);

  // Wordmark band ("PAKISTAN TEXTILE" + dotted "PARTNERS") in the bottom of the 2126x2126 logo.
  const region = { left: 316, top: 1746, width: 1499, height: 328 };
  const out = await sharp(SRC)
    .extract(region)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(ROOT, "public", "image", "wordmark.png"), out);
  const om = await sharp(out).metadata();
  console.log("wordmark.png:", om.width + "x" + om.height, "hasAlpha:", om.hasAlpha);
})().catch((e) => { console.error(e); process.exit(1); });
