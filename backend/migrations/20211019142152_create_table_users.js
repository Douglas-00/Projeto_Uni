const Knex = require("../config/db");

exports.up = function(knex, Promise) {
   return Knex.schema.createTable('users',table =>{
       table.increments('id').primary()
       table.string('name').notNull()
       table.string('email').notNull().unique()
       table.string('cpf').notNull()
       table.string('password').notNull()
       table.boolean('admin').notNull().defaultTo(false)
   })
};

exports.down = function(knex, Promise) {
  return Knex.schema.dropTable('users')
};
