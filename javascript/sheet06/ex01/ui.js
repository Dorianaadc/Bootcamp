import { getApi} from "./api.js";

export async function mostrarNombres(){
const json = await getApi();
      console.log(json);
      const lista = document.getElementById('lista-nombres');
      json.results.forEach(usuario => {
      const li = document.createElement('li');
      li.textContent = usuario.name; 
      lista.appendChild(li);
});
}

