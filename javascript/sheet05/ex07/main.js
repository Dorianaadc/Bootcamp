/* 🟠 FETCH
ex07. GET con fetch
Usa fetch para obtener datos de la API pública de usuarios:
🔗 https://jsonplaceholder.typicode.com/users
Muestra los nombres en consola o en el DOM. Por ejemplo,con el siguiente formato:
Usuarios:
- Leanne Graham
- Ervin Howell
- ...*/

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
.then(response => response.json())
.then(data => {
const lista = document.getElementById('lista-nombres');
data.forEach(usuario => {
const li = document.createElement('li');
li.textContent = usuario.name; 
lista.appendChild(li);
});
}).catch(error => console.error('Error:', error));
