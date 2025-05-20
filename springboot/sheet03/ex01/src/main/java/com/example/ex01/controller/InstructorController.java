package com.example.ex01.controller;

import com.example.ex01.model.Instructor;
import com.example.ex01.service.InstructorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/instructores")
public class InstructorController {

    @Autowired
    private InstructorService instructorService;

    @GetMapping
    public List<Instructor> listarInstructor() {
        return instructorService.obtenerTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Instructor> obtenerInstructor(@PathVariable Long id) {
        return instructorService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Instructor crearInstructr(@RequestBody Instructor instructor) {
        return instructorService.guardar(instructor);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarInstructor(@PathVariable Long id) {
        instructorService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
