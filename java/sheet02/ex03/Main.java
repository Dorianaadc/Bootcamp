/* Ejercicio 3: Herencia
Ejercicio: Crea una clase Estudiante que herede de Persona y añade un atributo
grado de tipo texto. Incluye un método para mostrar los detalles del estudiante,
incluyendo los detalles de la persona. La clase estudiante tendrá que tener un
constructor que llame al del padre. Al igual que una sobreescritura del método
mostrarDetalles.
Crea un Estudiante con nombre Ana de edad 20 y grado Ingeniería y muestra
los detalles del mismo.
Consejo: Investiga sobre el uso de la palabra reservada super .*/

public class Main {
public static void main(String[] args) {
    
Estudiante estudiante = new Estudiante("Ana", 20, "Ingenieria");
System.out.println(estudiante.mostrarDetalles());
        }
    }
    