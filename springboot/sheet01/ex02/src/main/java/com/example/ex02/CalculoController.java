package com.example.ex02;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculoController {

    // Ruta con @PathVariable
    // Ejemplo: /suma/4/6 -> "La suma es: 10"
    @GetMapping("/suma/{a}/{b}")
    public String sumar(@PathVariable int a, @PathVariable int b) {
        int resultado = a + b;
        return "La suma es: " + resultado;
    }

    // Ruta con @RequestParam
    // Ejemplo: /multiplica?a=3&b=5 -> "El producto es: 15"
    @GetMapping("/multiplica")
    public String multiplicar(@RequestParam int a, @RequestParam int b) {
        int resultado = a * b;
        return "El producto es: " + resultado;
    }
}
