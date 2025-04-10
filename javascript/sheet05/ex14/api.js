export async function getUsuarios() {
    try {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error ${response.status}`);
    return await response.json();
    } catch (error) {
    console.error("Error al obtener usuarios:", error);
    }
}
          
export async function getPosts(userId) {
    try {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error ${response.status}`);
    return await response.json();
    } catch (error) {
    console.error("Error al obtener posts:", error);
    }
}
        