/* 5. Función como parámetro en otros métodos
Las funciones de flecha son muy útiles cuando necesitas una función como
parámetro, por ejemplo, en métodos de arreglos como map , filter o reduce.*/

// Función normal
const numeros = [1, 2, 3];
const dobles = numeros.map(function(n) {
return n * 2;
});

// Función de flecha
const numeros2 = [1, 2, 3];
const dobles2 = numeros2.map((n) => n * 2);

