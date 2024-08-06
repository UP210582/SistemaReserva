package com.example.p03.mapper;

import com.example.p03.dto.ReservationDTO;
import com.example.p03.model.Reservation;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ReservationMapper {

    @Mapping(source = "user.id", target = "userId")
    ReservationDTO toDTO(Reservation reservation);

    @Mapping(source = "userId", target = "user.id")
    Reservation toModel(ReservationDTO reservationDTO);
}