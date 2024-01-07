const express = require("express");
const { RegisterUser } = require("../controllers/auth");
const passport = require("passport");
const router = express.Router();

// Defining the routes
router.get("/", (req, res) => {
  res.send("this is the auth route");
});

router.post(
  "/Register",
  passport.authenticate("local-signup", {
    successRedirect: "/auth/RegisterSuccess",
    failureRedirect: "/auth/RegisterFailed",
  })
);

router.get("/test", (req, res) => {
  res.send("this is the auth test route");
});

router.get("/RegisterSuccess", (req, res) => {
  res.send("Register Successful!");
});

router.get("/RegisterFailed", (req, res) => {
  res.send("Register failed!");
});

module.exports = router;
