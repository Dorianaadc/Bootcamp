package com.example.ejercicio01;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.Arrays;
import java.util.List;

@Service
public class PublicacionService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String BASE_URL = "https://jsonplaceholder.typicode.com/posts";

    // Obtener todas las publicaciones
    public List<Publicaciones> getAllPosts() {
        Publicaciones[] posts = restTemplate.getForObject(BASE_URL, Publicaciones[].class);
        return Arrays.asList(posts);
    }

    // Obtener una publicación por ID
    public Publicaciones getPostById(int id) {
        return restTemplate.getForObject(BASE_URL + "/" + id, Publicaciones.class);
    }
}


