package com.example.p03.service.impl;

import com.example.p03.dto.ReservationDTO;
import com.example.p03.exception.ResourceNotFoundException;
import com.example.p03.mapper.ReservationMapper;
import com.example.p03.model.Reservation;
import com.example.p03.service.ReservationService;
import com.example.p03.repository.ReservationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository reservationRepository;
    private final ReservationMapper reservationMapper = ReservationMapper.INSTANCE;

    public ReservationServiceImpl(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    @Override
    public List<ReservationDTO> findAll() {
        List<Reservation> reservations = reservationRepository.findAll();
        return reservations.stream().map(reservationMapper::toDTO).toList();
    }

    @Override
    public ReservationDTO findById(Long id) throws ResourceNotFoundException {
        Reservation reservation = reservationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Reservation not found with id: " + id));
        return reservationMapper.toDTO(reservation);
    }

    @Override
    public ReservationDTO save(ReservationDTO reservationDTO) {
        Reservation reservation = reservationMapper.toModel(reservationDTO);
        Reservation savedReservation = reservationRepository.save(reservation);
        return reservationMapper.toDTO(savedReservation);
    }

    @Override
    public void deleteById(Long id) {
        reservationRepository.deleteById(id);
    }
}
