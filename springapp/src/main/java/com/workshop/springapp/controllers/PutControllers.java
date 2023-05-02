package com.workshop.springapp.controllers;

import com.workshop.springapp.services.OrderService;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PutControllers {

    @Autowired
    private OrderService orderService;

    // Reject Order
    @PutMapping("/reject/{id}")
    public String rejectOrderById(@PathVariable int id) {
        return orderService.rejectOrderById(id);
    }

    // Accept Order
    @PutMapping("/accept/{id}")
    public String acceptOrderById(@PathVariable int id) {
        return orderService.acceptOrderById(id);
    }

    // Transfer Order
    @PutMapping("/transfer/{id}/{deliveryManAddress}")
    public String transferOrderById(@PathVariable int id, @PathVariable String deliveryManAddress) {
        return orderService.transferOrderById(id, deliveryManAddress);
    }

    // Deliver Order
    @PutMapping("/deliver/{id}")
    public String deliverOrderById(@PathVariable int id) {
        return orderService.deliverOrderById(id);
    }

}