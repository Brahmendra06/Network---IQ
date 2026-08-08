package com.networkiq.service;


import com.networkiq.entity.Settings;
import com.networkiq.repository.SettingsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class SettingsService {



    @Autowired
    private SettingsRepository settingsRepository;







    // CHECK NOTIFICATION STATUS

    public boolean isNotificationEnabled(){



        Settings settings =

                settingsRepository
                        .findTopByOrderByIdDesc()
                        .orElse(null);





        // Default ON if no settings exist

        if(settings == null){


            return true;


        }





        return settings.isEmailNotification();



    }









    // SAVE SETTINGS

    public Settings saveSettings(
            Settings settings
    ){



        Settings existing =

                settingsRepository
                        .findTopByOrderByIdDesc()
                        .orElse(null);





        // Update existing settings

        if(existing != null){



            existing.setAiAutoRun(
                    settings.getAiAutoRun()
            );



            existing.setEmailNotification(
                    settings.isEmailNotification()
            );



            existing.setTheme(
                    settings.getTheme()
            );



            return settingsRepository.save(
                    existing
            );



        }





        // First time save

        return settingsRepository.save(
                settings
        );


    }









    // GET SETTINGS

    public Settings getSettings(){



        return settingsRepository
                .findTopByOrderByIdDesc()
                .orElse(null);



    }



}