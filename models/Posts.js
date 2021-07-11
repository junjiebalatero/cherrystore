const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({    	
	item: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	retail_price: {
		type: String,
		required: true
	},
	wholesale_price: {
		type: String,
		required: true
	},
	available: {
		type: String,
		required: true
	},
	remarks: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Posts', PostSchema);
