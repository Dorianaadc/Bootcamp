/* Ejercicio 8: Manejo de Cadenas
Escribe un programa que tome una cadena de texto como entrada (solicitada al
usuario) y determine si es un palíndromo (se lee igual de adelante hacia atrás).
Llama a la clase Palindromo */

import java.util.Scanner;
public class Palindromo {
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
    
System.out.println("Escriba una cadena");
String cadena = sc.nextLine();

char[] caracteres = new char[cadena.length()];

for (int i = 0; i < cadena.length(); i++) {
    caracteres[i] = cadena.charAt(i);
}

boolean esPalindromo = true;
for (int i = 0; i < cadena.length() / 2; i++) {
if(caracteres[i] != caracteres[cadena.length() - 1 - i]){
esPalindromo = false;
    break;
}
    }

    if(esPalindromo){
        System.out.println("Es palindromo");
    }else{
        System.out.println("No es palindromo");
    }
  }
}