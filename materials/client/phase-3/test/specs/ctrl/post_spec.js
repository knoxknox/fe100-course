'use strict';

describe('Controller: PostCtrl', function() {
  var scope, postService;

  beforeEach(function() {
    module('training');
    inject(function($controller, $rootScope, postServiceMock) {
      scope = $rootScope.$new();
      postService = postServiceMock;
      $controller('PostCtrl', { $scope: scope, postService: postService });

      scope.$digest();
    });
  });

  it('should resolve promise', function() {
    expect(scope.posts.length).toBe(3);
  });

  it('should contains scope data', function() {
    expect(scope.posts).toEqual(postService.fetchData());
  });

});
