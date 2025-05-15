public class Productos {
private static int contadorId = 1;
private int id;
protected String nombre;
protected double precio;

public Productos(){
}

public Productos(String nombre,double precio){
    this.id = contadorId++;
    this.nombre = nombre;
    this.precio = precio;

}
    
public double comprar(int cantidad) {
    return precio * cantidad;
}

 public int getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        if (precio > 0)
            this.precio = precio;
        else
            this.precio = 0;
    }

    @Override
    public String toString() {
        return "Producto ID=" + id + ", Nombre=" + nombre + ", Precio=" + precio;
    }


}
