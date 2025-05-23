-- Nivel Básico: Consultas simples y selección de datos

-- 1. Selecciona todos los registros de una tabla:
-- Consulta todas los datos de la tabla film .
SELECT * FROM film;


-- 2. Filtrado de datos:
-- Encuentra todas las películas con una duración ( length ) mayor a 120 minutos.
select title, length
from film
where length > 120;

-- Busca clientes cuyo apellido sea "Smith" en la tabla customer .
select first_name, last_name 
from customer
where last_name = 'smith';

-- 3. Ordenar datos:
-- Ordena las películas de film alfabéticamente por el título.
select title
from film
order by title asc ;

-- Ordena las películas por duración de mayor a menor.
select title, length
from film
order by length desc ;

-- 4. Usar funciones agregadas:
-- Cuenta cuántos actores hay en la tabla actor .
select count(actor_id)
from actor;

-- Encuentra la duración promedio de las películas en la tabla film .
select sum(length) / count(length) as promedio
from film;


-- 5. Filtrar con operadores:
-- Encuentra todas las películas con una clasificación ( rating ) de 'PG' o 'R'.
select title, rating
from film
where rating like '%pg' or '%r';

-- Muestra los clientes con last_name que terminen en "FORD".
select last_name 
from customer
where last_name like '%ford';

-- Nivel Intermedio: Relaciones y consultas con JOIN

-- 6. JOIN simple:
-- Muestra el nombre completo de los actores y los títulos de las películas
select a.first_name, a.last_name, f.title
from actor a
inner join film f on actor_id = film_id;

-- en las que han actuado (usa las tablas actor , film_actor y film ).
select a.first_name, a.last_name, f.title, fa.last_update
from actor a
inner join film f on actor_id = film_id 
join film_actor fa on film_id = actor_id;

-- 7. Filtrar con JOIN:
-- Encuentra los títulos de películas alquiladas por el cliente con el nombre "MARY SMITH".
select f.title
from film f
inner join customer c on film_id = customer_id
where c.first_name = 'mary' and c.last_name = 'smith';

-- 8. Subconsultas:
-- Encuentra los clientes que hayan alquilado más de 20 películas.



-- 9. Agrupación y agregación:
-- Muestra la cantidad total de alquileres ( rental_id ) por cliente ( customer_id ).
-- Calcula el total de ingresos generados por cada película.


-- 10. Consultas con múltiples JOIN:
-- Muestra los nombres de las películas y las fechas de alquiler para un
-- cliente específico (combina film , rental y inventory ).

-- Nivel Avanzado: Consultas complejas

-- 11. Subconsultas correlacionadas:
-- Encuentra las películas que tienen más alquileres que la película promedio.


-- 12. Usar funciones de ventana:
-- Agrega un número de fila a cada película basada en su duración (usa ROW_NUMBER ).


-- 13. Consultas anidadas:
-- Encuentra el título de las películas con el mayor número de actores.


-- 14. Usar CASE en consultas:
-- Crea una consulta que clasifique las películas en "Corta", "Media", y
-- "Larga" según su duración (por ejemplo, <60, 60-120, >120 minutos).


-- 15. JOIN con CASE:
-- Muestra los clientes junto con un indicador ( vip_status ) que diga "VIP" si
-- han alquilado más de 50 películas.


-- Nivel Experto: Consultas de optimización y análisis

-- 16. Análisis de tendencias:
-- Encuentra el mes con la mayor cantidad de ingresos por alquiler.


-- 17. Optimización de subconsultas:
-- Reescribe una subconsulta que encuentre los actores más frecuentes
-- para que use un JOIN en lugar de una subconsulta.


-- 18. Crear vistas:
-- Crea una vista que muestre los ingresos totales por cada cliente.


-- 19. Usar índices:
-- Asegúrate de que las consultas para encontrar películas por duración
-- sean rápidas creando índices en las columnas relevantes.


-- 20. Procedimientos almacenados:
-- Crea un procedimiento almacenado que reciba un rango de fechas y devuelva los alquileres 
-- realizados en ese período.