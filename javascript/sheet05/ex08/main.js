/* ex08. POST con fetch
Crea un formulario en HTML con title y body.
Al enviarlo, haz un POST a:
🔗 https://jsonplaceholder.typicode.com/posts
Muestra en consola el objeto que devuelve la API.
*/

const url = 'https://jsonplaceholder.typicode.com/posts';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const fecha = document.getElementById('fecha').value;

    const data = {
      title: nombre,
      body: `${apellidos} - Fecha de nacimiento: ${fecha}`,
      userId: 1
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Respuesta del servidor:', data);
      })
      .catch((error) => {
        console.error('Error al hacer el POST:', error);
      });
  });
});
