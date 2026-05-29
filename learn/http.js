// https on nodejs

const http = require('node:http');

const server = http.createServer((request, response) => {
  // magic happens here!
});
//
const serverr = http.createServer();
server.on('request', (request, response) => {
  // the same kind of magic happens here!
});
//

const { method, url } = request;
const { headers } = request;
const userAgent = headers['user-agent'];

//
let body = [];
request
  .on('data', chunk => {
    body.push(chunk);
  })
  .on('end', () => {
    body = Buffer.concat(body).toString();
    // at this point, `body` has the entire request body stored in it as a string
  });
//

request.on('error', err => {
  // This prints the error message and stack trace to `stderr`.
  console.error(err.stack);
});
//

const http = require('node:http');

http
  .createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request
      .on('error', err => {
        console.error(err);
      })
      .on('data', chunk => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString();
        // At this point, we have the headers, method, url and body, and can now
        // do whatever we need to in order to respond to this request.
      });
  })
  .listen(8080); // Activates this server, listening on port 8080.
  //
response.statusCode = 404

//
response.setHeader('Content-Type', 'application/json');
response.setHeader('X-Powered-By', 'bacon');
//

response.writeHead(200, {
  'Content-Type': 'application/json',
  'X-Powered-By': 'bacon',
});
//
response.write('<html>');
response.write('<body>');
response.write('<h1>Hello, World!</h1>');
response.write('</body>');
response.write('</html>');
response.end();
//

const http = require('node:http');

http
  .createServer((request, response) => {
    if (request.method === 'POST' && request.url === '/echo') {
      let body = [];
      request
        .on('data', chunk => {
          body.push(chunk);
        })
        .on('end', () => {
          body = Buffer.concat(body).toString();
          response.end(body);
        });
    } else {
      response.statusCode = 404;
      response.end();
    }
  })
  .listen(8080);

  //
  const http = require('node:http');

http
  .createServer((request, response) => {
    request.on('error', err => {
      console.error(err);
      response.statusCode = 400;
      response.end();
    });
    response.on('error', err => {
      console.error(err);
    });
    if (request.method === 'POST' && request.url === '/echo') {
      request.pipe(response);
    } else {
      response.statusCode = 404;
      response.end();
    }
  })
  .listen(8080);