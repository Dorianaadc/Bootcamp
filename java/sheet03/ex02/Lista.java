/* ex02. ArrayList
Crea una lista de enteros usando ArrayList , añade algunos elementos; por
ejemplo, 10, 20 y 30 y calcula la suma de todos los números recorriendo la
lista. */
import java.util.ArrayList;
import java.util.List;

public class Lista {
public static void main(String[] args) {
    
List<Integer> lista = new ArrayList<>();
  lista.add(10);
  lista.add(20);
  lista.add(30);

  int suma = 0;
  for (Integer l : lista) {
      suma += l;
  }
System.out.println("La suma es: " + suma);

    }
}
