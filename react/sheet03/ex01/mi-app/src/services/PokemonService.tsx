export async function conexionApi() {
    try {
      const url = 'https://pokeapi.co/api/v2/pokemon';
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("Error al obtener pokemones:", error);
    }
  }
  
  export async function actualizarPokemon(url: string) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Error ${res.status}`);
      return await res.json();
    } catch (error) {
      console.error("Error al obtener detalles:", error);
    }
  }
  
  export async function getEvolucion(id: number) {
    try {
      const especieUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
      const especieRes = await fetch(especieUrl);
      const especieData = await especieRes.json();
  
      const evolucionRes = await fetch(especieData.evolution_chain.url);
      const evolucionData = await evolucionRes.json();
  
      return evolucionData;
    } catch (error) {
      console.error(`Error al obtener evolución del Pokémon con ID ${id}:`, error);
      return null;
    }
  }
   