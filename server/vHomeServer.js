var port = 8010;
var express = require('express'),
    api = require('./routes/api');
var app = express();
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else{
    next();
  }
}

app.configure(function(){
  app.use(express.methodOverride());
  app.use(allowCrossDomain);
  app.use(express.bodyParser());
});

//JSON API
app.get('/switches', api.switches);
//app.get('/switches/:id', api.switch);

app.listen(port);
console.log("Server running at http://localhost:" + port);

