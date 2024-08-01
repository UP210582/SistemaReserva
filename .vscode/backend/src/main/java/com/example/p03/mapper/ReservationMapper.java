package com.example.p03.mapper;

import com.example.p03.dto.ReservationDTO;
import com.example.p03.model.Reservation;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ReservationMapper {
    ReservationMapper INSTANCE = Mappers.getMapper(ReservationMapper.class);

    ReservationDTO toDTO(Reservation reservation);
    Reservation toModel(ReservationDTO reservationDTO);
}
