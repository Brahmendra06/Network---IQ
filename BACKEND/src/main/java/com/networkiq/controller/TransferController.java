package com.networkiq.controller;


import com.networkiq.entity.Transfer;
import com.networkiq.service.TransferService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;



@RestController
@RequestMapping("/api/transfers")
@CrossOrigin(origins="http://localhost:5175")
public class TransferController {



    @Autowired
    private TransferService transferService;







    @PostMapping
    public Transfer addTransfer(
            @RequestBody Transfer transfer
    ){

        return transferService.addTransfer(transfer);

    }








    @GetMapping
    public List<Transfer> getTransfers(){


        return transferService.getAllTransfers();


    }









    @GetMapping("/{id}")
    public Transfer getTransfer(
            @PathVariable Long id
    ){

        return transferService.getTransferById(id);

    }









    @PutMapping("/{id}")
    public Transfer updateTransfer(
            @PathVariable Long id,
            @RequestBody Transfer transfer
    ){

        return transferService.updateTransfer(id,transfer);

    }









    @DeleteMapping("/{id}")
    public String deleteTransfer(
            @PathVariable Long id
    ){

        return transferService.deleteTransfer(id);

    }









    // AI Generate Transfer Plan

    @GetMapping("/generate")
    public Transfer generatePlan(){


        return transferService.generateTransferPlan();


    }









    // VIEW TRANSFER AUDIT

    @GetMapping("/{id}/audit")
    public Object getTransferAudit(
            @PathVariable Long id
    ){


        return transferService.getTransferAudit(id);


    }



}