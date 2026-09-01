//NODE SQLITE

import { DatabaseSync } from "node:sqlite"

// 🧠 En memoria: vive en la RAM y desaparece al cerrar el programa
const memoria = new DatabaseSync(":memory:")

// 💾 En disco: se guarda en un archivo y persiste entre ejecuciones
const disco = new DatabaseSync("datos.db")

//db.exec

import { DatabaseSync } from "node:sqlite"

const db = new DatabaseSync("biblioteca.db")

db.exec(`
  CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    year INTEGER,
    read INTEGER NOT NULL DEFAULT 0
  )
`)
//
//

const insert = db.prepare(
  "INSERT INTO books (title, author, year) VALUES (?, ?, ?)"
)

// Cada ? se sustituye, en orden, por los argumentos de run()
const resultado = insert.run("SQL para humanos", "midudev", 2025)

console.log(resultado.lastInsertRowid) // 1  → el id generado
console.log(resultado.changes)         // 1  → filas afectadas
//

// Reutilizamos la misma sentencia para insertar varios libros
const libros = [
  ["El Quijote", "Cervantes", 1605],
  ["1984", "Orwell", 1949],
  ["Fahrenheit 451", "Bradbury", 1953],
]

for (const [title, author, year] of libros) {
  insert.run(title, author, year)
}
//

const query = db.prepare("SELECT * FROM books")

query.all()   // → array con TODAS las filas
query.get()   // → solo la PRIMERA fila (o undefined)
query.iterate() // → un iterador para recorrer fila a fila
//

const books = db.prepare("SELECT * FROM books").all()

for (const book of books) {
  console.log(`${book.title} (${book.year}) — ${book.author}`)
}
// El Quijote (1605) — Cervantes
// 1984 (1949) — Orwell
// ...
//--------------------------
const recientes = db
  .prepare("SELECT title, year FROM books WHERE year > ? ORDER BY year DESC")
  .all(1900)

console.log(recientes)
// [ { title: 'Fahrenheit 451', year: 1953 }, { title: '1984', year: 1949 } ]
//

const porAutor = db.prepare(
  "SELECT * FROM books WHERE author = :author"
)

porAutor.all({ author: "Orwell" })
//

// ❌ NUNCA hagas esto: construir SQL concatenando la entrada del usuario
const tittle = obtenerBusquedaDelUsuario() // p. ej. viene de un formulario

const sql = `SELECT * FROM books WHERE title = '${titulo}'`
db.prepare(sql).all()

// ✅ Seguro: el valor jamás se interpreta como SQL
const titulo = obtenerBusquedaDelUsuario()
db.prepare("SELECT * FROM books WHERE title = ?").all(titulo)
//