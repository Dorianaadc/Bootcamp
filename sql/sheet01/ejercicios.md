# https://sqlbolt.com/
# Table: movies
# Campos: id	title	director	year	length_minutes

| id  | title                 | director         | year | length_minutes |
|-----|-----------------------|------------------|------|----------------|
| 1   | The Incredibles       | Brad Bird        | 2004 | 116            |
| 2   | A Bug's Life          | John Lasseter    | 1998 | 95             |
| 3   | Monsters, Inc.        | Pete Docter      | 2001 | 92             |
| 4   | Finding Nemo          | Andrew Stanton   | 2003 | 107            |
| 5   | Toy Story             | John Lasseter    | 1995 | 81             |
| 6   | WALL-E                | Andrew Stanton   | 2008 | 104            |
| 7   | Toy Story 2           | John Lasseter    | 1999 | 93             |
| 8   | Brave                 | Brenda Chapman   | 2012 | 102            |
| 9   | Cars 2                | John Lasseter    | 2011 | 120            |
| 10  | Monsters University   | Dan Scanlon      | 2013 | 110            |
| 11  | Cars                  | John Lasseter    | 2006 | 117            |
| 12  | Up                    | Pete Docter      | 2009 | 101            |
| 13  | Ratatouille           | Brad Bird        | 2007 | 115            |
| 14  | Toy Story 3           | Lee Unkrich      | 2010 | 103            |


# Exercise 1 — Tasks

## 1.1 Find the title of each film
SELECT title FROM movies;

## 1.2 Find the director of each film
SELECT director FROM movies;

## 1.3 Find the title and director of each film
SELECT title, director FROM movies;

## 1.4 Find the title and year of each film
SELECT title, year FROM movies;

## 1.5 Find all the information about each film
SELECT * FROM movies;



# Exercise 2 — Tasks

## 2.1 Find the movie with a row id of 6
SELECT title FROM movies WHERE id = '6';

## 2.2 Find the movies released in the years between 2000 and 2010
SELECT title FROM movies WHERE year between 2000 and 2010;

## 2.3 Find the movies not released in the years between 2000 and 2010
SELECT title FROM movies WHERE year not between 2000 and 2010;

## 2.4 Find the first 5 Pixar movies and their release year
SELECT title, year FROM movies WHERE id between 1 and 5;



# Exercise 3 — Tasks
## 3.1 Find all the Toy Story movies
SELECT title FROM movies WHERE title like "Toy Story%";

## 3.2 Find all the movies directed by John Lasseter
SELECT title FROM movies WHERE director like "John Lasseter%";

## 3.3 Find all the movies (and director) not directed by John Lasseter
SELECT title, director FROM movies WHERE director not like "John Lasseter%";

## 3.4 Find all the WALL-* movies
SELECT * FROM movies WHERE title like 'WALL%';



# Exercise 4 — Tasks
## 4.1 List all directors of Pixar movies (alphabetically), without duplicates
SELECT DISTINCT director FROM movies order by director asc;

## 4.2 List the last four Pixar movies released (ordered from most recent to least)
SELECT title,year FROM movies order by year desc limit 4;

## 4.3 List the first five Pixar movies sorted alphabetically
SELECT title FROM movies order by title asc limit 5;

## 4.4 List the next five Pixar movies sorted alphabetically
SELECT title FROM movies order by title asc limit 5 OFFSET 5;



# Table: north_american_cities
# Campos: city	country	population	latitude	longitude

| City                  | Country         | Population | Latitude   | Longitude    |
|-----------------------|-----------------|------------|------------|--------------|
| Guadalajara           | Mexico          | 1,500,800  | 20.659699  | -103.349609  |
| Toronto               | Canada          | 2,795,060  | 43.653226  | -79.383184   |
| Houston               | United States   | 2,195,914  | 29.760427  | -95.369803   |
| New York              | United States   | 8,405,837  | 40.712784  | -74.005941   |
| Philadelphia          | United States   | 1,553,165  | 39.952584  | -75.165222   |
| Havana                | Cuba            | 2,106,146  | 23.054070  | -82.345189   |
| Mexico City           | Mexico          | 8,555,500  | 19.432608  | -99.133208   |
| Phoenix               | United States   | 1,513,367  | 33.448377  | -112.074037  |
| Los Angeles           | United States   | 3,884,307  | 34.052234  | -118.243685  |
| Ecatepec de Morelos   | Mexico          | 1,742,000  | 19.601841  | -99.050674   |
| Montreal              | Canada          | 1,717,767  | 45.501689  | -73.567256   |
| Chicago               | United States   | 2,718,782  | 41.878114  | -87.629798   |



