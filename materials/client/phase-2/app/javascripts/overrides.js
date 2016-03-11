/**
 * Extend the callbacks to work with bootstrap forms all over the application.
 * See http://thedersen.com/projects/backbone-validation/#configuration/callbacks
 */
_.extend(Backbone.Validation.callbacks, {

  valid: function(view, attr, selector) {
    var $el = view.$('[name=' + attr + ']'),
        $group = $el.closest('.form-group');

    $group.removeClass('has-error');
    $group.find('.help-block').addClass('hidden').html('');
  },

  invalid: function(view, attr, error, selector) {
    var $el = view.$('[name=' + attr + ']'),
        $group = $el.closest('.form-group');

    $group.addClass('has-error');
    $group.find('.help-block').removeClass('hidden').html(error);
  }

});
