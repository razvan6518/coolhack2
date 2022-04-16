package com.thenightwatchers.coolhack2.controller;

import com.thenightwatchers.coolhack2.model.Product;
import com.thenightwatchers.coolhack2.model.Ranch;
import com.thenightwatchers.coolhack2.service.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    ProductServiceImpl productService;

    @Autowired
    public ProductController(ProductServiceImpl productService) {
        this.productService = productService;
    }

    @PostMapping
    public void addProduct(@RequestBody Product product) {
        productService.saveProduct(product);
    }

    @GetMapping("/all")
    public List<Product> getAll(){
        return productService.getAllProducts();
    }
}
