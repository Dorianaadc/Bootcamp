/*EX13 Generador de Números Aleatorios
Escribe una función que genere un número aleatorio entre un rango
especificado por el usuario.
*/

function generarNumAleatorio(){
let numeroMin = prompt("Escriba el numero menor para el rango");
numeroMin = Number(numeroMin);
let numeroMax = prompt("Escriba el numero mayor para el rango");
numeroMax = Number(numeroMax);

let numeroAleatorio = Math.floor(Math.random()* (numeroMax - numeroMin + 1) + numeroMin);
return numeroAleatorio;
}

let resultado = document.getElementById("resultado");
let boton = document.getElementById("mostrar");

boton.addEventListener("click", function() {
    let numeroGenerado = generarNumAleatorio();
    resultado.textContent = "El número aleatorio es: " + numeroGenerado;
});
