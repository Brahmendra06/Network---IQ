package com.networkiq.service;

import com.networkiq.entity.Inventory;
import com.networkiq.repository.InventoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class DashboardService {


    @Autowired
    private InventoryRepository inventoryRepository;



    public Map<String,Object> getDashboardStats(){


        List<Inventory> inventory =
                inventoryRepository.findAll();



        long totalProducts =
                inventory.size();



        long totalQuantity =
                inventory.stream()
                        .mapToLong(Inventory::getQuantity)
                        .sum();



        double inventoryValue =
                inventory.stream()
                        .mapToDouble(i ->
                                i.getQuantity()*i.getPrice()
                        )
                        .sum();



        long lowStock =
                inventory.stream()
                        .filter(i ->
                                i.getQuantity() < 100
                        )
                        .count();



        Map<String,Object> response =
                new HashMap<>();


        response.put(
                "totalProducts",
                totalProducts
        );


        response.put(
                "totalQuantity",
                totalQuantity
        );


        response.put(
                "inventoryValue",
                inventoryValue
        );


        response.put(
                "lowStock",
                lowStock
        );



        return response;


    }


}