const express = require("express");
const app = express();
const dotenv = require("dotenv");

// These are the routes that will be used
const authRoute = require("./routes/auth.route");

dotenv.config();

app.get("/", (req, res) => {
  res.send("Root Page");
});

// Used routes
app.use("/auth", authRoute);

const port = process.env.LOCALPORT || 3000;

app.listen(port, () => {
  console.log(
    `Node.js HTTP server is running on http://${process.env.LOCALHOST}:${process.env.LOCALPORT}`
  );
});
