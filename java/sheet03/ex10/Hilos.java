/* ex10. Threads (Up2You)
Crea e inicia un hilo que imprima números del 1 al 5 con un segundo de pausa
entre cada número. */
public class Hilos extends Thread{

    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
            try {
                Thread.sleep(1000); 
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

public static void main(String[] args) {

        Hilos hilo = new Hilos();
        hilo.start(); 
    }
}
