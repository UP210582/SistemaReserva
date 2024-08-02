package com.example.p03.service;

import com.example.p03.dto.UserDTO;
import com.example.p03.exception.ResourceNotFoundException;
import com.example.p03.model.User;

import java.util.List;

public interface UserService {
    List<UserDTO> findAll();
    UserDTO findById(Long id) throws ResourceNotFoundException;
    UserDTO save(UserDTO userDTO);
    void deleteById(Long id);
}
