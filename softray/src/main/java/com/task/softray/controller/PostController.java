package com.task.softray.controller;

import com.task.softray.model.Post;
import com.task.softray.repo.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/post")
public class PostController {

    @Autowired
    private PostRepo postRepo;

    @GetMapping
    public List<Post> posts() {
        return postRepo.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Post post) {
        postRepo.save(post);
    }

    @GetMapping("/{id}")
    public Post getPost(@PathVariable("id") long id) {
        return postRepo.getOne(id);
    }
}
