package com.thenightwatchers.coolhack2.repository;

import com.thenightwatchers.coolhack2.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo  extends JpaRepository<Product, Long> {
    Product getProductById(Long id);
}
