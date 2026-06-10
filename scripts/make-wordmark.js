// One-off: extract the "PAKISTAN TEXTILE PARTNERS" wordmark band from the logo.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "public", "image", "main-logo.png");

(async () => {
  const meta = await sharp(SRC).metadata();
  console.log("source:", meta.width + "x" + meta.height, "hasAlpha:", meta.hasAlpha);

  // Wordmark band lives in the bottom ~26% of the 345x345 logo.
  const region = { left: 8, top: 278, width: 329, height: 64 };
  const out = await sharp(SRC)
    .extract(region)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(ROOT, "public", "image", "wordmark.png"), out);
  const om = await sharp(out).metadata();
  console.log("wordmark.png:", om.width + "x" + om.height, "hasAlpha:", om.hasAlpha);
})().catch((e) => { console.error(e); process.exit(1); });
