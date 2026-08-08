package com.networkiq.controller;

import com.networkiq.entity.Inventory;
import com.networkiq.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
@CrossOrigin(origins = "http://localhost:5175")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    // Add Inventory
    @PostMapping
    public Inventory addInventory(@RequestBody Inventory inventory) {
        return inventoryService.addInventory(inventory);
    }

    // Get All Inventory
    @GetMapping
    public List<Inventory> getAllInventory() {
        return inventoryService.getAllInventory();
    }

    // Get Inventory By ID
    @GetMapping("/{id}")
    public Inventory getInventoryById(@PathVariable Long id) {
        return inventoryService.getInventoryById(id);
    }

    // Update Inventory
    @PutMapping("/{id}")
    public Inventory updateInventory(
            @PathVariable Long id,
            @RequestBody Inventory inventory) {

        return inventoryService.updateInventory(id, inventory);
    }

    // Delete Inventory
    @DeleteMapping("/{id}")
    public String deleteInventory(@PathVariable Long id) {
        return inventoryService.deleteInventory(id);
    }

}