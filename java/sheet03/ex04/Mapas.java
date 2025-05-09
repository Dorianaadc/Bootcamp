/* ex04. HashMap
Crea un mapa que asocie nombres de personas con su edad. Añade los
elemento Juan (30), Ana (25) y Luis (35). Imprime todas las entradas del mapa. */

import java.util.HashMap;
import java.util.Map;

public class Mapas {
public static void main(String[] args) {
    
Map<String,Integer> mapa = new HashMap<>();

mapa.put("Juan", 30);
mapa.put("Ana", 25);
mapa.put("Luis", 35);

for (String elemento : mapa.keySet()) {
    System.out.println(elemento + " tiene " + mapa.get(elemento)) ;
        }
    }
}