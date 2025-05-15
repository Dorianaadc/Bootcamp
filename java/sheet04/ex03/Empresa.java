public class Empresa {
private int cif;
private String nombre;


public Empresa(int cif, String nombre) {
    this.cif = cif;
    this.nombre = nombre;
}

    public int getCif() {
        return cif;
    }

    public String getNombre() {
        return nombre;
    }

    public void setCif(int cif) {
        this.cif = cif;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Empresa cif=" + cif + ", nombre=" + nombre;
    }



}
