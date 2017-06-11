
exports.up = function(knex, Promise) {
	return knex.schema.table('users', (user) => {
		user.string('name').nullable();
		user.string('username').nullable();
		user.boolean('admin').nullable();
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (user) => {
		wine.dropColumn('name');
		wine.dropColumn('username');
		wine.dropColumn('admin');
	});
};
