export async function getApi(movieId) {
    try {
      const url = `http://www.omdbapi.com/?i=${movieId}&apikey=20df60a7`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("Error al obtener películas:", error);
    }
  }
  