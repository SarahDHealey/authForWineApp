const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport.js');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

const knex = require('./db/knex');

module.exports = function(app) {

  app.get('/', requireAuth, function(req, res) {
    res.send({hi: 'There!'});
  });

  app.get('/wine_profile/:id', requireAuth, function(req, res) {
    var wine_notes
    knex('wine_notes').select()
    .where('users_id', req.params.id)
    .then(ret => {
      wine_notes = ret
      return knex('wine').select()
    }).then(wines => {
      res.status(String(200)).send({wines:wines, wine_notes:wine_notes})
    })
  })

  app.post('/signin', requireSignin, Authentication.signin)
  app.post('/signup', Authentication.signup)
}