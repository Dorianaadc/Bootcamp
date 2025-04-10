/* 5. Esperas en secuencia
Crea una función cuentaRegresiva() que:
Muestre "3..." , espere 1 segundo.
Luego "2..." , espere otro segundo.
Luego "1..." , espere otro segundo.
Finalmente "¡Despegue!" .
Usa await espera(ms) dentro de un async .
*/

function espera(ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }


async function cuentaRegresiva(ms){
try {
await espera(ms);
    console.log("3..")
    await espera(ms);
    console.log("2..")
    await espera(ms);
    console.log("1..")
}catch (error) {
    console.log("error");
    throw error;
}finally{
console.log("despegue")
    }
}
cuentaRegresiva(1000);


  