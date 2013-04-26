var _ = require('underscore');

exports.plotter = {
  translate90: function(p1, p2) {
    return [p1,(-1*p2)];
  },
  points: function(swings, chartType) {
      var _this = this;

      var points = _.map(swings, function(swing){
        var distance = swing['Total Distance'];
        var offline = swing['Offline'];
        return _this.translate90(distance, offline);
      });
      return [points];
  }
}
