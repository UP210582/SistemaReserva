package com.example.p03.dto;

import lombok.Data;
import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class ReservationDTO {
    private Long id;
    private Long userId;
    private LocalDate reservationDate;
    private LocalTime reservationTime;
    private Integer numberOfPeople;
    private String reason;
}
