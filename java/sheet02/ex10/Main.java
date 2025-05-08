/* Ejercicio 10: Clases Abstractas
Ejercicio: Define una clase abstracta Animal con un método abstracto
hacerSonido . Crea clases Perro y Gato que hereden de Animal y sobrescriban el
método hacerSonido . Dirán “El perro hace: Guau guau” y “El gato hace: Miau
Miau”.
Hazte un main para probar tu ejercicio. */
public class Main {
public static void main(String[] args) {
    
Gato gato = new Gato();
gato.hacerSonido();

Perro perro = new Perro();
perro.hacerSonido();

    }
}