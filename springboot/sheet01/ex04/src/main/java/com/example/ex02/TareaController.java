import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tareas")
public class TareaController {

    private static List<Tarea> tareas = new ArrayList<>();
    private static Long nextId = 1L;

    static {
        tareas.add(new Tarea(nextId++, "Limpiar", false));
        tareas.add(new Tarea(nextId++, "Comer", true));
    }

    // GET /tareas – listar todas
    @GetMapping
    public List<Tarea> listarTareas(@RequestParam(required = false) Boolean completado) {
        if (completado == null) {
            return tareas;
        }
        return tareas.stream()
                .filter(t -> t.isCompletado() == completado)
                .collect(Collectors.toList());
    }

    // POST /tareas – crear nueva tarea
    @PostMapping
    public Tarea crearTarea(@RequestBody Tarea nueva) {
        nueva.setId(nextId++);
        tareas.add(nueva);
        return nueva;
    }

    // PUT /tareas/{id} – actualizar una tarea
    @PutMapping("/{id}")
    public Tarea actualizarTarea(@PathVariable Long id, @RequestBody Tarea actualizada) {
        for (Tarea tarea : tareas) {
            if (tarea.getId().equals(id)) {
                tarea.setDescripcion(actualizada.getDescripcion());
                tarea.setCompletado(actualizada.isCompletado());
                return tarea;
            }
        }
        throw new RuntimeException("Tarea no encontrada");
    }

    // DELETE /tareas/{id} – eliminar una tarea
    @DeleteMapping("/{id}")
    public void eliminarTarea(@PathVariable Long id) {
        tareas.removeIf(t -> t.getId().equals(id));
    }
}
