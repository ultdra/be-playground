const express = require("express");
const router = express.Router();

// Defining the routes
router.get("/", (req, res) => {
  res.send("this is the auth route");
});

router.get("/test", (req, res) => {
  res.send("this is the auth test route");
});

module.exports = router;
