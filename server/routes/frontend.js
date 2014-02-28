var frontend = require('../frontend');
module.exports = function(server){
  server.get('/', frontend.staticProvider.html('index',{title:'vHeim'}));
}
