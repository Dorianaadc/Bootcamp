public class Direccion {
String calle;
String ciudad;
String codigoPostal;


public Direccion(String calle, String ciudad, String codigoPostal) {
    this.calle = calle;
    this.ciudad = ciudad;
    this.codigoPostal = codigoPostal;
}


public String getCalle() {
    return calle;
}


public String getCiudad() {
    return ciudad;
}


public String getCodigoPostal() {
    return codigoPostal;
}


public void setCalle(String calle) {
    this.calle = calle;
}


public void setCiudad(String ciudad) {
    this.ciudad = ciudad;
}


public void setCodigoPostal(String codigoPostal) {
    this.codigoPostal = codigoPostal;
}



}
