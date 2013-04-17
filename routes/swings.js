var database = "golf"; // could be a url as well as a db name
var collections = ["swings"]
var db = require("mongojs").connect(database, collections);
var nines;

exports.swings = function(req, res){
  q = req.query || {};
  db.swings.find(req.query, function(err, swings){
    if( err || !swings) console.log("No swings found");
    else res.render('swings', {title: 'Swings', swings: swings});
  });
};
