angular.
module('training').
service('postsService', function($http) {

  /**
   * Get list of posts.
   */
  this.fetch = function() {
    if (!this.posts) {
      this.posts = $http.get('http://jsonplaceholder.typicode.com/posts');
    }

    return this.posts;
  };

  /**
   * Save post to server.
   */
  this.persist = function(postData) {
    return $http.post('http://jsonplaceholder.typicode.com/posts', postData);
  };

});
