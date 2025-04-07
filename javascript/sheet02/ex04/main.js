/* EX04: Suma de números en un array
Crea una función sumarNumeros que sume todos los números de un array. Pista:
usa reduce .
// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5];
console.log(sumarNumeros(numeros)); // 15
*/

const numeros = [1, 2, 3, 4, 5];

function sumarNumeros(numeros){
return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

}
console.log(sumarNumeros(numeros));