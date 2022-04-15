package com.thenightwatchers.coolhack2.controller;

import com.thenightwatchers.coolhack2.model.AppUser;
import com.thenightwatchers.coolhack2.model.Ranch;
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

    @Autowired
    public AppUserController(UserServiceImpl appUserService) {
        this.appUserService = appUserService;
    }

    @PostMapping
    public void addUser(@RequestBody AppUser appUser) {
        appUserService.saveUser(appUser);
    }

    @PostMapping("/{userId}/{ranchId}")
    public ResponseEntity<?> addRanchToUser(@PathVariable Long userId, @PathVariable Long ranchId) {
        appUserService.addRanch(userId, ranchId);
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
    public ResponseEntity<AppUser> getUserByEmail(@PathVariable String email) {
        if (appUserService.getAllByEmail(email).size() > 0)
            return ResponseEntity.status(200).build();
        else
            return ResponseEntity.status(500).build();
    }
}
