public class ProductoFresco extends Productos{
    
private int caducidad = 3;
private final double PORCENTAJE40 = 40.0;
private final double PORCENTAJE70 = 70.0;

public ProductoFresco(){
    super();
}

public ProductoFresco(String nombre, double precio, int caducidad) {
    super(nombre, precio);
    this.caducidad = caducidad;
    }

public double comprar(int cantidad) {
        double precioUnitario = getPrecio();
        if (caducidad < 3) {
            precioUnitario *= this.PORCENTAJE40;
        } else if (caducidad <= 5) {
            precioUnitario *= this.PORCENTAJE70;
        }
        return precioUnitario * cantidad;
    }

@Override
public String toString() {
    return "ProductoFresco  " + "Productos nombre=" + super.nombre + ", precio=" + super.precio + " caducidad=" + caducidad;
}



}
