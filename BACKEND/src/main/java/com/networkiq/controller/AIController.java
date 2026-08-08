package com.networkiq.controller;

import com.networkiq.entity.AILog;

import com.networkiq.service.AIService;
import com.networkiq.service.AIEngineService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;



@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins="http://localhost:5175")
public class AIController {



    @Autowired
    private AIService aiService;



    @Autowired
    private AIEngineService aiEngineService;







    // GET ALL AI AGENTS

    @GetMapping("/agents")
    public List<Map<String,Object>> getAgents(){


        return aiService.getAgents();


    }









    // VIEW AI LOGS

    @GetMapping("/logs")
    public List<AILog> getLogs(){


        return aiService.getLogs();


    }









    // ADD AI LOG

    @PostMapping("/logs")
    public AILog createLog(
            @RequestBody AILog log
    ){


        return aiService.createLog(log);


    }









    // CLEAR ALL AI LOGS

    @DeleteMapping("/logs")
    public String clearLogs(){


        return aiService.clearLogs();


    }









    // RUN STOCK OPTIMIZATION AI

    @PostMapping("/run/stock")
    public AILog runStockAgent(){


        return aiEngineService.runStockAgent();


    }









    // RUN DEMAND FORECAST AI

    @PostMapping("/run/demand")
    public AILog runDemandAgent(){


        return aiEngineService.runDemandAgent();


    }









    // RUN TRANSFER OPTIMIZATION AI

    @PostMapping("/run/transfer")
    public AILog runTransferAgent(){


        return aiEngineService.runTransferAgent();


    }



}