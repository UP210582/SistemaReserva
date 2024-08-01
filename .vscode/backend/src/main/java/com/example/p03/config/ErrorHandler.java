package com.example.p03.config;

import com.example.p03.dto.ErrorDTO;
import com.example.p03.exception.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ErrorHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorDTO> handleResourceNotFound(ResourceNotFoundException ex) {
        ErrorDTO errorDTO = ErrorDTO.builder()
                                    .code("ERR_NOT_FOUND")
                                    .message(ex.getMessage())
                                    .build();
        return new ResponseEntity<>(errorDTO, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorDTO> handleGlobalException(Exception ex) {
        ErrorDTO errorDTO = ErrorDTO.builder()
                                    .code("ERR_INTERNAL_SERVER_ERROR")
                                    .message("An unexpected error occurred.")
                                    .details(ex.getMessage())
                                    .build();
        return new ResponseEntity<>(errorDTO, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
