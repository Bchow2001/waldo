const mongoose = require("mongoose");

const { Schema } = mongoose;

const CharacterSchema = new Schema({
	character: { type: String, required: true },
	location: {
		topLX: { type: Number, required: true },
		topLY: { type: Number, required: true },
		botRX: { type: Number, required: true },
		botRY: { type: Number, required: true },
	},
});

module.exports = mongoose.model("Character", CharacterSchema);
