package com.example.ex01.controller;

import com.example.ex01.model.Frase;
import com.example.ex01.repository.FraseRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/frases")
public class FraseController {

    private final FraseRepository fraseRepository;

    public FraseController(FraseRepository fraseRepository) {
        this.fraseRepository = fraseRepository;
    }

    @GetMapping
    public List<Frase> getAllFrases() {
        return fraseRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Frase> getFraseById(@PathVariable Long id) {
        return fraseRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Frase addFrase(@RequestBody Frase frase) {
        return fraseRepository.save(frase);
    }
}
