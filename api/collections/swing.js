var _ = require('underscore');
_.str = require('underscore.string');
var db = require('../db').db;

function slugToName(slug) {
  return _.map(slug.split('-'), _.str.capitalize).join(" ");
}

function SwingCollection (models) {
  this.models = models;
};

SwingCollection.prototype = {
  fetch: function(club, params, options) {
    _this = this;

    query = (typeof(club) === "string") ? {club : slugToName(club)} : {};

    if(params.start) {
      query.created_at = {};
      query.created_at["$gte"] = new Date(params.start);
    }

    if(params.end) {
      query.created_at = query.created_at || {};
      query.created_at["$lte"] = new Date(params.end);
    }

    db.swings.find(query, function(error, models){
      if( error ) {
        options.error(error);
        console.log(error);
      }
      else {
        _this.models = models;
        options.success(models);
      }
    });
  },
  average: function(column){
    var sum,average;
    sum = _.reduce(_.pluck(this.models, column), function(memo, num){
      if(!isNaN(parseFloat(num))){
        return memo + num;
      }
    }, 0);
    average = (sum == 0) ? sum : parseFloat(sum/this.models.length);
    return average;
  },
  average_accuracy: function(){
    var accuracies = _.map(this.models, function(model){
      return (100 - (Math.abs(model.offline) / model.total_distance * 100));
    });
    return _.reduce(accuracies, function(memo, num){ return memo + num;}, 0) / this.models.length;
  },
  miss_right_percentage: function(){
    var _this = this;
    var count = _.filter(this.models, function(model){
      return model.offline > _this.error_window(model.total_distance);
    }).length;
    return 100 * (count/this.models.length);
  },
  miss_left_percentage: function(){
    var _this = this;
    var count = _.filter(this.models, function(model){
      return model.offline < -_this.error_window(model.total_distance);
    }).length;
    return 100 * (count/this.models.length);
  },
  straight_percentage: function(){
    return 100 - this.miss_left_percentage() - this.miss_right_percentage();
  },
  error_window: function(distance){
    var w = Math.tan(5 * Math.PI/180) * distance;
    return w;
  },
  analytics: function(){
    return {
      average_distance: this.average('total_distance'),
      average_carry: this.average('carry'),
      average_backspin: this.average('back_spin'),
      average_club_head_speed: this.average('club_head_speed'),
      average_accuracy: this.average_accuracy(),
      straight_percentage: this.straight_percentage(),
      miss_right_percentage: this.miss_right_percentage(),
      miss_left_percentage: this.miss_left_percentage(),
      worst_hook: _.sortBy(this.models, function(model){return model.offline;})[0],
      worst_slice: _.sortBy(this.models, function(model){return -model.offline;})[0],
      longest_shot: _.sortBy(this.models, function(model){return -model.total_distance})[0],
      date: this.models[this.models.length - 1].created_at
    }
  },
  stat_over_time: function(stat){
    if(typeof(this[stat]) != "function"){
      throw new Error(stat + " is not a supported statistic")
    }
    var subsets = _.toArray(_.groupBy(this.models, function(model, index){
      return Math.floor(index/10);
    }));
    var stats = _.map(subsets, function(models){
      var col = new SwingCollection(models);
      return col[stat]();
    });

    return stats;
  }
}
exports.SwingCollection = SwingCollection;
