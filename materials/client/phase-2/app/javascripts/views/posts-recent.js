App.Views = App.Views || {};

(function() {
  'use strict';

  App.Views.PostsRecent = Backbone.View.extend({
    manage: true,
    template: JST['app/javascripts/templates/posts-recent.ejs']
  });

})();
