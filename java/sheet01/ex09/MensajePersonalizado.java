/* Ejercicio 9: Entrada y Salida de Datos
Escribe un programa que tome el nombre del usuario como entrada (solicitado
al usuario) y lo salude con un mensaje personalizado. */

import java.util.Scanner;

public class MensajePersonalizado {
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
    
System.out.println("Escriba el nombre del usuario");
String usuario = sc.nextLine();

System.out.println("Hola buenas, " + usuario + " como esta?");
    }
}