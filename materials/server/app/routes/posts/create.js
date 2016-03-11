var Post = include('db/post.js');

module.exports = function(request, reply) {
  request.payload.post.created_at = new Date();
  request.payload.post.updated_at = new Date();

  var result = new Post(request.payload.post).save();
  result.then(function(data) { reply(JSON.stringify(data)); } );
};
