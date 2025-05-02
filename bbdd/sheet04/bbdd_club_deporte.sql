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




CREATE TABLE socioEvento (
  socio_id INT,
  evento_id INT,
  es_ganador BOOLEAN,
  PRIMARY KEY (socio_id, evento_id),
  FOREIGN KEY (socio_id) REFERENCES socio(socio_num),
  FOREIGN KEY (evento_id) REFERENCES evento(evento_id)
);

CREATE TABLE socioDisciplina (
  socio_id INT,
  disciplina_id INT,
  PRIMARY KEY (socio_id, disciplina_id),
  FOREIGN KEY (socio_id) REFERENCES socio(socio_num),
  FOREIGN KEY (disciplina_id) REFERENCES disciplina(disciplina_id)
);

CREATE TABLE entrenadorDisciplina (
  entrenador_id INT,
  disciplina_id INT,
  PRIMARY KEY (entrenador_id, disciplina_id),
  FOREIGN KEY (entrenador_id) REFERENCES entrenador(entrenador_id),
  FOREIGN KEY (disciplina_id) REFERENCES disciplina(disciplina_id)
);

CREATE TABLE socioCuota (
  socio_id INT,
  cuota_id INT,
  PRIMARY KEY (socio_id, cuota_id),
  FOREIGN KEY (socio_id) REFERENCES socio(socio_num),
  FOREIGN KEY (cuota_id) REFERENCES cuota(cuota_id)
);



