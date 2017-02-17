const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport.js');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false })

module.exports = function(app) {

  app.get('/', requireAuth, function(req, res) {
    res.send({hi: 'There!'});
  });

  app.post('/signup', Authentication.signup)
  app.post('/signin', Authentication.signin)

}