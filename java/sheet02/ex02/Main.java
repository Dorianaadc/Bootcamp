/* Ejercicio 2: Métodos y Encapsulamiento
Ejercicio: Añade métodos get y set para los atributos de la clase Persona que
los tendrás que poner como privados. Usa estos métodos para modificar el
nombre por Carlos y la edad por 30 y obtener los valores de los atributos.*/

public class Main {
public static void main(String[] args) {

Persona persona = new Persona("Juan", 25);
System.out.println(persona.mostrarDetalles()); 

persona.setNombre("Carlos");
persona.setEdad(30);
System.out.println(persona.mostrarDetalles()); 

    }
}
