const express = require('express')
const ditto = require('./pokemon/ditto.json')
const path = require('path')
const data = require('./data.json')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

// app.use(express.json())

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   // solo llegan request que son POST y que tienen el header Content-Type: application/json
//   let body = ''

//   // escuchar el evento data
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutar la request y meter la información en el req.body
//     req.body = data
//     next()
//   })
// })

app.get('/users', (req, res) => {
  res.json(data.users)
})

app.get('/posts', (req, res) => {
  res.json(data.posts)
})

app.get('/users/:id', (req, res) => {
  const user = data.users.find(u => u.id == req.params.id)
  res.json(user)
})


app.post('/users/send', (req, res) => {
  // req.body deberíamos guardar en bbdd
  let body = ''

   // escuchar el evento data
   req.on('data', chunk => {
     body += chunk.toString()
   })

   req.on('end', () => {
     const data = JSON.parse(body)
     data.timestamp = Date.now()
     res.status(201).json(data)
     // mutar la request y meter la información en el req.body

     
   })
 })


// la última a la que va a llegar
app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
