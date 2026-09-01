// Part 2

// ❌ No puedes parametrizar un nombre de columna con ?
db.prepare("SELECT * FROM books ORDER BY ? ").all(columna)

// ✅ Solo permitimos ordenar por columnas conocidas
const columnasValidas = ["title", "author", "year"]
const columna = columnasValidas.includes(entrada) ? entrada : "title"

db.prepare(`SELECT * FROM books ORDER BY ${columna}`).all()

//`

// Marcar un libro como leído
const marcarLeido = db.prepare("UPDATE books SET read = 1 WHERE id = ?")
marcarLeido.run(2)

// Borrar los libros no leídos anteriores a 1950
const limpiar = db.prepare("DELETE FROM books WHERE read = 0 AND year < ?")
const { changes } = limpiar.run(1950)
console.log(`${changes} libros eliminados`)
//

db.exec("BEGIN")
try {
  insert.run("Dune", "Herbert", 1965)
  insert.run("Neuromante", "Gibson", 1984)
  db.exec("COMMIT") // confirmamos ambas
} catch (error) {
  db.exec("ROLLBACK") // si algo falla, deshacemos las dos
  throw error
}
//
//--- Nodejs app
import { DatabaseSync } from "node:sqlite"

/*
interface Bookk {
  id: number
  title: string
  author: string
  year: number
  read: number
}

// 💾 En disco: los datos persisten entre ejecuciones.
// Cambia "biblioteca.db" por ":memory:" para una base efímera.
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

const insert = db.prepare(
  "INSERT INTO books (title, author, year) VALUES (?, ?, ?)"
)
insert.run("SQL para humanos", "midudev", 2025)
insert.run("1984", "Orwell", 1949)

//const books = db.prepare("SELECT * FROM books ORDER BY year").all() as Bookk[]

for (const book of books) {
  console.log(`📚 ${book.title} — ${book.author} (${book.year})`)
}

// Siempre cerramos la conexión al terminar
db.close()
*/

//npm install better-sqlite3 - command para instalar sqlite en tu projecto nodejs 22.1 posterior
import Database from "better-sqlite3"

const db = new Database("biblioteca.db") // o new Database(":memory:")
db.prepare("SELECT * FROM books").all()

