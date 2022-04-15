package com.thenightwatchers.coolhack2.repository;

import com.thenightwatchers.coolhack2.model.Ranch;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface RanchRepo extends JpaRepository<Ranch, Long> {
    Ranch getRanchById(Long id);
}
