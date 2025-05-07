/* Ejercicio 4: Condicionales
Escribe un programa que tome un número entero como entrada (solicitado al
usuario) y determine si es positivo, negativo o cero. Llama a la clase
Condicionales */

import java.util.Scanner;

public class Condicionales {
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
    
System.out.println("Escriba un número");
int numero = sc.nextInt();

if(numero == 0){
System.out.println("Es cero");
}else if (numero > 0) {
    System.out.println("Es positivo");
}else{
    System.out.println("Es negativo");
}

    }
}