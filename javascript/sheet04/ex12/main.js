/* Ejercicio 12: Aplicar múltiples clases a un elemento
1. Crea un botón que al hacer clic, agregue dos clases al <div> : “grande” y
“borde”.
2. “grande” debe hacer que el texto dentro del <div> sea más grande, y
“borde” debe agregar un borde rojo.
*/

let boton = document.getElementById('agregar');
let div = document.getElementById('div');

boton.addEventListener('click', function(){
    div.classList.add('borde');
    div.classList.add('grande');
});


