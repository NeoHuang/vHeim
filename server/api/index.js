var switches = require('./switches'); 
var requestHandler = function(apiMethod){
  return function(req, res) {
    apiMethod(req).then(function(result){
      res.json(result || {} );
    }).otherwise(function(err){
      res.json(err);
    });
  }
}

var init = function() {
  console.log('API initialized');
}
module.exports = {
  switches: switches,
  init: init,
  requestHandler: requestHandler
};
