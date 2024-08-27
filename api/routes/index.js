const express = require("express");

const router = express.Router();

const guessController = require("../controllers/guessController");

/* GET home page. */
router.get("/", (req, res, next) => {
	res.send("Hello World");
});

router.post("/", guessController.post_guess);

module.exports = router;
