package com.example.sistemaReserva.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import java.time.LocalDate;
import java.util.*;

@Data
@Entity
@Table(name = "reserva")
public class Reserva {
    @Id
    @Column(name = "idReserva")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_reserva;
    
    @NotBlank(message = "No puede estar vacio")
    @Column(name = "personas")
    private int num_personas;
    
    @Column(name = "fecha") 
    private String resv_fecha;

    @Column(name = "hora") 
    private String resv_hora;

    @Column(name = "mesa")
    private int num_mesa;

    @Column(name = "nombre") 
    private String nombre_reservador;

    @Column(name = "apellidos") 
    private String apellidos_reservador;

    @Column(name = "numeroTelefono") 
    private String num_telefono;

    @Column(name = "correoElectronico") 
    private String correo_electronico;

    @Column(name = "motivoReserva") 
    private String motivo_resv;

    @Column(name = "nombreTarjeta") 
    private String nombre_tarjeta;

    @Column(name = "numeroTarjeta") 
    private String num_tarjeta;

    @Column(name = "vencimienteTarjeta") 
    private String vencimiente_arjeta;

    @Column(name = "cvc")
    private int num_cvc;
    
    @Column(name = "codigoPostal") 
    private String codigo_postal;

    /*

    @Temporal(TemporalType.DATE)
    @Column(name = "birth_date")
    private LocalDate birthDate;
    
    @Column(name = "hire_date")
    @Temporal(TemporalType.DATE)
    private LocalDate hireDate;
    
    @NotEmpty(message = "El celular no puede estar vacio.")  
    @Pattern(regexp = "^(\\d{3}[-]?){2}\\d{4}$")
    private String celular;
    
    private boolean active;
    
    @PrePersist
    public void PrePersist() {
        hireDate = LocalDate.now();
    }

    */
    
    //@OneToMany(mappedBy = "employee")
    //private List<Order> orders;
    //private List<Order> orders = new ArrayList<>();  
}
