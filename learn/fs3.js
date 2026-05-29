const fs = require('node:fs');
const gzip = require('node:zlib').createGzip();

const inp = fs.createReadStream('The.Matrix.1080p.mkv');
const out = fs.createWriteStream('The.Matrix.1080p.mkv.gz');
inp.pipe(gzip).pipe(out);

//

const fs = require('node:fs');
const { pipeline } = require('node:stream/promises');
const zlib = require('node:zlib');

async function run() {
  try {
    await pipeline(
      fs.createReadStream('The.Matrix.1080p.mkv'),
      zlib.createGzip(),
      fs.createWriteStream('The.Matrix.1080p.mkv.gz')
    );
    console.log('Pipeline succeeded');
  } catch (err) {
    console.error('Pipeline failed', err);
  }
}