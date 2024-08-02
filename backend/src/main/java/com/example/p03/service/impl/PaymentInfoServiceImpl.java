package com.example.p03.service.impl;

import com.example.p03.dto.PaymentInfoDTO;
import com.example.p03.exception.ResourceNotFoundException;
import com.example.p03.mapper.PaymentInfoMapper;
import com.example.p03.model.PaymentInfo;
import com.example.p03.service.PaymentInfoService;
import com.example.p03.repository.PaymentInfoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentInfoServiceImpl implements PaymentInfoService {

    private final PaymentInfoRepository paymentInfoRepository;
    private final PaymentInfoMapper paymentInfoMapper = PaymentInfoMapper.INSTANCE;

    public PaymentInfoServiceImpl(PaymentInfoRepository paymentInfoRepository) {
        this.paymentInfoRepository = paymentInfoRepository;
    }

    @Override
    public List<PaymentInfoDTO> findAll() {
        List<PaymentInfo> paymentInfos = paymentInfoRepository.findAll();
        return paymentInfos.stream().map(paymentInfoMapper::toDTO).toList();
    }

    @Override
    public PaymentInfoDTO findById(Long id) throws ResourceNotFoundException {
        PaymentInfo paymentInfo = paymentInfoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("PaymentInfo not found with id: " + id));
        return paymentInfoMapper.toDTO(paymentInfo);
    }

    @Override
    public PaymentInfoDTO save(PaymentInfoDTO paymentInfoDTO) {
        PaymentInfo paymentInfo = paymentInfoMapper.toModel(paymentInfoDTO);
        PaymentInfo savedPaymentInfo = paymentInfoRepository.save(paymentInfo);
        return paymentInfoMapper.toDTO(savedPaymentInfo);
    }

    @Override
    public void deleteById(Long id) {
        paymentInfoRepository.deleteById(id);
    }
}
