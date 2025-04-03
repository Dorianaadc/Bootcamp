/*EX14 Juego de Adivinanza
Escribe un programa que genere un número aleatorio entre 1 y 100 y
permita al usuario adivinarlo, indicando si el número es mayor o menor en
cada intento. Deberá mostrar en rojo los mensajes de “El número es mayor”
o “El número es menor” y en verde el texto “¡Correcto!” cuando haya
adivinado el número.
*/

let min = 1;
let max = 100;

let numeroAleatorio = Math.floor(Math.random()* (max - min + 1) + min);

let boton = document.getElementById("adivinar");
let campo = document.getElementById("escribir");

boton.addEventListener("click", function() {
    let num = campo.value.trim(); 

if (num == numeroAleatorio){
    resultado.textContent = "Correcto!"
    resultado.style.color = "green";
} else if(num < numeroAleatorio){
    resultado.textContent = "El numero es menor"
    resultado.style.color = "red";
}else if (num > numeroAleatorio){
    resultado.textContent = "El numero es mayor"
    resultado.style.color = "red";
}
campo.value = ""; 
campo.focus(); 
});