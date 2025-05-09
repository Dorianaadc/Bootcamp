/* ex03. LinkedList
Crea una lista enlazada de cadenas, añade algunos elementos (Hola, Mundo y
Java) y recórrela para imprimir cada elemento.*/

import java.util.LinkedList;

public class ListasCadenas {
public static void main(String[] args) {

 LinkedList<String> lista = new LinkedList<String>();
lista.add("Hola");
lista.add("Mundo");
lista.add("Java");

for (String l : lista) {
    System.out.println(l);
}

    }
}
