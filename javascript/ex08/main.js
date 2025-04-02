/*EX08 Objetos
- Crea un objeto que represente a una persona con propiedades como
nombre, edad y ciudad. Imprime cada propiedad del objeto en la consola
(accediendo a propiedades de objetos).*/

const objetoPersona = {
nombre: "Ana",
edad: 30,
ciudad: "Madrid"
};
console.log("Nombre: " + objetoPersona.nombre + ", " + "Edad: " + objetoPersona.edad + ", " + "Ciudad: " + objetoPersona.ciudad);

/*- Escribe una función describirPersona que reciba un objeto y devuelva una
cadena de texto con las propiedades del objeto.
*/

const persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid",     
    toString: function describirPersona() {
      return `Nombre: ${this.nombre}, Edad: ${this.edad}, Ciudad: ${this.ciudad}`;
    }
  };

  console.log("Persona: " + persona);