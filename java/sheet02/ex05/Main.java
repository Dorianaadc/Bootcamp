/* Ejercicio 5: Interfaces
Ejercicio: Define una interfaz Imprimible con un método imprimir . Haz que las
clases Estudiante y Empleado implementen esta interfaz y sobrescriban el método
imprimir . Este método hará una impresión antes de mostrar los detalles de la
persona del tipo Imprimiendo detalles del estudiante/empleado: */

public class Main {
public static void main(String[] args) {

Empleado empleado = new Empleado("Marta", 39, 5000.0);
System.out.println(empleado.mostrarDetalles());
empleado.imprimir();

Estudiante estudiante = new Estudiante("Ana", 20, "Ingenieria");
System.out.println(estudiante.mostrarDetalles());
estudiante.imprimir();
        
    }
}
