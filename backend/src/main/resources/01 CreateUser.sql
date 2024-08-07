CREATE DATABASE IF NOT EXISTS restaurant_reservations;

CREATE USER 'restaurant'@'%' IDENTIFIED BY 'restaurant';

GRANT ALL PRIVILEGES ON restaurant_reservations.* TO 'restaurant'@'%';

flush privileges;


