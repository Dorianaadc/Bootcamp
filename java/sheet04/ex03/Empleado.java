public class Empleado {
private String dni;
private String nombre;
private int edad;
private Departamento departamento;
private boolean teletrabajo;
private Empresa empresa;
private double salarioBase;

public Empleado(){
}

public Empleado(String dni, String nombre, int edad, Departamento departamento, boolean teletrabajo, Empresa empresa,
        double salarioBase) {
    this.dni = dni;
    this.nombre = nombre;
    this.edad = edad;
    this.departamento = departamento;
    this.teletrabajo = teletrabajo;
    this.empresa = empresa;
    this.salarioBase = salarioBase;
}

public double calcularSueldo(){
if (this.edad > 30) {
     this.salarioBase += 200;
}

if (this.teletrabajo == true) {
    this.salarioBase += 30;
}
if (this.departamento == Departamento.CONTABILIDAD){
     this.salarioBase += 50; 
}else if (this.departamento == Departamento.INFORMATICA){
      this.salarioBase += 80; 
}else if (this.departamento == Departamento.DIRECCION){
    this.salarioBase += 100; 
}
return this.salarioBase;
}


@Override
public String toString() {
    return "Empleado dni=" + dni + ", nombre=" + nombre + ", edad=" + edad + ", departamento=" + departamento
            + ", teletrabajo=" + teletrabajo + ", empresa=" + empresa + ", salarioBase=" + calcularSueldo();
}

}