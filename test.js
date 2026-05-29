const http = require("node:http");
//const fs = require("node:fs");
//const path = require("node:path");
//const fs = require("node:fs/promises");

// commonJS -> modulos clásicos de node

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/Home":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end("Home Page Test");

        case "/Blog":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end("This is a blog page");

        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404</h1>");
      }

    case "POST":
      switch (url) {
        case "/add": {
          let body = ""

          // escuchar el evento data
          req.on('data', chunk => {
            body += chunk.toString()

          })

          req.on('end', () => {
            const data = JSON.parse(body)
            // llamar a una base de datos para guardar la info
            res.writeHead(201, { 'Content-Type': '"text/plain; charset=utf-8' })

            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })

          break;
        }

        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          return res.end("404 Not Found");
      }
};

};

const server = http.createServer(processRequest);

server.listen(1234, () => {
  console.log("server listening on port http://localhost:1234");
});
