package com.grocery.grocery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grocery.grocery.model.Grocery;
import com.grocery.grocery.service.GroceryService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/")
public class Controller {
    @Autowired
    private GroceryService repo;
    

    @PostMapping
    public String saveDetails(@RequestBody Grocery f){
         repo.savedetails(f);
         return "details saved successfully";
    }

    @GetMapping
    public List<Grocery> getDetails(){
        return repo.getFarm();
    }


    @GetMapping("/{userId}")
    public Grocery getdetByIds(@PathVariable int userId){
        return repo.getByfarmerId(userId);
    }


    @PutMapping("/{userId}")
    public Grocery putDetByIds(@PathVariable int userId,@RequestBody Grocery f){
        return repo.updateById(userId,f);
    }


    @DeleteMapping("/{userId}")
    public String deleteDetByIds(@PathVariable int userId){
        repo.deleteById(userId);
        return "Deleted succesfully";
    }

    
}
