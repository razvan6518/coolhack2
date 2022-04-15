package com.thenightwatchers.coolhack2.repository;

import com.thenightwatchers.coolhack2.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepo extends JpaRepository<AppUser, Long> {
    AppUser findByUsername(String username);
    AppUser getById(Long id);
    List<AppUser> getAllByEmail(String email);
}
