package com.networkiq.controller;


import com.networkiq.entity.Notification;

import com.networkiq.service.NotificationService;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;



import java.util.List;



@RestController
@RequestMapping("/api/notifications")
@CrossOrigin(
        origins = "http://localhost:5175"
)

public class NotificationController {




    @Autowired
    private NotificationService notificationService;








    // GET ALL NOTIFICATIONS

    @GetMapping
    public List<Notification> getNotifications(){


        return notificationService.getNotifications();


    }









    // CREATE NOTIFICATION

    @PostMapping
    public Notification addNotification(
            @RequestBody Notification notification
    ){


        return notificationService.createNotification(
                notification
        );


    }









    // LOW STOCK TEST

    @PostMapping("/low-stock/{sku}")
    public Notification lowStockAlert(
            @PathVariable String sku
    ){


        return notificationService
                .createLowStockNotification(
                        sku,
                        20
                );


    }









    // TRANSFER TEST

    @PostMapping("/transfer/{sku}")
    public Notification transferAlert(
            @PathVariable String sku
    ){


        return notificationService
                .createTransferNotification(
                        sku
                );


    }









    // DEMAND FORECAST TEST

    @PostMapping("/demand/{product}")
    public Notification demandAlert(
            @PathVariable String product
    ){


        return notificationService
                .createDemandForecastNotification(
                        product
                );


    }









    // DELETE NOTIFICATION

    @DeleteMapping("/{id}")
    public String deleteNotification(
            @PathVariable Long id
    ){


        return notificationService.deleteNotification(id);


    }









    // MARK AS READ

    @PutMapping("/{id}/read")
    public Notification markAsRead(
            @PathVariable Long id
    ){


        return notificationService.markAsRead(id);


    }




}