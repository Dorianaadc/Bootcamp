package com.example.ejercicio01;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/posts")
public class PublicacionController {

    @Autowired
    private PublicacionService publicacionService;

    @GetMapping
    public List<Publicaciones> getAllPosts() {
        return publicacionService.getAllPosts();
    }

    @GetMapping("/{id}")
    public Publicaciones getPostById(@PathVariable int id) {
        return publicacionService.getPostById(id);
    }
}
