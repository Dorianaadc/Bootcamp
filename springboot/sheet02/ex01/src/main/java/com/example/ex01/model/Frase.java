package com.sheet02.ex01.model;
import jakarta.persistence.*;

@Entity
public class Frase {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
    private String texto;
    private String autor;

    public Frase() {}

    public Frase(Long id, String texto, String autor) {
        this.id = id;
        this.texto = texto;
        this.autor = autor;
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

   public void setId(Long id) {
        this.id = id;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }
}

