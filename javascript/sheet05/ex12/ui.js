import { getUsuarios } from "./api.js";

async function mostrarUsuarios(){
const json = await getUsuarios();
      console.log(json);
      const lista = document.getElementById('lista-nombres');
      json.forEach(usuario => {
      const li = document.createElement('li');
      li.textContent = usuario.name; 
      lista.appendChild(li);
});
}

export { mostrarUsuarios };


