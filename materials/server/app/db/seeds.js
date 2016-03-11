var knex = require('./db.js');

/**
 * Tables
 */
var posts = function(table) {
  table.increments();
  table.timestamps();
  table.string('name');
};

/**
 * Tables seeds
 */
var dropPromise = knex.schema.dropTable('posts');
var createPromise = knex.schema.createTable('posts', posts);
var recordsPromise = knex('posts').insert([
  { name: 'Roderick Wade', created_at: new Date(), updated_at: new Date() },
  { name: 'Joshua Alvarez', created_at: new Date(), updated_at: new Date() },
  { name: 'Ignacio  Patton', created_at: new Date(), updated_at: new Date() },
  { name: 'Delores  Wheler', created_at: new Date(), updated_at: new Date() },
  { name: 'Felicia  Simpson', created_at: new Date(), updated_at: new Date() }
]);

dropPromise.then(function() { console.log('Execute: drop table posts'); } );
createPromise.then(function() { console.log('Execute: create table posts'); } );
recordsPromise.then(function() { console.log('Execute: insert data to posts'); } );
