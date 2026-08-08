package com.networkiq.controller;

import com.networkiq.repository.InventoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins="http://localhost:5175")
public class DashboardController {


    @Autowired
    private InventoryRepository inventoryRepository;



    @GetMapping("/stats")
    public Map<String,Object> getDashboardStats(){


        Map<String,Object> stats = new HashMap<>();


        var inventory = inventoryRepository.findAll();



        long totalProducts =
                inventory.size();



        int totalQuantity =
                inventory.stream()
                        .mapToInt(item -> item.getQuantity())
                        .sum();




        double inventoryValue =
                inventory.stream()
                        .mapToDouble(item ->
                                item.getQuantity()
                                        *
                                        item.getPrice()
                        )
                        .sum();




        long lowStock =
                inventory.stream()
                        .filter(item ->
                                item.getQuantity() < 100
                        )
                        .count();




        stats.put(
                "totalProducts",
                totalProducts
        );


        stats.put(
                "totalQuantity",
                totalQuantity
        );


        stats.put(
                "inventoryValue",
                inventoryValue
        );


        stats.put(
                "lowStock",
                lowStock
        );



        return stats;

    }


}