/* Asincronía y módulos ES
🟢 PROMESAS
ex01. Promesa básica
Crea una función espera(ms) que devuelva una promesa que
se resuelva después de ms milisegundos.
Ejemplos:
espera(1000).then(() => console.log("Han pasado 1 segundos")) (no hace falta
tener en cuenta los singulares y plurales)
*/

function espera(ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
  
  //ejemplo de uso:
  espera(1000).then(() => {
    console.log("Han pasado 1 segundo");
  });
  