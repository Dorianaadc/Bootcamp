/* Ejercicio 1: Hola Mundo con Spring Boot
Crea un proyecto básico de Spring Boot.
Define un controlador con una ruta GET /hello .
Responde con un mensaje plano como "Hola Mundo desde Spring Boot" . */
package com.example.ex01;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Ex01Application {

	public static void main(String[] args) {
		SpringApplication.run(Ex01Application.class, args);
	}

}
