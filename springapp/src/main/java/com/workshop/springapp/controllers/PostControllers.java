package com.workshop.springapp.controllers;

import com.workshop.springapp.services.OrderService;
import com.workshop.springapp.models.Order;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PostControllers {
    @Autowired
    private OrderService orderService;

    // Place Order
    @PostMapping("/placeOrder")
    public String placeOrder(@RequestBody Order order) {
        orderService.placeOrder(order);
        return "Order placed";
    }

}