package com.example.p03.controller;

import com.example.p03.dto.PaymentInfoDTO;
import com.example.p03.service.PaymentInfoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payment-info")
public class PaymentInfoController {

    private final PaymentInfoService paymentInfoService;

    public PaymentInfoController(PaymentInfoService paymentInfoService) {
        this.paymentInfoService = paymentInfoService;
    }

    @GetMapping
    public ResponseEntity<List<PaymentInfoDTO>> getAllPaymentInfo() {
        List<PaymentInfoDTO> paymentInfos = paymentInfoService.findAll();
        return new ResponseEntity<>(paymentInfos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PaymentInfoDTO> getPaymentInfoById(@PathVariable Long id) {
        PaymentInfoDTO paymentInfo = paymentInfoService.findById(id);
        return new ResponseEntity<>(paymentInfo, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<PaymentInfoDTO> createPaymentInfo(@RequestBody PaymentInfoDTO paymentInfoDTO) {
        PaymentInfoDTO createdPaymentInfo = paymentInfoService.save(paymentInfoDTO);
        return new ResponseEntity<>(createdPaymentInfo, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PaymentInfoDTO> updatePaymentInfo(@PathVariable Long id, @RequestBody PaymentInfoDTO paymentInfoDTO) {
        paymentInfoDTO.setId(id);
        PaymentInfoDTO updatedPaymentInfo = paymentInfoService.save(paymentInfoDTO);
        return new ResponseEntity<>(updatedPaymentInfo, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePaymentInfo(@PathVariable Long id) {
        paymentInfoService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}