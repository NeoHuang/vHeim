var switches = require('./switches'); 
var requestHandler = function(apiMethod){
  return function(req, res) {
    apiMethod.call(req).then(function(result){
      res.json(result || {} );
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
