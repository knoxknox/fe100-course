angular.
module('training').
service('postServiceMock', function($q) {

  this.fetch = function() {
    var deferred = $q.defer();
    deferred.resolve(this.fetchData());

    return deferred.promise;
  };

  this.fetchData = function() {
    return [
      { id: 1, title: 'Post 1', body: 'Post A' },
      { id: 2, title: 'Post 2', body: 'Post B' },
      { id: 3, title: 'Post 3', body: 'Post C' }
    ];
  };

});
