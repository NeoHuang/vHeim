var when = require('when');
var switches = {
  getAll: function getAll(){
    return when.resolve([{id: 0, status: 1},{id: 1, status: 0}] );
  }
}
module.exports = switches;
