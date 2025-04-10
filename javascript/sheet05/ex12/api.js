export async function getUsuarios(){
const url = 'https://jsonplaceholder.typicode.com/users';

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      return await response.json();
}
