var when = require('when');
var switchLib = require('../libs/switchProtocol1');
var mongoose = require('../libs/db');
var switchSchema = require('../schema/switchSchema');
switchModel = mongoose.model('Switch', switchSchema);

switchModel.getAll = function() {
    var defer = when.defer();
    var query = switchModel.find({});
    query.exec().then(function(switches){
      defer.resolve(switches);
    }, function(err){
      defer.reject(err);
    }); 
    return defer.promise;
}

switchModel.get = function(id) {
    var defer = when.defer();
    var query = switchModel.findById(id);
    query.exec().then(function(sw){
      defer.resolve(sw);
    }, function(err){
      defer.reject(err);
    }); 
    return defer.promise;
}

switchModel.turn = function(opt) {
    var defer = when.defer();
    //var query = switchModel.findOne({_id:opt.id});
    var query = switchModel.findById(opt.id);
    query.exec().then(function(sw){
      if (sw){
        switchLib.switchLight(sw.systemCode, sw.deviceCode, opt.status, function(err){
          if (!err){
            sw.status = opt.status;
            sw.save(function (err, product, numberAffected){
              if (!err){
                defer.resolve(sw);
              }
              else{
                sw.minorError = 'save to db error';
                defer.resolve(sw);
              }
            });

          }
          else {
            defer.reject('cannot switch');
          }
        });
      }
      else{
        defer.reject('not found');
      }

    }, function(err){
      defer.reject(err);
    }); 
    return defer.promise;
}

switchModel.add = function(opt) {
    var defer = when.defer();
    //var query = switchModel.findOne({_id:opt.id});
    var param = {
      protocol:opt.protocol,
      systemCode:opt.systemCode, 
      deviceCode:opt.deviceCode};
    var query = switchModel.findOne(param);
    query.exec().then(function(sw){
      if(!sw){
        param.name = opt.name;
        var newSwitch = new switchModel(param);
        newSwitch.save(function(err, sw, nr) {
          if (!err && nr > 0){
            defer.resolve(sw)
          }
          else {
            defer.reject('saving error');
          }
        });
      }
      else {
        defer.reject('already exist');
      }
    }, function(err){
      defer.reject('query error');
    });
  return defer.promise;

}

module.exports = switchModel;

