
exports.seed = function(knex, Promise) {
	return Promise.join(
		// Deletes ALL existing entries
		knex('wine_notes').del(),

		knex('wine_notes').insert({
      id: 1, 
      rating: 5,
      users_id: 1,
      wine_id: 1,
      note_text: 'I love this wine. Perfect for curling up with a book or complimenting dinner. Just be warned - it\'s not exactly a summer sipping wine. It has a strong personality and a good balance of acidity and tannin and smooth fruit. This is by far one of my top 5 favorite wines.'
    }), 
		knex('wine_notes').insert({
      id: 2, 
      rating: 5,
      users_id: 1,
      wine_id: 2,
      note_text: 'Really nice bold wine. Not sweet, great balance. I was first introduced to this wine by my dad. We\'ve had a lot of good Healey dinners with this wine.'
    }), 
		knex('wine_notes').insert({
      id: 3, 
      rating: 4,
      users_id: 1,
      wine_id: 3,
      note_text: 'well-balanced, somewhat more fruit-forward than I generally go for. But overall a fun wine.'
    }),
		knex('wine_notes').insert({
      id: 4, 
      rating: 3,
      users_id: 1,
      wine_id: 4,
      note_text: 'Very fresh wine, not very sweet or very strong or bold.  It has a a taste of cherry, but a slight mineral edge.'
    }),
    knex('wine_notes').insert({
      id: 5, 
      rating: 3,
      users_id: 1,
      wine_id: 5,
      note_text: 'This wine is really zesty. It tastes a bit like grapefruit. We had it with potato crusted halibut and it was the perfect pairing.'
    }),
    knex('wine_notes').insert({
      id: 6, 
      rating: 3,
      users_id: 1,
      wine_id: 6,
      note_text: 'Simple sauv, easy-to-drink. Nice for summer. Not sweet, but only slight taste of mineral/iron which makes for a nice finish.'
    }),
    knex('wine_notes').insert({
      id: 7, 
      rating: 2,
      users_id: 1,
      wine_id: 7,
      note_text: 'Creamy and buttery flavors. Wasn\'t what I was expecting - in a good way. Smells a bit like a candle.'
    }),
    knex('wine_notes').insert({
      id: 8, 
      rating: 1,
      users_id: 1,
      wine_id: 8,
      note_text: 'Way too sweet. Fun perhaps if it were to be served in a little tiny thimble but definitely not a full glass. Note to share it with Kasey since she really likes sweet wines.'
    }),
    knex('wine_notes').insert({
      id: 9, 
      rating: 1,
      users_id: 1,
      wine_id: 9,
      note_text: 'Bold leading fruit flavor with a well-rounded body, but still very complicated sweet and refreshing taste.'
    }),
    knex('wine_notes').insert({
      id: 10, 
      rating: 3,
      users_id: 1,
      wine_id: 10,
      note_text: 'Plummy and jammy initially, but then follows with more complex undertones that are surprisingly peppery.'
    }),
    knex('wine_notes').insert({
      id: 11, 
      rating: 3,
      users_id: 1,
      wine_id: 11,
      note_text: 'Plummy and jammy initially, but then follows with more complex undertones that are surprisingly peppery.'
    })     
  );
};
