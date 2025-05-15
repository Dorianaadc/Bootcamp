public class ProductoFresco extends Productos{
    
private int caducidad = 3;
private final double PORCENTAJE40 = 40.0;
private final double PORCENTAJE70 = 70.0;

public ProductoFresco(){
}

public ProductoFresco(String nombre, double precio, int caducidad) {
    super(nombre, precio);
    this.caducidad = caducidad;
    }

public double comprar(int cantidad){
if(this.caducidad <= 5 ){
    super.precio -= (super.precio * (this.PORCENTAJE40 / 100.0));

}else if (this.caducidad < 3) {
    super.precio -= (super.precio * (this.PORCENTAJE70 / 100.0));
}
return super.precio;
}


}
