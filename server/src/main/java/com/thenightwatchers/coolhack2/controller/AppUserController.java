package com.thenightwatchers.coolhack2.controller;

import com.thenightwatchers.coolhack2.model.AppUser;
import com.thenightwatchers.coolhack2.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class AppUserController {

    AppUserService appUserService;

    @Autowired
    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @PostMapping
    public void addUser(@RequestBody AppUser appUser) {
        appUserService.saveUser(appUser);
    }

}
