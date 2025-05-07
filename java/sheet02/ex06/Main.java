/*Ejercicio 6: Composición y agregación
Objetivo: Entender la relación “tiene-un” entre objetos.
Crea una clase Direccion con atributos calle , ciudad , códigoPostal .
Modifica Persona para tener una Direccion (atributo privado).
Ajusta constructores y métodos get/set .
En el main , crea una Persona con su Direccion y muestra ambos detalles. */

public class Main {
    public static void main(String[] args) {

Persona persona = new Persona("Maria", 25, "calle luz", "madrid", "28053");
System.out.println(persona.mostrarDetalles());
    }
}
