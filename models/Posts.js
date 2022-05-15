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
	image: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Posts', PostSchema);
