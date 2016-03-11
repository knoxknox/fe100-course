angular.
module('training').
service('postService', function($q, postsService) {

  /**
   * Get list of posts.
   */
  this.fetch = function() {
    var deferred = $q.defer();
    postsService.fetch().then(function(response) {
      deferred.resolve(response.data, response.data.length);
    });

    return deferred.promise;
  };

  /**
   * Get given post by id.
   */
  this.fetchById = function(params) {
    var deferred = $q.defer();
    if (params.id) {
      postsService.fetch().then(function(response) {
        deferred.resolve(response.data[params.id - 1]);
      });
    } else {
      deferred.resolve({ id: null, title: null, body: null, date: null });
    }

    return deferred.promise;
  };

  /**
   * Save post data to server.
   */
  this.persist = function(post) {
    var deferred = $q.defer();
    postsService.persist(post).then(function() {
      var mode = post.id ? 'edit' : 'create';
      postsService.fetch().then(function(posts) {
        if (mode == 'create') {
          posts.data.push(post);
        }

        deferred.resolve(post, posts.data.length);
      });
    });

    return deferred.promise;
  };

});
