package com.grocery.grocery.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Grocery {
    @Id
    private int userId;
    private String productName;
    private String quantity;
    private String price;
    private String orderDate;
    private String expectedDeliveryDate ;
    private String address;
    private String paymentStatus;  
}
