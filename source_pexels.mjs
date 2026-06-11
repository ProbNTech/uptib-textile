import sharp from 'sharp';
import fs from 'fs';
import https from 'https';

const groups = {
  'ap-basics': [3998648, 34156905, 5746084, 9594141, 5746100, 8408556, 9594426, 9603625, 9594432, 30569741, 9594422, 34156907, 17076381, 13342901, 4440566],
  'ap-denim': [4109759, 4109797, 4109755, 10133274, 6924338, 7444977, 4109798, 6764122, 4546763, 10133275, 6764128, 2129970],
  'ap-knit': [6995884, 6995898, 6996083, 11446761, 6996076, 8453648, 6996086, 9603626, 6995902, 6996080, 9904173, 9896379],
  'ap-uniform': [7671168, 10558182, 8531904, 9594682, 9594692, 5706273, 6347892, 6347890, 6347888, 7671167, 9558761, 9594686],
  'sp-gym': [7318684, 5012104, 5012971, 6975260, 5012111, 6975236, 5012082, 7319722, 5012084, 7318783, 7319750, 6975239, 6975251],
  'sp-perf': [3927384, 3927388, 3927391, 3927386, 7981247, 4695175, 3927383, 31961166, 3927389, 6050912],
  'sp-team': [9799193, 18256095, 14792841, 5350136, 36677218, 32941182, 36342247],
  'sp-tech': [8483369, 7298921, 18808549, 13368318, 4863008, 10221743, 8244401, 1487809, 10221755, 8473482, 4863013, 1516259],
  'hc-scrubs': [5206921, 5888156, 5206934, 5452242, 5207087, 5888143, 5888182, 5207099, 5888147, 4270366, 5888179],
  'hc-linen': [19743644, 28513849, 27671434, 31902663, 12553184, 15410912, 28513850, 16596630, 26756401, 7303685, 14510648, 7954617, 8793477, 4153160],
  'hc-nurse': [31499386, 7659867, 5207102, 5722164, 5722160, 5722166, 5207093, 4930705, 6303603, 14438789],
  'hc-surgery': [24193881, 1250655, 24022825, 33904813, 3376799, 20217787, 2324837, 6291303, 4769122],
};

const tmp = '.imgsrc';
fs.mkdirSync(tmp, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode !== 200) { res.resume(); return reject(new Error('HTTP ' + res.statusCode)); }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

for (const [g, ids] of Object.entries(groups)) {
  for (const id of ids) {
    const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;
    const dest = `${tmp}/${g}__${id}.jpg`;
    if (fs.existsSync(dest)) continue;
    try {
      const buf = await download(url, dest);
      // re-encode to validate + normalise
      await sharp(buf).jpeg({ quality: 88 }).toFile(dest);
      process.stdout.write('.');
    } catch (e) {
      process.stdout.write('x');
    }
  }
}
console.log('\ndone');
