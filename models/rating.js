var mongoose = require('mongoose');

var ratingSchema = new mongoose.Schema({
  _userid: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  _bookid: {type: mongoose.Schema.Types.ObjectId, ref:'book'},
  value: Number
});

module.exports = mongoose.model('rating', ratingSchema);