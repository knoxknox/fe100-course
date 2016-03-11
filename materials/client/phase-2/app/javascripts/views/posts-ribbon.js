App.Views = App.Views || {};

(function() {
  'use strict';

  App.Views.PostsRibbon = Backbone.View.extend({
    manage: true,
    template: JST['app/javascripts/templates/posts-ribbon.ejs'],

    beforeRender: function() {
      $('h1').html('Post list');
    }
  });

})();
