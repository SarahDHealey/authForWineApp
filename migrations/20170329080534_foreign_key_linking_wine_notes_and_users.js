
exports.up = function(knex, Promise) {
  return knex.schema.table('wine_notes', (wine_notes) => {
	wine_notes.integer('users_id').references('users.id').notNullable().onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('wine_notes', function(wine_notes) {
	wine_notes.dropColumn('users_id');
  });
};






