var mongoose = require('mongoose');

var transitionSchema = new mongoose.Schema({
 
  _bookId: {type: mongoose.Schema.Types.ObjectId, ref: 'book'},
  _userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  dateBorrow : Date,
  dateReturn: Date,
  status: {
  	type:Number,
  	default: 2
  }

});
// var Trans;

// if (mongoose.models.Transition) {
//   Trans = mongoose.model('Transition');
// } else {
//   Trans = mongoose.model('Transition', TransitionSchema);
// }

// module.exports = Trans;
module.exports = mongoose.model('transition', transitionSchema);