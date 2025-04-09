/* ex03. Manejo de errores
Simula una operación con promesas que puede fallar
aleatoriamente. Por ejemplo, modifica obtenerPerfil() para que
falle aleatoriamente y te rechace la promesa con el mensaje
(”Error al obtener el perfil”). Captura el error y muestra “Algo
salió mal: <error>”.
Pista: Usa Math.random() para lanzar o no un error.
*/

function obtenerAleatoriamente() {
    return new Promise((resolve, reject) => {
let num = Math.random();
    if (num < 0.5) {
    reject("Error al obtener el perfil");
    } else {
    resolve(num); 
    }
 });
}
    
function obtenerPerfil() {
    return new Promise((resolve, reject) => {
    obtenerAleatoriamente().then((num) => {
    resolve({ nombre: "Ana", edad: Math.floor(num * 50) }); 
    })
    .catch((error) => {
    reject("Algo salio mal: " + error); 
    });
});
}
    
obtenerPerfil().then((usuario) => {
    console.log(usuario); 
})
.catch((error) => {
     console.log(error);
});
    