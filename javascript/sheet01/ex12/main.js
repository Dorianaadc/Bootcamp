/*EX12 Calculadora Básica
Crea una calculadora simple que pueda sumar, restar, multiplicar y dividir
dos números ingresados por el usuario.
*/

let campoNumUno = document.getElementById("numero-uno");
let campoNumDos = document.getElementById("numero-dos");
let resultado = document.getElementById("resultado");

function actualizarResultado(resultadoTexto) {
    resultado.textContent = resultadoTexto;
  }
  

let botonSumar = document.getElementById("boton-sumar");
botonSumar.addEventListener("click", function() {
let numeroUno = parseFloat(campoNumUno.value.trim());
let numeroDos = parseFloat(campoNumDos.value.trim());

let suma = (numeroUno + numeroDos);
actualizarResultado("El resultado de la suma es: " + suma);
});

let botonRestar = document.getElementById("boton-restar");
botonRestar.addEventListener("click", function() {
let numeroUno = parseFloat(campoNumUno.value.trim());
let numeroDos = parseFloat(campoNumDos.value.trim());

let resta = (numeroUno - numeroDos);
actualizarResultado("El resultado de la resta es: " + resta);
});

let botonMultiplicar = document.getElementById("boton-multiplicar");
botonMultiplicar.addEventListener("click", function() {
let numeroUno = parseFloat(campoNumUno.value.trim());
let numeroDos = parseFloat(campoNumDos.value.trim());

let multiplicacion = (numeroUno * numeroDos);
actualizarResultado("El resultado de la multiplicacion es: " + multiplicacion);
});

let botonDividir = document.getElementById("boton-dividir");
botonDividir.addEventListener("click", function() {
let numeroUno = parseFloat(campoNumUno.value.trim());
let numeroDos = parseFloat(campoNumDos.value.trim());

let division = (numeroUno / numeroDos);
actualizarResultado("El resultado de la division es: " + division);
});
