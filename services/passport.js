const passport = require('passport');
const dbConnection = require('../db/knex');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//create local Strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  //verify this email and password, call done with the user
  //if it is the correc email and password
  //otherwise call done with false
  dbConnection('users')
  .where('email', email)
  .then((user) => {
    if (user) {
    //compare passwords - is 'password' equal to user.password?
    //but we need to decode  the stored password and compare it to the norm 
    //pw
    }
    else {
      done(null, false);
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


