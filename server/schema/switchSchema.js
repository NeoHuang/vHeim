var mongoose = require('../libs/db');
var Schema = mongoose.Schema; 

module.exports = new Schema({
  name: String,
  protocol: Number,
  systemCode: Number,
  deviceCode: Number,
  status: Boolean
});
