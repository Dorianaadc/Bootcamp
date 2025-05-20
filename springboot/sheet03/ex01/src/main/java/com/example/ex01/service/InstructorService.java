package com.example.ex01.service;


import com.example.ex01.model.Instructor;
import com.example.ex01.repository.InstructorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InstructorService{

    @Autowired
    private InstructorRepository instructorRepository;

    public List<Instructor> obtenerTodos() {
        return instructorRepository.findAll();
    }

    public Optional<Instructor> obtenerPorId(Long id) {
        return instructorRepository.findById(id);
    }

    public Instructor guardar(Instructor instructor) {
        return instructorRepository.save(instructor);
    }

    public void eliminar(Long id) {
        instructorRepository.deleteById(id);
    }
}
