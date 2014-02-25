var api = require('../api');

module.exports = function(server) {
  server.get('/api/switches', api.requestHandler(api.switches.getAll));
}
