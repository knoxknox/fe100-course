App.Views = App.Views || {};

(function() {
  'use strict';

  App.Views.Header = Backbone.View.extend({
    manage: true,
    template: JST['app/javascripts/templates/header.ejs']
  });

})();
