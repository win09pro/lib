var mongoose = require('mongoose');
var postCateSchema = new mongoose.Schema({
  nameCate: String,
  Type:Number 
});

module.exports = mongoose.model('PostCategory', postCateSchema);
