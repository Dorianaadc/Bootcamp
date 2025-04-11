export async function getApi() {
    try {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error ${response.status}`);
    return await response.json();
    } catch (error) {
    console.error("Error al obtener pokemones:", error);
    }
}

export async function getEvolucionPokemon() {
    let numPokemon = 20;
     const baseUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
    try {
        for (let i = 1; i <= numPokemon.length; i++) {
    const url = `${baseUrl}${i}`;
    const response = await fetch(url);
      
    if (!response.ok) throw new Error(`Error ${response.status}`);
    return await response.json();
      }
    } catch (error) {
    console.error("Error al obtener la evolucion del pokemon:", error);
    }
}
   
  
