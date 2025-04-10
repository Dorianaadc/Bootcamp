/* ex13. Importación dinámica
Crea un botón "Cargar matemáticas" en el HTML.
Cuando se haga clic:
Usa import('./mathUtils.js') de forma dinámica
Llama a suma(10, 5) y multiplica(10, 5)
Muestra los resultados en consola
*/
import { suma, multiplica } from "./mathUtils.js";

let boton = document.getElementById('boton');

boton.addEventListener('click', function(){
console.log(`10 + 5 = ${suma(10, 5)}`);
console.log(`10 × 5 = ${multiplica(10, 5)}`);

});