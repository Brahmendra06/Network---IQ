package com.networkiq.entity;

import jakarta.persistence.*;

@Entity
@Table(name="ai_logs")
public class AILog {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String agentName;


    private String action;


    private String product;


    private String decision;


    private String status;


    private String createdAt;



    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id=id;
    }


    public String getAgentName() {
        return agentName;
    }


    public void setAgentName(String agentName) {
        this.agentName=agentName;
    }


    public String getAction() {
        return action;
    }


    public void setAction(String action) {
        this.action=action;
    }


    public String getProduct() {
        return product;
    }


    public void setProduct(String product) {
        this.product=product;
    }


    public String getDecision() {
        return decision;
    }


    public void setDecision(String decision) {
        this.decision=decision;
    }


    public String getStatus() {
        return status;
    }


    public void setStatus(String status) {
        this.status=status;
    }


    public String getCreatedAt() {
        return createdAt;
    }


    public void setCreatedAt(String createdAt) {
        this.createdAt=createdAt;
    }

}