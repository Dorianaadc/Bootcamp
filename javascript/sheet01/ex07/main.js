/*EX07 Arreglos
Crea un arreglo con los nombres de los días de la semana e imprime cada
uno de ellos utilizando un bucle.
Escribe una función sumarArreglo que reciba un arreglo de números y
devuelva la suma de todos los números en el arreglo.
*/

// Dias de semana
const array = ["lunes","martes","miercoles","jueves","viernes"];
array.forEach(element => {
    console.log(element);
});

// Funcion sumar
let suma = 0;
const numeros = [1,2,3,4,5];

function sumarArreglo(suma){
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
console.log("La suma es de " + suma)
}

console.log(sumarArreglo(suma));