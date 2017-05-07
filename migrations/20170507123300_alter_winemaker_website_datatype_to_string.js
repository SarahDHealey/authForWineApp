
exports.up = function(knex, Promise) {
	return knex.schema 
	.raw('ALTER TABLE winemaker ALTER COLUMN winemaker_website SET DATA TYPE varchar(255)')
};

exports.down = function(knex, Promise) { 
	return knex.schema.raw('alter table winemaker modify column winemaker_website SET DATA TYPE integer')
};

