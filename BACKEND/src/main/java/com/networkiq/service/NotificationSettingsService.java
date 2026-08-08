package com.networkiq.service;


import com.networkiq.entity.Settings;
import com.networkiq.repository.SettingsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class NotificationSettingsService {



    @Autowired
    private SettingsRepository settingsRepository;






    // CHECK IF NOTIFICATIONS ARE ENABLED

    public boolean isNotificationEnabled(){



        Settings settings =

                settingsRepository
                        .findTopByOrderByIdDesc()
                        .orElse(null);





        // If settings not created,
        // allow notifications by default

        if(settings == null){


            return true;


        }





        return settings.isEmailNotification();



    }



}