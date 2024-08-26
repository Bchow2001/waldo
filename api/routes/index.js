const express = require("express");

const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
	res.send("Hello World");
});

router.post("/", (req, res, next) => {
	console.log(req.body);
});

module.exports = router;
