const environment = process.NODE_ENV || 'development';
const config = require('../knexfile')[environment]
module.exports = require('knex')(config);