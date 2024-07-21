package com.example.sistemaReserva.service.impl;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.sistemaReserva.exception.ExcepcionRecursoNoEncontrado;
import com.example.sistemaReserva.model.Reserva;
import com.example.sistemaReserva.repository.ReservaRepository;
import com.example.sistemaReserva.service.ReservaService;

import jakarta.validation.Valid;

@Service
public class ReservaServiceImpl implements ReservaService {
    private ReservaRepository reservaRepository;

    public ReservaServiceImpl(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    @Override
    public List<Reserva> findAll() {
        List<Reserva> data = reservaRepository.findAll();
        return data;
    }

    @Override
    public Reserva getReserva(long idReserva) throws ExcepcionRecursoNoEncontrado {
        Optional<Reserva> optionalReserva = reservaRepository.findById(idReserva);
        if (!optionalReserva.isPresent()) {
            throw new ExcepcionRecursoNoEncontrado("Reserva not found: " + idReserva);
        }
        return optionalReserva.get();
    }

    @Transactional
    public Reserva save(@Valid Reserva data) {
        Reserva result = reservaRepository.save(data);
        return result;
    }

    @Override
    public void delete(long idReserva) {
        reservaRepository.deleteById(idReserva);
    }

    @Override
    public void update(long idReserva, Reserva data) throws ExcepcionRecursoNoEncontrado {
        Optional<Reserva> optionalReserva = reservaRepository.findById(idReserva);
        if (!optionalReserva.isPresent()) {
            throw new ExcepcionRecursoNoEncontrado("Reserva not found: " + idReserva);
        }
        Reserva reserva = optionalReserva.get();
        reserva.setNum_personas(data.getNum_personas());
        reserva.setResv_fecha(data.getResv_fecha());
        reserva.setResv_hora(data.getResv_hora());
        reserva.setNum_mesa(data.getNum_mesa());
        reserva.setNombre_tarjeta(data.getNombre_tarjeta());
        reserva.setApellidos_reservador(data.getApellidos_reservador());
        reserva.setNum_telefono(data.getNum_telefono());
        reserva.setCorreo_electronico(data.getCorreo_electronico());
        reserva.setId_reserva(data.getId_reserva());
        reserva.setNombre_tarjeta(data.getNombre_tarjeta());
        reserva.setNum_tarjeta(data.getNombre_tarjeta());
        reserva.setVencimiente_arjeta(data.getVencimiente_arjeta());
        reserva.setNum_cvc(data.getNum_cvc());
        reserva.setCodigo_postal(data.getCodigo_postal());
        reservaRepository.save(reserva);
    }

    @Override
    public Collection<Reserva> selectEmployees(Boolean filtro) {
        throw new UnsupportedOperationException("Unimplemented method 'selectEmployees'");
    }
}