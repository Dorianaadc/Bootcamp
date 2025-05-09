import java.util.ArrayList;
import java.util.List;

/* ex11. Lambda (Up2You)
Usa una expresión lambda para ordenar una lista de cadenas (”Banana”,
“Apple” y “Cherry”) alfabéticamente. */

public class Lambdas{
public static void main(String[] args) {

List<String> lista = new ArrayList<>();

lista.add("Banana");
lista.add("Apple");
lista.add("Cherry");

lista.sort((cadena1, cadena2) -> cadena1.compareTo(cadena2));

lista.forEach(System.out::println);


    }
}
