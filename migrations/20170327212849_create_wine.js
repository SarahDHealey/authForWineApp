
exports.up = function(knex, Promise) {
  return knex.schema.createTable('wine', (wine) => {
		wine.increments();
		wine.string('color').notNullable();
		wine.text('wine_name').notNullable();
		wine.text('wine_type').notNullable();
		wine.text('wine_url').notNullable();
		wine.text('wine_description').notNullable();
		wine.text('wine_label_picture').notNullable();
		wine.float('bottle_price').notNullable();
	})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('wine');
};




