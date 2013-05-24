var swingCollection = new require('../collections/swing').SwingCollection();
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
