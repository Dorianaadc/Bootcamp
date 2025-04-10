import { getApi } from "./api.js";

export async function mostrar() {
  const movieIds = [
    "tt3896198", 
    "tt0848228",  
    "tt1825683",  
  ];

  const lista = document.getElementById('title');  

  for (let id of movieIds) {
    const json = await getApi(id);  
    console.log(json); 

    const li = document.createElement('li');
    li.textContent = json.Title;  
    lista.appendChild(li); 
}
}
