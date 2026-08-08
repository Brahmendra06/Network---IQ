package com.networkiq.controller;


import com.networkiq.service.AnalyticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;



@RestController
@RequestMapping("/api/analytics")
@CrossOrigin(origins="http://localhost:5175")
public class AnalyticsController {



    @Autowired
    private AnalyticsService analyticsService;





    // Category Chart API

    @GetMapping("/category")
    public List<Map<String,Object>> category(){

        return analyticsService.categoryAnalytics();

    }






    // State Chart API

    @GetMapping("/state")
    public List<Map<String,Object>> state(){

        return analyticsService.stateAnalytics();

    }






    // Product Chart API

    @GetMapping("/products")
    public List<Map<String,Object>> products(){

        return analyticsService.productAnalytics();

    }






    // Stock Status API

    @GetMapping("/stock")
    public Map<String,Object> stock(){

        return analyticsService.stockStatus();

    }



}