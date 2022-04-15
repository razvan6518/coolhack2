package com.thenightwatchers.coolhack2.service;

import com.thenightwatchers.coolhack2.model.CustomerOrder;
import com.thenightwatchers.coolhack2.repository.OrderRepo;
import com.thenightwatchers.coolhack2.service.Imp.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class OrderServiceImpl implements OrderService {

    private final OrderRepo orderRepo;

    @Override
    public CustomerOrder saveOrder(CustomerOrder order) {
        return orderRepo.save(order);
    }

    @Override
    public List<CustomerOrder> getOrdersByUserId(Long userId) {
        return orderRepo.getAllByUserId(userId);
    }

    @Override
    public List<CustomerOrder> getOrdersByRanchId(Long ranchId) {
        return orderRepo.getAllByUserId(ranchId);
    }
}
