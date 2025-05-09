/* ex09. RegEx
Valida si una cadena es una dirección de correo electrónico válida utilizando
expresiones regulares. */

import java.util.Scanner;

public class ExpresionesRegulares {
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
    
System.out.println("Escriba un correo");
String correo = sc.nextLine();    

if (correo.contains("@") && (correo.contains(".com") || (correo.contains(".es")))) {
    System.out.println("Es un correo");
}else{
    System.out.println("No es un correo");
}

    }
    
}
