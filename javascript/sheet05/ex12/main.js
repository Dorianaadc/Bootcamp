/* ex12. Modulariza una mini app
Divide el código en 3 archivos:
api.js : función getUsuarios() que usa fetch con async/await
ui.js : función mostrarUsuarios(lista) que renderiza una lista al DOM
main.js : orquesta las dos anteriores al cargar la página
Usa https://jsonplaceholder.typicode.com/users .
*/

import { mostrarUsuarios } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  mostrarUsuarios();
});
