var loader = require('./loader.js');
var server = include('hapi/server.js');
var routes = include('routes/routes.js');

server.start(function() {
  console.log('Server running at:', server.info.uri);
});
