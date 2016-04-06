var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
 
  name: String,
  director:String,
  code : Number,
  borrowBarcode: String,
  imageUrl :String,
  doctype :String

});

module.exports = mongoose.model('Book', bookSchema);