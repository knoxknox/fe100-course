angular.
module('training').
controller('FormCtrl', function(
  $scope, $location, $routeParams, postService) {

  postService.fetchById($routeParams).
    then(function(response) { $scope.post = response });

  $scope.save = function(post) {
    postService.persist(post).then(function() { $location.path('/index') });
  };

});
