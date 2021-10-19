const Knex = require("../config/db");

exports.up = function(knex, Promise) {
  return Knex.schema.createTable('categories',table =>{
      table.increments('id').primary()
      table.string('name').notNull()
      table.integer('parentId').references('id')
        .inTable('categories')
  })
};

exports.down = function(knex, Promise) {
  return Knex.schema.dropTable('categories')
};
