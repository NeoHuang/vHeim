var mongoose = require('../libs/db');
var switchSchema = require('../schema/switchSchema');
module.exports = mongoose.model('Switch', switchSchema);

