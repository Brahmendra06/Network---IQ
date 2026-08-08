package com.networkiq.controller;


import com.networkiq.entity.Settings;
import com.networkiq.service.SettingsService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/settings")
@CrossOrigin(
        origins="http://localhost:5175"
)
public class SettingsController {



    @Autowired
    private SettingsService settingsService;





    @GetMapping
    public Settings getSettings(){


        return settingsService.getSettings();


    }





    @PostMapping
    public Settings saveSettings(
            @RequestBody Settings settings
    ){


        return settingsService.saveSettings(
                settings
        );


    }



}