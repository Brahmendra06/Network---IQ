package com.networkiq.entity;


import jakarta.persistence.*;


@Entity
@Table(name="planner_tasks")
public class PlannerTask {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String title;


    private String description;


    private String createdBy;


    private String priority;


    private String dueDate;


    private String status;



    public Long getId(){
        return id;
    }


    public void setId(Long id){
        this.id=id;
    }


    public String getTitle(){
        return title;
    }


    public void setTitle(String title){
        this.title=title;
    }


    public String getDescription(){
        return description;
    }


    public void setDescription(String description){
        this.description=description;
    }


    public String getCreatedBy(){
        return createdBy;
    }


    public void setCreatedBy(String createdBy){
        this.createdBy=createdBy;
    }


    public String getPriority(){
        return priority;
    }


    public void setPriority(String priority){
        this.priority=priority;
    }


    public String getDueDate(){
        return dueDate;
    }


    public void setDueDate(String dueDate){
        this.dueDate=dueDate;
    }


    public String getStatus(){
        return status;
    }


    public void setStatus(String status){
        this.status=status;
    }

}