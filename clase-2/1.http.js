const http = require("node:http"); // protocolo HTTP
const { url } = require("node:inspector");
const fs = require("node:fs");

const hostname = "127.0.0.1";
const port = 3000;

const processApp = (request, response) => {
  request.on("error", (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on("error", (err) => {
    console.error(err);
  });

  response.setHeader("Content-Type", "text/html; charset=utf-8");

  if (request.url === "/") {
    response.statusCode = 200;
    response.end("<h1>Mi página</h1>");
  } else if (request.url === "/Contact") {
    response.statusCode = 200;
    response.end("<h1>Contact Page</h1>");
  } else if (request.url === "/Login") {
    response.statusCode = 200;
    response.end("<h1>Login Form</h1>");
  } else if (request.url === "/image.jpg") {
    fs.readFile("./image.jpg", (err, data) => {
      if (err) {
        response.statusCode = 500;
        response.end("<h1>Internal Error</h1>");
      } else {
        response.setHeader("Content-Type", "image/jpg");
        response.end(data);
      }
    });
  } else {
    response.statusCode = 404;
    response.end("<h1>404 Page Not Found</h1>");
  }
};

const server = http.createServer(processApp);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
