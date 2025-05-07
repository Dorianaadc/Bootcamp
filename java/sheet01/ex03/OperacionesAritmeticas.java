/* Ejercicio 3: Operaciones Aritméticas
Escribe un programa que tome dos números enteros como entrada (solicitando
esos números al usuario), realice operaciones aritméticas básicas (suma, resta,
multiplicación y división) y muestre los resultados. Quizás debas importar el
paquete de java.util.Scanner . Llama a la clase OperacionesAritmeticas */

import java.util.Scanner;

public class OperacionesAritmeticas {
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
    
System.out.println("Escriba un número");
int numero = sc.nextInt();

System.out.println("Escriba otro número");
int segundoNumero = sc.nextInt();

int suma = numero + segundoNumero;
System.out.println("La suma de " + numero + " y " + segundoNumero + " es " + suma);

int resta = numero - segundoNumero;
System.out.println("La resta de " + numero + " y " + segundoNumero + " es " + resta);

int multiplicacion = numero * segundoNumero;
System.out.println("La multiplicacion de " + numero + " y " + segundoNumero + " es " + multiplicacion);
    
int division = numero / segundoNumero;
System.out.println("La division de " + numero + " y " + segundoNumero + " es " + division);

    }
}