#  Review 1 — Tasks
## 1.1 List all the Canadian cities and their populations / Enumere todas las ciudades canadienses y sus poblaciones.
SELECT city,population FROM north_american_cities WHERE country = 'Canada';

## 1.2 Order all the cities in the United States by their latitude from north to south / Ordena todas las ciudades de Estados Unidos por su latitud de norte a sur.
SELECT city FROM north_american_cities WHERE country = 'United States' order by latitude desc;

## 1.3 List all the cities west of Chicago, ordered from west to east / Enumere todas las ciudades al oeste de Chicago, ordenadas de oeste a este.
SELECT city, longitude FROM north_american_cities WHERE longitude < -87.629798
ORDER BY longitude ASC;

## 1.4 List the two largest cities in Mexico (by population) / Enumere las dos ciudades más grandes de México (por población)
SELECT city,population FROM north_american_cities WHERE country = 'Mexico' order by population desc limit 2;

## 1.5 List the third and fourth largest cities (by population) in the United States and 1. / Enumere la tercera y cuarta ciudades más grandes (por población) de los Estados Unidos y su población.
SELECT city,population FROM north_american_cities WHERE country = 'United States' order by population desc limit 2 Offset 2;



# Table: boxoffice 

| movie_id | rating | domestic_sales | international_sales |
|----------|--------|----------------|----------------------|
| 5        | 8.2    | 380,843,261    | 555,900,000          |
| 14       | 7.4    | 268,492,764    | 475,066,843          |
| 8        | 8.0    | 206,445,654    | 417,277,164          |
| 12       | 6.4    | 191,452,396    | 368,400,000          |
| 3        | 7.9    | 245,852,179    | 239,163,000          |
| 6        | 8.0    | 261,441,092    | 370,001,000          |
| 9        | 8.5    | 223,808,164    | 297,503,696          |
| 11       | 8.4    | 415,004,880    | 648,167,031          |
| 1        | 8.3    | 191,796,233    | 170,162,503          |
| 7        | 7.2    | 244,082,982    | 217,900,167          |
| 10       | 8.3    | 293,004,164    | 438,338,580          |
| 4        | 8.1    | 289,916,256    | 272,900,000          |
| 2        | 7.2    | 162,798,565    | 200,600,000          |
| 13       | 7.2    | 237,283,207    | 301,700,000          |

# Table: movies 

| id  | title                | director         | year | length_minutes |
|-----|----------------------|------------------|------|----------------|
| 1   | Toy Story            | John Lasseter    | 1995 | 81             |
| 2   | A Bug's Life         | John Lasseter    | 1998 | 95             |
| 3   | Toy Story 2          | John Lasseter    | 1999 | 93             |
| 4   | Monsters, Inc.       | Pete Docter      | 2001 | 92             |
| 5   | Finding Nemo         | Andrew Stanton   | 2003 | 107            |
| 6   | The Incredibles      | Brad Bird        | 2004 | 116            |
| 7   | Cars                 | John Lasseter    | 2006 | 117            |
| 8   | Ratatouille          | Brad Bird        | 2007 | 115            |
| 9   | WALL-E               | Andrew Stanton   | 2008 | 104            |
| 10  | Up                   | Pete Docter      | 2009 | 101            |
| 11  | Toy Story 3          | Lee Unkrich      | 2010 | 103            |
| 12  | Cars 2               | John Lasseter    | 2011 | 120            |
| 13  | Brave                | Brenda Chapman   | 2012 | 102            |
| 14  | Monsters University  | Dan Scanlon      | 2013 | 110            |

# Exercise 6 — Tasks
## 6.1 Find the domestic and international sales for each movie / Encuentra las ventas nacionales e internacionales de cada película.
SELECT title, domestic_sales, international_sales 
FROM movies
JOIN boxoffice ON movies.id = boxoffice.movie_id;


