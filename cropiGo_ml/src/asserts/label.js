// Your list as a string
const PlantLabel = [
  'Apple   Apple scab',
  'Apple   Apple Black Rot',
  'Apple   Cedar Apple Rust',
  'Apple   healthy',
  'Blueberry   healthy',
  'Cherry (including sour)   Cherry Powdery Mildew',
  'Cherry (including sour)   healthy',
  'Corn (maize)   Corn Cercospora Leaf Spot (Gray Leaf Spot)',
  'Corn (maize)   Corn Common Rust',
  'Corn (maize)   Corn Northern Leaf Blight',
  'Corn (maize)   healthy',
  'Grape   Grape Black Rot',
  'Grape   Grape Esca (Black Measles)',
  'Grape   Grape Leaf Blight (Isariopsis Leaf Spot)',
  'Grape   healthy',
  'Orange   Orange Huanglongbing (Citrus Greening)',
  'Peach   Peach Bacterial Spot',
  'Peach   healthy',
  'Pepper-Bell   Pepper-bell Bacterial Spot',
  'Pepper-Bell   healthy',
  'Potato   Potato Early Blight',
  'Potato   Potato Late Blight',
  'Potato   healthy',
  'Raspberry   healthy',
  'Soybean   healthy',
  'Squash   Squash Powdery Mildew',
  'Strawberry   Strawberry Leaf Scorch',
  'Strawberry   healthy',
  'Tomato   Tomato Bacterial Spot',
  'Tomato   Tomato Early Blight',
  'Tomato   Tomato Late Blight',
  'Tomato   Tomato Leaf Mold',
  'Tomato   Tomato Septoria Leaf Spot',
  'Tomato   Tomato Spider Mites (Two-Spotted Spider Mite)',
  'Tomato   Tomato Target Spot',
  'Tomato   Tomato Yellow Leaf Curl Virus',
  'Tomato   Tomato Mosaic Virus',
  'Tomato   healthy',
];

const plant = [
  'Apple',
  'Blueberry',
  'Cherry (including sour)',
  'Corn (maize)',
  'Grape',
  'Orange',
  'Peach',
  'Pepper-bell',
  'Potato', ///
  'Raspberry',
  'Soybean',
  'Squash',
  'Strawberry',
  'Tomato',
];

// const fs = require('fs');
// console.log(type);
// console.log(list);

// Convert object to JSON
// const jsonData = JSON.stringify(plant1);

// // Write JSON data to a file
// fs.writeFile('data.json', jsonData, 'utf8', err => {
//   if (err) {
//     console.error('Error writing JSON file:', err);
//     return;
//   }
//   console.log('JSON file has been saved.');
// });

const crop = [];

const PlantDiseaseLabel = [
  'Apple',
  'Grape',
  'Corn',
  'Cherry',
  'Orange',
  'Peach',
  'Pepper-Bell',
  'Squash',
  'Strawberry',
  'Tomato',
  'Potato',
];

module.exports = {PlantLabel, crop, plant, PlantDiseaseLabel};
