package com.example.p03.service;

import com.example.p03.dto.ReservationDTO;
import com.example.p03.exception.ResourceNotFoundException;
import java.util.List;

public interface ReservationService {
    List<ReservationDTO> findAll();
    ReservationDTO findById(Long id) throws ResourceNotFoundException;
    ReservationDTO save(ReservationDTO reservationDTO); // Maneja tanto la creación como la actualización
    void deleteById(Long id);
    List<ReservationDTO> findByUserId(Long userId);
    int sumNumberOfPeopleByUserId(Long userId); // Nuevo método para sumar el número total de personas en las reservas de un usuario
}
