package com.networkiq.entity;


import jakarta.persistence.*;



@Entity
@Table(name="settings")
public class Settings {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    private boolean emailNotification;


    private String aiAutoRun;


    private String theme;





    public Long getId(){

        return id;

    }


    public void setId(Long id){

        this.id=id;

    }






    public boolean isEmailNotification(){

        return emailNotification;

    }


    public void setEmailNotification(boolean emailNotification){

        this.emailNotification=emailNotification;

    }






    public String getAiAutoRun(){

        return aiAutoRun;

    }


    public void setAiAutoRun(String aiAutoRun){

        this.aiAutoRun=aiAutoRun;

    }






    public String getTheme(){

        return theme;

    }


    public void setTheme(String theme){

        this.theme=theme;

    }


}