const fs = require('fs');
const csv = require('csv-parser');
const tf = require('@tensorflow/tfjs-node');
const readline = require('readline');

// Function to preprocess the data
function preprocessData(data) {
  const features = data.map((row) => [parseFloat(row.RISK_SCORE), parseFloat(row.EAL_SCORE)]);
  const labels = data.map((row) => parseFloat(row.RISK_SCORE)); // Using RISK_SCORE as the label
  return { features, labels };
}

// Load the CSV data
const data = [];
fs.createReadStream('./NRI_DATASET.csv')
  .pipe(csv())
  .on('data', (row) => {
    data.push(row);
  })
  .on('end', () => {
    // Preprocess the data
    const { features, labels } = preprocessData(data);
    // Create and compile a model
    const model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [2], units: 64, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 1, activation: 'linear' }));
    model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });


    // Train the model
    model.fit(tf.tensor(features), tf.tensor(labels), { epochs: 10, batchSize: 32 })
      .then(() => {
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });

        // Function to query by COUNTY
        function queryByCounty(queryCounty) {

          const data = [];
          fs.createReadStream('./DATASET.csv')
            .pipe(csv())
            .on('data', (row) => {
              data.push(row);

          console.log("queryCounty:", queryCounty);
          const countyData = data.filter((row) => row.COUNTY === queryCounty);
         console.log("countyData: ", row);
          console.log(queryCounty)
          if (countyData.length > 0) {
            const averageRisk = tf.mean(countyData.map((row) => parseFloat(row.RISK_SCORE))).dataSync();
            console.log(`Average Risk Score for ${queryCounty}: ${averageRisk[1]}`);
          } else {
            //console.log(`County not found: ${queryCounty}`);
          }
          rl.close();
            })
          
          
          

        }

        // Capture user input for COUNTY query
        rl.question('Enter COUNTY to query: ', (queryCounty) => {
          queryByCounty(queryCounty);
        });
      });
  });