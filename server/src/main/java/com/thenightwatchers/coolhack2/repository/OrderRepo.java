package com.thenightwatchers.coolhack2.repository;

import com.thenightwatchers.coolhack2.model.CustomerOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepo extends JpaRepository<CustomerOrder, Long> {
    List<CustomerOrder> getAllByRanchId(Long id);
    List<CustomerOrder> getAllByUserId(Long id);
}
