package com.example.ex01.repository;
import com.example.ex01.model.Curso;
import com.example.ex01.model.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {
    Optional<Curso> findByNombre(String nombre);
    List<Curso> findByInstructorNombre(String nombre);


}