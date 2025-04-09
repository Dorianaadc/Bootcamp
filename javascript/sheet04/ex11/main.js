/* EX11: Marcar elementos seleccionados en una lista
1. Crea una lista de elementos desordenada con id “tareas”.
2. Esta lista desordenada tendrá tres elementos <li> como si fuese una lista
de tareas (Tarea 1, Tarea 2, Tarea 3).
3. Al hacer clic en cada elemento de la lista, agrégale la clase “seleccionado”
y quítasela a cualquier otro elemento que estuviera seleccionado.
4. Para ver la diferencia entre ellas añade CSS para los elementos que tengan
esa clase para que se vean de manera distinta añadiendo un color de fondo
y poniendo la letra en negrita.
*/

let tareas = document.querySelectorAll('#tareas li');

tareas.forEach(function(tarea) {
    tarea.addEventListener('click', function() {
        tareas.forEach(function(tarea) {
            tarea.classList.remove('seleccionado');
        });
       
        this.classList.add('seleccionado');
    });
});
