var mongoose = require('mongoose');

var TransitionSchema = new mongoose.Schema({
 
  bookId: String,
  bookName:String,
  dateBorrow : Date,
  dateReturn: Date,
  timeBorrow :Number

});

module.exports = mongoose.model('Transition', TransitionSchema);