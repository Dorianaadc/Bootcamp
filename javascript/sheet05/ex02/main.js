/* ex02. Encadenamiento de promesas
Crea una serie de funciones que devuelvan promesas y
encadénalas para ejecutar tareas en orden. Por ejemplo,
puedes simular un flujo de autenticación encadenando
promesas implementando:
loginUsuario() : retorna una promesa que se resuelve con "usuario123" tras 1
segundo.
obtenerPerfil(usuario) : retorna una promesa que se resuelve con { nombre: "Ana", rol:
"admin" } tras 1 segundo.
mostrarDashboard(perfil) : muestra en consola "Bienvenida, Ana (admin)" .
Encadena las llamadas con .then() .
*/

function espera(ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

function loginUsuario(){
return new Promise(resolve => {
    espera(1000).then(() => {
        resolve("usuario123");
    });
});
}

function obtenerPerfil(usuario){
    return new Promise(resolve => {
        espera(1000).then(() => {
            resolve({ nombre: "Ana", rol: "admin"});
        });
    });
    }

function mostrarDashboard(perfil){
    console.log(`Bienvenida, ${perfil.nombre} (${perfil.rol})`);
}

loginUsuario().then(usuario => {
    console.log(`${usuario} ha iniciado sesión`);
    return obtenerPerfil(usuario); 
}).then(perfil => {
    mostrarDashboard(perfil); 
}).catch(error => {
    console.error("Error en el flujo de autenticación:", error);
});
