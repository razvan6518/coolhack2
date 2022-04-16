package com.thenightwatchers.coolhack2.controller;

import com.thenightwatchers.coolhack2.model.Product;
import com.thenightwatchers.coolhack2.model.Ranch;
import com.thenightwatchers.coolhack2.service.ProductServiceImpl;
import com.thenightwatchers.coolhack2.service.RanchServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/ranch")
@CrossOrigin(origins = "http://localhost:3000")
public class RanchController {

    RanchServiceImpl ranchService;
    ProductServiceImpl productService;

    @Autowired
    public RanchController(RanchServiceImpl ranchService, ProductServiceImpl productService) {
        this.ranchService = ranchService;
        this.productService = productService;
    }

    @PostMapping
    public void addRanch(@RequestBody Ranch ranch) {
        ranchService.saveRanch(ranch);
    }

    @PostMapping("/{id}")
    public ResponseEntity<?> addProductToRanch(@RequestBody Product product, @PathVariable Long id) {
        long productId = productService.addProduct(product);
        ranchService.addProduct(id, productId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/all")
    public List<Ranch> getAll(){
        return ranchService.getAll();
    }

    @GetMapping("/products/{id}")
    public List<Product> getAllProducts(@PathVariable Long id){
        Ranch ranch = ranchService.getRanchById(id);
        return (List<Product>) ranch.getProducts();
    }

}
