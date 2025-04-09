/*EX07: Modificar múltiples elementos con una clase
1. Crea varios <div> con una clase común llamada "caja".
2. Crea un botón con el texto “Cambiar color” que, al hacer clic, cambie el
color de fondo de todos los <div> a amarillo.
*/

let cajas = document.getElementsByClassName('caja');
let boton = document.getElementById('boton');

boton.addEventListener('click', function(){
cajas[0].style.backgroundColor = "rgb(247, 236, 84)"; 
cajas[1].style.backgroundColor = "rgb(247, 236, 84)"; 
cajas[2].style.backgroundColor = "rgb(247, 236, 84)"; 
});


