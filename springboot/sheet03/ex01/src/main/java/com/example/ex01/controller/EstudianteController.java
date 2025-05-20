package com.example.ex01.controller;

import com.example.ex01.model.Direccion;
import com.example.ex01.model.Estudiante;
import com.example.ex01.service.EstudianteService;
import com.example.ex01.repository.DireccionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/estudiantes")
public class EstudianteController {

    @Autowired
    private EstudianteService estudianteService;

    @Autowired
    private DireccionRepository direccionRepository;

    @GetMapping
    public List<Estudiante> listarEstudiantes() {
        return estudianteService.obtenerTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Estudiante> obtenerEstudiante(@PathVariable Long id) {
        return estudianteService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/estudiantesPorCiudad")
    public ResponseEntity<List<Estudiante>> obtenerEstudiantesPorCiudad(@RequestParam String ciudad) {
        List<Estudiante> estudiantes = estudianteService.obtenerPorCiudad(ciudad);
        if (estudiantes.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(estudiantes);
    }

    @PostMapping
    public Estudiante crearEstudiante(@RequestBody Estudiante estudiante) {
        Direccion direccion = direccionRepository.findById(estudiante.getDireccion().getId())
                .orElseThrow(() -> new IllegalArgumentException("La dirección no existe"));
        estudiante.setDireccion(direccion);
        return estudianteService.guardar(estudiante);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarEstudiante(@PathVariable Long id) {
        estudianteService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
