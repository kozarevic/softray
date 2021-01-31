package com.task.softray.controller;

import com.task.softray.model.User;
import com.task.softray.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/user")
public class UserController {
    
    @Autowired
    private UserRepo userRepo;

    @GetMapping
    public List<User> users() {
        return userRepo.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody User user) {
        userRepo.save(user);
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable("id") long id) {
        return userRepo.getOne(id);
    }
}
