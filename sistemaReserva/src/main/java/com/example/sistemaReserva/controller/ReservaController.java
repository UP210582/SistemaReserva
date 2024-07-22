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

    private ReservaService reservaService;

    public ReservaController(@Autowired ReservaService reservaService) {
        this.reservaService = reservaService;
    }

    @GetMapping({ "filtrar/{filtro}" })
    @ResponseStatus(HttpStatus.OK)
    public Collection<Reserva> selectReservas(@PathVariable Boolean filtro) {
        return reservaService.selectReservas(filtro);
    }

    @GetMapping({ "/all" })
    public ResponseEntity<List<Reserva>> getReservas() {
        return ResponseEntity.ok(reservaService.findAll());
    }

    @GetMapping({ "/todos" })
    @ResponseStatus(HttpStatus.OK)
    public List<Reserva> findAll() {
        return reservaService.findAll();
    }

    @GetMapping("/{id}") // http://localhost:8585/reservas/1
    public Reserva getReserva(@PathVariable Long id) throws ExcepcionRecursoNoEncontrado {
        return reservaService.getReserva(id);
    }

    @GetMapping() // http://localhost:8585/reservas?id=2
    public Reserva getReservaById(@RequestParam Long id) throws ExcepcionRecursoNoEncontrado {
        return reservaService.getReserva(id);
    }

    /*
     * post: http://localhost:8585/reservas
     * {
     * "idReserva": null,
     * "personas" : 4,
     * "fecha" : "2024-07-17",
     * "hora" : "19:00",
     * "mesa" : 12,
     * "nombre" : "Juan",
     * "apellidos" : "Perez",
     * "numeroTelefono" : "4497654321",
     * "correoElectronico" : "juan.perez@example.com",
     * "motivoReserva" : "Cumpleaños",
     * "nombreTarjeta" : "Juan Perez",
     * "numeroTarjeta" : "1234567890123456",
     * "vencimienteTarjeta" : "12/25",
     * "cvc" : 123,
     * "codigoPostal" : "12345"
     * }
     */

    /*
    @PostMapping // Altas
    @ResponseStatus(HttpStatus.CREATED)
    public Reserva save(@Valid @RequestBody Reserva data) {
        return reservaService.save(data);
    }

    @PostMapping({ "/alta" })
    @ResponseStatus(HttpStatus.CREATED)
    public ReservaDTO save(@Valid @RequestBody CreateReservaDTO data) {
        return reservaService.saveDTO(data);
    }
    */

    @DeleteMapping("/{id}") // Bajas
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteReserva(@PathVariable Long id) {
        reservaService.delete(id);
    }

    /*
     * PUT: http://localhost:8585/reservas/12
     * {
     * "idReserva": 12,
     * "personas" : 4,
     * "fecha" : "2024-07-17",
     * "hora" : "19:00",
     * "mesa" : 12,
     * "nombre" : "Juan",
     * "apellidos" : "Perez",
     * "numeroTelefono" : "4497654321",
     * "correoElectronico" : "juan.perez@example.com",
     * "motivoReserva" : "Cumpleaños",
     * "nombreTarjeta" : "Juan Perez",
     * "numeroTarjeta" : "1234567890123456",
     * "vencimienteTarjeta" : "12/25",
     * "cvc" : 123,
     * "codigoPostal" : "12345"
     * }
     */
    @PutMapping("/{reservaId}") // Cambios
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable long reservaId, @Valid @RequestBody Reserva data)
            throws ExcepcionRecursoNoEncontrado {
        reservaService.update(reservaId, data);
    }

}