/**
 * to run from root: "node scripts/predict check-1"
 */

const brain = require('brain.js');
const fs = require('fs');
const { getInput } = require('./hog');

const predictionFile = process.argv[2];

predict(predictionFile);

async function predict(predictionFile, image = null) {
  const net = new brain.NeuralNetwork();
  const testLocation = `./pics/training-data/${predictionFile}.jpg`;
  const networkLocation = './network-cpu-v1.json';

  const jsonNet = JSON.parse(fs.readFileSync(networkLocation, 'utf8'));
  net.fromJSON(jsonNet);
  
  const input = await getInput(testLocation, image);
  const predictionResult = net.run(input.input);
  
  console.log(predictionResult);
  return predictionResult;
}

module.exports.predict = predict;
