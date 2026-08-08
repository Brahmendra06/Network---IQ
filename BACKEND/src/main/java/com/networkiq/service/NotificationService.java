package com.networkiq.service;


import com.networkiq.entity.Notification;
import com.networkiq.repository.NotificationRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.List;



@Service
public class NotificationService {



    @Autowired
    private NotificationRepository notificationRepository;



    @Autowired
    private NotificationSettingsService notificationSettingsService;






    // GET ALL NOTIFICATIONS

    public List<Notification> getNotifications(){


        return notificationRepository.findAll();


    }









    // CHECK SETTING

    private boolean canCreateNotification(){


        return notificationSettingsService
                .isNotificationEnabled();


    }









    // CREATE MANUAL NOTIFICATION


    public Notification createNotification(
            Notification notification
    ){


        if(!canCreateNotification()){

            return null;

        }



        if(notification.getStatus()==null){

            notification.setStatus(
                    "Unread"
            );

        }




        if(notification.getPriority()==null){

            notification.setPriority(
                    "Medium"
            );

        }



        notification.setCreatedAt(
                LocalDateTime.now().toString()
        );



        return notificationRepository.save(
                notification
        );


    }









    // LOW STOCK ALERT


    public Notification createLowStockNotification(
            String sku,
            int quantity
    ){


        if(!canCreateNotification()){

            return null;

        }



        Notification notification =
                new Notification();



        notification.setTitle(
                "Low Stock Alert"
        );



        notification.setMessage(
                sku+
                        " stock is below required level. Current quantity: "
                        +quantity
        );



        notification.setType(
                "Inventory"
        );



        notification.setAction(
                "Increase Inventory"
        );



        notification.setPriority(
                "High"
        );



        notification.setStatus(
                "Unread"
        );



        notification.setCreatedAt(
                LocalDateTime.now().toString()
        );



        return notificationRepository.save(
                notification
        );


    }









    // OUT OF STOCK ALERT


    public Notification createOutOfStockNotification(
            String sku
    ){


        if(!canCreateNotification()){

            return null;

        }



        Notification notification =
                new Notification();



        notification.setTitle(
                "Out of Stock Alert"
        );



        notification.setMessage(
                sku+" is currently unavailable"
        );



        notification.setType(
                "Inventory"
        );



        notification.setAction(
                "Restock Product"
        );



        notification.setPriority(
                "High"
        );



        notification.setStatus(
                "Unread"
        );



        notification.setCreatedAt(
                LocalDateTime.now().toString()
        );



        return notificationRepository.save(
                notification
        );


    }









    // AI STOCK NOTIFICATION


    public Notification createAIStockNotification(){


        if(!canCreateNotification()){

            return null;

        }



        Notification notification =
                new Notification();



        notification.setTitle(
                "AI Stock Analysis Completed"
        );



        notification.setMessage(
                "Stock Optimization Agent detected inventory issues"
        );



        notification.setType(
                "AI Agent"
        );



        notification.setAction(
                "View Recommendation"
        );



        notification.setPriority(
                "Medium"
        );



        notification.setStatus(
                "Unread"
        );



        notification.setCreatedAt(
                LocalDateTime.now().toString()
        );



        return notificationRepository.save(
                notification
        );


    }









    // TRANSFER ALERT


    public Notification createTransferNotification(
            String sku
    ){


        if(!canCreateNotification()){

            return null;

        }



        Notification notification =
                new Notification();



        notification.setTitle(
                "Transfer Recommendation"
        );



        notification.setMessage(
                "New transfer recommendation generated for "
                        +sku
        );



        notification.setType(
                "Transfer"
        );



        notification.setAction(
                "Approve Transfer"
        );



        notification.setPriority(
                "Medium"
        );



        notification.setStatus(
                "Unread"
        );



        notification.setCreatedAt(
                LocalDateTime.now().toString()
        );



        return notificationRepository.save(
                notification
        );


    }









    // DEMAND FORECAST


    public Notification createDemandForecastNotification(
            String product
    ){


        if(!canCreateNotification()){

            return null;

        }



        Notification notification =
                new Notification();



        notification.setTitle(
                "Demand Forecast Update"
        );



        notification.setMessage(
                "Demand increased for "
                        +product
        );



        notification.setType(
                "Forecast"
        );



        notification.setAction(
                "Prepare Stock"
        );



        notification.setPriority(
                "Medium"
        );



        notification.setStatus(
                "Unread"
        );



        notification.setCreatedAt(
                LocalDateTime.now().toString()
        );



        return notificationRepository.save(
                notification
        );


    }









    // DELETE NOTIFICATION


    public String deleteNotification(
            Long id
    ){


        if(notificationRepository.existsById(id)){


            notificationRepository.deleteById(id);


            return "Notification Deleted Successfully";


        }



        return "Notification Not Found";


    }









    // MARK AS READ


    public Notification markAsRead(
            Long id
    ){


        Notification notification =
                notificationRepository.findById(id)
                        .orElse(null);



        if(notification!=null){


            notification.setStatus(
                    "Read"
            );



            return notificationRepository.save(
                    notification
            );


        }



        return null;


    }


}