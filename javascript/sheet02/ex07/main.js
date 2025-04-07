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
vocales.forEach(element => {
    if(texto.includes(element)){
           contar++;  
    }
});

console.log(contar)
}

console.log(contarVocales(texto))