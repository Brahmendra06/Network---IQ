package com.networkiq.repository;


import com.networkiq.entity.Transfer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface TransferRepository extends JpaRepository<Transfer, Long>{


    boolean existsBySkuAndStatus(
            String sku,
            String status
    );


}