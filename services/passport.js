const passport = require('passport');
const dbConnection = require('../db/knex');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt-as-promised');

//create local Strategy
const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, function(email, password, done) {

  return dbConnection('users')
  .first()
  .where('email', email)
  .then((user) => {
    if (user) {
      bcrypt.compare(password, user.hashed_password)
      .then((success)=> {
        console.log('you have success', user);
        return done(null, user);
      })
      .catch(bcrypt.MISMATCH_ERROR, (error)=> {
        console.log('you have mismatch', error)
        return done(null, false)
      })
      .catch((error) => {
        return done(error)
      })
    }
    else {
      done(null, false)
    }
  })
})

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  dbConnection('users')
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
passport.use(localLogin);


