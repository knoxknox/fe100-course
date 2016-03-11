var $ = require('jquery');
var Hello = require('./hello.coffee');
var Module1 = require('./module1.coffee');
var Module2 = require('./module2.coffee');

$(document).ready(function() {
  var view = new Hello();
  console.log('view render', view.render());
});
