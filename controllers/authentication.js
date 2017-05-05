const dbConnection = require('../db/knex');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
  // looking at ways to pass the user id through to the signin fn
  // ************************************************
  // ************************************************
  // const tokenAndUserArray = [];
  // const timestamp = new Date().getTime();
  // const encodedToken = jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
  // const userId = user.id;
  // tokenAndUserArray.push(encodedToken);
  // tokenAndUserArray.push(userId);
  // console.log("tokandarr: ", tokenAndUserArray)
  // return tokenAndUserArray

  // these two lines in this fn work
  // ************************************************
  // ************************************************
  const timestamp = new Date().getTime();
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
        res.json({ 
          userId: user.id,
          token: tokenForUser(user)
        });
      })
      .catch((err) => {
      next(err);
      });
    }
  })
}

exports.signin = function(req, res, next) {
  console.log("what does req.user look like in auth signin fn", req.user)
  res.send({token: tokenForUser(req.user), userId: req.user.id})
}