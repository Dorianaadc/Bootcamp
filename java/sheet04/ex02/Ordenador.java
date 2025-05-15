public class Ordenador {

    private String marca;
    private String modelo;
    private int ram;
    private int capacidadDiscoDuro;
    private int espacioUsadoDiscoDuro;
    private boolean encendido;

    public Ordenador() {
        this.ram = 4;
        this.capacidadDiscoDuro = 50;
        this.espacioUsadoDiscoDuro = 0;
        this.encendido = false;
    }

    public Ordenador(int ram) {
        setRam(ram);
        this.capacidadDiscoDuro = 50;
        this.espacioUsadoDiscoDuro = 0;
        this.encendido = false;
    }

    public Ordenador(int ram, int capacidadDiscoDuro) {
        setRam(ram);
        this.capacidadDiscoDuro = capacidadDiscoDuro;
        this.espacioUsadoDiscoDuro = 0;
        this.encendido = false;
    }

    public Ordenador(String marca, String modelo, int ram, int capacidadDiscoDuro) {
        this.marca = marca;
        this.modelo = modelo;
        setRam(ram);
        this.capacidadDiscoDuro = capacidadDiscoDuro;
        this.espacioUsadoDiscoDuro = 0;
        this.encendido = false;
    }

    private boolean esPotenciaDe2(int n) {
        return n > 0 && (n & (n - 1)) == 0;
    }

    public void setRam(int ram) {
        if (!esPotenciaDe2(ram)) {
            throw new IllegalArgumentException("La RAM debe ser potencia de 2");
        }
        this.ram = ram;
    }

    public boolean encender() {
        this.encendido = true;
        return true;
    }

    public boolean apagar() {
        this.encendido = false;
        return false;
    }

    public String transferirDatos(int gb) {
        if (!encendido) return "El ordenador está apagado.";
        if (espacioUsadoDiscoDuro + gb > capacidadDiscoDuro) {
            return "No hay suficiente espacio para transferir " + gb + " GB.";
        }
        espacioUsadoDiscoDuro += gb;
        return "Transferidos " + gb + " GB correctamente.";
    }

    public String eliminarArchivos(int gb) {
        if (!encendido) return "El ordenador está apagado.";
        espacioUsadoDiscoDuro -= gb;
        if (espacioUsadoDiscoDuro < 0) {
            espacioUsadoDiscoDuro = 0;
        }
        return "Eliminados hasta " + gb + " GB correctamente.";
    }

    @Override
    public String toString() {
        return "Ordenador:" + " marca=" + marca + ", modelo=" + modelo +
                ", ram=" + ram + " GB, capacidadDiscoDuro=" + capacidadDiscoDuro +
                " GB, espacioUsado=" + espacioUsadoDiscoDuro + " GB, encendido=" + encendido;
    }
}
