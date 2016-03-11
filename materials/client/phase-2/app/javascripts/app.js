window.App = {};
window.App.Views = {};
window.App.Models = {};
window.App.Routers = {};
window.App.Collections = {};

$(document).ready(function() {
  var posts = new App.Collections.Post();
  var layout = App.Views.Layout.initialize(posts);
  $('body').html('<div class="loader">Loading</div>');

  posts.fetch().then(function() {
    layout.render();
    new App.Routers.Posts({ layout: layout, collection: posts });

    Backbone.history.start();
  });
});
