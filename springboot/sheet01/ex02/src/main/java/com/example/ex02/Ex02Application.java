/* Ejercicio 2: Uso de @PathVariable y @RequestParam
Crea un servicio de cálculo:
GET /suma/{a}/{b} – devuelve la suma de a + b .
GET /multiplica?a=3&b=5 – devuelve a * b . */
package com.example.ex02;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Ex02Application {

	public static void main(String[] args) {
		SpringApplication.run(Ex02Application.class, args);
	}

}
