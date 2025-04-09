/* EX10: Validación visual en un formulario
Formulario que tiene un campo de texto para ingresar una dirección de correo electrónico y un
 botón para enviar. Cada vez que el campo pierda el foco:
1. Agrega la clase “error” al campo si está vacío (y borra las demás). Como
complemento, llama al método setCustomValidity añadiendo el error “Este
campo debe estar relleno”.
2. Agrega la clase “exito” si el campo está lleno (y borra las demás). En este
caso recuerda borrar el error de validación con setCustomValidity con texto
vacío “”.
El método setCustomValidity forma parte de la API de validación de
formularios, por si quieres investigar sobre ella.
*/

function validarCampo(campo) {
campo.classList.remove('error', 'exito');

    if (campo.value.trim() === '') {
    campo.classList.add('error');  
    campo.setCustomValidity('Este campo debe estar relleno');  
    } else {
    campo.classList.add('exito');  
    campo.setCustomValidity('');  
         }
    }


let correo = document.getElementById('correo');
let direccion = document.getElementById('direccion');

correo.addEventListener('blur', function() {
    validarCampo(correo);
});

direccion.addEventListener('blur', function() {
    validarCampo(direccion);
});
