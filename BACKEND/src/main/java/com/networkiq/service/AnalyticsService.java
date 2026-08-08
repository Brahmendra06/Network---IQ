package com.networkiq.service;


import com.networkiq.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;



@Service
public class AnalyticsService {



    @Autowired
    private InventoryRepository inventoryRepository;




    public List<Map<String,Object>> categoryAnalytics(){

        return inventoryRepository.getCategoryWiseInventory();

    }





    public List<Map<String,Object>> stateAnalytics(){

        return inventoryRepository.getStateWiseInventory();

    }





    public List<Map<String,Object>> productAnalytics(){

        return inventoryRepository.getProductWiseInventory();

    }






    public Map<String,Object> stockStatus(){


        long lowStock =
                inventoryRepository.findAll()
                        .stream()
                        .filter(i -> i.getQuantity() < 100)
                        .count();



        long normalStock =
                inventoryRepository.findAll()
                        .stream()
                        .filter(i ->
                                i.getQuantity() >=100 &&
                                        i.getQuantity() <=300
                        )
                        .count();




        long highStock =
                inventoryRepository.findAll()
                        .stream()
                        .filter(i ->
                                i.getQuantity() > 300
                        )
                        .count();




        return Map.of(

                "lowStock",lowStock,

                "normalStock",normalStock,

                "highStock",highStock

        );


    }


}