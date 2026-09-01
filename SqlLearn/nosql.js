//No relacional databases
// npm install mongodb

import { MongoClient } from "mongodb"

const client = new MongoClient("mongodb://localhost:27017")
await client.connect()

const db = client.db("tienda")
const products = db.collection("products")

// Insertar un documento (no hace falta definir columnas antes)
await products.insertOne({
  name: "Teclado mecánico",
  price: 79.99,
  tags: ["periféricos", "gaming"], // ¡un array dentro del documento!
})

// Consultar: "productos con precio menor que 100"
const baratos = await products
  .find({ price: { $lt: 100 } })
  .toArray()

console.log(baratos)

await client.close()

//--------------------------------
//-- En SQL (relacional)
// SELECT * FROM products WHERE price < 100;

// En MongoDB (documento)
products.find({ price: { $lt: 100 } })

//-------------------------------------
import { createClient } from "redis"

const redis = createClient()
await redis.connect()

// Guardar un valor bajo una clave, que caduca en 60 segundos
await redis.set("user:1:name", "Ana", { EX: 60 })

// Recuperarlo al instante
const name = await redis.get("user:1:name") // "Ana"

//para la mayoría de proyectos, empezar con una base relacional (como PostgreSQL) es la opción más segura y versátil.
// Añade NoSQL cuando tengas un problema concreto que resuelva mejor, no por moda.

//Hay cuatro familias principales: documento (MongoDB), clave-valor (Redis), columnar (Cassandra) y grafo (Neo4j).