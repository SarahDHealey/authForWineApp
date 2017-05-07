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
    knex('wine')
    .select()
    .then(wines => {
    res.send({wines: wines});
    })
  });

  app.post('/signin', requireSignin, Authentication.signin)
  app.post('/signup', Authentication.signup)
}