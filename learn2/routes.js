// Express Routes
// GET method route
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
//

app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})
//
app.get('/about', (req, res) => {
  res.send('about')
})
//

app.get(/a/, (req, res) => {
  res.send('/a/')
})
//
app.get(/.*fly$/, (req, res) => {
  res.send('/.*fly$/')
})
//Route path: /users/:userId/books/:bookId
//Request URL: http://localhost:3000/users/34/books/8989
//req.params: { "userId": "34", "bookId": "8989" }
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})
//Route path: /flights/:from-:to
//Request URL: http://localhost:3000/flights/LAX-SFO
//req.params: { "from": "LAX", "to": "SFO" }

//Route path: /user/:userId(\d+)
//Request URL: http://localhost:3000/user/42
//req.params: {"userId": "42"}
app.get('/user/:id', (req, res, next) => {
  if (req.params.id === '0') {
    return next('route')
  }
  res.send(`User ${req.params.id}`)
})

app.get('/user/:id', (req, res) => {
  res.send('Special handler for user ID 0')
})
//
app.get('/example/a', (req, res) => {
  res.send('Hello from A!')
})
//
app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})
//

const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

app.get('/example/d', [cb0, cb1], (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from D!')
})
//

app.route('/book')
  .get((req, res) => {
    res.status(200).send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })
//

const router = express.Router({ mergeParams: true })
//npm init
//npm install express
//npm install express --no-save
