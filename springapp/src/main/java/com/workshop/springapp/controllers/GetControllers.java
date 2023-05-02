package com.workshop.springapp.controllers;

import java.util.List;

import com.workshop.springapp.services.OrderService;
import com.workshop.springapp.models.Order;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class GetControllers {
    @Autowired
    private OrderService orderService;

    // Get Order By Id
    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable int id) {
        return orderService.getOrderById(id);
    }

    // Get All Orders
    @GetMapping("/")
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }
}
