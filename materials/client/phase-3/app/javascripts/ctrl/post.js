angular.
module('training').
controller('PostCtrl', function($scope, postService) {

  postService.fetch().
    then(function(response) { $scope.posts = response });

});
