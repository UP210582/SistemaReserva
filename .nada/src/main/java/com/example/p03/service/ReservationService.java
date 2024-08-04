package com.example.p03.service;

import com.example.p03.dto.ReservationDTO;
import com.example.p03.exception.ResourceNotFoundException;
import java.util.List;

public interface ReservationService {
    List<ReservationDTO> findAll();
    ReservationDTO findById(Long id) throws ResourceNotFoundException;
    ReservationDTO save(ReservationDTO reservationDTO);
    void deleteById(Long id);
}
