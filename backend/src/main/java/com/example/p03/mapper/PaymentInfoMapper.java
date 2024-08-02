package com.example.p03.mapper;

import com.example.p03.dto.PaymentInfoDTO;
import com.example.p03.model.PaymentInfo;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface PaymentInfoMapper {
    PaymentInfoMapper INSTANCE = Mappers.getMapper(PaymentInfoMapper.class);

    PaymentInfoDTO toDTO(PaymentInfo paymentInfo);
    PaymentInfo toModel(PaymentInfoDTO paymentInfoDTO);
}
