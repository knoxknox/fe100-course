var Post = include('db/post.js');

module.exports = function(request, reply) {
  Post.fetchAll().then(function(data) { reply(JSON.stringify(data)); } );
};
