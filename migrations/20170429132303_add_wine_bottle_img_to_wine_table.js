
exports.up = function(knex, Promise) {
    return knex.schema.table('wine', (wine) => {
        wine.string('wine_bottle_img').notNullable();
    });
};

exports.down = function(knex, Promise) {
		return knex.schema.table('wine', (wine) => {
			wine.dropColumn('wine_bottle_img');
	});
};
