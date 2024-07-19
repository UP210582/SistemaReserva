package com.example.sistemaReserva.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.sistemaReserva.model.Reserva;
import java.util.Optional;
import java.util.List;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Long> {

  @Query(value = "SELECT * FROM reserva WHERE idReserva = ?1", nativeQuery = true)
  Optional<Reserva> findById(int idReserva);

  @Query(value = "SELECT * FROM reserva", nativeQuery = true)
  List<Reserva> findAll();

  // https://www.baeldung.com/spring-data-jpa-query
  // https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html
  // https://www.geeksforgeeks.org/spring-data-jpa-query-annotation-with-example/
}