/* Manipulación del DOM
(sheet04)

EX01: Cambiar el contenido de un elemento
1. Crea un archivo HTML con un <div> con un atributo id saludo que tenga el
texto “Hola, mundo!”.
2. Utilizando JavaScript, cambia el texto del <div> a “Hola, DOM!”.*/

let div = document.getElementById("saludo");
div.textContent = "¡Hola, DOM!";