## 6.2 Show the sales numbers for each movie that did better internationally rather than domestically / Muestra las cifras de ventas de cada película que tuvo un mejor desempeño a nivel internacional que a nivel nacional.
SELECT title, domestic_sales, international_sales
FROM movies
JOIN boxoffice ON movies.id = boxoffice.movie_id
WHERE international_sales > domestic_sales;


## 6.3 List all the movies by their ratings in descending order / Enumere todas las películas por sus calificaciones en orden descendente
SELECT title, rating
FROM movies
JOIN boxoffice ON movies.id = boxoffice.movie_id
order by rating desc;



# Table: buildings 

| building_name | capacity |
|---------------|----------|
| 1e            | 24       |
| 1w            | 32       |
| 2e            | 16       |
| 2w            | 20       |

# Table: employees 

| role    | name         | building | years_employed |
|---------|--------------|----------|----------------|
| Engineer| Becky A.     | 1e       | 4              |
| Engineer| Dan B.       | 1e       | 2              |
| Engineer| Sharon F.    | 1e       | 6              |
| Engineer| Dan M.       | 1e       | 4              |
| Engineer| Malcom S.    | 1e       | 1              |
| Artist  | Tylar S.     | 2w       | 2              |
| Artist  | Sherman D.   | 2w       | 8              |
| Artist  | Jakob J.     | 2w       | 6              |
| Artist  | Lillia A.    | 2w       | 7              |
| Artist  | Brandon J.   | 2w       | 7              |
| Manager | Scott K.     | 1e       | 9              |
| Manager | Shirlee M.   | 1e       | 3              |
| Manager | Daria O.     | 2w       | 6              |


# Exercise 7 — Tasks
## 7.1 Find the list of all buildings that have employees / Encuentra la lista de todos los edificios que tienen empleados
SELECT DISTINCT building FROM employees;

## 7.2 Find the list of all buildings and their capacity / Encuentra la lista de todos los edificios y su capacidad
SELECT building_name, capacity FROM buildings;

## 7.3 List all buildings and the distinct employee roles in each building (including empty buildings) / Enumere todos los edificios y los distintos roles de los empleados en cada edificio (incluidos los edificios vacíos)
SELECT DISTINCT building_name, role 
FROM buildings 
LEFT JOIN employees ON building_name = building;


# Table: employees

| role    | name        | building | years_employed |
|---------|-------------|----------|----------------|
| Engineer| Becky A.    | 1e       | 4              |
| Engineer| Dan B.      | 1e       | 2              |
| Engineer| Sharon F.   | 1e       | 6              |
| Engineer| Dan M.      | 1e       | 4              |
| Engineer| Malcom S.   | 1e       | 1              |
| Artist  | Tylar S.    | 2w       | 2              |
| Artist  | Sherman D.  | 2w       | 8              |
| Artist  | Jakob J.    | 2w       | 6              |
| Artist  | Lillia A.   | 2w       | 7              |
| Artist  | Brandon J.  | 2w       | 7              |
| Manager | Scott K.    | 1e       | 9              |
| Manager | Shirlee M.  | 1e       | 3              |
| Manager | Daria O.    | 2w       | 6              |
| Engineer| Yancy I.    | *(null)* | 0              |
| Artist  | Oliver P.   | *(null)* | 0              |

# Table: buildings 

| building_name | capacity |
|---------------|----------|
| 1e            | 24       |
| 1w            | 32       |
| 2e            | 16       |
| 2w            | 20       |


# Exercise 8 — Tasks
## 8.1 Find the name and role of all employees who have not been assigned to a building /  Encuentre el nombre y el rol de todos los empleados que no han sido asignados a un edificio
SELECT name, role FROM employees WHERE building is null;


## 8.2 Find the names of the buildings that hold no employees / Encuentra los nombres de los edificios que no tienen empleados
SELECT DISTINCT building_name
FROM buildings 
LEFT JOIN employees ON building_name = building 
WHERE role IS NULL;

# Exercise 9 — Tasks
## 9.1 List all movies and their combined sales in millions of dollars

## 9.2 List all movies and their ratings in percent

## 9.3 List all movies that were released on even number years

