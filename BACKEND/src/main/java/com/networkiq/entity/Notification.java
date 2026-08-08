package com.networkiq.entity;


import jakarta.persistence.*;



@Entity
@Table(name="notifications")
public class Notification {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;





    private String title;





    private String message;





    private String type;





    private String status;





    private String action;





    private String priority;





    private String createdAt;







    public Long getId() {

        return id;

    }



    public void setId(Long id) {

        this.id = id;

    }








    public String getTitle() {

        return title;

    }



    public void setTitle(String title) {

        this.title = title;

    }








    public String getMessage() {

        return message;

    }



    public void setMessage(String message) {

        this.message = message;

    }








    public String getType() {

        return type;

    }



    public void setType(String type) {

        this.type = type;

    }








    public String getStatus() {

        return status;

    }



    public void setStatus(String status) {

        this.status = status;

    }








    public String getAction() {

        return action;

    }



    public void setAction(String action) {

        this.action = action;

    }








    public String getPriority() {

        return priority;

    }



    public void setPriority(String priority) {

        this.priority = priority;

    }








    public String getCreatedAt() {

        return createdAt;

    }



    public void setCreatedAt(String createdAt) {

        this.createdAt = createdAt;

    }



}