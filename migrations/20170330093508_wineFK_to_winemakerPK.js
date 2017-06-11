
exports.up = function(knex, Promise) {
  return knex.schema.table('wine', (wine) => {
    wine.integer('winemaker_id').references('winemaker.id').notNullable().onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('wine', (wine) => {
    wine.dropColumn('winemaker_id');
  });
};
