App.Routers = App.Routers || {};

(function() {
  'use strict';

  App.Routers.Posts = Backbone.Router.extend({
    routes: {
      '': 'indexAction',
      'index': 'indexAction',
      'create': 'createAction',
      'update/:id': 'updateAction'
    },

    initialize: function(options) {
      this.layout = options.layout;
      this.collection = options.collection;
    },

    renderView: function(viewName, options) {
      var view = new App.Views[viewName](options);
      this.layout.setView('#content', view).render();
    },

    indexAction: function() {
      var collection = this.collection;

      this.renderView('PostsRibbon', { collection: collection });
    },

    createAction: function() {
      var model = new this.collection.model;
      this.listenToOnce(model, 'persist', this.updateLayout);

      this.renderView('Form', { model: model, operation: 'create' });
    },

    updateAction: function(modelId) {
      var model = this.collection.get(modelId);
      this.listenToOnce(model, 'persist', this.updateLayout);

      this.renderView('Form', { model: model, operation: 'update' });
    },

    updateLayout: function(event, record) {
      if (event == 'create') {
        this.collection.add(record);
      }

      this.layout.getView('#posts-count').render();
      this.layout.getView('#posts-recent').render();
    }
  });

})();
