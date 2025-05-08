public class Persona {
    String nombre;
    int edad;
    EstadoCivil estadoCivil;

    public Persona(String nombre, int edad, EstadoCivil estadoCivil){
        this.nombre = nombre;
        this.edad = edad;
        this.estadoCivil = estadoCivil;
    }
    
    public String mostrarDetalles(){
       return "Nombre: " + this.nombre + " Edad: " + this.edad + " Estado civil: " + this.estadoCivil;
    }


}
    