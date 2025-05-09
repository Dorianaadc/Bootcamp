public class Ordenador {
String marca;
String modelo;
String ram;
String capacidadDiscoDuro;
String espacioUsadoDiscoDuro;
Boolean encendido;

public Ordenador(){
}

public Ordenador(String ram){
   this.ram = "4GB";
}

public Ordenador(String ram,String capacidadDiscoDuro){
   this.ram = "4GB";
   this.capacidadDiscoDuro = capacidadDiscoDuro;
}

public Ordenador(String marca, String modelo, String ram, String capacidadDiscoDuro
        ) {
    this.marca = marca;
    this.modelo = modelo;
    this.ram = "4GB";
    this.capacidadDiscoDuro = "50GB";

}
public Ordenador(String marca, String modelo, String ram, String capacidadDiscoDuro, String espacioUsadoDiscoDuro,
        Boolean encendido) {
    this.marca = marca;
    this.modelo = modelo;
    this.ram = "4GB";
    this.capacidadDiscoDuro = "50GB";
    this.espacioUsadoDiscoDuro = espacioUsadoDiscoDuro;
    this.encendido = false;
}




}
