
exports.up = function(knex, Promise) {
	return knex.schema.createTable('wine_notes', (wine_notes) => {
		wine_notes.increments();
		wine_notes.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
		wine_notes.text('note_text').notNullable();
		wine_notes.integer('rating').notNullable();
	})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('wine_notes');
};

