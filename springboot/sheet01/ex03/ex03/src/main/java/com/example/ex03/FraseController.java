import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/frases")
public class FraseController {

    private List<Frase> frases = new ArrayList<>();
    private Long nextId = 1L;

    // Constructor con algunas frases iniciales
    public FraseController() {
        frases.add(new Frase(nextId++, "El éxito es la suma de pequeños esfuerzos repetidos cada día", "Robert Collier"));
        frases.add(new Frase(nextId++, "Cree en ti mismo y todo será posible", "Desconocido"));
    }

    // GET /frases – Lista todas las frases
    @GetMapping
    public List<Frase> listarFrases() {
        return frases;
    }

    // GET /frases/{id} – Devuelve una frase por ID
    @GetMapping("/{id}")
    public Frase obtenerFrasePorId(@PathVariable Long id) {
        return frases.stream()
                     .filter(frase -> frase.getId().equals(id))
                     .findFirst()
                     .orElseThrow(() -> new RuntimeException("Frase no encontrada"));
    }

    // POST /frases – Añade una nueva frase
    @PostMapping
    public Frase crearFrase(@RequestBody Frase nuevaFrase) {
        nuevaFrase.setId(nextId++);
        frases.add(nuevaFrase);
        return nuevaFrase;
    }
}
