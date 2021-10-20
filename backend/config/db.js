const config = require('../knexfile.js')
const Knex = require('Knex')(config)

Knex.migrate.latest([config])
module.exports = Knex