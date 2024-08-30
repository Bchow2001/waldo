const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

const HighScore = require("../models/highscore");

exports.get_highscore = asyncHandler(async (req, res, next) => {
	const highScore = await HighScore.find().sort({ time: 1 }).limit(10);

	if (highScore.length === 0) {
		res.status(200).json([]);
	}

	res.status(200).json(highScore);
});

exports.post_highscore = [
	body("name").trim().escape(),
	body("time").escape(),

	asyncHandler(async (req, res, next) => {
		const errors = validationResult(req);
		if (!req.body.name) {
			req.body.name = "Anonymous";
		}
		req.body.time = Number(req.body.time);

		const highScore = new HighScore({
			name: req.body.name,
			time: req.body.time,
		});

		if (!errors.isEmpty()) {
			res.status(403).json(errors);
		} else {
			await highScore.save();
			res.status(200).json({ message: "High Score saved" });
		}
	}),
];
