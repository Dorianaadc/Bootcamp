package com.example.ex02;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculoController {

   @GetMapping("/suma")
    public int sumar(@RequestParam int a, @RequestParam int b){
       return a+b;
   }

    @GetMapping("/multiplicacion")
    public int multiplicacion(@RequestParam int a,@RequestParam int b){
        return a+b;
    }

}
