var _ = require('underscore');
_.str = require('underscore.string');
var db = require('../db').db;

function slugToName(slug) {
  return _.map(slug.split('-'), _.str.capitalize).join(" ");
}

exports.SwingCollection = function(){
  return {
    models: [],
    fetch: function(club, options) {
      _this = this;
      options = options ? options : club;
      query = (typeof(club) === "string") ? {club : slugToName(club)} : null;

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
    analytics: function(){
      return {
        average_distance: this.average('total_distance'),
        average_club_head_speed: this.average('club_head_speed'),
        average_accuracy: this.average_accuracy(),
        longest_shot: _.sortBy(this.models, function(model){return -model.total_distance})[0]
      }
    }
  }
}

