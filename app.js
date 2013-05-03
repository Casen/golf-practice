
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./api/routes')
  , swings = require('./api/routes/swings')
  , swingData = require('./api/routes/swing_data')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments

app.use require('connect-assets')();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/api/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/uploads', routes.uploads);
app.post('/process-csv', routes.processCSV);
app.get('/swings', swings.index);
app.get('/swings/:club', swings.clubs);
app.get('/data/:club', swingData.clubs);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
