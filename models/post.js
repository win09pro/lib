var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({

  title: String,
  introduce:String,
  dateStart: Date,
  pictureURL:String,
  content:String,


});

module.exports = mongoose.model('Post', postSchema);
