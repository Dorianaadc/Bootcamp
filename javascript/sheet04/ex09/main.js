/* EX09: Añadir y eliminar clases dinámicamente
1. Crea un cuadro ( <div> ) sin clases.
2. Agrega dos botones: uno para añadir la clase “activo” y otro para eliminarla.
3. La clase “activo” debe cambiar el color de fondo del cuadro a verde.
*/

let div = document.getElementById('cuadro');
let botonActivo = document.getElementById('activ');
let botonEliminar = document.getElementById('eliminar');

botonActivo.addEventListener('click', function(){
    div.classList.add('activoCss');
});

botonEliminar.addEventListener('click', function(){
    div.classList.remove('activoCss');
});




