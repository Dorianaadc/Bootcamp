/* ex05. HashSet
Crea un conjunto de enteros y demuestra que no permite duplicados
añadiendo los números 10, 20, 30 y 10 e imprimiéndolos todos */

import java.util.HashSet;
import java.util.Set;

public class Conjuntos {
public static void main(String[] args) {

Set<Integer> conjunto = new HashSet<>();

conjunto.add(10);
conjunto.add(20);
conjunto.add(30);
conjunto.add(10);

for (Integer elem : conjunto) {
    System.out.println(elem);
        }
    }
}