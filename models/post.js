var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({

  title: String,
  introduce:String,
  dateStart: Date,
  pictureURL:String,
  content:String,
  link:String,
  postCategory:{ type: mongoose.Schema.Types.ObjectId, ref: 'PostCategory'}
});

module.exports = mongoose.model('Post', postSchema);
