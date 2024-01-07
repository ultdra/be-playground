const http = require("http");
const dotenv = require("dotenv");

dotenv.config();

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello, Node.js HTTP Server!</h1>");
  res.end();
});

const port = process.env.LOCALPORT || 3000;

server.listen(port, () => {
  console.log(
    `Node.js HTTP server is running on http://${process.env.LOCALHOST}:${process.env.LOCALPORT}`
  );
});
