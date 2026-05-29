/*

SQL COMMANDS PART 2

SELECT title, playtime_hours FROM videogames
ORDER BY playtime_hours DESC
LIMIT 3;
____

SELECT title, year, playtime_hours FROM videogames
ORDER BY year DESC, playtime_hours ASC;
-----

SELECT title, year FROM videogames
ORDER BY year ASC;

-----

SELECT DISTINCT developer FROM videogames;
----
SELECT title, playtime_hours FROM videogames ORDER BY playtime_hours DESC;
--
SELECT DISTINCT year FROM videogames ORDER BY year ASC;
----

SELECT columnas
FROM tabla1
INNER JOIN tabla2 ON tabla1.columna = tabla2.columna;
-----

SELECT videogames.title, developers.name
FROM videogames
INNER JOIN developers ON videogames.developer_id = developers.id;
----

SELECT v.title, d.name
FROM videogames v
INNER JOIN developers d ON v.developer_id = d.id;

------- self join

SELECT v1.title AS juego_1, v2.title AS juego_2, v1.developer_id
FROM videogames v1
INNER JOIN videogames v2
  ON v1.developer_id = v2.developer_id
  AND v1.id < v2.id;
------- cross join

SELECT v.title, d.name
FROM videogames v
CROSS JOIN developers d;
*/