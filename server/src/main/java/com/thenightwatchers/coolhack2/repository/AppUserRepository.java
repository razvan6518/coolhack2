package com.thenightwatchers.coolhack2.repository;

import com.thenightwatchers.coolhack2.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {
}
