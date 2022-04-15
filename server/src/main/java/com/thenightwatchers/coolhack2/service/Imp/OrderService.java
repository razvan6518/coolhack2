package com.thenightwatchers.coolhack2.service.Imp;

import com.thenightwatchers.coolhack2.model.CustomerOrder;

import java.util.List;

public interface OrderService {
    CustomerOrder saveOrder(CustomerOrder order);
    List<CustomerOrder> getOrdersByUserId(Long userId);
    List<CustomerOrder> getOrdersByRanchId(Long userId);
}
