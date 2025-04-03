/*
EX05: Encontrar el número máximo
Dado un array de números, crea una función encontrarMaximo que retorne el
número más grande. Pista: usa una función de la librería Math con la sintaxis
extendida (operador spread ... ).
// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5];
console.log(encontrarMaximo(numeros)); // 5
*/

const numeros = [1, 2, 3, 4, 5];

function encontrarMaximo(numeros){
return Math.max(...numeros); 
}
console.log(encontrarMaximo(numeros));
