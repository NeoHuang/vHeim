var express = require('express');
var app = express();
var config = require('./config')
var models = require('./models');
var routes = require('./routes');
var api = require('./api');
var path = require('path');

function setupServer(server){
  server.use(express.methodOverride());
  server.use(express.bodyParser());
  server.set('views', path.join(__dirname, 'views'));
  server.set('view engine', 'jade');
  server.use(express.static(path.join(__dirname, 'public')));

  models.init().then(function(){
    return api.init();
  }).then(function() {
    routes.api(server);
    routes.admin(server);
    routes.frontend(server);
  }) 
  
  server.listen(config.port, printStart);
  
}
function printStart(){

  console.log("Server running at "+ config.host +':' + config.port);
}
setupServer(app);
/*var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else{
    next();
  }
}*/

/*app.configure(function(){
  app.use(express.methodOverride());
  app.use(allowCrossDomain);
  app.use(express.bodyParser());
});*/

//JSON API
//app.get('/switches/:id', api.switch);



