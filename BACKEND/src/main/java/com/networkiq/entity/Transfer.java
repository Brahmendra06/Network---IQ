package com.networkiq.entity;

import jakarta.persistence.*;

@Entity
@Table(name="transfers")
public class Transfer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fromLocation;

    private String toLocation;

    private String sku;

    private Integer quantity;

    private Double cost;

    private Double profit;

    private String status;


    public Transfer(){

    }


    public Long getId(){
        return id;
    }


    public void setId(Long id){
        this.id=id;
    }


    public String getFromLocation(){
        return fromLocation;
    }


    public void setFromLocation(String fromLocation){
        this.fromLocation=fromLocation;
    }


    public String getToLocation(){
        return toLocation;
    }


    public void setToLocation(String toLocation){
        this.toLocation=toLocation;
    }


    public String getSku(){
        return sku;
    }


    public void setSku(String sku){
        this.sku=sku;
    }


    public Integer getQuantity(){
        return quantity;
    }


    public void setQuantity(Integer quantity){
        this.quantity=quantity;
    }


    public Double getCost(){
        return cost;
    }


    public void setCost(Double cost){
        this.cost=cost;
    }


    public Double getProfit(){
        return profit;
    }


    public void setProfit(Double profit){
        this.profit=profit;
    }


    public String getStatus(){
        return status;
    }


    public void setStatus(String status){
        this.status=status;
    }

}