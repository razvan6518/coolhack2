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

    @Autowired
    public RanchController(RanchServiceImpl ranchService) {
        this.ranchService = ranchService;
    }

    @PostMapping
    public void addRanch(@RequestBody Ranch ranch) {
        ranchService.saveRanch(ranch);
    }

    @PostMapping("/{id}/{productId}")
    public ResponseEntity<?> addProductToRanch(@PathVariable Long productId, @PathVariable Long id) {
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
