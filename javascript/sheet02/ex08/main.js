/* Ejercicio 8: Remover duplicados en un array
Dado un array de números, crea una función que elimine los números
duplicados. Pista: Set y operador spread ... . Una preguntar para que te
respondas a ti mismo... ¿Qué diferencia hay entre Set y Array ?
// Ejemplo de uso
const numeros = [1, 2, 3, 2, 4, 1, 5];
console.log(removerDuplicados(numeros)); // [1, 2, 3, 4, 5]
*/

const numeros = [1, 2, 3, 2, 4, 1, 5];
const conjunto = new Set();

function removerDuplicados(numeros){
for (let i = 0; i < numeros.length; i++) {
 conjunto.add(numeros[i]);
}
console.log(conjunto)
}

console.log(removerDuplicados(numeros));