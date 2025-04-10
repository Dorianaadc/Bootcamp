/* 🧩 EXTRA (combinados)
ex14. App de usuarios
Construye una mini app que:
1. Cargue los usuarios desde https://jsonplaceholder.typicode.com/users
2. Al hacer clic en un usuario, cargue sus posts ( /posts?userId=ID )
3. Muestra los títulos de sus publicaciones
4. Usa módulos ( api.js , ui.js , main.js )
5. Usa async/await y try/catch
*/

import { mostrarUsuarios } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  mostrarUsuarios();
});

