public class Persona extends Direccion{
    String nombre;
    int edad;
    
    public Persona(String nombre, int edad,String calle, String ciudad, String codigoPostal) {
        super(calle, ciudad, codigoPostal);
        this.nombre = nombre;
        this.edad = edad;
    }

    public String mostrarDetalles(){
       return "Nombre: " + this.nombre + " Edad: " + this.edad + 
       " Dirección: " + super.calle + " " + super.ciudad + " " + super.codigoPostal;
    }

    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    

}
    