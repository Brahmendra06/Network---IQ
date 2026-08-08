package com.networkiq.service;


import com.networkiq.entity.Inventory;
import com.networkiq.entity.Transfer;
import com.networkiq.entity.AILog;


import com.networkiq.repository.InventoryRepository;
import com.networkiq.repository.TransferRepository;
import com.networkiq.repository.AILogRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


import java.util.List;



@Service
public class AIEngineService {



    @Autowired
    private InventoryRepository inventoryRepository;



    @Autowired
    private AILogRepository aiLogRepository;



    @Autowired
    private TransferRepository transferRepository;



    @Autowired
    private NotificationService notificationService;





    private String getCurrentTime(){


        DateTimeFormatter formatter =
                DateTimeFormatter.ofPattern("hh:mm a");


        return LocalDateTime.now()
                .format(formatter);

    }








    // ==========================
    // STOCK OPTIMIZATION AI
    // ==========================


    public AILog runStockAgent(){



        List<Inventory> products =
                inventoryRepository.findAll();





        Inventory lowStockProduct =

                products.stream()

                        .filter(item ->
                                item.getQuantity() < 100
                        )

                        .findFirst()

                        .orElse(null);





        AILog log =
                new AILog();




        log.setAgentName(
                "Stock Optimization Agent"
        );



        log.setCreatedAt(
                getCurrentTime()
        );





        if(lowStockProduct != null){



            log.setAction(
                    "Low stock detected"
            );



            log.setProduct(
                    lowStockProduct.getSku()
            );



            log.setDecision(
                    "Increase inventory by 100 units"
            );



            log.setStatus(
                    "Completed"
            );




            notificationService
                    .createAIStockNotification();



        }
        else{



            log.setAction(
                    "Inventory checked"
            );



            log.setProduct(
                    "All Products"
            );



            log.setDecision(
                    "Inventory level is normal"
            );



            log.setStatus(
                    "Completed"
            );


        }





        return aiLogRepository.save(log);



    }









    // ==========================
    // DEMAND FORECAST AI
    // ==========================


    public AILog runDemandAgent(){



        AILog log =
                new AILog();





        log.setAgentName(
                "Demand Forecast Agent"
        );




        log.setAction(
                "Demand pattern analyzed"
        );




        log.setProduct(
                "Rice"
        );




        log.setDecision(
                "Prepare stock for future demand"
        );




        log.setStatus(
                "Completed"
        );




        log.setCreatedAt(
                getCurrentTime()
        );





        notificationService
                .createDemandForecastNotification(
                        "Rice"
                );





        return aiLogRepository.save(log);



    }









    // ==========================
    // TRANSFER OPTIMIZATION AI
    // ==========================


    public AILog runTransferAgent(){



        List<Transfer> transfers =
                transferRepository.findAll();





        AILog log =
                new AILog();






        log.setAgentName(
                "Transfer Optimization Agent"
        );





        log.setCreatedAt(
                getCurrentTime()
        );







        if(transfers.isEmpty()){



            log.setAction(
                    "Transfer analysis completed"
            );



            log.setProduct(
                    "No Transfers"
            );



            log.setDecision(
                    "No transfer recommendations available"
            );



            log.setStatus(
                    "Completed"
            );



        }

        else{





            String products =

                    transfers.stream()

                            .map(Transfer::getSku)

                            .filter(
                                    sku -> sku != null
                            )

                            .distinct()

                            .reduce(
                                    (a,b)->a+", "+b
                            )

                            .orElse(
                                    "Unknown"
                            );







            log.setAction(

                    transfers.size()
                            +
                            " transfer recommendations analyzed"

            );






            log.setProduct(
                    products
            );







            log.setDecision(
                    "Generate optimized transfer plan"
            );






            log.setStatus(
                    "Completed"
            );







            notificationService
                    .createTransferNotification(
                            products
                    );



        }







        return aiLogRepository.save(log);



    }



}