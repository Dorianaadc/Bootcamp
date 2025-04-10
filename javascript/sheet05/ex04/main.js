/* 🔵 ASYNC / AWAIT
ex04. Reescribir flujo con async/await
Reescribe el ejercicio anterior usando async/await y
try/catch.
La salida debe ser la misma: "Bienvenida, Ana (admin)" o el error.
*/

async function obtenerAleatoriamente() {
    try {
    let num = Math.random();    
    console.log(num); 
    } catch (error) {
        if (num < 0.5) {
        console.log("Error al obtener el perfil");
        throw error;
    }
  }
}
    
async function obtenerPerfil(usuario) {
try {
   await obtenerAleatoriamente();
   usuario.nombre = "Ana";
   usuario.rol = "admin" 
} catch (error) {
   console.log("error");
   throw error;
  }
}

async function mostrarDashboard(){
let perfil = {};    
    
try {
    await obtenerPerfil(perfil);
    console.log(`Bienvenida, ${perfil.nombre} (${perfil.rol})`);
}catch (error) {
    console.log("error, algo salio mal")
    }
}
    
mostrarDashboard();




