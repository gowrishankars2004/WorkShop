package com.workshop.springapp.controllers;

import com.workshop.springapp.services.OrderService;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DeleteControllers {

    @Autowired
    private OrderService orderService;

    // Delete Order
    @DeleteMapping("/{id}")
    public String deleteOrderById(@PathVariable int id) {
        return orderService.deleteOrderById(id);
    }

}
