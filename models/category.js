var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
	_documenttype: { type: mongoose.Schema.Types.ObjectId, ref: 'documenttype'},
	name: String,
	description: String
});

module.exports = mongoose.model('category', categorySchema);