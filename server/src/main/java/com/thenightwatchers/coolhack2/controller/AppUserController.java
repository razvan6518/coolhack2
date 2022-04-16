package com.thenightwatchers.coolhack2.controller;

import com.thenightwatchers.coolhack2.model.AppUser;
import com.thenightwatchers.coolhack2.model.Ranch;
import com.thenightwatchers.coolhack2.service.RanchServiceImpl;
import com.thenightwatchers.coolhack2.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class AppUserController {

    UserServiceImpl appUserService;
    RanchServiceImpl ranchService;

    @Autowired
    public AppUserController(UserServiceImpl appUserService, RanchServiceImpl ranchService) {
        this.appUserService = appUserService;
        this.ranchService = ranchService;
    }

    @PostMapping
    public void addUser(@RequestBody AppUser appUser) {
        appUserService.saveUser(appUser);
    }

    @PostMapping("/{userId}/{ranchId}")
    public ResponseEntity<?> addRanchToUser(@PathVariable Long userId, @RequestBody Ranch ranch) {
        Long id = ranchService.addRanch(ranch);
        appUserService.addRanch(userId, id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}/ranches")
    public Set<Ranch> getAllRanchesForUser(@PathVariable Long id) {
        return appUserService.getAllRanchesForUser(id);
    }

    @GetMapping("/all")
    public List<AppUser> getAllUsers() {
        return appUserService.getAll();
    }

    @GetMapping("/email/{email}")
    public AppUser getUserByEmail(@PathVariable String email) {
        if (appUserService.getAllByEmail(email).size() > 0)
            return appUserService.getAllByEmail(email).get(0);
        else
            return null;
    }
}
