const { s_a, state_arr } = require('./data');

const fs = require('fs');
const transformedStates = state_arr.map((state, index) => ({
  // label: (index + 1).toString(),
  label: state.replace(/&/g, 'and'),
  // value: state.replace(/&/g, 'and'),
  value: (index + 1).toString(),
}));
console.log(transformedStates);

// Convert the data to JSON format
const jsonData = JSON.stringify(transformedStates, null, 2);

// Define the filename
const filename = 'states.json';

// Write the data to a file
fs.writeFile(filename, jsonData, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log(`Data written to ${filename}`);
  }
});

// **********************for city ***********
// let myCity = [];
// for (var i = 1; i <= s_a.length - 1; i++) {
//   const transformedStates = s_a[i].split('|').map((state, index) => ({
//     // key: (index + 1).toString(),
//     label: state.replace(/&/g, 'and'),
//     value: state.replace(/&/g, 'and'),
//   }));
//   myCity.push({ key: state_arr[i - 1], city: [transformedStates] });
//   // myCity.push({ state_arr[i - 1]: [transformedStates] });
// }
// const jsonData = JSON.stringify(myCity, null, 2);
// console.log(state_arr[i]);
// // Define the filename
// const filename = `myCity.json`;

// **********************for city end***********

// // Convert the data to JSON format

// // Write the data to a file
// fs.writeFile(filename, jsonData, (err) => {
//   if (err) {
//     console.error('Error writing to file:', err);
//   } else {
//     console.log(`Data written to ${filename}`);
//   }
// });
// }

// Write the data to a file
fs.writeFile(filename, jsonData, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log(`Data written to ${filename}`);
  }
});
