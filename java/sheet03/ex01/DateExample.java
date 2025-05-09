/* ex01. Manejo de Fechas (Date)
Crea una aplicación que muestre la fecha actual en varios formatos. Llama al
archivo DateExample.java y para formatear las fechas usa SimpleDateFormat . */

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateExample {
    public static void main(String[] args) {

        Date fecha = new Date(); 
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        String fechaFormateada = sdf.format(fecha);
        System.out.println("Formato 1: " + fechaFormateada);

        SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String fechaFormateada2 = sdf2.format(fecha);
        System.out.println("Formato 2: " + fechaFormateada2);
       
        SimpleDateFormat sdf3 = new SimpleDateFormat("E, MMM dd yyyy");
        String fechaFormateada3 = sdf3.format(fecha);
        System.out.println("Formato 3: " + fechaFormateada3);
  
    }
    
}
