/* ex06. Iterator
Usa un iterador para recorrer una lista de enteros y eliminar los números
impares. Puedes crear por ejemplo la lista con 10, 15, 20 y 25 */

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Iterador {
public static void main(String[] args) {

List<Integer> lista = new ArrayList<>();    

lista.add(10);
lista.add(15);
lista.add(20);
lista.add(25);

Iterator<Integer> iterador = lista.iterator();

while(iterador.hasNext()){
int num = iterador.next();
if (num % 2 == 0) {
    System.out.println(num);
            }

        }
    }
    
}
