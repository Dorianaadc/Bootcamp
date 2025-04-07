/*EX05: Validación de formulario simple
Basándote en el HTML que aparece abajo, haz que si el campo de texto está
vacío al hacer clic en "Enviar", el párrafo con id error se tiene que mostrar en
pantalla con el mensaje “Por favor, rellena el campo.” (en color rojo).
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Ejercicio 5</title>
</head>
<body>
<form id="formulario">
<input type="text" id="nombre" placeholder="Ingresa
tu nombre">
<button type="submit">Enviar</button>
<p id="error" style="display: none;"></p>
</form>
</body>
</html>
*/

let enviar = document.getElementById("enviar");
let nombre = document.getElementById("nombre");
let error = document.getElementById("error");

enviar.addEventListener('click', function(){
if(nombre.value.trim() == ""){
error.style.display = "block";
}

});
