package com.example.p03.controller;

import com.example.p03.dto.PaymentInfoDTO;
import com.example.p03.exception.ResourceNotFoundException;
import com.example.p03.service.PaymentInfoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payment-info")
public class PaymentInfoController {

    private final PaymentInfoService paymentInfoService;

    public PaymentInfoController(PaymentInfoService paymentInfoService) {
        this.paymentInfoService = paymentInfoService;
    }

    @GetMapping("/todos")
    public ResponseEntity<List<PaymentInfoDTO>> findAll() {
        List<PaymentInfoDTO> paymentInfos = paymentInfoService.findAll();
        return new ResponseEntity<>(paymentInfos, HttpStatus.OK);
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<PaymentInfoDTO> findById(@PathVariable Long id) throws ResourceNotFoundException {
        PaymentInfoDTO paymentInfo = paymentInfoService.findById(id);
        return new ResponseEntity<>(paymentInfo, HttpStatus.OK);
    }

    @PostMapping("/alta")
    public ResponseEntity<PaymentInfoDTO> save(@RequestBody PaymentInfoDTO paymentInfoDTO) {
        PaymentInfoDTO savedPaymentInfo = paymentInfoService.save(paymentInfoDTO);
        return new ResponseEntity<>(savedPaymentInfo, HttpStatus.CREATED);
    }

    @PutMapping("/actualizar/{id}")
    public ResponseEntity<PaymentInfoDTO> update(@PathVariable Long id, @RequestBody PaymentInfoDTO paymentInfoDTO) throws ResourceNotFoundException {
        paymentInfoDTO.setId(id);
        PaymentInfoDTO updatedPaymentInfo = paymentInfoService.save(paymentInfoDTO);
        return new ResponseEntity<>(updatedPaymentInfo, HttpStatus.OK);
    }

    @DeleteMapping("/baja/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        paymentInfoService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
