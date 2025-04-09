/* EX06: Contador con botones de incremento y decremento
1. Crea un contador que empieza en 0 y dos botones: "Incrementar" y
"Decrementar".
2. Cada vez que se pulse un botón éstos deben ajustar el valor del contador
en 1; es decir, que si pulso decrementar le restará a 1 al contador y si pulso
incrementar le añadirá uno.
3. El contador tiene que irse actualizando en pantalla cada vez que pulso un
botón.
*/

let incrementar = document.getElementById("incrementar");
let descrementar = document.getElementById("descrementar");
let contador = document.getElementById("contador");
contador.textContent = 0;

let tiempo = 0;

let intervalo = setInterval(function() {
tiempo++;
contador.textContent = tiempo + " segundos";
}, 1000); 


incrementar.addEventListener('click', function(){
contador.textContent = (tiempo + 1) + " segundos";
});

descrementar.addEventListener('click', function(){
contador.textContent = (tiempo - 1) + " segundos";
});