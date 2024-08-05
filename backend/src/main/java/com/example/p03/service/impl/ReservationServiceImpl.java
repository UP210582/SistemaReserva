package com.example.p03.service.impl;

import com.example.p03.dto.ReservationDTO;
import com.example.p03.dto.ReservationDetailDTO;
import com.example.p03.exception.ResourceNotFoundException;
import com.example.p03.mapper.ReservationMapper;
import com.example.p03.model.Reservation;
import com.example.p03.model.User;
import com.example.p03.service.ReservationService;
import com.example.p03.repository.ReservationRepository;
import com.example.p03.repository.UserRepository;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository reservationRepository;
    private final UserRepository userRepository;
    private final ReservationMapper reservationMapper;
    private final JdbcTemplate jdbcTemplate;

    public ReservationServiceImpl(ReservationRepository reservationRepository, UserRepository userRepository, ReservationMapper reservationMapper, JdbcTemplate jdbcTemplate) {
        this.reservationRepository = reservationRepository;
        this.userRepository = userRepository;
        this.reservationMapper = reservationMapper;
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<ReservationDTO> findAll() {
        List<Reservation> reservations = reservationRepository.findAll();
        return reservations.stream().map(reservationMapper::toDTO).toList();
    }

    @Override
    public ReservationDTO findById(Long id) {
        Reservation reservation = reservationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Reservation not found with id: " + id));
        return reservationMapper.toDTO(reservation);
    }

    @Override
    public ReservationDTO save(ReservationDTO reservationDTO) {
        Reservation reservation;

        if (reservationDTO.getId() != null) {
            // Verify if the reservation exists before updating
            reservation = reservationRepository.findById(reservationDTO.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Reservation not found with id: " + reservationDTO.getId()));

            // Update fields
            reservation.setReservationDate(reservationDTO.getReservationDate());
            reservation.setReservationTime(reservationDTO.getReservationTime());
            reservation.setNumberOfPeople(reservationDTO.getNumberOfPeople());
            reservation.setReason(reservationDTO.getReason());

            // Update user if provided
            if (reservationDTO.getUserId() != null) {
                User user = userRepository.findById(reservationDTO.getUserId())
                    .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + reservationDTO.getUserId()));
                reservation.setUser(user);
            }
        } else {
            // Create a new reservation
            reservation = reservationMapper.toModel(reservationDTO);
            if (reservationDTO.getUserId() != null) {
                User user = userRepository.findById(reservationDTO.getUserId())
                    .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + reservationDTO.getUserId()));
                reservation.setUser(user);
            }
        }

        Reservation savedReservation = reservationRepository.save(reservation);
        return reservationMapper.toDTO(savedReservation);
    }

    @Override
    public List<ReservationDTO> findByUserId(Long userId) {
        return reservationRepository.findByUserId(userId).stream()
                .map(reservationMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteById(Long id) {
        reservationRepository.deleteById(id);
    }

    @Override
    public int sumNumberOfPeopleByUserId(Long userId) {
        String sql = "SELECT SUM(number_of_people) FROM reservations WHERE user_id = ?";
        Integer sum = jdbcTemplate.queryForObject(sql, new Object[]{userId}, Integer.class);
        return (sum != null) ? sum : 0;
    }

    @Override
    public List<ReservationDetailDTO> findAllReservationDetails() {
        String sql = "SELECT r.id AS reservation_id, " +
                     "       r.user_id AS user_id, " +
                     "       u.first_name, " +
                     "       u.last_name, " +
                     "       u.email, " +
                     "       u.phone_number, " +
                     "       r.reservation_date, " +
                     "       r.reservation_time, " +
                     "       r.number_of_people, " +
                     "       r.reason, " +
                     "       p.card_name, " +
                     "       p.card_number, " +
                     "       p.expiration_date, " +
                     "       p.cvc, " +
                     "       p.postal_code " +
                     "FROM reservations r " +
                     "JOIN users u ON r.user_id = u.id " +
                     "LEFT JOIN payment_info p ON r.id = p.reservation_id";

        return jdbcTemplate.query(sql, new ReservationDetailRowMapper());
    }

    private static class ReservationDetailRowMapper implements RowMapper<ReservationDetailDTO> {
        @Override
        public ReservationDetailDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
            ReservationDetailDTO dto = new ReservationDetailDTO();
            dto.setReservationId(rs.getLong("reservation_id"));
            dto.setUserId(rs.getLong("user_id"));
            dto.setFirstName(rs.getString("first_name"));
            dto.setLastName(rs.getString("last_name"));
            dto.setEmail(rs.getString("email"));
            dto.setPhoneNumber(rs.getString("phone_number"));
            dto.setReservationDate(rs.getDate("reservation_date").toLocalDate());
            dto.setReservationTime(rs.getTime("reservation_time").toLocalTime());
            dto.setNumberOfPeople(rs.getInt("number_of_people"));
            dto.setReason(rs.getString("reason"));
            dto.setCardName(rs.getString("card_name"));
            dto.setCardNumber(rs.getString("card_number"));
            dto.setExpirationDate(rs.getDate("expiration_date").toLocalDate());
            dto.setCvc(rs.getString("cvc"));
            dto.setPostalCode(rs.getString("postal_code"));
            return dto;
        }
    }
}
