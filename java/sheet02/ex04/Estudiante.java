public class Estudiante extends Persona{
    private String grado;
    
    public Estudiante(String nombre, int edad,String grado) {
        super(nombre, edad);
        this.grado = grado;
        }
    
    @Override
    public String mostrarDetalles(){
        return "Nombre: " + super.nombre + " Edad: " + super.edad + " Grado: " + this.grado;
        }
    }
    