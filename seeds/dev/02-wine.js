
exports.seed = function(knex, Promise) {
	return Promise.join(
		// Deletes ALL existing entries
		knex('wine').del(),

		knex('wine').insert({
			id: 1, 
			color: "red",
			wine_name: "Lenné",
			wine_type: "Pinot Noir",
			wine_url: "http://www.lenneestate.com/pinot-noir",
			wine_description: "Lenné Estate is our signature wine and is a selection of the best barrels from the vineyard. The 2013 Lenné Pinot Noir has black cherry, forrest floor and mocha aromas. On the palate the wine has a mouthwatering acidity and fine grained tannins contributing to a long finish. The 2013's wines are changing quickly and by late fall of 2013 should be delicious wines.",
			wine_label_picture: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/labels/lenneLabel.png",
			bottle_price: 30,
			winemaker_id: 1,
			wine_bottle_img: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/lenneBottleRedWine2013Med.png"
		}), 
		knex('wine').insert({
			id: 2, 
			color: "red",
			wine_name: "Sharecropper's",
			wine_type: "Pinot Noir",
			wine_url: "http://www.owenroe.com/product/2015-Pinot-Noir1?pageID=E8F95CB3-E828-FEFB-E4C0-7BF2DA9B34FF&sortBy=DisplayOrder&maxRows=10&",
			wine_description: "A bright aroma of sweet strawberries, cranberry and cherry pie filling, this warm vintage Pinot Noir is luscious with flavors of dried herbs, cocoa, vanilla and cola. Black plum and dark fruit notes dance across the palate. The mouthwatering berry notes are well-balanced and enhanced with subtle tannins.  Enjoy this pretty Pinot Noir sourced from some of our favorite Oregon vineyards now and for the next 4-6 years.",
			wine_label_picture: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/labels/sharecroppersLabel.png",
			bottle_price: 16,
			winemaker_id: 2,      
			wine_bottle_img: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/sharecropperBottlePinotNoir2012Med.png"
		}), 
		knex('wine').insert({
			id: 3, 
			color: "red",
			wine_name: "El Marciano",
			wine_type: "Grenache",
			wine_url: "http://www.alfredomaestro.com/index.php/en/wines",
			wine_description: "El Marciano is a natural red wine from Castilla-León made by Bodegas Alfredo Maestro. This wine is a varietal Grenache. The grapes come from old vines of 70 years located in the Sierra de Gredos in Avila, at an altitude of 1,150 metres. The plot is oriented towards the South and the soil is composed of granite bedrock and sand on the surface. Alfredo Maestro upholds a natural agriculture which does not use any herbicides or chemical fertilizers. There is little intervention. The harvest is done manually, 80% of the grapes are destemmed, and the rest are squeezed. The process of fermentation takes place in stainless steel tanks of 1,500 litres and pumping is performed daily. Maceration lasts about 40 days. Subsequently, a racking is carried out before malolactic fermentation. The wine is clarified naturally, taking advantage of low winter temperatures in the area. El Marciano is finally racked in order to settle any residual impurities and decantation. In the final product, some precipitates may appear as a natural process that has been followed throughout the winemaking.",
			wine_label_picture: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/labels/elMarcianoLabel.png",
			bottle_price: 25,
			winemaker_id: 3, 
			wine_bottle_img: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/elMarcianoRed2013.png"
		}),
		knex('wine').insert({
			id: 4, 
			color: "red",
			wine_name: "Le Telquel",
			wine_type: "Gamay",
			wine_url: "http://www.puzelat.com/home-page/",
			wine_description: "Mostly Gamay, with a bit of Côt and Pinot Noir, and dog on the label - what more can you ask for?! With notes of red fruit and black cherry, the 2014 Telquel is generous and satisfying, and at only 11%, the freshness and acidity make the second sip extremely easy. After some time open, the wine shows structure and some earth, as a reminder that it is a serious wine - even with the cute label.",
			wine_label_picture: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/labels/leTelquelLabel.png",
			bottle_price: 14.99,
			winemaker_id: 4,
			wine_bottle_img: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/leTelquelRed2013.png"
		}),
		knex('wine').insert({
			id: 5, 
			color: "white",
			wine_name: "Cucú",
			wine_type: "Verdejo",
			wine_url: "https://www.barcodelcorneta.com/?lang=en",
			wine_description: "With a particular interest in the Verdejo grape (which strikes me as being rather like Sauvignon Blanc on steroids), young winemaker Beatriz Herranz launched her own estate, El Barco del Corneto, as recently as 2008. Working organically and treating a proportion of the grapes to fermentation in French oak, she demonstrates in Cucú just how impressive Verdejo can be while still remaining versatile enough to enjoy as an aperitif or with light summery food. With overtones of grapefruit, pineapple, lime and fresh herbs, it suits zesty salads and vegetable dishes of many kinds as well as seafood.",
			wine_label_picture: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/labels/CuCuLabel.png",
			bottle_price: 10.00,
			winemaker_id: 5, 
			wine_bottle_img: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/CuCuVerdejo2016Med.png"
		}),
		knex('wine').insert({
			id: 6, 
			color: "white",
			wine_name: "The Accomplice",
			wine_type: "Semillon Sauvignon Blanc",
			wine_url: "http://www.debortoli.com.au/we-love-wine/discover-our-wines/the-accomplice/",
			wine_description: "2016 De Bortoli The Accomplice Semillon Sauvignon Blanc – Another new label from the guys over at De Bortoli. The fruit from this wine is sourced from the Riverina. It exhibits a Pale straw colour with fresh green hues. The bouquet is of lemon and tropical fruits. The palate continues with lively citrus notes and fresh tropical fruits with a crisp, dry finish. Fresh and round, finishing with a soft acidity. A perfect accompaniment to fresh seafood, salads, light pasta dishes or Asian food. A great little quaffer!",
			wine_label_picture: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/labels/theAccompliceLabel.jpg",
			bottle_price: 9.00,
			winemaker_id: 6, 
			wine_bottle_img: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/theAccompliceWhite2016.png"
		}),
		knex('wine').insert({
			id: 7, 
			color: "white",
			wine_name: "Bow and Arrow",
			wine_type: "Sauvignon Blanc",
			wine_url: "http://www.bowandarrowwines.com/",
			wine_description: "This wine is the best kind of accident. Scott Frank's Bow & Arrow chose an atypical path for an Oregon winery, opting for a focus on Loire instead of Burgundy grape varietals. That aside, the last varietal Scott wanted to make was Sauvignon blanc. In 2014, he bought enough Sauv blanc from a trusted grower, thinking he'd experiment with it and ultimately blend it with Chardonnay. But the grapes were to ripe, and too good to blend. Instead of pressing the grapes right away and transferring to a steel tank, he fermented them on the skins for several hours and let the wine age in neutral oak barrels. The resulting wine, a mere 69 cases, was a smash hit -- so much so that Scott more than tripled the production in 2015 and is now completely sold on Sauvignon blanc as a winery staple.",
			wine_label_picture: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/labels/bowAndArrowLabel.png",
			bottle_price: 24.95,
			winemaker_id: 7, 
			wine_bottle_img: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/bowAndArrowSauvignonBlancMed.png"
		}),
		knex('wine').insert({
			id: 8, 
			color: "white",
			wine_name: "Pegasus Bay",
			wine_type: "Sauvignon Blanc",
			wine_url: "https://www.pegasusbay.com/",
			wine_description: "The Waipara Valley is in the South Island of New Zealand, 30 minutes drive north of Christchurch. To the east Waipara Valley is separated from the ocean (Pegasus Bay) by a range of hills which protect it from the cooling winds of the Pacific. To the west lie the Southern Alps (Main Divide), from whence the region’s hot nor’west winds derive. Its sheltered position, but proximity to the sea, give it warm days, cool nights and a dry autumn, resulting in a very prolonged ripening period. This promotes intense flavor development and optimal ripeness, while retaining good natural acidity.",
			wine_label_picture: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/labels/pegasusBayLabel.png",
			bottle_price: 16.11,
			winemaker_id: 8, 
			wine_bottle_img: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/pegasusBayBottleMed.png"
		}),
		knex('wine').insert({
			id: 9, 
			color: "white",
			wine_name: "Kung Fu Girl",
			wine_type: "Reisling",
			wine_url: "http://www.charlessmithwines.com/",
			wine_description: "Charles Smith Kung-Fu Girl Riesling is a off-dry Riesling (think dryer side of Kabinett) coming from Evergreen Vineyard in Columbia Valley. Charles Smith Kung-Fu Girl Riesling offers up a gorgeously pure, fresh bouquet of lychee nut, mint, citrus and clean minerality, this beautifully focused Riesling flows onto the palate with a balanced, full mid-palate, only a touch of sweetness and integrated, yet lip smacking acidity that shines on the finish.",
			wine_label_picture: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/labels/kungFuGirlLabel.png",
			bottle_price: 13.99,
			winemaker_id: 9, 
			wine_bottle_img: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/kungFuGirlBottleMed.png"
		}),
		knex('wine').insert({
			id: 10, 
			color: "red",
			wine_name: "Main Divide",
			wine_type: "Pinot Noir",
			wine_url: "https://www.pegasusbay.com/",
			wine_description: "The Donaldson family, founders and owners of Pegasus Bay and Main Divide, are an interesting bunch. Ivan Donaldson was a neurologist at the hospital in Christchurch and he made hobby wines. He planted a vineyard with his friends, many of whom were fellow medics: just an acre of vines on the outskirts of Christchurch, with a range of varieties. In 1985 they bought a larger property in Waipara Valley. A little bit of wine was made in 1990, but the first Pegasus Bay release was the 1991, made in their Christchurch garage. Matt, one of Donaldson’s sons processed 18 tons at the winery in 1992 after he returned from wine school. Main Divide was initially created so that the quality of Pegasus Bay could be improved. ‘It started off as a bit of a dumping ground,’ says Matt, ‘but 12 or 13 years ago we realised that if we bought some fruit we could make it better and make a good wine. It has become a bigger volume than Pegasus Bay now and it allows us to afford to do what we want with Pegasus Bay.",
			wine_label_picture: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/labels/mainDividePinotNoirLabel.png",
			bottle_price: 16.11,
			winemaker_id: 8, 
			wine_bottle_img: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/mainDividePinotNoirBottleMed.png"
		}),
		knex('wine').insert({
			id: 11, 
			color: "white",
			wine_name: "Lovamor",
			wine_type: "Albillo",
			wine_url: "http://www.alfredomaestro.com/index.php/en/wines",
			wine_description: "The 2013 Lovamor is a white produced with Albillo Real grapes sourced from different plots around Penafiel. The destemmed grapes were macerated in contact with the skins for one week before fermenting in 1,000-liter stainless steel tanks. The wine has a cloudy, golden color with some orange tints and a nose of baked apples, green apples, honey and chamomile. The palate is medium-bodied, with marked acidity (no malo) with a chalky, austere texture, quite sharp, unlike the nose. This is a white of strong personality that will not please everyone. It was bottled unoaked in 4,000 bottles.",
			wine_label_picture: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/labels/lovamorLabel.jpg",
			bottle_price: 16.11,
			winemaker_id: 3, 
			wine_bottle_img: "https://s3-us-west-1.amazonaws.com/wineapplost/wineappimages/lovamorWhite2013.png"
		})
	)
};
