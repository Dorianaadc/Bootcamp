/*EX09 Manipulación de Cadenas
-Escribe una función invertirCadena que reciba una cadena de texto y
devuelva la cadena invertida.*/

function invertirCadena(cadena){
for (let i = cadena.length; i >= 0; i--) {
console.log(cadena[i]);
 }
}
console.log(invertirCadena("hola"));

/*-Escribe una función contarVocales que cuente el número de vocales en una
cadena de texto.*/

const vocales = ["a","e","i","o","u"];
let contar = 0;
function contarVocales(texto){
vocales.forEach(element => {
    if(texto.includes(element)){
        contar++;
    }
});

console.log("Hay " + contar + " vocales")
}

console.log(contarVocales("Hola"))