/*EX03: Convertir a mayúsculas
Dado un array de strings, crea una función convertirMayusculas que convierta
todos los elementos a mayúsculas. Pista: usa map .
// Ejemplo de uso
const palabras = ["hola", "mundo"];
console.log(convertirMayusculas(palabras)); // ["HOLA", "MUNDO"]
*/

const palabras = ["hola", "mundo"];

function convertirMayusculas(palabras){
return palabras.map(palabra => palabra.toUpperCase());
}

console.log(convertirMayusculas(palabras)); 




