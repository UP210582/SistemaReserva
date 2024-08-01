package com.example.p03.service;

import com.example.p03.dto.UserDTO;
import com.example.p03.exception.ResourceNotFoundException;
import java.util.List;
import java.util.Map;

public interface UserService {
    List<UserDTO> findAll();
    UserDTO findById(Long id) throws ResourceNotFoundException;
    UserDTO save(UserDTO userDTO);
    void deleteById(Long id);
    List<UserDTO> findByName(String name);
    UserDTO findByEmail(String email);
    List<Map<String, Object>> getUserReservationSummary();
}
