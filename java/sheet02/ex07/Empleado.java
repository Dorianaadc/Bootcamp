public class Empleado extends Persona {
    private double salario;
    static int contadorEmpleados;
    
        public Empleado(String nombre, int edad,double salario) {
            super(nombre, edad);
            this.salario = salario;
        }
    
        @Override
        public String mostrarDetalles() {
            return super.mostrarDetalles() + " Salario: " + this.salario;
        }
    
        
    }
    