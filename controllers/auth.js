const bcrypt = require("bcrypt");
const passport = require("passport");
const { UserSchema } = require("../models/user.model");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  "local-signup",
  new LocalStrategy(
    { username: "email", password: "password", passReqToCallback: true },
    (req, email, password, done) => {
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

const RegisterUser = async (req, res) => {
  const { username, password } = req.body;
  let newUser = {};
  newUser.username = username;
  newUser.salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(password, newUser.salt);
  console.log(newUser);
  res.redirect("/auth/RegisterSuccess");
};

module.exports = { RegisterUser };
