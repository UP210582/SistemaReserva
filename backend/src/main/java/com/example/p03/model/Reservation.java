package com.example.p03.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Entity
@Table(name = "reservations")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "reservation_date")
    private LocalDate reservationDate;

    @Column(name = "reservation_time")
    private LocalTime reservationTime;

    @Column(name = "number_of_people")
    private Integer numberOfPeople;

    @Column(name = "reason")
    private String reason;
}