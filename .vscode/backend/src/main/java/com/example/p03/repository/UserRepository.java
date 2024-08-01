package com.example.p03.repository;

import com.example.p03.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Map;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByName(String name);
    Optional<User> findByEmail(String email);

    @Query(value = "SELECT u.id AS userId, " +
                   "       u.name AS userName, " +
                   "       COUNT(r.id) AS totalReservations, " +
                   "       COALESCE(SUM(p.amount), 0) AS totalAmountSpent " +
                   "FROM users u " +
                   "LEFT JOIN reservations r ON u.id = r.user_id " +
                   "LEFT JOIN payment_info p ON r.id = p.reservation_id " +
                   "GROUP BY u.id, u.name " +
                   "ORDER BY totalAmountSpent DESC", nativeQuery = true)
    List<Map<String, Object>> getUserReservationSummary();
}
