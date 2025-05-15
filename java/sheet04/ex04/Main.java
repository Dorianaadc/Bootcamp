/* ex04. Productos
Crea una clase que represente un Producto. Un producto se define por:
Id, Nombre, Precio
El id será autoincrementado (¿Qué tal si investigas sobre static? ). El precio
debe ser positivo.
Encapsula los atributos. Dos constructores: vacío y otro pidiendo el nombre y el
precio
Las operaciones que podrá realizar son:
comprar: dada una cantidad, indicar el precio total
Crea una clase que represente un producto fresco.
Tiene los mismos atributos que producto, además se define por tener días de
caducidad.
Encapsula los atributos. Dos constructores: vacío y por defecto.
Las operaciones que podrá realizar son:
comprar: dada una cantidad, indicar el precio total. Según los días de
caducidad el precio que le queden, el precio se reducirá:
Si le quedan entre 3 y 5 días, se reduce un 40%
Si le quedan menos de 3 días, se reduce un 70%
Crea una clase que represente un producto refrigerado.
Tiene los mismos atributos que producto, además se define por tener el cajón
donde se encuentra. Encapsula los atributos. Dos constructores: vacío y por
defecto.
Las operaciones que podrá realizar son:
comprar: dada una cantidad, indicar el precio total
Impleméntale a todas las clases el método toString . */

public class Main {
    public static void main(String[] args) {
        Productos p = new Productos("Fresa", 10);
        System.out.println(p);
        System.out.println("Total compra: $" + p.comprar(2));

        ProductoFresco pf = new ProductoFresco("Carne", 20, 3);
        System.out.println(pf);
        System.out.println("Total compra: $" + pf.comprar(3));

        ProductoRefrigerado pr = new ProductoRefrigerado("Queso", 15, "Cajón 2B");
        System.out.println(pr);
        System.out.println("Total compra: $" + pr.comprar(2));
    }
}
