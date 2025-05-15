public class Productos {
private static int id;
private String nombre;
protected double precio;

public Productos(){
}

public Productos(String nombre,double precio){
    this.id = id++;
    this.nombre = nombre;
    this.precio = precio;

}
    
public double comprar(int cantidad){
if(this.precio > 0){
this.precio -= cantidad;
      }
return this.precio;
    }

}
