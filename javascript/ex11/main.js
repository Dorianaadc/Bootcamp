/* EX11 Manipulación del DOM (para entornos de navegador)
Crea una página HTML manipulacion.html que contenta
Una caja de texto junto a un botón “Añadir elemento”
Justo debajo habrá una lista desordenada.
Escribe un script que añada un nuevo elemento a la lista cada vez que
se haga clic en un botón con el texto “Añadir elemento”. El
comportamiento debe ser el siguiente:
Habrá que transformar el contenido de la caja de texto para que no
tenga espacios al principio ni al final antes de continuar con los
siguientes requisitos.
Si el texto está vacío deberás mostrar una alerta indicando “El texto
no puede estar vacío”
En caso de que el texto no esté vacío se añadirá a la lista.*/

let campoTexto = document.getElementById("campo");
let boton = document.getElementById("boton");

boton.addEventListener("click", function agregarElemento() {
  let texto = campoTexto.value.trim(); 

  if (texto !== "") {
    let lista = document.getElementById("lista");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = texto;
    lista.appendChild(nuevoElemento);

    campoTexto.value = ""; 
    campoTexto.focus(); 
  } else {
    alert("El texto no puede estar vacío");
  }
});


/*Crea una página HTML magia.html con un elemento de tipo <div> . Escribe
un script que cambie el color de fondo de ese div cuando se pase el ratón sobre él 
y lo restablezca cuando el ratón se retire.*/

let divFondo = document.querySelector(".fondo");

divFondo.addEventListener("mouseover", function() {
  divFondo.style.backgroundColor = "blue"; 
});

divFondo.addEventListener("mouseout", function() {
  divFondo.style.backgroundColor = "rgb(142, 52, 225)"; 
});
