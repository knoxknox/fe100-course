angular.
module('training').
directive('loading', function($http) {

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.isLoading = function() {
        return $http.pendingRequests.length > 0;
      };

      /**
       * Show loading spinner on each request.
       */
      scope.$watch(scope.isLoading, function(value) {
        if (value) {
          element.removeClass('ng-hide');
          angular.element('#application').addClass('ng-hide');
        } else {
          element.addClass('ng-hide');
          angular.element('#application').removeClass('ng-hide');
        }
      });
    }
  };

});
