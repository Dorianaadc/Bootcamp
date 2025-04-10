import { getPosts, getUsuarios } from "./api.js";

export async function mostrarUsuarios() {
  const usuarios = await getUsuarios();
  const lista = document.getElementById("lista-nombres");

  usuarios.forEach((usuario) => {
    const li = document.createElement("li");
    li.textContent = usuario.name;
    li.style.cursor = "pointer";
    li.addEventListener("click", () => mostrarPosts(usuario.id));
    lista.appendChild(li);
  });
}

export async function mostrarPosts(userId) {
  const posts = await getPosts(userId);
  const contenedor = document.getElementById("posts-lista");
  contenedor.innerHTML = '';

  posts.forEach((post) => {
    const p = document.createElement("p");
    p.textContent = post.title;
    contenedor.appendChild(p);
  });
}
