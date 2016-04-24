var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  _cateId: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
  name: String,
  author: String,
  publisher: String,
  code: Number,
  status: Number,
  description: String,
  imageUrl: String,
  score: Number,
  numRate: Number


});

module.exports = mongoose.model('Book', bookSchema);