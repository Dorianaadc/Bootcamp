public class Libro {

private String isbn;
private String titulo;
private int numPaginas;
private String autor;
private boolean prestado;

public Libro(){

}

public Libro(String isbn, String titulo, int numPaginas, String autor, Boolean prestado) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.numPaginas = numPaginas;
    this.autor = autor;
    this.prestado = prestado;
}


public String prestar(){
    String estaPrestado = "";
if (this.prestado == true) {
    estaPrestado = "esta Prestado";
}else if (this.prestado == false){
    estaPrestado = "No esta Prestado";
}
return estaPrestado;
}

public void devolver(){
if(this.prestado == true){
this.prestado = false;
}
}

public double imprimir(){
if (this.numPaginas == 100) {
    return numPaginas * 2;
}
return numPaginas;
}

@Override
public String toString() {
    return "El Libro isbn " + isbn + ", con titulo=" + titulo +  ", autor=" + autor + ", tiene numPaginas=" 
    + numPaginas + "paginas" +  ", y " + prestar();
}



}
