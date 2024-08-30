const express = require("express");

const router = express.Router();

const guessController = require("../controllers/guessController");
const highScoreController = require("../controllers/highScoreController");

/* GET home page. */
router.get("/", (req, res, next) => {
	res.send("Hello World");
});

router.post("/", guessController.post_guess);

router.get("/highscore", highScoreController.get_highscore);

router.post("/highscore", highScoreController.post_highscore);

module.exports = router;
