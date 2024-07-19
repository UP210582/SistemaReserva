package com.example.sistemaReserva.service;


import java.util.Collection;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.sistemaReserva.exception.ExcepcionRecursoNoEncontrado;
import com.example.sistemaReserva.model.Reserva;

import jakarta.validation.Valid;

public interface ReservaService {
  public List<Reserva> findAll();

  public Reserva getReserva(long id_reserva) throws ExcepcionRecursoNoEncontrado;

  public Reserva save(@Valid @RequestBody Reserva data);  // Altas

  public void delete(long id_reserva);  // Bajas

  public void update(long id_reserva, Reserva data) throws ExcepcionRecursoNoEncontrado;  // Cambios

  public Collection<Reserva> selectEmployees(Boolean filtro);

  //public List<Reserva> findAll();
}