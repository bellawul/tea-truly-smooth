const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const usually = require("x-usually-longingly"),
	playground = require("twt-playground"),
	attack = require("x-attack-yippee"),
	infect = require("x-infect-likewise"),
	cheery = require("x-cheery-messenger"),
	worse = require("x-worse-clearly"),
	amend = require("x-amend-beyond"),
	broil = require("x-broil-gadzooks"),
	despite = require("x-despite-cruelly"),
	fondue = require("x-fondue-indolent"),
	anguish = require("x-anguish-notarize"),
	prod = require("x-prod-yippee"),
	which = require("x-which-frequent"),
	rarely = require("x-rarely-opposite"),
	gosh = require("x-gosh-where"),
	beneath = require("x-beneath-ill-fated"),
	fare = require("x-fare-barring"),
	first = require("x-first-boohoo"),
	atop = require("x-atop-twister");

const USERNAME = "Kraig16",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
