-- CREATE DATABASE restaurante;
-- USE restaurante;

INSERT INTO customers (first_name, last_name, email, password, phone, credit_card, address) VALUES
('John', 'Doe', 'john.doe@example.com', 'password123', '555-0101', '1234-5678-9012-3456', '123 Elm St.'),
('Jane', 'Smith', 'jane.smith@example.com', 'password123', '555-0102', '1234-5678-9012-3457', '456 Oak St.'),
('Alice', 'Johnson', 'alice.johnson@example.com', 'password123', '555-0103', '1234-5678-9012-3458', '789 Pine St.'),
('Bob', 'Brown', 'bob.brown@example.com', 'password123', '555-0104', '1234-5678-9012-3459', '101 Maple St.'),
('Charlie', 'Davis', 'charlie.davis@example.com', 'password123', '555-0105', '1234-5678-9012-3460', '102 Maple St.'),
('David', 'Miller', 'david.miller@example.com', 'password123', '555-0106', '1234-5678-9012-3461', '103 Maple St.'),
('Eve', 'Wilson', 'eve.wilson@example.com', 'password123', '555-0107', '1234-5678-9012-3462', '104 Maple St.'),
('Frank', 'Moore', 'frank.moore@example.com', 'password123', '555-0108', '1234-5678-9012-3463', '105 Maple St.'),
('Grace', 'Taylor', 'grace.taylor@example.com', 'password123', '555-0109', '1234-5678-9012-3464', '106 Maple St.'),
('Hank', 'Anderson', 'hank.anderson@example.com', 'password123', '555-0110', '1234-5678-9012-3465', '107 Maple St.');

INSERT INTO tables (table_number, amount_people, price) VALUES
('T01', '4', 20.00),
('T02', '6', 30.00),
('T03', '2', 15.00),
('T04', '4', 20.00),
('T05', '6', 30.00),
('T06', '2', 15.00),
('T07', '8', 40.00),
('T08', '10', 50.00),
('T09', '4', 20.00),
('T10', '6', 30.00),
('T11', '2', 15.00),
('T12', '4', 20.00),
('T13', '6', 30.00),
('T14', '2', 15.00),
('T15', '8', 40.00),
('T16', '10', 50.00),
('T17', '4', 20.00),
('T18', '6', 30.00),
('T19', '2', 15.00),
('T20', '4', 20.00);

INSERT INTO reservations (customer_id, table_id, status) VALUES
(1, 1, 'confirmed'),
(2, 2, 'confirmed'),
(3, 3, 'confirmed'),
(4, 4, 'confirmed'),
(5, 5, 'confirmed');

INSERT INTO payments (reservation_id, amount) VALUES
(1, 20.00),
(2, 30.00),
(3, 15.00),
(4, 20.00),
(5, 30.00);