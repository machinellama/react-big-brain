/**
 * to run from root: "node scripts/convert mock-1"
 */

const fs = require('fs');
const { imageToChunks } = require('split-images');
const { predict } = require('./predict');
const maxBy = require('lodash/maxBy');
const { textInput, checkbox, toggle, slider } = require('./components');

const mockFile = process.argv[2];
const NUM_SEGMENTS = 4;

function getTopResult(result) {
  return maxBy(Object.keys(result), o => result[o]);
}

(async()=> {
  try {
    const chunckSize = 100;
    const chuncks = await imageToChunks(`./pics/mocks/${mockFile}.jpg`, chunckSize);

    let i = 0;
    const components = [];

    chuncks.forEach(async c => {
      i++;
      if (i <= NUM_SEGMENTS) {
        const prediction = await predict(null, c);
        
        // uncomment to see how each section looks
        // fs.writeFileSync(`${i}.jpg`, c);

        const topResult = getTopResult(prediction);
        console.log('topResult', topResult);
        components.push(topResult);

        if (components.length === NUM_SEGMENTS) {
          let output = '';
          components.forEach(res => {
            if (res === 'isSlider') {
              output += slider;
            } else if (res === 'isCheck') {
              output += checkbox;
            } else if (res === 'isToggle') {
              output += toggle;
            } else if (res === 'isText') {
              output += textInput;
            }
            output += '\n';
          });

          fs.writeFileSync(`./results/${mockFile}-result.txt`, output);
        }
      }
    });
  } catch (e) {
    console.log(e);
  }
})();
