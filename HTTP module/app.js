const http = require("http");

//creating http server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Wellcome to Home Page");
  }
  if (req.url === "/about") {
    res.end("About page");
  }
});

server.listen(3000);
