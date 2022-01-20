const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    return Recipe.deleteMany()
  })
  Recipe.insertMany(data)
  .then(data => console.log('The recipe is added.'))
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  Recipe.findOneAndUpdate('Rigatoni alla Genovese', { duration: '100' })
  .then(x => console.log('The recipe is updated'))
