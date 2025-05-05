/* Ejercicio 10: Números Aleatorios
Escribe un programa que genere un número aleatorio entre 1 y 100 y le pida al
usuario que adivine el número. El programa debe indicar si el número ingresado
es mayor o menor que el número aleatorio hasta que el usuario lo adivine. */

import java.util.Scanner;

public class NumerosAleatorios {
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);

int minimo = 1;
int maximo = 5;
int numAleatorio = (int) (Math.random() * (maximo - minimo + 1) + minimo);
    
do { 
System.out.println("Adivina el número");
int numero = sc.nextInt();

if (numero == numAleatorio) {
    System.out.println("Felicidades, adivinaste!!, es el número " + numAleatorio);
}else if (numero < numAleatorio) {
    System.out.println("El número es menor ");
}else if (numero > numAleatorio){
    System.out.println("El número es mayor");
}
} while (true);

    }
}
