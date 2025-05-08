/* ex07. Wrapper Classes
Convierte una cadena; por ejemplo “123”, a un entero usando una clase
envolvente y realiza una operación aritmética (por ejemplo, multiplicarlo por 2)
y muestra el resultado. */

public class ClaseWrapper{
public static void main(String[] args) {

String cadena = "123";

int numero = Integer.parseInt(cadena);

int operacion = numero * 2;

System.out.println("El resultado es: " + operacion);

    }
}