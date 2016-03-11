var server = include('hapi/server.js');

server.route({ method: 'GET', path: '/api/posts', handler: includeRoute('posts/index.js') });
server.route({ method: 'POST', path: '/api/posts', handler: includeRoute('posts/create.js') });

server.route({ method: 'GET', path: '/api/posts/{id}', handler: includeRoute('posts/detail.js') });
server.route({ method: 'PUT', path: '/api/posts/{id}', handler: includeRoute('posts/update.js') });
server.route({ method: 'DELETE', path: '/api/posts/{id}', handler: includeRoute('posts/delete.js') });
