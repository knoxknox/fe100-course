App.Views = App.Views || {};

(function() {
  'use strict';

  App.Views.PostsCount = Backbone.View.extend({
    manage: true,
    template: JST['app/javascripts/templates/posts-count.ejs']
  });

})();
