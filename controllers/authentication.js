const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

//json webtokens have a property called sub for subject
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  User.find(function(err, users) {
    if(err) return console.log(err);
    console.log(users);
  });
  //user has already had email and pw authed
  //they just need token
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password) {
    return res.status(422).send({ error: 'You must provide both email and password'})
  }

  //See if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    //If a user with email does exist, return an error
    if(existingUser) {
      return res.status(422).send({ error: 'Email is in use'})
    }
    //If a user with email does NOT exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if(err) { return next(err); }
      //Respond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
}
