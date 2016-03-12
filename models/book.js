var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
 
  name: String,
  director:String
 
});

module.exports = mongoose.model('Book', bookSchema);