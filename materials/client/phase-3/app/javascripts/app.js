angular.
module('training', [
  'pikaday', 'ngRoute',
  'ngResource', 'ngSanitize'
]).
config(function($routeProvider) {

  $routeProvider.
    when('/', {
      controller: 'PostCtrl',
      templateUrl: '!templates/post.html'
    }).
    when('/create', {
      controller: 'FormCtrl',
      templateUrl: '!templates/form.html'
    }).
    when('/update/:id', {
      controller: 'FormCtrl',
      templateUrl: '!templates/form.html'
    }).
    otherwise({ redirectTo: '/' });

});
