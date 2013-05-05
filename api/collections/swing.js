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
    plotDistance: function(){
      if(this.models.length > 0){
        return [[[1,2],[2,3]]];
      }
    },

    average: function(){
      var sum;
      _.each(_.keys(this.models[0]), function(column){
        sum = _.reduce(_.pluck(this.models, column), function(memo, num){
          if(!isNaN(parseFloat(num))){
            return memo + num;
          }
        }, 0);
      });
      return parseFloat(sum/this.models.length);
    }
  }
}

