/* EX03: Agregar y eliminar elementos del DOM
1. Crea un botón que diga “Agregar Elemento”.
2. Al hacer clic en el botón, agrega un nuevo <li> con el texto “Elemento
nuevo” a una lista <ul> .
3. Crea otro botón que elimine el último elemento de la lista.
*/

let agregarElemento = document.getElementById("boton");
let eliminarElemento = document.getElementById("eliminar");
let elementos = document.getElementById("nuevos");

agregarElemento.addEventListener('click', function(){
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Elemento nuevo";
    elementos.appendChild(nuevoElemento);
});

eliminarElemento.addEventListener('click', function(){
elementos.removeChild(elementos.lastElementChild);
});
