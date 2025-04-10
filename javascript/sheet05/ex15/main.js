/* ex15. Buscador de películas con OMDB
Crea un buscador con la API de OMDB:
🔗 https://www.omdbapi.com/?apikey=tu_api_key&s=batman
Requisitos:
Input de búsqueda
Mostrar los títulos e imágenes de resultados
Modularizado en api.js , ui.js , main.js
async/await + fetch + manejo de errores
💡 Usa este sitio para conseguir una API key gratuita:
https://www.omdbapi.com/apikey.aspx
*/

import { mostrar } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  mostrar();
});
