package com.example.ex01.service;
import com.example.ex01.model.Direccion;
import com.example.ex01.repository.DireccionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DireccionService{

    @Autowired
    private DireccionRepository direccionRepository;

    public List<Direccion> obtenerTodos() {
        return direccionRepository.findAll();
    }

    public Optional<Direccion> obtenerPorId(Long id) {
        return direccionRepository.findById(id);
    }

    public Direccion guardar(Direccion direccion) {
        return direccionRepository.save(direccion);
    }

    public void eliminar(Long id) {
        direccionRepository.deleteById(id);
    }
}
