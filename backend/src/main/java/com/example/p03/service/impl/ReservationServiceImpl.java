package com.example.p03.service.impl;

import com.example.p03.dto.ReservationDTO;
import com.example.p03.dto.UserDTO;
import com.example.p03.exception.ResourceNotFoundException;
import com.example.p03.mapper.ReservationMapper;
import com.example.p03.model.Reservation;
import com.example.p03.model.User;
import com.example.p03.service.ReservationService;
import com.example.p03.repository.ReservationRepository;
import com.example.p03.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Optional;

@Service
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository reservationRepository;
    private final UserRepository userRepository;
    private final ReservationMapper reservationMapper;

    public ReservationServiceImpl(ReservationRepository reservationRepository, UserRepository userRepository, ReservationMapper reservationMapper) {
        this.reservationRepository = reservationRepository;
        this.userRepository = userRepository;
        this.reservationMapper = reservationMapper;
    }

    @Override
    public List<ReservationDTO> findAll() {
        List<Reservation> reservations = reservationRepository.findAll();
        return reservations.stream().map(reservationMapper::toDTO).toList();
    }

    @Override
    public ReservationDTO findById(Long id) {
        Reservation reservation = reservationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Reservation not found with id: " + id));
        return reservationMapper.toDTO(reservation);
    }

    @Override
    public ReservationDTO save(ReservationDTO reservationDTO) {
        Reservation reservation;

        if (reservationDTO.getId() != null) {
            // Verify if the reservation exists before updating
            reservation = reservationRepository.findById(reservationDTO.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Reservation not found with id: " + reservationDTO.getId()));

            // Update fields
            reservation.setReservationDate(reservationDTO.getReservationDate());
            reservation.setReservationTime(reservationDTO.getReservationTime());
            reservation.setNumberOfPeople(reservationDTO.getNumberOfPeople());
            reservation.setReason(reservationDTO.getReason());

            // Update user if provided
            if (reservationDTO.getUserId() != null) {
                User user = userRepository.findById(reservationDTO.getUserId())
                    .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + reservationDTO.getUserId()));
                reservation.setUser(user);
            }
        } else {
            // Create a new reservation
            reservation = reservationMapper.toModel(reservationDTO);
            if (reservationDTO.getUserId() != null) {
                User user = userRepository.findById(reservationDTO.getUserId())
                    .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + reservationDTO.getUserId()));
                reservation.setUser(user);
            }
        }

        Reservation savedReservation = reservationRepository.save(reservation);
        return reservationMapper.toDTO(savedReservation);
    }

    @Override
    public List<ReservationDTO> findByUserId(Long userId) {
        return reservationRepository.findByUserId(userId).stream()
                .map(reservationMapper::toDTO)
                .collect(Collectors.toList());
    }
    
    @Override
    public void deleteById(Long id){
        reservationRepository.deleteById(id);
    }

    @Override
    public int sumNumberOfPeopleByUserId(Long userId) {
        return reservationRepository.findByUserId(userId).stream()
                .mapToInt(Reservation::getNumberOfPeople) // Extraer el número de personas
                .sum(); // Sumar el número de personas
    }
}
