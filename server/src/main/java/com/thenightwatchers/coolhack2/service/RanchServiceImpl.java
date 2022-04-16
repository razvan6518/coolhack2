package com.thenightwatchers.coolhack2.service;

import com.thenightwatchers.coolhack2.model.Product;
import com.thenightwatchers.coolhack2.model.Ranch;
import com.thenightwatchers.coolhack2.repository.ProductRepo;
import com.thenightwatchers.coolhack2.repository.RanchRepo;
import com.thenightwatchers.coolhack2.service.Imp.RanchService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class RanchServiceImpl implements RanchService {

    private final RanchRepo ranchRepo;
    private final ProductRepo productRepo;

    public Ranch saveRanch(Ranch ranch) {
        return ranchRepo.save(ranch);
    }

    public Long addRanch(Ranch ranch) {
        ranch = ranchRepo.save(ranch);
        ranchRepo.flush();
        return ranch.getId();
    }

    public void addProduct(Long ranchId, Long productId) {
        Ranch ranch = ranchRepo.getRanchById(ranchId);
        Product product = productRepo.getProductById(productId);
        ranch.getProducts().add(product);
        ranchRepo.save(ranch);
    }

    public List<Ranch> getAll(){
        return ranchRepo.findAll();
    }

    public Ranch getRanchById(Long id){
        return ranchRepo.getRanchById(id);
    }
}
