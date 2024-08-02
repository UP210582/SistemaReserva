package com.example.p03.controller;

import com.example.p03.dto.UserDTO;
import com.example.p03.exception.ResourceNotFoundException;
import com.example.p03.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@Tag(name = "Users", description = "Operaciones relacionadas con los usuarios")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/todos")
    public ResponseEntity<List<UserDTO>> findAll() {
        List<UserDTO> users = userService.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<UserDTO> findById(@PathVariable Long id) throws ResourceNotFoundException {
        UserDTO user = userService.findById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    

    @PostMapping("/alta")
    public ResponseEntity<UserDTO> save(@RequestBody UserDTO userDTO) {
        UserDTO savedUser = userService.save(userDTO);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @PutMapping("/actualizar/{id}")
    public ResponseEntity<UserDTO> update(@PathVariable Long id, @RequestBody UserDTO userDTO) throws ResourceNotFoundException {
        userDTO.setId(id);
        UserDTO updatedUser = userService.save(userDTO);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @DeleteMapping("/baja/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        userService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
