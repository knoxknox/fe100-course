module.exports = require('knex')({
  client: 'sqlite3',
  connection: { filename: './data/db.sqlite3' }
});
