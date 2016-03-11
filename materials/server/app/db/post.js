var knex = include('db/db.js');
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf.Model.extend({ tableName: 'posts' });
