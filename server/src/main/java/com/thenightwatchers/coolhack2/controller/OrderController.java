package com.thenightwatchers.coolhack2.controller;

import com.thenightwatchers.coolhack2.model.CustomerOrder;
import com.thenightwatchers.coolhack2.service.OrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    OrderServiceImpl orderService;

    @Autowired
    public OrderController(OrderServiceImpl orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public void addOrder(@RequestBody CustomerOrder order) {
        orderService.saveOrder(order);
    }


    @GetMapping("/user/{userId}")
    public List<CustomerOrder> getByUserId(@PathVariable Long userId) {
        return orderService.getOrdersByUserId(userId);
    }

    @GetMapping("/ranch/{ranchId}")
    public List<CustomerOrder> getByRanchId(@PathVariable Long ranchId) {
        return orderService.getOrdersByRanchId(ranchId);
    }
}
