package com.example.ex01.model;
import jakarta.persistence.*;
@Entity
public class Direccion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String calle;
    private String ciudad;
    private int codigoPostal;

    public Direccion() {
    }

    public Direccion(Long id, String ciudad, String calle, int codigoPostal) {
        this.id = id;
        this.ciudad = ciudad;
        this.calle = calle;
        this.codigoPostal = codigoPostal;
    }

    public Long getId() {
        return id;
    }

    public String getCiudad() {
        return ciudad;
    }

    public String getCalle() {
        return calle;
    }

    public int getCodigoPostal() {
        return codigoPostal;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public void setCodigoPostal(int codigoPostal) {
        this.codigoPostal = codigoPostal;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }
}
