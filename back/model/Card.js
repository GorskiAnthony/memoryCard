const mongosse = require("mongoose");

// Model User
const CardSchema = new mongosse.Schema({
	nbCard: {
		type: Number,
		default: Date.now,
	},
	user: {
		type: String,
		require: true,
	},
	recto: {
		type: String,
		require: true,
		max: 255,
		min: 3,
	},
	verso: {
		type: String,
		require: true,
		max: 255,
		min: 3,
	},
	category: {
		type: Number,
		default: 1,
	},
});

module.exports = mongosse.model("Card", CardSchema);
