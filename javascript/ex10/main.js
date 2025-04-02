/*EX10 Eventos (para entornos de navegador)
Crea una página HTML boton.html con un botón. Escribe una función
mostrarClick que muestre el mensaje en la consola “¡Botón pulsado!”. Este
mensaje se debe llamar cuando se haga clic en el botón. Debe hacerse
como atributo de la etiqueta del botón.*/

let boton = document.getElementById("boton");

boton.addEventListener("click", function mostrarClick() {
console.log("Botón pulsado!!");
});


/*Crea una página HTML alerta.html Añade un campo de texto y un botón a
una página HTML. Escribe un script que muestre una alerta con el
contenido del campo de texto cuando se haga clic en el botón.*/

let botonAlerta = document.getElementById("boton-alerta");
let campoAlerta = document.getElementById("campo-alerta");

botonAlerta.addEventListener("click", function mostrarAlerta() {
campoAlerta.value = "Hola";
});
