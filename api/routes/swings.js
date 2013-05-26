var SwingCollection = require('../collections/swing').SwingCollection;
var swingCollection = new SwingCollection();

exports.index = function(req, res){
  swingCollection.fetch({
    error: function(error){
      console.log(error);
    },
    success: function(swings) {
      res.send(swings);
    }
  });
};

exports.clubs = function(req, res){

  swingCollection.fetch(req.params.club, {}, {
    error: function(error){
      console.log(error);
    },
    success: function(swings) {
      res.send(swings);
    }
  });
};

