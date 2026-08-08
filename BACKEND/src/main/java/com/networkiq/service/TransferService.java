package com.networkiq.service;


import com.networkiq.entity.Transfer;
import com.networkiq.entity.Inventory;
import com.networkiq.entity.Notification;

import com.networkiq.repository.TransferRepository;
import com.networkiq.repository.InventoryRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
import java.util.HashMap;
import java.util.Map;



@Service
public class TransferService {



    @Autowired
    private TransferRepository transferRepository;



    @Autowired
    private InventoryRepository inventoryRepository;



    @Autowired
    private NotificationService notificationService;






// ===============================
// ADD TRANSFER
// ===============================


    public Transfer addTransfer(Transfer transfer){



        if(transfer.getStatus()==null){

            transfer.setStatus("Pending");

        }



        Transfer savedTransfer =
                transferRepository.save(transfer);




        notificationService
                .createTransferNotification(
                        savedTransfer.getSku()
                );



        return savedTransfer;


    }








// ===============================
// GET ALL TRANSFERS
// ===============================


    public List<Transfer> getAllTransfers(){


        return transferRepository.findAll();


    }








// ===============================
// GET BY ID
// ===============================


    public Transfer getTransferById(Long id){


        Optional<Transfer> transfer =
                transferRepository.findById(id);



        return transfer.orElse(null);


    }










// ===============================
// UPDATE TRANSFER
// APPROVE / REJECT / EDIT
// ===============================


    public Transfer updateTransfer(
            Long id,
            Transfer updatedTransfer
    ){



        Optional<Transfer> optional =
                transferRepository.findById(id);




        if(optional.isPresent()){



            Transfer transfer =
                    optional.get();





            // KEEP OLD VALUES IF NULL


            if(updatedTransfer.getFromLocation()!=null){

                transfer.setFromLocation(
                        updatedTransfer.getFromLocation()
                );

            }




            if(updatedTransfer.getToLocation()!=null){

                transfer.setToLocation(
                        updatedTransfer.getToLocation()
                );

            }




            if(updatedTransfer.getSku()!=null){

                transfer.setSku(
                        updatedTransfer.getSku()
                );

            }




            if(updatedTransfer.getQuantity()!=null){

                transfer.setQuantity(
                        updatedTransfer.getQuantity()
                );

            }




            if(updatedTransfer.getCost()!=null){

                transfer.setCost(
                        updatedTransfer.getCost()
                );

            }




            if(updatedTransfer.getProfit()!=null){

                transfer.setProfit(
                        updatedTransfer.getProfit()
                );

            }




            if(updatedTransfer.getStatus()!=null){

                transfer.setStatus(
                        updatedTransfer.getStatus()
                );

            }







            Transfer savedTransfer =
                    transferRepository.save(transfer);








            // APPROVED NOTIFICATION


            if(
                    "Approved".equalsIgnoreCase(
                            savedTransfer.getStatus()
                    )
            ){


                notificationService.createNotification(

                        createApprovalNotification(
                                savedTransfer
                        )

                );


            }








            // REJECTED NOTIFICATION


            if(
                    "Rejected".equalsIgnoreCase(
                            savedTransfer.getStatus()
                    )
            ){


                notificationService.createNotification(

                        createRejectNotification(
                                savedTransfer
                        )

                );


            }






            return savedTransfer;


        }





        return null;



    }









// ===============================
// DELETE TRANSFER
// ===============================


    public String deleteTransfer(Long id){



        if(transferRepository.existsById(id)){


            transferRepository.deleteById(id);


            return "Transfer Deleted Successfully";


        }



        return "Transfer Not Found";


    }










// ===============================
// AI GENERATE TRANSFER PLAN
// ===============================


    public Transfer generateTransferPlan(){



        List<Inventory> lowStockProducts =

                inventoryRepository
                        .findByQuantityLessThanEqual(50);




        if(lowStockProducts.isEmpty()){

            return null;

        }





        Inventory lowStock =
                lowStockProducts.get(0);






        boolean exists =

                transferRepository.existsBySkuAndStatus(
                        lowStock.getSku(),
                        "Pending"
                );





        if(exists){

            return null;

        }







        List<Inventory> availableProducts =

                inventoryRepository
                        .findByQuantityGreaterThan(50);






        if(availableProducts.isEmpty()){

            return null;

        }






        Inventory source =
                availableProducts.get(0);







        Transfer transfer =
                new Transfer();







        transfer.setFromLocation(
                source.getSupplier()
        );




        transfer.setToLocation(
                "Low Stock Store"
        );




        transfer.setSku(
                lowStock.getSku()
        );




        transfer.setQuantity(50);




        transfer.setCost(
                lowStock.getPrice()*50
        );




        transfer.setProfit(
                5000.0
        );




        transfer.setStatus(
                "Pending"
        );







        Transfer savedTransfer =
                transferRepository.save(transfer);






        notificationService
                .createTransferNotification(
                        savedTransfer.getSku()
                );






        return savedTransfer;


    }









// ===============================
// TRANSFER AUDIT
// ===============================


    public Object getTransferAudit(Long id){



        Transfer transfer =
                transferRepository.findById(id)
                        .orElse(null);





        if(transfer==null){

            return "Transfer Not Found";

        }





        Map<String,Object> audit =
                new HashMap<>();




        audit.put(
                "transferId",
                transfer.getId()
        );



        audit.put(
                "agentName",
                "Transfer Optimization Agent"
        );



        audit.put(
                "action",
                "Inventory imbalance detected"
        );



        audit.put(
                "sku",
                transfer.getSku()
        );



        audit.put(
                "decision",
                "Generate transfer recommendation"
        );



        audit.put(
                "quantity",
                transfer.getQuantity()
        );



        audit.put(
                "status",
                transfer.getStatus()
        );



        return audit;


    }









// ===============================
// APPROVAL NOTIFICATION
// ===============================


    private Notification createApprovalNotification(
            Transfer transfer
    ){



        Notification notification =
                new Notification();




        notification.setTitle(
                "Transfer Approved"
        );



        notification.setMessage(
                "Transfer TR-"
                        +transfer.getId()
                        +" approved"
        );



        notification.setType(
                "Transfer"
        );



        notification.setAction(
                "Inventory Movement Started"
        );



        notification.setPriority(
                "Medium"
        );



        return notification;


    }









// ===============================
// REJECT NOTIFICATION
// ===============================


    private Notification createRejectNotification(
            Transfer transfer
    ){



        Notification notification =
                new Notification();




        notification.setTitle(
                "Transfer Rejected"
        );



        notification.setMessage(
                "Transfer TR-"
                        +transfer.getId()
                        +" rejected"
        );



        notification.setType(
                "Transfer"
        );



        notification.setAction(
                "Review Transfer Plan"
        );



        notification.setPriority(
                "High"
        );



        return notification;


    }



}