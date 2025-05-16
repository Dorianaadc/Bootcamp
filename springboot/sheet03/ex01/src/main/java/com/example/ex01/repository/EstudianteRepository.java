import com.example.ex01.model.Estudiante;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface EstudianteRepository extends JpaRepository<Estudiante, Long> {}