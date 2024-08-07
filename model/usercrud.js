const mongoose = require('mongoose');

const Schema = mongoose.Schema;   // Create a new schema
const userDataSchema = new Schema({
  email: String,
  password : String
});


const User = mongoose.model('User', userDataSchema);     // Create a model from the schema

module.exports = User;  // Export the model