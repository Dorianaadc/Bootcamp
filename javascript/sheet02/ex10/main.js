/*EX10: Encontrar la palabra más larga
Dado un array de palabras, crea una función que encuentre la palabra más
larga. Pista: Usa reduce .
// Ejemplo de uso
const palabras = ["hola", "mundo", "javascript", "programac
ión"];
console.log(palabraMasLarga(palabras)); // "programación"*/


const palabras = ["hola", "mundo", "javascript", "programación"];
let mayor;

function palabraMasLarga(mayor){
for (let i = 0; i < palabras.length; i++) {
if(palabras[i] > mayor){
    mayor = palabras[i];
    }
  }
console.log(mayor);
}

console.log(palabraMasLarga(palabras));

