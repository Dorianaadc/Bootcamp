/*Ejercicio 08: Genéricos en Clases y Métodos
Objetivo: Trabajar con código genérico.
Crea una clase genérica Caja<T> que guarde un objeto de tipo T .
Incluye métodos setContenido(T contenido) y T getContenido() .
En el main , prueba Caja<Persona> , Caja<String> y un método genérico estático
public static <U> U identidad(U valor) . */

public class Main {
    public static void main(String[] args) {
    
        Caja<Persona> cajaPersona = new Caja<>();
        cajaPersona.setContenido(new Persona("Juan",25));
        System.out.println("Contenido de cajaPersona: " + cajaPersona.getContenido());

        Caja<String> cajaString = new Caja<>();
        cajaString.setContenido("Hola Mundo");
        System.out.println("Contenido de cajaString: " + cajaString.getContenido());

        String resultadoString = Utilidades.identidad("Texto");
        Integer resultadoInt = Utilidades.identidad(10);

        System.out.println("Resultado identidad (String): " + resultadoString);
        System.out.println("Resultado identidad (Integer): " + resultadoInt);
    }
}
