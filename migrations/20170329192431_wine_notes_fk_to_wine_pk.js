
exports.up = function(knex, Promise) {
  return knex.schema.table('wine_notes', (wine_notes) => {
	wine_notes.integer('wine_id').references('wine.id').notNullable().onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('wine_notes', (wine_notes) => {
    wine_notes.dropColumn('wine_id');
  });
};
