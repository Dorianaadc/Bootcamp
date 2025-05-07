/* Ejercicio 1: Clase y Objeto
Crea una clase Persona con los atributos nombre y edad (modificador default) y
con un constructor para inicializar estos atributos. Añade un método
mostrarDetalles para mostrar los detalles de la persona. Luego, crea un objeto de
la clase llamando al constructor con nombre Juan y edad 25 en el main y
muestra sus detalles llamando al método mostrarDetalles.*/

public class Main {
    public static void main(String[] args) {

    Persona persona = new Persona("Juan", 25);
    System.out.println(persona.mostrarDetalles());    
    }
}
