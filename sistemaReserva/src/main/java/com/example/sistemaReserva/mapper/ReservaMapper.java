package com.example.sistemaReserva.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.InjectionStrategy;

import com.example.sistemaReserva.dto.CreateReservaDTO;
import com.example.sistemaReserva.dto.ReservaDTO;
import com.example.sistemaReserva.model.Reserva;
import java.util.List;

@Mapper(
  componentModel = "spring", 
  injectionStrategy = InjectionStrategy.CONSTRUCTOR, 
  nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE
  // uses = OrderMapper.class  // Si hay una clase similar para manejar órdenes
)
public interface ReservaMapper {
    ReservaDTO toDTO(Reserva model);

  List<ReservaDTO> toDTO(List<Reserva> model);
   
  @Mapping(target = "idReserva", ignore = true)
  Reserva toModel(CreateReservaDTO data);
    
}