var when = require('when');
var nodefn = require('when/node/function');
var Switch = require('../models/switch');

var switches = {
  getAll: function(){
    console.log('switches->getAll');
   /*
    *testSwitch = new Switch({
    *  name:'Living Room Light',
    *           protocol: 1,
    *           systemCode:'01011',
    *           deviceCode: '00010'
    *});
    *testSwitch.save();
    */
    return  Switch.getAll().then(function (switches){
      return when.resolve({switches:switches});
     }, function(err){
       return when.reject({error: err});
     }); 
  },

  get: function(req) {
    if (req.params.id){
      console.log('switches->getStatus(' + req.params.id + ')');
      return Switch.get(req.params.id).then(function(sw){
        if (sw){
          return when.resolve({switch:sw});
        }
        else{
          return when.reject({error: 'not found'});
        }


      }, function (err){
        return when.reject({error: err});
      }); 
    }
    else {
      return when.reject({error: 'no id'});
    }
  },

  turn: function(req) {
    if (req.params.id){
      if (req.body.status){
        console.log('switches->turn(' + req.params.id + ')' + (true==req.body.status?'on':'off'));

        var opt = {} ;
        opt.id = req.params.id;
        opt.status = req.body.status;
        return Switch.turn(opt).then(function(sw){
          if (sw){
            return when.resolve({status: 'succeed'});
          }
          else{
            return when.reject({error: 'not found'});
          }
        }, function (err){
          return when.reject({error: err});
        }); 
      }
      else {
        return when.reject({error: 'no status'});

      }
    }
    else {
      return when.reject({error: 'no id'});
    }
  },
 
  add: function(req) {
    if (req.body.systemCode &&
        req.body.deviceCode &&
        req.body.name &&
        req.body.protocol){
          return Switch.add(req.body).then(function(sw){
            return when.resolve({switch:sw});
          }, function(err){
            return when.reject({error: err});
          });
        }
    else {
      return when.reject({error:'not enough info'});
    }
  }

}
module.exports = switches;
