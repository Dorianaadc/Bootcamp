package com.example.ex01.controller;

import com.example.ex01.model.Estudiante;
import com.example.ex01.repository.EstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/estudiantes")
public class EstudianteController {

    @Autowired
    private EstudianteRepository estudianteRepository;

    // Servicio (Lógica de negocio) directamente en el controlador
    @Service
    public class EstudianteService {

        public List<Estudiante> obtenerTodos() {
            return estudianteRepository.findAll();
        }

        public Optional<Estudiante> obtenerPorId(Long id) {
            return estudianteRepository.findById(id);
        }

        public Estudiante guardar(Estudiante estudiante) {
            return estudianteRepository.save(estudiante);
        }

        public void eliminar(Long id) {
            estudianteRepository.deleteById(id);
        }
    }

    @Autowired
    private EstudianteService estudianteService;

    // Listar todos los estudiantes
    @GetMapping
    public List<Estudiante> listarEstudiantes() {
        return estudianteService.obtenerTodos();
    }

    // Obtener un estudiante por ID
    @GetMapping("/{id}")
    public ResponseEntity<Estudiante> obtenerEstudiante(@PathVariable Long id) {
        return estudianteService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Crear un nuevo estudiante
    @PostMapping
    public Estudiante crearEstudiante(@RequestBody Estudiante estudiante) {
        return estudianteService.guardar(estudiante);
    }

    // Eliminar un estudiante
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarEstudiante(@PathVariable Long id) {
        estudianteService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
