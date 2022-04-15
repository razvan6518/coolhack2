package com.razvan.yourownchef.repository;

import com.razvan.yourownchef.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {
}
