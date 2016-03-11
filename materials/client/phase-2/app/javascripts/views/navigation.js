App.Views = App.Views || {};

(function() {
  'use strict';

  App.Views.Navigation = Backbone.View.extend({
    manage: true,
    template: JST['app/javascripts/templates/navigation.ejs']
  });

})();
