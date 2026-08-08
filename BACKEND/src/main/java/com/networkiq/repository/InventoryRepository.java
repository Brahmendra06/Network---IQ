package com.networkiq.repository;

import com.networkiq.entity.Inventory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;


@Repository
public interface InventoryRepository extends JpaRepository<Inventory,Long>{


    @Query(value =
            "SELECT category AS category, SUM(quantity) AS quantity FROM inventory GROUP BY category",
            nativeQuery = true)
    List<Map<String,Object>> getCategoryWiseInventory();



    @Query(value =
            "SELECT state AS state, SUM(quantity) AS quantity FROM inventory GROUP BY state",
            nativeQuery = true)
    List<Map<String,Object>> getStateWiseInventory();



    @Query(value =
            "SELECT product_name AS product, quantity FROM inventory",
            nativeQuery = true)
    List<Map<String,Object>> getProductWiseInventory();



    List<Inventory> findByQuantityLessThanEqual(Integer quantity);



    List<Inventory> findByQuantityGreaterThan(Integer quantity);


}