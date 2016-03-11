App.Collections = App.Collections || {};

(function() {
  'use strict';

  App.Collections.Post = Backbone.Collection.extend({
    url: 'http://jsonplaceholder.typicode.com/posts',
    model: App.Models.Post,

    latest: function(numberOfPosts) {
      return this.last(numberOfPosts || 5).reverse();
    }
  });

})();
