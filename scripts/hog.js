const fs = require('fs');
const hog = require('hog-features');
const { Image } = require('image-js');

async function getInput(fileLocation, imageObject = null) {
  const image = await Image.load(imageObject || fileLocation);
  const descriptor = hog.extractHOG(image, {
    cellSize: 4,
    blockSize: 2,
    blockStride: 1,
    bins: 6,
    norm: 'L2'
  });

  const output = {};

  if (fileLocation.includes('check')) output.isCheck = 1;
  if (fileLocation.includes('slider')) output.isSlider = 1;
  if (fileLocation.includes('text-input')) output.isText = 1;
  if (fileLocation.includes('toggle')) output.isToggle = 1;

  return {
    input: descriptor,
    output
  }
}

module.exports.getInput = getInput;

async function getInputGPU(fileLocation) {
  const image = await Image.load(fileLocation);
  const descriptor = hog.extractHOG(image, {
    cellSize: 16,
    blockSize: 4,
    blockStride: 2,
    bins: 6,
    norm: 'L2'
  });

  const output = {};

  if (fileLocation.includes('check')) output.isCheck = 1;
  if (fileLocation.includes('slider')) output.isSlider = 1;
  if (fileLocation.includes('text-input')) output.isText = 1;
  if (fileLocation.includes('toggle')) output.isToggle = 1;

  return {
    input: descriptor,
    output
  }
}

module.exports.getInputGPU = getInputGPU;
