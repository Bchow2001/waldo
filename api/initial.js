require("dotenv").config();
const mongoose = require("mongoose");

const asyncHandler = require("express-async-handler");

const Character = require("./models/character");

mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGODB_URI;

main().catch((err) => console.log(err));
async function main() {
	await mongoose.connect(mongoDB);
	console.log("Connected to MongoDB");
}

const characters = [
	{ character: "bryan", topLX: 1176, topLY: 373, botRX: 1197, botRY: 430 },
	{ character: "dave", topLX: 1208, topLY: 1005, botRX: 1249, botRY: 1080 },
	{ character: "george", topLX: 110, topLY: 421, botRX: 130, botRY: 510 },
	{ character: "hatman", topLX: 1773, topLY: 690, botRX: 1804, botRY: 825 },
	{ character: "hulk", topLX: 560, topLY: 742, botRX: 627, botRY: 842 },
	{ character: "lara", topLX: 73, topLY: 241, botRX: 88, botRY: 274 },
	{ character: "ryan", topLX: 812, topLY: 931, botRX: 827, botRY: 1027 },
	{ character: "twinOne", topLX: 1761, topLY: 162, botRX: 1786, botRY: 196 },
	{ character: "twinTwo", topLX: 1874, topLY: 187, botRX: 1904, botRY: 238 },
	{
		character: "unfortunate",
		topLX: 1620,
		topLY: 377,
		botRX: 1658,
		botRY: 420,
	},
];

second().catch((err) => console.log(err));
async function second() {
	characters.forEach(async (item) => {
		const character = new Character({
			character: item.character,
			location: {
				topLX: item.topLX,
				topLY: item.topLY,
				botRX: item.botRX,
				botRY: item.botRY,
			},
		});
		await character.save();
		console.log(`${item.character} has been saved`);
	});
}
