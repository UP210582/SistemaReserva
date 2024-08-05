package com.example.p03.mapper;

import com.example.p03.dto.PaymentInfoDTO;
import com.example.p03.model.PaymentInfo;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface PaymentInfoMapper {
    PaymentInfoMapper INSTANCE = Mappers.getMapper(PaymentInfoMapper.class);

    @Mapping(source = "reservation.id", target = "reservationId")
    PaymentInfoDTO toDTO(PaymentInfo paymentInfo);

    @Mapping(source = "reservationId", target = "reservation.id")
    PaymentInfo toModel(PaymentInfoDTO paymentInfoDTO);
}
