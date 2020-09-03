/**
 * to run from root: "node ./scripts/train 1000 true"
 */

const brain = require('brain.js');
const fs = require('fs');
const { getInput } = require('./hog');

const iterations = Number(process.argv[2]);
const loadNetwork = !!process.argv[3];

/* constants */
const LOG_PERIOD = 100;
const LEARNING_RATE = 0.003;

const config = {
  activation: 'sigmoid',
  hiddenLayers: [10, 10],
  learningRate: 0.2
}

const NETWORK_LOCATION = './network.json';
const SOURCE_LOCATION = './pics/training-data';
const files = fs.readdirSync(SOURCE_LOCATION);
const TOTAL_LENGTH = files.length;
const ITERATIONS = iterations;

const net = new brain.NeuralNetwork(config);
let inputs = [];

if (loadNetwork) {
  const jsonNet = JSON.parse(fs.readFileSync(NETWORK_LOCATION, 'utf8'));
  net.fromJSON(jsonNet);
}

files.forEach(file => {
  const fileLocation = `${SOURCE_LOCATION}/${file}`;

  getInput(fileLocation).then(input => {
    inputs.push(input);

    if (inputs.length === TOTAL_LENGTH) {
      net.train(inputs, {
        iterations: ITERATIONS,
        log: true,
        logPeriod: LOG_PERIOD,
        learningRate: LEARNING_RATE
      });

      const jsonNet = JSON.stringify(net.toJSON());
      fs.writeFile(NETWORK_LOCATION, jsonNet, 'utf8', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    }
  });
});
