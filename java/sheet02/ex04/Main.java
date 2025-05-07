/* Ejercicio 4: Polimorfismo
Ejercicio: Crea una clase Empleado que herede de Persona y sobrescribe el
método mostrarDetalles para incluir el salario . Usa el polimorfismo para mostrar los
detalles de una lista de personas que incluye estudiantes y empleados.
Investigación: ¿Existe algo llamado @Override ? De existir, intenta usarlo en tu
código. */

public class Main {
public static void main(String[] args) {

Persona[] personas = {
    new Estudiante("Ana", 20, "Ingeniería"),
    new Empleado("Luis", 30, 50000),
    new Persona("Marta", 40)
        };
        
        for (Persona p : personas) {
            System.out.println(p.mostrarDetalles());
        }
        
    }
}
