const asyncHandler = require("express-async-handler");
const Character = require("../models/character");

exports.post_guess = asyncHandler(async (req, res, next) => {
	const { guess, selectedChar } = req.body;

	const character = await Character.findOne({ character: selectedChar });

	console.log(character);
	if (
		guess.x >= character.location.topLX &&
		guess.x <= character.location.botRX &&
		guess.y >= character.location.topLY &&
		guess.y <= character.location.botRY
	) {
		console.log("correct guess");
	} else {
		console.log("wrong guess");
	}
});
