var database = "golf"; // could be a url as well as a db name
var collections = ["swings"]

exports.db = require("mongojs").connect(database, collections);
