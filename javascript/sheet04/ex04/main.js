/* EX04: Manipular atributos de un elemento
1. Crea una imagen en tu HTML.
2. Crea un botón que, al hacer clic, cambie la imagen por otra URL. Puedes
usar las imágenes https://www.educima.com/imagen-alegre-s19863.jpg y
https://www.educima.com/imagen-triste-s19861.jpg
Si quieres añadirle un poco de dificultad haz que si aparece la imagen alegre te
muestre la triste y si aparece la triste aparezca la alegre cada vez que haces
clic en el botón.
*/

let imagn = document.getElementById("imagen");
let cambiar = document.getElementById("cambiar-imagen");

cambiar.addEventListener ('click', function(){
if (imagn.src === "https://www.educima.com/imagen-alegre-s19863.jpg") {
    imagn.src = "https://www.educima.com/imagen-triste-s19861.jpg";
} else {
    imagn.src = "https://www.educima.com/imagen-alegre-s19863.jpg";
}

});

