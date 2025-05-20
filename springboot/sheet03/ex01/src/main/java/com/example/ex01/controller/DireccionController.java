package com.example.ex01.controller;

import com.example.ex01.model.Direccion;
import com.example.ex01.service.DireccionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/direccion")
public class DireccionController {

    @Autowired
    private DireccionService direccionService;

    @GetMapping
    public List<Direccion> listarDirecciones() {
        return direccionService.obtenerTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Direccion> obtenerDireccion(@PathVariable Long id) {
        return direccionService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Direccion crearDireccion(@RequestBody Direccion direccion) {
        return direccionService.guardar(direccion);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarDireccion(@PathVariable Long id) {
        direccionService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
