const asyncHandler = require("express-async-handler");
const Character = require("../models/character");

exports.post_guess = asyncHandler(async (req, res, next) => {
	const { guess, selectedChar } = req.body;

	const character = await Character.findOne({ character: selectedChar });

	if (character == null) {
		res.status(200).json({ selectedChar: null });
	}

	if (
		guess.x >= character.location.topLX &&
		guess.x <= character.location.botRX &&
		guess.y >= character.location.topLY &&
		guess.y <= character.location.botRY
	) {
		res.status(200).json({ selectedChar });
	} else {
		res.status(200).json({ selectedChar: null });
	}
});
