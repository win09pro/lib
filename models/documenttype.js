var mongoose = require('mongoose');

var documentTypeSchema = new mongoose.Schema({
	name: String,
	description: String
});

module.exports = mongoose.model('documenttype', documentTypeSchema);