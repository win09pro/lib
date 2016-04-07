var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
 
  name: String,
  director:String,
  code : Number,
  borrowBarcode: String,
  imageUrl :String,
  cateId: {type: mongoose.Schema.Types.ObjectId, ref: 'category'},
  cateName :String


});

module.exports = mongoose.model('Book', bookSchema);