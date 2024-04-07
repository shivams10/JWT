const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	fullName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const userModal = mongoose.model('user', userSchema);
module.exports = userModal;
