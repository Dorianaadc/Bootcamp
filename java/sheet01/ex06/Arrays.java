/* Ejercicio 6: Arrays
Declara un array de enteros con 5 elementos, asígnales valores y luego
imprime cada elemento del array. Llama a la clase Arrays */

public class Arrays {
    public static void main(String[] args) {

        int[] array = new int[5];
        array[0] = 1;
        array[1] = 2;
        array[2] = 3;
        array[3] = 4;
        array[4] = 5;

        for (int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }
    }
}
