const fs = require('fs')
const path = require('path')

exports.up = function(knex) {
  const sql = fs.readFileSync(path.join(__dirname, 'sql/create_table_inspiration_up.sql'), 'utf8')
  return knex.raw(sql)
};

exports.down = function(knex) {
  const sql = fs.readFileSync(path.join(__dirname, 'sql/create_table_inspiration_down.sql'), 'utf8')
  return knex.raw(sql)
};
