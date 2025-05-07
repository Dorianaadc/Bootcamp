public class Empleado extends Persona {
    private double salario;
    static int contadorEmpleados;
    
        public Empleado(String nombre, int edad,double salario, int contadorEmpleados) {
            super(nombre, edad);
            this.salario = salario;
            this.contadorEmpleados = contadorEmpleados + 1;
        }
    
        @Override
        public String mostrarDetalles() {
            return super.mostrarDetalles() + " Salario: " + this.salario + 
            " empleados " + this.contadorEmpleados;
        }
    
        
    }
    