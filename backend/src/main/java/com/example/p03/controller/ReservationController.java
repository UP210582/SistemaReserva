package com.example.p03.controller;

import com.example.p03.dto.ReservationDTO;
import com.example.p03.exception.ResourceNotFoundException;
import com.example.p03.service.ReservationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping("/todos")
    public ResponseEntity<List<ReservationDTO>> findAll() {
        List<ReservationDTO> reservations = reservationService.findAll();
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<ReservationDTO> findById(@PathVariable Long id) throws ResourceNotFoundException {
        ReservationDTO reservation = reservationService.findById(id);
        return new ResponseEntity<>(reservation, HttpStatus.OK);
    }

    @PostMapping("/alta")
    public ResponseEntity<ReservationDTO> save(@RequestBody ReservationDTO reservationDTO) {
        ReservationDTO savedReservation = reservationService.save(reservationDTO);
        return new ResponseEntity<>(savedReservation, HttpStatus.CREATED);
    }

    @PutMapping("/actualizar/{id}")
    public ResponseEntity<ReservationDTO> update(@PathVariable Long id, @RequestBody ReservationDTO reservationDTO) throws ResourceNotFoundException {
        reservationDTO.setId(id);
        ReservationDTO updatedReservation = reservationService.save(reservationDTO);
        return new ResponseEntity<>(updatedReservation, HttpStatus.OK);
    }

    @DeleteMapping("/baja/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        reservationService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
