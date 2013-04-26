var swingCollection = new require('../collections/swing').SwingCollection()

exports.index = function(req, res){
  swingCollection.fetch({
    error: function(error){
      console.log(error);
    },
    success: function(swings) {
      res.render('swings', {title: 'All Practice Swings', swings: swings});
    }
  });
};

exports.clubs = function(req, res){

  swingCollection.fetch(req.params.club, {
    error: function(error){
      console.log(error);
    },
    success: function(swings) {
      res.render('swings', {title: 'All Practice Swings', swings: swings});
    }
  });
};

