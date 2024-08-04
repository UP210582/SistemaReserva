package com.example.p03.mapper;

import com.example.p03.dto.UserDTO;
import com.example.p03.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    User toModel(UserDTO userDTO);
    UserDTO toDTO(User user);
}
