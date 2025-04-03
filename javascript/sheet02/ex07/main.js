/* EX07: Contar vocales en una cadena
Crea una función que cuente el número de vocales en una cadena. Pista:
puedes recorrer la cadena como si fuese un Array.
// Ejemplo de uso
const texto = "Hola Mundo";
console.log(contarVocales(texto)); // 4
*/
const vocales = ["a","e","i","o","u"];
const texto = "Hola Mundo";
let contar = 0;

function contarVocales(texto){
vocales.forEach(letra => {
if(texto.incluides(letra)){
contar++;
}
});
return contar;
}
console.log(contarVocales(texto));