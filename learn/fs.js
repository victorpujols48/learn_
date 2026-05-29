//Filesystem

const fs = require('node:fs');

fs.stat('/Users/joe/test.txt', (err, stats) => {
  if (err) {
    console.error(err);
  }
  // we have access to the file stats in `stats`
});

//
const fs = require('node:fs');

try {
  const stats = fs.statSync('/Users/joe/test.txt');
} catch (err) {
  console.error(err);
}
//
const fs = require('node:fs/promises');

async function example() {
  try {
    const stats = await fs.stat('/Users/joe/test.txt');
    stats.isFile(); // true
    stats.isDirectory(); // false
    stats.isSymbolicLink(); // false
    console.log(stats.size); // 1024000 //= 1MB
  } catch (err) {
    console.error(err);
  }
}
example();
//
const fs = require('node:fs/promises');

async function example() {
  try {
    const data = await fs.readFile('/Users/joe/test.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
example();
//


import fs from 'fs';
import { pipeline } from 'node:stream/promises';
import path from 'path';

const fileUrl = 'https://www.gutenberg.org/files/2701/2701-0.txt';
const outputFilePath = path.join(process.cwd(), 'moby.md');

async function downloadFile(url, outputPath) {
  const response = await fetch(url);

  if (!response.ok || !response.body) {
    // consuming the response body is mandatory: https://undici.nodejs.org/#/?id=garbage-collection
    await response.body?.cancel();
    throw new Error(`Failed to fetch ${url}. Status: ${response.status}`);
  }

  const fileStream = fs.createWriteStream(outputPath);
  console.log(`Downloading file from ${url} to ${outputPath}`);

  await pipeline(response.body, fileStream);
  console.log('File downloaded successfully');
}

async function readFile(filePath) {
  const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

  try {
    for await (const chunk of readStream) {
      console.log('--- File chunk start ---');
      console.log(chunk);
      console.log('--- File chunk end ---');
    }
    console.log('Finished reading the file.');
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}

try {
  await downloadFile(fileUrl, outputFilePath);
  await readFile(outputFilePath);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
