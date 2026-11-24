const express = require('express')
const ditto = require('./clase-2/pokemon/ditto.json')
const path = require('path')
const fs = require("fs")
const dataTest = require('./data.json')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

app.use(express.json())
/*
app.post("/usuarios", (req, res) => {

    const { nombre, edad, email } = req.body;

    console.log(nombre);
    console.log(edad);
    console.log(email);

    res.status(201).json({
        mensaje: "Usuario registrado",
        nombre,
        edad,
        email
    });
});
*/
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
  res.json(dataTest.users)
})

app.get('/posts', (req, res) => {
  res.json(dataTest.posts)
})

app.get('/users/:id', (req, res) => {
  const user = dataTest.users.find(u => u.id == req.params.id)
  res.json(user)
})

app.get('/posts/:id', (req, res) => {
  const user = dataTest.posts.find(u => u.id == req.params.id)
  res.json(user)
})



//
app.post('/users/send', (req, res) => {

  const data = req.body

  data.timestamp = Date.now()
  // Leer data.json
  const file = fs.readFileSync('data.json', 'utf-8')
  // Convertir JSON a objeto
  const database = JSON.parse(file)
  // Agregar usuario
  database.users.push(data)
  // Guardar
  fs.writeFileSync('data.json', JSON.stringify(database, null, 2))
  // Responder
  res.status(201).json(data)
})


// la última a la que va a llegar
app.use((req, res) => {
  res.status(404).send('<h1>404 Unknown Page</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
