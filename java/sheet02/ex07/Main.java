/* Ejercicio 7: Miembros Estáticos y Clase de Utilidad
Objetivo: Diferenciar miembros de clase vs. de instancia.
Añade en Empleado un atributo static int contadorEmpleados que se incremente en
cada creación.
Crea una clase Utilidades con un método estático public static boolean
esMayorDeEdad(Persona p) .
Comprueba en el main el uso de ambos. */

public class Main {
    public static void main(String[] args) {
        Empleado empleado = new Empleado("Marta", 39, 5000.0,0);
        System.out.println(empleado.mostrarDetalles());
        
        Utilidades utilidades = new Utilidades();
        System.out.println(utilidades.esMayorDeEdad(empleado));
            
        }
    }
    