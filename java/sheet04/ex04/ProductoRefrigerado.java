public class ProductoRefrigerado extends Productos {
    private String cajon;

    public ProductoRefrigerado() {
        super();
    }

    public ProductoRefrigerado(String nombre, double precio, String cajon) {
        super(nombre, precio);
        this.cajon = cajon;
    }

    @Override
    public String toString() {
        return super.toString() + " (Refrigerado - Cajón: " + cajon + ")";
    }


}
