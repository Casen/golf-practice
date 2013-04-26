var swingCollection = new require('../collections/swing').SwingCollection();
var plotter = require('../lib/plotter').plotter;

exports.clubs = function(req, res) {
  swingCollection.fetch(req.params.club, {
    error: function(error){
      console.log(error);
    },
    success: function(swings) {
      res.send(plotter.points(swings,req.params.chart));
    }
  });

}
