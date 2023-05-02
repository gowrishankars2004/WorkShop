package com.workshop.springapp.services;

import java.util.List;

import com.workshop.springapp.repositories.OrderRepo;
import com.workshop.springapp.models.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepo orderRepo;

    public String placeOrder(Order order) {
        order.setStatus("Placed Order");
        order = orderRepo.save(order);
        return "Order placed with ID: " + order.getId();
    }

    public Order getOrderById(int id) {
        Order order = orderRepo.findById(id).orElse(null);
        return order;
    }

    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }

    public String deleteOrderById(int id) {
        Order order = orderRepo.findById(id).orElse(null);
        orderRepo.deleteById(id);

        if (order == null) {
            return "Order " + id + " not found";
        }

        return "Order " + id + " deleted";
    }

    public String acceptOrderById(int id) {
        Order orderFromDb = orderRepo.findById(id).orElse(null);

        if (orderFromDb == null) {
            return "Order " + id + " not found";
        }

        orderFromDb.setStatus("Accepted Order");
        orderRepo.saveAndFlush(orderFromDb);
        return "Order " + id + " Accepted";
    }

    public String rejectOrderById(int id) {
        Order orderFromDb = orderRepo.findById(id).orElse(null);

        if (orderFromDb == null) {
            return "Order " + id + " not found";
        }

        orderFromDb.setStatus("Rejected Order");
        orderRepo.saveAndFlush(orderFromDb);
        return "Order " + id + " Rejected";
    }

    public String transferOrderById(int id, String deliveryManAddress) {
        Order orderFromDb = orderRepo.findById(id).orElse(null);

        if (orderFromDb == null) {
            return "Order " + id + " not found";
        }

        orderFromDb.setStatus("Transferred Order");
        orderFromDb.setDeliveryManAddress(deliveryManAddress);
        orderRepo.saveAndFlush(orderFromDb);
        return "Order " + id + " Transferred";
    }

    public String deliverOrderById(int id) {
        Order orderFromDb = orderRepo.findById(id).orElse(null);

        if (orderFromDb == null) {
            return "Order " + id + " not found";
        }

        orderFromDb.setStatus("Delivered Order");
        orderRepo.saveAndFlush(orderFromDb);
        return "Order " + id + " Delivered";
    }

}