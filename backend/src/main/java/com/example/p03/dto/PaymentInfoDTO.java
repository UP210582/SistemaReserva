package com.example.p03.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class PaymentInfoDTO {
    private Long id;
    private Long reservationId;
    private String cardName;
    private String cardNumber;
    private LocalDate expirationDate;
    private String cvc;
    private String postalCode;
}