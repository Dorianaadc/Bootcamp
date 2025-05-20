package com.example.ex01.service;

import com.example.ex01.model.Direccion;
import com.example.ex01.model.Estudiante;
import com.example.ex01.repository.DireccionRepository;
import com.example.ex01.repository.EstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EstudianteService{

    @Autowired
    private EstudianteRepository estudianteRepository;

    @Autowired
    private DireccionRepository direccionRepository;


    public List<Estudiante> obtenerTodos() {
        return estudianteRepository.findAll();
    }

    public Optional<Estudiante> obtenerPorId(Long id) {
        return estudianteRepository.findById(id);
    }

    public List<Estudiante> obtenerPorCiudad(String ciudad) {
        return estudianteRepository.findByDireccion_Ciudad(ciudad);
    }

    public Estudiante guardar(Estudiante estudiante) {
        Direccion direccion = direccionRepository.findById(estudiante.getDireccion().getId())
                .orElseThrow(() -> new IllegalArgumentException("La dirección no existe"));
        estudiante.setDireccion(direccion);
        return estudianteRepository.save(estudiante);
    }


    public void eliminar(Long id) {
        estudianteRepository.deleteById(id);
    }
}
