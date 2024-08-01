package com.example.p03.controller;

import com.example.p03.dto.ReservationDTO;
import com.example.p03.service.ReservationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/reservations")
@Tag(name = "Reservations", description = "Operaciones relacionadas con las reservas")
public class ReservationController {

    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping("/all")
    @Operation(summary = "Obtener todas las reservas")
    public ResponseEntity<List<ReservationDTO>> getAllReservations() {
        List<ReservationDTO> reservations = reservationService.findAll();
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener reserva por ID")
    public ResponseEntity<ReservationDTO> getReservationById(@PathVariable Long id) {
        ReservationDTO reservation = reservationService.findById(id);
        return new ResponseEntity<>(reservation, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    @Operation(summary = "Obtener reservas por ID de usuario")
    public ResponseEntity<List<ReservationDTO>> getReservationsByUserId(@PathVariable Long userId) {
        List<ReservationDTO> reservations = reservationService.findByUserId(userId);
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }

    @GetMapping("/dates")
    @Operation(summary = "Obtener reservas dentro de un rango de fechas")
    public ResponseEntity<List<ReservationDTO>> getReservationsByDateRange(@RequestParam LocalDate startDate, @RequestParam LocalDate endDate) {
        List<ReservationDTO> reservations = reservationService.findByDateRange(startDate, endDate);
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }

    @PostMapping
    @Operation(summary = "Crear nueva reserva")
    public ResponseEntity<ReservationDTO> createReservation(@RequestBody ReservationDTO reservationDTO) {
        ReservationDTO createdReservation = reservationService.save(reservationDTO);
        return new ResponseEntity<>(createdReservation, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Actualizar reserva existente")
    public ResponseEntity<ReservationDTO> updateReservation(@PathVariable Long id, @RequestBody ReservationDTO reservationDTO) {
        reservationDTO.setId(id);
        ReservationDTO updatedReservation = reservationService.save(reservationDTO);
        return new ResponseEntity<>(updatedReservation, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar reserva por ID")
    public ResponseEntity<Void> deleteReservation(@PathVariable Long id) {
        reservationService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
