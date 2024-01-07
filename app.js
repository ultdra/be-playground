const express = require("express");
const app = express();
const dotenv = require("dotenv");

// These are the routes that will be used
const router = require("./routes");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");

dotenv.config();

app.use(
  session({
    secret: "sampletestkey",
    cookie: {},
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Root Page");
});

// Used routes
app.use("/", router);

const port = process.env.LOCALPORT || 3000;

app.listen(port, () => {
  console.log(
    `Node.js HTTP server is running on http://${process.env.LOCALHOST}:${process.env.LOCALPORT}`
  );
});
