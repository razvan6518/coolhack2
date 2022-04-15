package com.thenightwatchers.coolhack2.service;

import com.thenightwatchers.coolhack2.model.Product;
import com.thenightwatchers.coolhack2.repository.ProductRepo;
import com.thenightwatchers.coolhack2.service.Imp.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class ProductServiceImpl implements ProductService {

    private final ProductRepo productRepo;

    @Override
    public Product saveProduct(Product product) {
        return productRepo.save(product);
    }
}
