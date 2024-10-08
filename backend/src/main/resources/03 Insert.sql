use restaurant_reservations;

INSERT INTO users (first_name, last_name, email, password, phone_number) VALUES
('Ana', 'Gómez', 'ana.gomez@example.com', 'hashed_password1', '1234567891'),
('Carlos', 'López', 'carlos.lopez@example.com', 'hashed_password2', '1234567892'),
('María', 'Fernández', 'maria.fernandez@example.com', 'hashed_password3', '1234567893'),
('Luis', 'Martínez', 'luis.martinez@example.com', 'hashed_password4', '1234567894');

INSERT INTO reservations (user_id, reservation_date, reservation_time, number_of_people, reason) VALUES
(1, '2024-08-02', '12:00:00', 2, 'Negocios'),
(2, '2024-08-03', '18:00:00', 6, 'Celebración'),
(3, '2024-08-04', '13:00:00', 3, 'Casual'),
(4, '2024-08-05', '11:00:00', 5, 'Negocios'),
(1, '2024-08-06', '17:00:00', 2, 'Casual');

INSERT INTO payment_info (reservation_id, card_name, card_number, expiration_date, cvc, postal_code) VALUES
(1, 'Ana Gómez', '4111111111111112', '09/25', '234', '54321'),
(2, 'Carlos López', '4111111111111113', '10/25', '345', '65432'),
(3, 'María Fernández', '4111111111111114', '11/25', '456', '76543'),
(4, 'Luis Martínez', '4111111111111115', '12/25', '567', '87654'),
(5, 'Juan Pérez', '4111111111111116', '08/25', '678', '98765');


