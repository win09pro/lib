var mongoose = require('mongoose');

var transitionSchema = new mongoose.Schema({
 
  barcode: {type: Number, ref: 'book'},
  username: {type: String, ref: 'User'},
  bookname: {type: String, ref: 'book'},
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