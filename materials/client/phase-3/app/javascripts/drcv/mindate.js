angular.
module('training').
directive('validateDate', function() {

  return {
    require: 'ngModel',
    link: function(scope, el, attrs, ctrl) {
      ctrl.$validators.validateDate = function(modelValue, _) {
        return modelValue && Date.now() < Date.parse(modelValue);
      };
    }
  };

});
