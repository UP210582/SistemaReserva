package com.example.p03.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.p03.model.User;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    @Query(value = "SELECT u.id AS userId, u.first_name AS firstName, u.last_name AS lastName, u.email AS email, " +
                   "r.id AS reservationId, r.reservation_date AS reservationDate, r.reservation_time AS reservationTime, r.number_of_people AS numberOfPeople, r.reason AS reason, " +
                   "p.id AS paymentInfoId, p.card_name AS cardName, p.card_number AS cardNumber, p.expiration_date AS expirationDate, p.cvc AS cvc, p.postal_code AS postalCode " +
                   "FROM users u " +
                   "LEFT JOIN reservations r ON u.id = r.user_id " +
                   "LEFT JOIN payment_info p ON r.id = p.reservation_id", nativeQuery = true)
    List<Object[]> findAllUserReservationsAndPayments();
}
