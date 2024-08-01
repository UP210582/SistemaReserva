package com.example.p03.mapper;

import com.example.p03.dto.UserDTO;
import com.example.p03.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserDTO toDTO(User user);
    User toModel(UserDTO userDTO);
}
