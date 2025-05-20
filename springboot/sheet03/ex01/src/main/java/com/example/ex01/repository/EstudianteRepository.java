package com.example.ex01.repository;

import com.example.ex01.model.Estudiante;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


@Repository
public interface EstudianteRepository extends JpaRepository<Estudiante, Long> {
    List<Estudiante> findByDireccion_Ciudad(String ciudad);

}