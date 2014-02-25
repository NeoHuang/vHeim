var express = require('express');
var app = express();
var config = require('./config')
var models = require('./models');
var routes = require('./routes');
var api = require('./api');

function setupServer(server){

  models.init().then(function(){
    return api.init();
  }).then(function() {
    console.log('test');
    routes.api(server);
    routes.admin(server);
  }) 
  
  server.listen(config.port, config.host, printStart);
  
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



