var mongoose = require('mongoose');

var commentShema = new mongoose.Schema({
	_bookId: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'},
	_userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	content: String,
	date: Date
});