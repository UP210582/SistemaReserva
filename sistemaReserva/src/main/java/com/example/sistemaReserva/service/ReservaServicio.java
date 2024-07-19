package com.example.sistemaReserva.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.sistemaReserva.model.Reserva;
import com.example.sistemaReserva.repository.ReservaRepository;

@Service
public class ReservaServicio {
    private ReservaRepository reservaRepository;
    
    public ReservaServicio(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }
    
    public List<Reserva> findAll() {
        List<Reserva> data = reservaRepository.findAll();
        return data;
    }
}