var mongoose = require('mongoose');

var TransitionSchema = new mongoose.Schema({
 
  bookId: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'},
  bookName:String,
  userId :{type:mongoose.Schema.Types.ObjectId,ref :'User'},
  userName :String,
  dateBorrow : Date,
  dateReturn: Date,
  timeBorrow :Number

});

module.exports = mongoose.model('Transition', TransitionSchema);