/* EX02: Cambiar el estilo de un elemento
1. Crea un botón en tu HTML con el texto "Haz clic aquí". Para ayudarte a
seleccionarlo con JavaScript puedes ponerte un id boton .
2. Utilizando JavaScript, cambia el color de fondo del botón al hacer clic en
él.
PISTA: tras seleccionar el elemento correctamente puedes escuchar eventos a
través de addEventListener y si usas una función anónima como callback puedes
hacer referencia al elemento usando la palabra resevada this .
*/

let boton = document.getElementById("boton");

boton.addEventListener('click', function(){
this.style.backgroundColor = "rgb(177, 114, 236)"; 
});
