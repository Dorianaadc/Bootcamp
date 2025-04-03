/*EX06 Funciones
Escribe una función saludar que reciba un nombre y salude a esa persona
por su nombre.
Escribe una función mayor que reciba dos números y devuelva el mayor de
ellos.
*/
const nombre = "dori"

function saludar(nombre){
console.log("Hola " + nombre);
}
console.log(saludar(nombre));

const numero1 = 2;
const numero2 = 3;

function mayor(numero1,numero2){
    if(numero1 > numero2 ){
      console.log(numero1 + " es mayor que " + numero2);  
    }else{
        console.log(numero2 + " es mayor que " + numero1);  
    }
}
console.log(mayor(numero1,numero2));