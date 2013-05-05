var fs = require('fs');
var _ = require('underscore')
var csvToJSON = require('csv_to_json');
var db = require('../db').db;
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.uploads = function(req, res){
  res.render('uploads', { title: 'Upload CSV file of your swings' });
};

exports.processCSV = function(req, res){
  fs.readFile(req.files.file.path, function(err, data){
    var newPath = __dirname + "/../public/uploads/" + req.files.file.name;
    console.log(newPath);

    fs.writeFile(newPath, data, function(err){
      csvToJSON.convert(newPath, function(jsonFile){
        var swings = require(jsonFile);
        var processed = _.map(swings, function(swing){
          var processedSwing = {};
          _.each(swing, function(val, key){
            if(typeof(val) !== "object" && val !== "N/A") {
              key = key.toLowerCase().replace(/\s/g, '_');
              processedSwing[key] = val;
            }
          });
          processedSwing.created_at = new Date();
          return processedSwing;
        });
        processed = _.filter(processed, function(swing){
          return swing.club !== "Average";
        });

        db.swings.insert(processed);
      });
    });
  });
};
