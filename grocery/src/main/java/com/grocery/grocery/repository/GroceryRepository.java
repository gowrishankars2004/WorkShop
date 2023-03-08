package com.grocery.grocery.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.grocery.grocery.model.Grocery;


public interface GroceryRepository extends JpaRepository<Grocery,Integer> {
    
}
