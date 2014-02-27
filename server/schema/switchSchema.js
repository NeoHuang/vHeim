var mongoose = require('../libs/db');
var Schema = mongoose.Schema; 

module.exports = new Schema({
  name: {type:String, default:'NoName'},
  protocol: {type:Number, default:0},
  systemCode: {type:String, default:'00000'},
  deviceCode: {type:String, default:'00000'},
  status: {type:Boolean, default:false}
});
