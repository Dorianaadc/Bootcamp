/* EX02: Ordenar palabras alfabéticamente
Dado un array de palabras, crea una función ordenarPalabras que las ordene
alfabéticamente. Pista: usa sort .
// Ejemplo de uso
const palabras = ["banana", "manzana", "naranja", "uva"];
console.log(ordenarPalabras(palabras)); // ["banana", "manz
ana", "naranja", "uva"]
*/

const palabras = ["banana", "a","z","manzana", "naranja", "uva"];

function ordenarPalabras(palabras){
return palabras.sort();
}
console.log(ordenarPalabras(palabras));
