const bcrypt = require("bcrypt");
const passport = require("passport");
const { UserSchema } = require("../models/user.model");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  "local-signup",
  new LocalStrategy(
    { username: "email", password: "password", done: true },
    (email, password, done) => {
      console.log("etner here");
      let newUser = new UserSchema({
        username: email,
        password: bcrypt.hashSync(password, 10),
      });
      console.log(newUser);
      return done(null, newUser);
    }
  )
);

module.exports = {};
