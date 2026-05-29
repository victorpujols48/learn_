/*
SQL COMMANDS Part 1

SELECT * FROM videogames;
SELECT title, year FROM videogames;
SELECT title FROM videogames LIMIT 3;

-- Esto es un comentario
SELECT * FROM videogames; -- Esto también

 Esta consulta obtiene
   todos los videojuegos
SELECT * FROM videogames;
-------------------------------- WHERE

SELECT * FROM videogames WHERE year = 2018;
SELECT * FROM videogames WHERE developer = 'Nintendo';

------------------------------------

SELECT * FROM videogames
WHERE year >= 2010 AND playtime_hours > 50;
---
SELECT * FROM videogames
WHERE developer = 'Nintendo' OR developer = 'Valve';
---
SELECT * FROM videogames
WHERE NOT developer = 'Nintendo';
----------------------------------

SELECT * FROM videogames
WHERE (developer = 'Nintendo' OR developer = 'Valve')
AND year > 2000;
---
SELECT title FROM videogames WHERE year < 2000 ;
-----------------------------------------

SELECT * FROM videogames
WHERE year BETWEEN 2010 AND 2015;
----
SELECT * FROM videogames
WHERE developer IN ('Nintendo', 'Valve', 'Bungie');
----
SELECT * FROM videogames
WHERE title LIKE 'The%'; --
----

SELECT * FROM videogames
WHERE year NOT BETWEEN 2010 AND 2015;
----

SELECT * FROM videogames
WHERE developer NOT IN ('Nintendo', 'Valve');
---
SELECT * FROM videogames
WHERE title NOT LIKE 'The%';
---
SELECT title, playtime_hours FROM videogames WHERE title LIKE '%of%'

*/