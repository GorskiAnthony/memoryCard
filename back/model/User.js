const mongosse = require("mongoose");

// Model User
const UserSchema = new mongosse.Schema({
	name: {
		type: String,
		require: true,
		max: 255,
		min: 3,
	},
	email: {
		type: String,
		require: true,
		max: 255,
		min: 3,
	},
	password: {
		type: String,
		require: true,
		max: 1024,
		min: 6,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongosse.model("User", UserSchema);
