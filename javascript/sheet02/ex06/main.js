/* EX06: Revertir una cadena
Crea una función que reciba una cadena y la retorne invertida. Pista: quizás
necesites reverse y join .
// Ejemplo de uso
const texto = "JavaScript";
console.log(revertirCadena(texto)); // "tpircSavaJ"
*/
const texto = "JavaScript";

function revertirCadena(texto) {
    return texto.split('').reverse().join('');
}
  console.log(revertirCadena(texto)); 
  
