/* Ejercicio 3: API de Frases Motivacionales
Crea una clase Frase con id , texto y autor
Usa una lista en memoria como fuente de datos.
Expón endpoints:
GET /frases – lista todas las frases.
GET /frases/{id} – devuelve una frase por ID.
POST /frases – añade una nueva frase. */
package com.example.ex03;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Ex03Application {

	public static void main(String[] args) {
		SpringApplication.run(Ex03Application.class, args);
	}

}
