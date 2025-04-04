/* EX09: Palíndromo
Crea una función esPalindromo que verifique si una cadena es un palíndromo
(se lee igual de adelante hacia atrás). Pista: Mira el ejercicio 6.
// Ejemplo de uso
const texto = "A man, a plan, a canal, Panama";
console.log(esPalindromo(texto)); // true
console.log(esPalindromo("Hola mundo")); // false
*/
const texto = "A man, a plan, a canal, Panama";

function esPalindromo(texto){
let text = texto.replace(/[^a-zA-Z]/g, '').toLowerCase();
return text === text.split('').reverse().join('');
}

console.log(esPalindromo(texto));
console.log(esPalindromo("Hola mundo"));



