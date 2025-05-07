public class Persona {
    String nombre;
    int edad;
    
    public Persona(String nombre, int edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    
    public String mostrarDetalles(){
       return "Nombre: " + this.nombre + " Edad: " + this.edad;
    }

    }
    