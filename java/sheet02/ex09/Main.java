/* Ejercicio 9: Enumeraciones ( enum )
Objetivo: Usar tipos controlados de constantes.
Define enum EstadoCivil { SOLTERO, CASADO, DIVORCIADO, VIUDO }
Añade a Persona un atributo EstadoCivil estadoCivil.
Modifica constructor y mostrarDetalles para incluirlo. */
public class Main {
    
public static void main(String[] args) {

Persona persona = new Persona("Maria", 23, EstadoCivil.CASADO);
System.out.println(persona.mostrarDetalles());
    }
    
}
