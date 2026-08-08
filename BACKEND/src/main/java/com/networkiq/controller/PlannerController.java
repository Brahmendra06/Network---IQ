package com.networkiq.controller;


import com.networkiq.entity.PlannerTask;
import com.networkiq.service.PlannerService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;



@RestController
@RequestMapping("/api/planner")
@CrossOrigin(origins="http://localhost:5175")
public class PlannerController {



    @Autowired
    private PlannerService plannerService;





    @GetMapping
    public List<PlannerTask> getTasks(){

        return plannerService.getTasks();

    }





    @PostMapping
    public PlannerTask addTask(
            @RequestBody PlannerTask task
    ){

        return plannerService.addTask(task);

    }





    @PutMapping("/{id}")
    public PlannerTask updateStatus(
            @PathVariable Long id,
            @RequestParam String status
    ){

        return plannerService.updateStatus(id,status);

    }


}