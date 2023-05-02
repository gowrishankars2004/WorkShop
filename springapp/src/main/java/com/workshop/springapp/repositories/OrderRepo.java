package com.workshop.springapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.workshop.springapp.models.Order;

public interface OrderRepo extends JpaRepository<Order, Integer> {

}