import org.springframework.data.jpa.repository.JpaRepository;
import com.ex01.model.Frase;

public interface FraseRepository extends JpaRepository<Frase, Long> {
    
}
