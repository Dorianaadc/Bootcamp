import { getApi, getEvolucionPokemon } from "./api.js";

export async function mostrarPokemones() {
  const json = await getApi();
  console.log(json);

  const contenedor = document.querySelector(".tarjetas");
  contenedor.innerHTML = ""; 

  for (const pokemon of json.results) {
    const res = await fetch(pokemon.url);
    const data = await res.json();

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const contenido = document.createElement("div");
    contenido.classList.add("contenido");

    const contenedorImagen = document.createElement("div");
    contenedorImagen.classList.add("imagen");

    const id = document.createElement("div");
    id.classList.add("texto-imagen");
    id.textContent = "ID / " + data.id;

    const imagen = document.createElement("img");
    imagen.src = data.sprites.front_default;
    imagen.alt = data.name;

    contenedorImagen.appendChild(imagen);
    contenedorImagen.appendChild(id);

    const nombre = document.createElement("p");
    nombre.textContent = data.name;

    const tipos = document.createElement("div");
    tipos.classList.add("botones");

    data.types.forEach(tipoInfo => {
      const tipo = document.createElement("button");
      tipo.classList.add("boton");
      tipo.textContent = tipoInfo.type.name;
      tipos.appendChild(tipo);
    });

    contenido.appendChild(contenedorImagen); 
    contenido.appendChild(nombre);
    contenido.appendChild(tipos);
    tarjeta.appendChild(contenido);
    contenedor.appendChild(tarjeta);
  }

  const jsonEvolucion = await getEvolucionPokemon();
  console.log(jsonEvolucion);

  for (const evolucion of jsonEvolucion.results) {
      const respuesta = await fetch(evolucion.url);
      const datos = await respuesta.json();

      const evo = document.createElement("p");
      evo.textContent = "Evoluciona de: " + datos.name;

      contenido.appendChild(evo);
  }
}


