App.Views = App.Views || {};

(function() {
  'use strict';

  App.Views.Form = Backbone.View.extend({
    manage: true,
    template: JST['app/javascripts/templates/form.ejs'],

    events: {
      'submit': 'onSave'
    },

    bindings: {
      '#body': 'body',
      '#date': 'date',
      '#title': 'title'
    },

    initialize: function() {
      Backbone.Validation.bind(this);
    },

    afterRender: function() {
      this.stickit();
      new Pikaday({ field: $('#date')[0], format: 'YYYY-MM-DD' });
    },

    beforeRender: function() {
      $('h1').html('Post ' + this.options.operation);
    },

    onSave: function(e) {
      e.preventDefault();

      if (this.model.isValid(true)) {
        this.model.save().
          done(this.onSuccess.bind(this)).
          error(this.onFailure.bind(this));
      }
    },

    onSuccess: function(result) {
      var operation = this.options.operation;
      this.model.trigger('persist', operation, result);

      Backbone.history.navigate('/', { trigger: true });
    },

    onFailure: function(result) {
      alert('Could not save this post, something went wrong');
    },

    remove: function() {
      Backbone.Validation.unbind(this);
      return Backbone.View.prototype.remove.apply(this, arguments);
    }
  });

})();
