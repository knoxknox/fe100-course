App.Views = App.Views || {};

(function() {
  'use strict';

  App.Views.Layout = {

    initialize: function(collection) {
      var layout = this.layoutOpts(collection);
      return this.layoutInstance = new layout();
    },

    layoutOpts: function(collection) {
      return Backbone.Layout.extend({
        el: 'body',
        template: JST['app/javascripts/templates/app.ejs'],

        views: {
          '#menu': new App.Views.Navigation(),
          '#header': new App.Views.Header(),
          '#posts-count': new App.Views.PostsCount({ collection: collection }),
          '#posts-recent': new App.Views.PostsRecent({ collection: collection })
        }
      });
    }

  };

})();
