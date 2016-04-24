var mongoose = require('mongoose');

var TransitionSchema = new mongoose.Schema({
 
  _bookId: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'},
  _userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  dateBorrow : Date,
  dateReturn: Date,
  status: Number

});

module.exports = mongoose.model('Transition', TransitionSchema);