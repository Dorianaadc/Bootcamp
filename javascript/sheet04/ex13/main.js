/* Ejercicio 13: Alternar clase en múltiples elementos
1. Crea varios <div> con texto y un botón “Cambiar Todos”.
2. Al hacer clic en el botón, aplica la clase “activo” a todos los <div> si no la
tienen. Si alguno ya tiene la clase, quítasela.
3. Añade algo CSS para diferenciar cuando un div tiene la clase activo o no la
tiene.
*/

let boton = document.getElementById('cambiar');
let divs = document.querySelectorAll('.todos div');

boton.addEventListener('click', function() {
    divs.forEach(function(div) {
        div.classList.toggle('activo');
    });
});
