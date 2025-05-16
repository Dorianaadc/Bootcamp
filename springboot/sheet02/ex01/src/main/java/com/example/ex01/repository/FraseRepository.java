package com.example.ex01.repository;
import com.example.ex01.model.Frase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FraseRepository extends JpaRepository<Frase, Long> {
    
}
