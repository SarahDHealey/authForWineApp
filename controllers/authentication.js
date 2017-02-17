const dbConnection = require('../db/knex');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

exports.signup = function(req, res, next) {

  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password '});
  }

  //See if a user with the given email exists
  return dbConnection('users')
    .first()
    .where("email", email)
    .then((existingUser) => {
    //If a user with email does exist, return an error
      if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
      }
    //If a user with email does NOT exist, create and save user record
      else {
      function User(email, password) {
        this.email = email;
        this.password = password;
      }
      var user = new User(email, password)
    //hash the password
      bcrypt.hash(password, 12)
      .then((hashed_password) => {
        user.password = hashed_password;
        return dbConnection('users')
        .insert({
          email: user.email,
          hashed_password: user.password
        }, '*');
      })
      .then((users) => {
        const user = users[0];
        delete user.password;
        //respond to the request indicating that the user was created
        res.json({ token: tokenForUser(user) });
      })
      .catch((err) => {
      next(err);
      });
    }
  })
}

exports.signin = function(req, res, next) {

  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password '});
  }
//Compare passwords - is password equal to user.password?
  return dbConnection('users')
  .first()
  .where('email', email)
  .then((user) => {
    if(!user) {
      res.status(422).send({ error: 'invalid email/password combination' });
    }
    else {
      if (user.hashed_password !== null) {
        bcrypt.compare(password, user.hashed_password)
        .then((success)=> {
          console.log('happy path')
        })
        .catch(bcrypt.MISMATCH_ERROR, (error)=> {
          console.log('passwords do not match, sad path')
        })
        .catch((error) => {
          console.log('whoa, there errrrorr')
        });
      }
    }
  })

}