const brain = require('brain.js');
const fs = require('fs');
const { getInputGPU } = require('./hog');

const predictionFile = process.argv[2];
const testLocation = `./pics/training-data/${predictionFile}.jpg`;
const networkLocation = './network-gpu.json';

const net = new brain.NeuralNetworkGPU();

const jsonNet = JSON.parse(fs.readFileSync(networkLocation, 'utf8'));
net.fromJSON(jsonNet);

getInputGPU(testLocation).then(input => {
  const predictionResult = net.run(input.input);

  console.log(predictionResult);
});
