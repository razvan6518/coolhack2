package com.razvan.yourownchef.controller;

import com.razvan.yourownchef.model.AppUser;
import com.razvan.yourownchef.service.AppUserService;
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
    public void addChef(@RequestBody AppUser appUser) {
        appUserService.addChef(appUser);
    }

}
