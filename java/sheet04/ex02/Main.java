/* ex02. Ordenadores
Crea una clase que represente a un ordenador. Un ordenador se define por:
Marca,Modelo, GB de RAM (Por defecto, 4GB), Capacidad disco Duro en GB (Por defecto, 50GB), Espacio utilizado en el disco duro
,Estar o no encendido (por defecto esta apagado)
La RAM debe ser potencia de 2, de lo contrario lanzaremos una excepción.
Encapsula todos los atributos.
Tendrá los siguientes constructores:
Vacío, Sólo pidiendo la RAM ,Sólo pidiendo la RAM y la capacidad del disco duro, Pidiendo todos los atributos excepto el espacio utilizado y encendido
Las operaciones que podrá realizar son:
encender: Enciende el ordenador, haciendo que el atributo encendido este a true
apagar: Enciende el ordenador, haciendo que el atributo encendido este a false
transferir archivos: dado un numero de GB, se aumenta el espacio
utilizado. Si no cabe, se deberá indicar. Solo se podrá hacer si el ordenador
esta encendido.
eliminar archivos: dado un numero de GB, se elimina el espacio indicado, si
supera al espacio utilizado se quedara en 0. Sólo se podrá hacer si el
ordenador está encendido.
Un ordenador es igual a otro (sobreescribir el método equals ) cuando tienen la
misma marca y modelo.
Implementar también el método toString mostrando información completa del
ordenador. */

public class Main {
    public static void main(String[] args) {
            Ordenador o = new Ordenador("HP", "X30", 8, 64);
            System.out.println(o);
            o.encender();
            System.out.println(o.transferirDatos(20));
            System.out.println(o.eliminarArchivos(10));
            o.setRam(16);
            System.out.println(o);
            
    }
}
