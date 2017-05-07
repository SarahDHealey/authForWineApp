
exports.seed = function(knex, Promise) {
	return Promise.join(
		// Deletes ALL existing entries
		knex('winemaker').del(),

		knex('winemaker').insert({
			id: 1, 
			winemaker_name: "Lenne Estate",
			winemaker_website: "www.lenneestate.com"
		}), 
		knex('winemaker').insert({
			id: 2, 
			winemaker_name: "Owen Roe",
			winemaker_website: "www.owenroe.com"
		}),
		knex('winemaker').insert({
			id: 3, 
			winemaker_name: "Alfred Maestro",
			winemaker_website: "www.alfredomaestro.com"
		}),
		knex('winemaker').insert({
			id: 4, 
			winemaker_name: "Puzelat",
			winemaker_website: "www.puzelat.com"
		}),
		knex('winemaker').insert({
			id: 5, 
			winemaker_name: "Barco Del Corneta",
			winemaker_website: "www.barcodelcorneta.com"
		}),
		knex('winemaker').insert({
			id: 6, 
			winemaker_name: "De Bortoli",
			winemaker_website: "www.debortoli.com.au"
		}),
		knex('winemaker').insert({
			id: 7, 
			winemaker_name: "Bow and Arrow",
			winemaker_website: "www.bowandarrowwines.com"
		}),
		knex('winemaker').insert({
			id: 8, 
			winemaker_name: "Pegasus Bay",
			winemaker_website: "www.pegasusbay.com"
		}),
		knex('winemaker').insert({
			id: 9, 
			winemaker_name: "Charles Smith",
			winemaker_website: "www.charlessmithwines.com"
		})
	)
};
