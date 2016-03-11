var Post = include('db/post.js');

module.exports = function(request, reply) {
  var result = new Post({ id: request.params.id }).destroy();
  result.then(function(data) { reply(JSON.stringify(data)); } );
};
