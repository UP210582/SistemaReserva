package com.example.p03.service.impl;

import com.example.p03.dto.PaymentInfoDTO;
import com.example.p03.dto.PaymentInfoDTO;
import com.example.p03.exception.ResourceNotFoundException;
import com.example.p03.mapper.PaymentInfoMapper;
import com.example.p03.model.PaymentInfo;
import com.example.p03.model.PaymentInfo;
import com.example.p03.repository.ReservationRepository;
import com.example.p03.model.Reservation;
import com.example.p03.model.Reservation;
import com.example.p03.service.PaymentInfoService;
import com.example.p03.repository.PaymentInfoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentInfoServiceImpl implements PaymentInfoService {

    private final PaymentInfoRepository paymentInfoRepository;
    private final PaymentInfoMapper paymentInfoMapper = PaymentInfoMapper.INSTANCE;
    private final ReservationRepository reservationRepository;

    public PaymentInfoServiceImpl(PaymentInfoRepository paymentInfoRepository, ReservationRepository reservationRepository) {
        this.paymentInfoRepository = paymentInfoRepository;
        this.reservationRepository = reservationRepository;
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
        PaymentInfo paymentInfo;

        if (paymentInfoDTO.getId() != null) {
            // Verifica si la reserva existe antes de actualizar
            paymentInfo = paymentInfoRepository.findById(paymentInfoDTO.getId())
                .orElseThrow(() -> new ResourceNotFoundException("PaymentInfo not found with id: " + paymentInfoDTO.getId()));

            // Actualiza los campos
            paymentInfo.setCardName(paymentInfoDTO.getCardName());
            paymentInfo.setCardNumber(paymentInfoDTO.getCardNumber());
            paymentInfo.setExpirationDate(paymentInfoDTO.getExpirationDate());
            paymentInfo.setCvc(paymentInfoDTO.getCvc());

            // Actualiza el usuario si se proporciona
            if (paymentInfoDTO.getReservationId() != null) {
                Reservation reservation = reservationRepository.findById(paymentInfoDTO.getReservationId())
                    .orElseThrow(() -> new ResourceNotFoundException("Reservation not found with id: " + paymentInfoDTO.getReservationId()));
                paymentInfo.setReservation(reservation);
            }
        } else {
            // Crea una nueva reserva
            paymentInfo = paymentInfoMapper.toModel(paymentInfoDTO);
            if (paymentInfoDTO.getReservationId() != null) {
                Reservation reservation = reservationRepository.findById(paymentInfoDTO.getReservationId())
                    .orElseThrow(() -> new ResourceNotFoundException("Reservation not found with id: " + paymentInfoDTO.getReservationId()));
                paymentInfo.setReservation(reservation);
            }
        }

        PaymentInfo savedPaymentInfo = paymentInfoRepository.save(paymentInfo);
        return paymentInfoMapper.toDTO(savedPaymentInfo);
    }

    @Override
    public void deleteById(Long id) {
        paymentInfoRepository.deleteById(id);
    }
}
