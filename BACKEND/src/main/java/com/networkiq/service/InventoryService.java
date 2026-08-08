package com.networkiq.service;


import com.networkiq.entity.Inventory;

import com.networkiq.repository.InventoryRepository;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import java.util.List;

import java.util.Optional;



@Service
public class InventoryService {



    @Autowired
    private InventoryRepository inventoryRepository;



    @Autowired
    private NotificationService notificationService;









    // ADD INVENTORY

    public Inventory addInventory(Inventory inventory) {



        Inventory savedInventory =
                inventoryRepository.save(inventory);




        checkInventoryNotification(
                savedInventory
        );



        return savedInventory;


    }









    // GET ALL INVENTORY

    public List<Inventory> getAllInventory() {



        return inventoryRepository.findAll();


    }









    // GET INVENTORY BY ID

    public Inventory getInventoryById(Long id) {



        Optional<Inventory> inventory =

                inventoryRepository.findById(id);



        return inventory.orElse(null);


    }









    // UPDATE INVENTORY

    public Inventory updateInventory(
            Long id,
            Inventory updatedInventory
    ) {



        Optional<Inventory> optionalInventory =

                inventoryRepository.findById(id);





        if(optionalInventory.isPresent()) {



            Inventory inventory =
                    optionalInventory.get();





            inventory.setProductName(
                    updatedInventory.getProductName()
            );



            inventory.setSku(
                    updatedInventory.getSku()
            );



            inventory.setCategory(
                    updatedInventory.getCategory()
            );



            inventory.setState(
                    updatedInventory.getState()
            );



            inventory.setQuantity(
                    updatedInventory.getQuantity()
            );



            inventory.setPrice(
                    updatedInventory.getPrice()
            );



            inventory.setSupplier(
                    updatedInventory.getSupplier()
            );







            Inventory savedInventory =

                    inventoryRepository.save(
                            inventory
                    );







            checkInventoryNotification(
                    savedInventory
            );





            return savedInventory;



        }



        return null;


    }









    // DELETE INVENTORY

    public String deleteInventory(Long id) {



        if(inventoryRepository.existsById(id)) {



            inventoryRepository.deleteById(id);



            return "Inventory Deleted Successfully";


        }



        return "Inventory Not Found";


    }









    // CHECK INVENTORY ALERTS

    private void checkInventoryNotification(
            Inventory inventory
    ){





        // OUT OF STOCK

        if(inventory.getQuantity() == 0) {



            notificationService
                    .createOutOfStockNotification(
                            inventory.getSku()
                    );



        }






        // LOW STOCK

        else if(
                inventory.getQuantity() < 50
        ) {



            notificationService
                    .createLowStockNotification(
                            inventory.getSku(),
                            inventory.getQuantity()
                    );



        }



    }



}