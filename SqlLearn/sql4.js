/*

SQL COMMANDS PART 5

SELECT COUNT(*) AS total FROM videogames;
--
SELECT COUNT(*) AS total_filas, COUNT(developer) AS con_developer
FROM videogames;
--
SELECT
  COUNT(*) AS total,
  MIN(year) AS primer_anio,
  MAX(year) AS ultimo_anio
FROM videogames;
--
SELECT AVG(playtime_hours) AS avg_hours
FROM videogames
WHERE year > 2010;
--
SELECT developer, GROUP_CONCAT(title) AS juegos
FROM videogames
GROUP BY developer;
---
SELECT developer, COUNT(*) AS total
FROM videogames
GROUP BY developer;
--
SELECT developer, COUNT(*) AS total
FROM videogames
GROUP BY developer
HAVING COUNT(*) > 1;
--

SELECT developer, AVG(playtime_hours) AS promedio FROM videogames GROUP BY developer;
*/

/*
SQL COMMANDS PART 6

SELECT developer, COUNT(*) AS total
FROM videogames
WHERE year > 2000         -- Primero filtra filas
GROUP BY developer        -- Luego agrupa
HAVING COUNT(*) > 1;      -- Finalmente filtra grupos
---

SELECT developer, year, COUNT(*) AS total
FROM videogames
GROUP BY developer, year;

---

SELECT year, COUNT(*) AS total FROM videogames GROUP BY year HAVING COUNT(*) >= 2 ORDER BY year;

---

SELECT developer, COUNT(*) AS total FROM videogames GROUP BY developer HAVING COUNT(*) > 1 ORDER BY total DESC;
----

SELECT developer, AVG(playtime_hours) AS promedio FROM videogames WHERE year > 2000 GROUP BY developer HAVING AVG(playtime_hours) > 30;
----

SELECT year, COUNT(*) AS total FROM videogames WHERE year > 2000 GROUP BY year HAVING COUNT(*) >= 2 ORDER BY total DESC;
----

*/