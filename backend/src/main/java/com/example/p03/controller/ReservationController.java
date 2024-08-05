package com.example.p03.controller;

import com.example.p03.dto.ReservationDTO;
import com.example.p03.exception.ResourceNotFoundException;
import com.example.p03.service.ReservationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservations")
@Tag(name = "Reservations", description = "Operaciones relacionadas con las reservas")
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

    @GetMapping("/buscar/userid/{id}")
    public ResponseEntity<List<ReservationDTO>> findByUserId(@PathVariable Long id) {
        List<ReservationDTO> reservations = reservationService.findByUserId(id);
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }

    @PostMapping("/alta")
    public ResponseEntity<ReservationDTO> save(@RequestBody ReservationDTO reservationDTO) {
        ReservationDTO savedReservation = reservationService.save(reservationDTO);
        return new ResponseEntity<>(savedReservation, HttpStatus.CREATED);
    }

    @PutMapping("/actualizar/{id}")
    public ResponseEntity<ReservationDTO> update(@PathVariable Long id, @RequestBody ReservationDTO reservationDTO) throws ResourceNotFoundException {
        reservationDTO.setId(id);
        ReservationDTO updatedReservation = reservationService.save(reservationDTO); // Usa save en lugar de update
        return new ResponseEntity<>(updatedReservation, HttpStatus.OK);
    }

    @DeleteMapping("/baja/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        reservationService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
