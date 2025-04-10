/* ex10. Manejo de errores en fetch
Añade manejo de errores en los ejercicios anteriores con
try/catch.
Si el fetch falla o !response.ok , muestra "Error al conectar con el
servidor" .
*/

//07
async function obtenerNombres(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const json = await response.json();
          console.log(json);
          const lista = document.getElementById('lista-nombres');
          json.forEach(usuario => {
          const li = document.createElement('li');
          li.textContent = usuario.name; 
          lista.appendChild(li);
    });
    } catch (error) {
        console.error(error.message);
     }
    }
    
    obtenerNombres();
    
    
    //08
    async function formulario() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
      
        document.addEventListener('DOMContentLoaded', () => {
          const form = document.querySelector('form');
      
          form.addEventListener('submit', async (e) => {
            e.preventDefault();
      
            const nombre = document.getElementById('nombre').value;
            const apellidos = document.getElementById('apellidos').value;
            const fecha = document.getElementById('fecha').value;
      
            const data = {
              title: nombre,
              body: `${apellidos} - Fecha de nacimiento: ${fecha}`,
              userId: 1
            };
      
            try {
              const response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });
      
              const result = await response.json();
              console.log('Respuesta del servidor:', result);
            } catch (error) {
              console.error('Error al hacer el POST:', error);
            }
          });
        });
      }
      
      formulario();
      