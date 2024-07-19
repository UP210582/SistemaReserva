package com.example.sistemaReserva.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.sistemaReserva.exception.ExcepcionRecursoNoEncontrado;
import com.example.sistemaReserva.model.Reserva;
import com.example.sistemaReserva.service.ReservaService;
import com.example.sistemaReserva.service.ReservaServicio;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

import java.util.Collection;
import java.util.List;
import java.util.Map;

@Tag(name = "Endpoints de Reservas", description = "CRUD de reservas")
@RestController
@RequestMapping("/reserva")
public class ReservaController {
    
}