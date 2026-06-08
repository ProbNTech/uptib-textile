const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const inp = path.resolve(process.argv[2]);
const out = path.resolve(process.argv[3]);
const size = parseInt(process.argv[4] || '512');
sharp(fs.readFileSync(inp), { density: 300 })
  .resize(size, size, { fit: 'contain', background: { r:0, g:0, b:0, alpha:0 } })
  .png()
  .toFile(out)
  .then(() => console.log('OK ->', out));
