package com.grocery.grocery.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grocery.grocery.model.Grocery;
import com.grocery.grocery.repository.GroceryRepository;

import java.util.List;

@Service
public class GroceryService {
@Autowired
    private GroceryRepository repo; 

    public Grocery savedetails(Grocery f){
        return repo.save(f);
    }
    public List<Grocery> getFarm(){
        return repo.findAll();
    }
    public Grocery getByfarmerId(int userId){
        return repo.findById(userId).orElse(null);
    }
    public Grocery updateById(int userId, Grocery f){
        f.setUserId(userId);
        return repo.saveAndFlush(f);
    }
    public String deleteById(int userId){
        repo.deleteById(userId);
        return "Deleted";   
    }
}