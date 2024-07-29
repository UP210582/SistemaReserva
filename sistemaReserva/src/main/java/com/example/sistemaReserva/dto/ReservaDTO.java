package com.example.sistemaReserva.dto;

import lombok.Data;
import com.fasterxml.jackson.annotation.JsonFormat;

@Data
public class ReservaDTO {
    private Long idReserva;

  private int personas;

  private String fecha;

  private String hora;

  private int mesa;

  private String nombre;

  private String apellidos;

  private String numeroTelefono;

  private String correoElectronico;

  private String motivoReserva;

  private String nombreTarjeta;

  private String numeroTarjeta;

  private String vencimienteTarjeta;

  private int cvc;

  private String codigoPostal;
    
}