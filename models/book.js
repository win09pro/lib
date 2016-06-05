var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  publisher: String,
  code: Number,
  status: Number,
  description: String,
  _cateId: {type: mongoose.Schema.Types.ObjectId, ref: 'category'},
  imageUrl: String,
  score: Number,
  numRate: Number,
  tagSearch: String

});

module.exports = mongoose.model('book', bookSchema);