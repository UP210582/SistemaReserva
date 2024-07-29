package com.example.sistemaReserva.dto;
import lombok.Data;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

@Schema(description = "Modelo CreateReservaDTO para crear una reserva")
@Data
public class CreateReservaDTO {
    @Schema(description = "Número de personas para la reserva")
  @Min(value = 1, message = "Debe haber al menos una persona en la reserva")
  private int personas;

  @Schema(example = "2024-07-17", description = "Fecha de la Reserva", format = "date-time", pattern = "yyyy-MM-dd")
  @JsonFormat(pattern = "yyyy-MM-dd")
  private LocalDate fecha;

  @Schema(description = "Hora de la Reserva")
  @NotBlank(message = "La hora de la reserva es obligatoria")
  private String hora;

  @Schema(description = "Número de mesa asignada")
  @Min(value = 1, message = "El número de mesa debe ser al menos 1")
  private int mesa;

  @Schema(description = "Nombre del cliente que hace la reserva")
  @NotBlank(message = "El nombre del cliente es obligatorio")
  private String nombre;

  @Schema(description = "Apellidos del cliente")
  @NotBlank(message = "Los apellidos del cliente son obligatorios")
  private String apellidos;

  @Schema(description = "Número de teléfono del cliente")
  @Pattern(regexp = "^\\d{10}$", message = "El número de teléfono debe ser de 10 dígitos")
  private String numeroTelefono;

  @Schema(description = "Correo electrónico del cliente")
  @NotBlank(message = "El correo electrónico es obligatorio")
  private String correoElectronico;

  @Schema(description = "Motivo de la reserva")
  private String motivoReserva;

  @Schema(description = "Nombre en la tarjeta")
  @NotBlank(message = "El nombre en la tarjeta es obligatorio")
  private String nombreTarjeta;

  @Schema(description = "Número de tarjeta de crédito")
  @NotBlank(message = "El número de tarjeta es obligatorio")
  private String numeroTarjeta;

  @Schema(description = "Fecha de vencimiento de la tarjeta")
  @NotBlank(message = "La fecha de vencimiento de la tarjeta es obligatoria")
  private String vencimienteTarjeta;

  @Schema(description = "Código de seguridad de la tarjeta (CVC)")
  @Min(value = 100, message = "El CVC debe ser de al menos 3 dígitos")
  private int cvc;

  @Schema(description = "Código postal del cliente")
  @NotBlank(message = "El código postal es obligatorio")
  private String codigoPostal;
    
}