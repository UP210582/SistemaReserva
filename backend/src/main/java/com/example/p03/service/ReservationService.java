package com.example.p03.service;

import com.example.p03.dto.ReservationDTO;
import com.example.p03.exception.ResourceNotFoundException;
import java.time.LocalDate;
import java.util.List;

public interface ReservationService {
    List<ReservationDTO> findAll();
    ReservationDTO findById(Long id) throws ResourceNotFoundException;
    ReservationDTO save(ReservationDTO reservationDTO);
    void deleteById(Long id);
    List<ReservationDTO> findByUserId(Long userId);
    List<ReservationDTO> findByDateRange(LocalDate startDate, LocalDate endDate);
}
