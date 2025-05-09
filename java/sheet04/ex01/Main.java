/* Realiza una clase que represente a un libro, definido por:
ISBN,título,número de páginas,autor,prestado.
Debe tener un constructor vacío y otro por defecto. Encapsula todos sus
atributos. Un libro puede realizar lo siguiente:
prestar: comprueba si está o no prestado y pone el atributo prestado a
true. Si ya está prestado te debe mostrar un mensaje diciendo que es
imposible el préstamo.
devolver: comprueba si está o no prestado y pone el atributo prestado a
false.
imprimir: dado un coste, calcularemos el coste de imprimir todas las
paginas del libro.
Deberá implementar el método toString con los siguientes textos:
Cuando esté prestado: “El libro (<ISBN>) con título <título> y autor <autor>
tiene <número páginas> páginas y está prestado”
Cuando no esté prestado: “El libro (<ISBN>) con título <título> y autor
<autor> tiene <número páginas> páginas y no está prestado” */
public class Main {
public static void main(String[] args) {

Libro libro = new Libro("345654Hu", "Rosas", 150, "Pepe", true);
System.out.println(libro);

Libro libro2 = new Libro("345654Hssu", "Sol", 150, "Pepe", false);
System.out.println(libro2);

    }
}
