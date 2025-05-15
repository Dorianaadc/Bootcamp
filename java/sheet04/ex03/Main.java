/* ex03. Empleados
Crea una clase que represente a un empleado. Un empleado se define por:
DNI, Nombre, Edad, Departamento (Contabilidad, Informatica y Dirección), Teletrabajo
Empresa, Salario base.
-El DNI se debe validar que tenga el formato correcto (que sea correcto no hace
falta) y la empresa es obligatoria.
Todos los empleados tienen un salario base que es el mismo para todos. El
departamento debe ser un enumerado.
La empresa es un objeto que se define por CIF y nombre. El CIF no es
necesario de validar.
Encapsula todos los atributos. Crea un constructor por defecto. Un empleado
podrá realizar las siguientes acciones:
calcular sueldo: el sueldo de un empleado se define por los siguientes
parámetros:
Si tiene mas de 30 años, se le incrementa el salario 200€
Si pertenece al departamento de contabilidad, se le incrementa el
salario 50€
Si pertenece al departamento de informática, se le incrementa el salario
80€
Si pertenece al departamento de dirección, se le incrementa el salario
100€
Si tiene teletrabajo, se le incrementa el salario 30€
Un empleado es igual a otro (sobrescribe equals ) cuando tienen el mismo DNI.
Muestra la información del empleado con la implementación del método
toString .*/

public class Main {
public static void main(String[] args) {

Empresa empresa = new Empresa(1223333, "Moda");    

Empleado empleado = new Empleado("12345678T", "Dori", 28, Departamento.INFORMATICA, true, empresa, 2000.0);
System.out.println(empleado);

Empleado empleado2 = new Empleado("12345678P", "pepe", 38, Departamento.CONTABILIDAD, false, empresa, 2000.0);
System.out.println(empleado2);

}
    
}
