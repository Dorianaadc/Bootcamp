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
      