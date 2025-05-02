-- create schema club_deporte;
use club_deporte;

CREATE TABLE socio(
socio_num INT auto_increment PRIMARY KEY,
nombre varchar(60),
fecha_nacimiento datetime,
fecha_inscripcion datetime,
telf varchar(20),
direccion varchar(80)
);

CREATE TABLE entrenador(
entrenador_id INT auto_increment PRIMARY KEY,
nombre varchar(60),
especialidad varchar(20),
años_experiencia int,
horario varchar(80)
);

CREATE TABLE disciplina (
disciplina_id INT auto_increment PRIMARY KEY,
nombre VARCHAR(60)
);

CREATE TABLE cuota(
cuota_id INT auto_increment PRIMARY KEY,
socio_id INT,
fecha datetime,
monto_pagado decimal(10,2),
estado_pagado varchar(10),
FOREIGN KEY (socio_id) REFERENCES socio(socio_num)
);

CREATE TABLE evento(
evento_id INT auto_increment PRIMARY KEY,
nombre varchar(60),
descripcion varchar(90),
fecha_hora datetime,
lugar varchar(20),
disciplina_id int,
FOREIGN KEY (disciplina_id) REFERENCES disciplina(disciplina_id)
);

CREATE TABLE socio_evento (
socio_id INT,
evento_id INT,
es_ganador BOOLEAN,
PRIMARY KEY (socio_id, evento_id),
FOREIGN KEY (socio_id) REFERENCES socio(socio_num),
FOREIGN KEY (evento_id) REFERENCES evento(evento_id)
);

CREATE TABLE socio_disciplina (
socio_id INT,
disciplina_id INT,
PRIMARY KEY (socio_id, disciplina_id),
FOREIGN KEY (socio_id) REFERENCES socio(socio_num),
FOREIGN KEY (disciplina_id) REFERENCES disciplina(disciplina_id)
);

CREATE TABLE entrenador_disciplina (
entrenador_id INT,
disciplina_id INT,
PRIMARY KEY (entrenador_id, disciplina_id),
FOREIGN KEY (entrenador_id) REFERENCES entrenador(entrenador_id),
FOREIGN KEY (disciplina_id) REFERENCES disciplina(disciplina_id)
);

CREATE TABLE socio_cuota (
socio_id INT,
cuota_id INT,
PRIMARY KEY (socio_id, cuota_id),
FOREIGN KEY (socio_id) REFERENCES socio(socio_num),
FOREIGN KEY (cuota_id) REFERENCES cuota(cuota_id)
);

-- Crea 5 socios.
INSERT INTO socio (socio_num, nombre, fecha_nacimiento,fecha_inscripcion, telef, direccion)
VALUES
('Pedro Jimenez', '2000-05-15', '2024-05-12','925455789','Calle pepa'),
('Rocio Wesly', '2003-02-23', '2025-02-20','687654321', 'Avenida primera 14'),
('Ian Gómez', '2007-01-20', '2022-03-15','655444333', 'Calle azul 07'),
('Vanessa Fuentes', '1982-09-10', '2024-01-30', '677555444', 'Avenida godoy 23'),
('Rosa Brom', '2004-05-02', '2024-04-05', '973555347', 'Calle sol 2');

-- Crea 3 entrenadores.
INSERT INTO entrenador (entrenador_id, nombre, especialidad, años_experiencia, horario)
VALUES
('Manuel Lopez', 'Fútbol', 4, 'Lunes y Miércoles 08:00-12:00'),
('Sofia Gilber', 'Natación', 9, 'Martes y Jueves 08:00-17:00'),
('Alejandro Fernández', 'Tenis', 14, 'Viernes 09:00-14:00');

-- Crea 3 disciplinas deportivas.
INSERT INTO disciplina (disciplina_id, nombre)
VALUES
('Fútbol'),
('Natación'),
('Tenis');

-- Crea 2 eventos con al menos 2 participantes en cada uno.
INSERT INTO evento (evento_id, nombre, descripcion, fecha_hora, lugar, disciplina_id)
VALUES
('Torneo de Fútbol', 'Torneo amistoso de fútbol','2025-05-20-10:00', 'Estadio', 1),
('Campeonato de Natación', 'Campeonato final de natación','2024-06-15-14:00', 'Piscina Olímpica',2);

INSERT INTO socio_evento (socio_id, evento_id, es_ganador)
VALUES
(1, 1, true),
(2, 1, false),
(3, 2, true),
(4, 2, true);

-- Registra pagos de cuotas para los socios.
INSERT INTO Cuota (cuota_id, socio_id, fecha_pago, monto_pagado, estado_pago)
VALUES
(1, '2025-01-03', 60.00, 'Pagado'),
(2, '2024-02-10', 60.00, 'Pendiente'),
(3, '2025-03-12', 60.00, 'Vencido');

-- Consultas SQL:

-- 1. Obtener el listado de socios que están inscritos en una disciplina específica.

-- 2. Consultar todos los eventos futuros y sus participantes.

-- 3. Listar los pagos pendientes de cuotas de todos los socios.

-- 4. Obtener el historial de entrenadores asignados a cada disciplina.

-- 5. Mostrar el nombre del socio ganador de un evento específico (si aplica).
