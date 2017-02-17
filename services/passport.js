const passport = require('passport');
const dbconnection = require('../db/knex');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  dbconnection('users')
  .where('id', payload.sub)
  .then(function(user) {
    if (user) {
      done(null, user);
    }
    else {
      done(null, false);
    }
  })
});

passport.use(jwtLogin);


