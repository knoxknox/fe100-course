var Post = include('db/post.js');

module.exports = function(request, reply) {
  var id = { id: request.params.id };
  request.payload.post.updated_at = new Date();

  var result = new Post(id).save(request.payload.post);
  result.then(function(data) { reply(JSON.stringify(data)); } );
};
