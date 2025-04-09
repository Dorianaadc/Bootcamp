/* EX08: Alternar clase con classList.toggle
1. Crea un <div> con texto y una clase llamada “resaltado” que aplique un
fondo amarillo (aquí entra en juego CSS también).
2. Crea un botón con el texto “Alternar resaltado” que al hacer clic, alterna la
clase “resaltado” en el <div> .
*/

let resaltado = document.getElementsByClassName('resaltado');
let boton = document.getElementById('boton');

boton.addEventListener('click', function(){
resaltado[0].classList.toggle("resaltado");

});
