/*

SQL COMMANDS PART 3

SELECT columnas
FROM tabla_izquierda
LEFT JOIN tabla_derecha ON condición;
--

SELECT columnas
FROM tabla_izquierda
RIGHT JOIN tabla_derecha ON condición;
----

SELECT columnas
FROM tabla1
FULL OUTER JOIN tabla2 ON condición;

---

SELECT videogames.title, developers.name
FROM videogames
LEFT JOIN developers ON videogames.developer_id = developers.id;
-----

SELECT v.title
FROM videogames v
LEFT JOIN developers d ON v.developer_id = d.id
WHERE d.id IS NULL;
---

SELECT videogames.title, developers.name FROM videogames FULL OUTER JOIN developers ON videogames.developer_id = developers.id;

*/

/*
SQL COMMANDS PART 4
--

-- Filas donde developer NO tiene valor
SELECT * FROM videogames WHERE developer IS NULL;

-- Filas donde developer SÍ tiene valor
SELECT * FROM videogames WHERE developer IS NOT NULL;
---

SELECT title, COALESCE(developer, 'Desconocido') AS developer
FROM videogames;
----

SELECT title, playtime_hours / NULLIF(year - 2000, 0) AS ratio
FROM videogames;

--

SELECT title, COALESCE(playtime_hours, 0) AS playtime_hours FROM videogames;
--
SELECT title || ' (' || year || ')' AS info
FROM videogames;
-----

SELECT title,
  CASE
    WHEN year < 2000 THEN 'Clásico'
    WHEN year < 2015 THEN 'Moderno'
    ELSE 'Reciente'
  END AS categoria
FROM videogames;
------
SELECT UPPER(title) AS titulo_mayusculas FROM videogames;
---
SELECT title, 2025 - year AS antiguedad FROM videogames;
----
SELECT title, playtime_hours, CASE WHEN playtime_hours < 20 THEN 'Casual'
 WHEN playtime_hours <= 60 THEN 'Normal'
 ELSE 'Hardcore' END AS dedicacion FROM videogames;
----
SELECT MIN(year) AS mas_antiguo, MAX(year) AS mas_reciente FROM videogames;
*/