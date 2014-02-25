var switches = require('./switches'); 
var requestHandler = function(apiMethod, params){
  return function(req, res) {
    apiMethod.call(params).then(function(result){
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
