/* ex08. Exceptions
Crea un método divide que divida dos números e implemente el manejo de
excepciones para evitar la división por cero (investiga sobre throws , try , catch
y ArithmeticException ) */
public class Excepciones {

    public void divide(int num1, int num2) {
        try {
            int operacion = num1 / num2;
            System.out.println("Resultado: " + operacion);
        } catch (ArithmeticException e) {
            System.out.println("ERROR, división por cero");
        }
    }

    public static void main(String[] args) {
        Excepciones e = new Excepciones();
        e.divide(2, 5);  
        e.divide(10, 0); 
    }
}
