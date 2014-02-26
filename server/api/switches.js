var when = require('when');
var nodefn = require('when/node/function');
var Switch = require('../models/switch');

var switches = {
  getAll: function getAll(){
    console.log('switches->getAll');
    var defer = when.defer();
    var query = Switch.find({});
    result = query.exec().then(function(switches){
      defer.resolve(switches);
    }, function(err){
      defer.reject('error');
    }); 
    return defer.promise;

  }
}
module.exports = switches;
