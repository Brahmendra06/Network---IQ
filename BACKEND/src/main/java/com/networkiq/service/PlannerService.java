package com.networkiq.service;


import com.networkiq.entity.PlannerTask;
import com.networkiq.repository.PlannerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;



@Service
public class PlannerService {



    @Autowired
    private PlannerRepository plannerRepository;





    public List<PlannerTask> getTasks(){


        return plannerRepository.findAll();

    }






    public PlannerTask addTask(PlannerTask task){


        if(task.getStatus()==null){

            task.setStatus("Pending");

        }


        return plannerRepository.save(task);

    }






    public PlannerTask updateStatus(
            Long id,
            String status
    ){


        PlannerTask task =
                plannerRepository.findById(id)
                        .orElse(null);



        if(task!=null){

            task.setStatus(status);

            return plannerRepository.save(task);

        }


        return null;

    }



}