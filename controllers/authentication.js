const dbConnection = require('../db/knex');
const bcrypt = require('bcrypt-as-promised');

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
      //hash the password
      bcrypt.hash(password, 12)
      .then((hashed_password) => {
        return dbConnection('users')
          .insert({
            email: email, 
            hashed_password: hashed_password
          }, '*');
      })
      .then((users) => {
      const user = users[0];
      delete user.hashed_password; 
      //respond to the request indicating that the user was created
      res.json({success: true});
      })
      .catch((err) => {
        next(err);
      });
    }
  })
}