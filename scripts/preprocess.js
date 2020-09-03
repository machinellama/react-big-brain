/**
 * to run from root: "node ./scripts/preprocess 1"
 */

const fs = require('fs');
const JpegTran = require('jpegtran');

const num = Number(process.argv[2]);

if (num === 1) iterateFilesGray('./pics/component-pics/check', './pics/training-data');
if (num === 2) iterateFilesGray('./pics/component-pics/slider', './pics/training-data');
if (num === 3) iterateFilesGray('./pics/component-pics/text-input', './pics/training-data');
if (num === 4) iterateFilesGray('./pics/component-pics/toggle', './pics/training-data');

if (num === 5) iterateFilesFlip('./pics/component-pics/check', './pics/training-data');
if (num === 6) iterateFilesFlip('./pics/component-pics/slider', './pics/training-data');
if (num === 7) iterateFilesFlip('./pics/component-pics/text-input', './pics/training-data');
if (num === 8) iterateFilesFlip('./pics/component-pics/toggle', './pics/training-data');

function iterateFilesGray(source, destination) {
  const files = fs.readdirSync(source);

  files.forEach(file => {
    const readStream = fs.createReadStream(`${source}/${file}`);

    // grayscale
    const myJpegTranslator = new JpegTran(['-grayscale']);
    const writeStream = fs.createWriteStream(`${destination}/${file}`);
    readStream.pipe(myJpegTranslator).pipe(writeStream);
  });
}

function iterateFilesFlip(source, destination) {
  const files = fs.readdirSync(source);

  files.forEach(file => {
    const readStream = fs.createReadStream(`${source}/${file}`);

    // grayscale and flip horizontal
    const myJpegTranslator = new JpegTran(['-grayscale', '-flip', 'horizontal']);
    const writeStream = fs.createWriteStream(`${destination}/${file.replace('.jpg', '-flip.jpg')}`);
    readStream.pipe(myJpegTranslator).pipe(writeStream);
  });
}
