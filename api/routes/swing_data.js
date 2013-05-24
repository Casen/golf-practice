var SwingCollection = require('../collections/swing').SwingCollection;

var swingCollection = new SwingCollection();

var plotter = require('../lib/plotter').plotter;

exports.clubs = function(req, res) {
  swingCollection.fetch(req.params.club, req.query, {
    error: function(error){
      console.log(error);
    },
    success: function(swings) {
      res.send(swingCollection.analytics());
    }
  });
}

exports.stat_over_time = function(req, res) {
  swingCollection.fetch(req.params.club, {},{
    error: function(error){
      console.log(error);
    },
    success: function(swings) {
      res.send(swingCollection.stat_over_time(req.params.stat));
    }
  });
}
