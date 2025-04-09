/* 6. Paralelismo con Promise.all
Simula 3 consultas a APIs que toman tiempos distintos:
obtenerTemperatura() tarda 2s y devuelve "22°C"
obtenerHumedad() tarda 1.5s y devuelve "60%"
obtenerViento() tarda 1s y devuelve "15 km/h"
Crea una función que use Promise.all para obtener los 3 valores a la vez y
mostrarlos en consola como:
=== Clima ===
Temperatura: 22°C
Humedad: 60%
Viento: 15 km/h
*/

function espera(ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

async function obtenerTemperatura(ms){
await espera(ms);
console.log("Temperatura: 22ºC")
}

async function obtenerHumedad(ms){
await espera(ms);
console.log("Humedad: 60%")
}

async function obtenerViento(ms){
await espera(ms);
console.log("Viento: 15 km/h")
}

console.log("=== Clima ===")
obtenerTemperatura(2000);
obtenerHumedad(1500);
obtenerViento(1000);
