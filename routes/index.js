var fs = require('fs');
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
      csvToJSON.convert(newPath.replace('.csv', ''));
      var swings = require(newPath.replace('.csv', '.json'));
      db.swings.insert(swings);
    });
  });
};
