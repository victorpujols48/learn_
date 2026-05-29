//Filesystem part2
const fs = require('node:fs/promises');

async function example() {
  try {
    const content = 'Some content!';
    await fs.appendFile('/Users/joe/test.txt', content);
  } catch (err) {
    console.log(err);
  }
}

example();
//
const fs = require('node:fs');

const content = 'Some content!';

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
//a, a+, r+, w+
fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => {});
//

const fs = require('node:fs/promises');
// Or const fs = require('fs').promises before v14.
async function example() {
  let filehandle;
  try {
    filehandle = await fs.open('/Users/joe/test.txt', 'r');
    console.log(filehandle.fd);
    console.log(await filehandle.readFile({ encoding: 'utf8' }));
  } finally {
    if (filehandle) {
      await filehandle.close();
    }
  }
}
example();
//
const fs = require('node:fs');

const folderName = '/Users/joe/test';

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}
//
const fs = require('node:fs');

const folderPath = '/Users/joe';

fs.readdirSync(folderPath);
//
fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName);
});
//
const fs = require('node:fs/promises');

async function example() {
  try {
    await fs.rename('/Users/joe', '/Users/roger');
  } catch (err) {
    console.log(err);
  }
}
example();
//
const fs = require('node:fs');

fs.rm(dir, { recursive: true, force: true }, err => {
  if (err) {
    throw err;
  }

  console.log(`${dir} is deleted!`);
});
