var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({ host: 'localhost', port: 3000 });

module.exports = server;
