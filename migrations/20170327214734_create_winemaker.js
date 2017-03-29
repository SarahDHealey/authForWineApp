

exports.up = function(knex, Promise) {
  return knex.schema.createTable('winemaker', (winemaker) => {
		winemaker.increments();
		winemaker.string('winemaker_name').notNullable();
		winemaker.integer('winemaker_website').notNullable();
	})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('winemaker');
};

