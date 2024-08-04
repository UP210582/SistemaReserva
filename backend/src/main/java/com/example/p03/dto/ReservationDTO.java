package com.example.p03.dto;

import lombok.Data;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class ReservationDTO {
    private Long id;
    private Long userId;
    private LocalDate reservationDate;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm:ss")
    private LocalTime reservationTime;
    private Integer numberOfPeople;
    private String reason;
}
