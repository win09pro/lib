var mongoose = require('mongoose');

var commentShema = new mongoose.Schema({
	_bookId: {type: mongoose.Schema.Types.ObjectId, ref: 'book'},
	_userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	content: String,
	date: Date
});
module.exports = mongoose.model('comment', commentShema);