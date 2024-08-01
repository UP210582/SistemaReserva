package com.example.p03.service;

import com.example.p03.dto.PaymentInfoDTO;
import com.example.p03.exception.ResourceNotFoundException;
import java.util.List;

public interface PaymentInfoService {
    List<PaymentInfoDTO> findAll();
    PaymentInfoDTO findById(Long id) throws ResourceNotFoundException;
    PaymentInfoDTO save(PaymentInfoDTO paymentInfoDTO);
    void deleteById(Long id);
    List<PaymentInfoDTO> findByUserId(Long userId);
}
