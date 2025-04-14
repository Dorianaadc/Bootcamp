import { getApi, getEvolucion } from "./api.js";

export async function mostrarPokemones() {
  const json = await getApi();
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

    const evolucionData = await getEvolucion(data.id);

    if (evolucionData) {
      const cadena = evolucionData.chain;
      let nombres = [cadena.species.name];

      let actual = cadena;
      while (actual.evolves_to.length > 0) {
        actual = actual.evolves_to[0];
        nombres.push(actual.species.name);
      }

      const posicion = nombres.indexOf(data.name.toLowerCase());
      if (posicion > 0) {
        const labelEvo = document.createElement("p");
        labelEvo.textContent = "Evoluciona de:";
        labelEvo.style.fontWeight = "bold";

        const textoEvo = document.createElement("p");
        textoEvo.classList.add("evolucion");
        textoEvo.textContent = nombres[posicion - 1];

        contenido.appendChild(labelEvo);
        contenido.appendChild(textoEvo);
      }
    }

    tarjeta.appendChild(contenido);
    contenedor.appendChild(tarjeta);
  }
}
