/* Ejercicio 4: API de Tareas (To-Do List)
Modelo: Tarea con id , descripcion , completado (boolean).
Endpoints:
GET /tareas – listar todas.
GET /tareas?completado=true – listar filtrando por estado.
POST /tareas – crear tarea.
PUT /tareas/{id} – actualizar una tarea.
DELETE /tareas/{id} – eliminar tarea.*/
package com.example.ex02;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Ex04Application {

	public static void main(String[] args) {
		SpringApplication.run(Ex02Application.class, args);
	}

}
