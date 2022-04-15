package com.thenightwatchers.coolhack2.controller;

import com.thenightwatchers.coolhack2.model.AppUser;
import com.thenightwatchers.coolhack2.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class AppUserController {

    UserServiceImpl appUserService;

    @Autowired
    public AppUserController(UserServiceImpl appUserService) {
        this.appUserService = appUserService;
    }

    @PostMapping
    public void addUser(@RequestBody AppUser appUser) {
        appUserService.saveUser(appUser);
    }

}
