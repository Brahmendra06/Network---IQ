package com.networkiq.service;

import com.networkiq.entity.Inventory;
import com.networkiq.entity.AILog;

import com.networkiq.repository.InventoryRepository;
import com.networkiq.repository.AILogRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class AIService {


    @Autowired
    private InventoryRepository inventoryRepository;



    @Autowired
    private AILogRepository aiLogRepository;







    public List<Map<String,Object>> getAgents(){


        List<Map<String,Object>> agents =
                new ArrayList<>();



        List<Inventory> inventory =
                inventoryRepository.findAll();




        long lowStock =
                inventory.stream()
                        .filter(item ->
                                item.getQuantity() < 100
                        )
                        .count();






        Map<String,Object> stockAgent =
                new HashMap<>();


        stockAgent.put(
                "name",
                "Stock Optimization Agent"
        );


        stockAgent.put(
                "status",
                "Active"
        );


        stockAgent.put(
                "message",
                lowStock+" low stock items detected"
        );


        stockAgent.put(
                "recommendation",
                "Increase inventory for low stock products"
        );


        agents.add(stockAgent);








        Map<String,Object> demandAgent =
                new HashMap<>();


        demandAgent.put(
                "name",
                "Demand Forecast Agent"
        );


        demandAgent.put(
                "status",
                "Active"
        );


        demandAgent.put(
                "message",
                "Demand patterns analyzed"
        );


        demandAgent.put(
                "recommendation",
                "Prepare stock for future demand"
        );


        agents.add(demandAgent);









        Map<String,Object> transferAgent =
                new HashMap<>();


        transferAgent.put(
                "name",
                "Transfer Optimization Agent"
        );


        transferAgent.put(
                "status",
                "Active"
        );


        transferAgent.put(
                "message",
                "Inventory transfer recommendations available"
        );


        transferAgent.put(
                "recommendation",
                "Generate optimized transfer plan"
        );


        agents.add(transferAgent);




        return agents;


    }









    // GET ALL AI LOGS

    public List<AILog> getLogs(){


        return aiLogRepository.findAll();


    }









    // SAVE AI LOG

    public AILog createLog(AILog log){


        return aiLogRepository.save(log);


    }









    // CLEAR ALL AI LOGS

    public String clearLogs(){


        aiLogRepository.deleteAll();


        return "AI Logs Cleared Successfully";


    }



}