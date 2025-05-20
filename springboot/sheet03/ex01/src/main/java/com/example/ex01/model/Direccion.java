package com.example.ex01.model;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Max;

@Entity
public class Direccion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String calle;

    @NotBlank(message = "La ciudad no puede estar en blanco")
    private String ciudad;

    @Min(value = 10000, message = "El código postal debe tener al menos 5 dígitos")
    @Max(value = 99999, message = "El código postal debe tener máximo 5 dígitos")
    private int codigoPostal;

    @OneToOne(mappedBy = "direccion")
    private Estudiante estudiante;

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
