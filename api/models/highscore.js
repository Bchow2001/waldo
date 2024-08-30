const mongoose = require("mongoose");

const { Schema } = mongoose;

const HighScoreSchema = new Schema({
	name: { type: String, require: true },
	time: { type: Number, require: true },
});

modules.exports = mongoose.model("HighScore", HighScoreSchema);
