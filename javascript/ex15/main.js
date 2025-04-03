/* EX15 Cronómetro
Crea un cronómetro simple que comience a contar al hacer clic en un botón
y se detenga al hacer clic en otro botón. El contador deberá mostrar el
número de segundos transcurridos.
*/

let botonIniciar = document.getElementById("iniciar");
let botonDetener = document.getElementById("detener");
let resultado = document.getElementById("resultado");
resultado.textContent = 0;

let tiempo = 0;
let intervalo;

botonIniciar.addEventListener("click", function() {
    if (!intervalo) {
        intervalo = setInterval(function() {
            tiempo++;
            resultado.textContent = tiempo + " segundos";
        }, 1000); 
    }
});

botonDetener.addEventListener("click", function() {
    clearInterval(intervalo); 
    intervalo = null; 
});
