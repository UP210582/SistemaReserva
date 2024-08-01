CREATE DATABASE IF NOT EXISTS restaurant_reservations;

-- drop user 'restaurant'@'localhost';     sensible a Mayusculas
-- SET PASSWORD FOR  'restaurant'@'localhost' = PASSWORD ('restaurant')

CREATE USER 'restaurant'@'localhost' IDENTIFIED BY 'restaurant';

GRANT ALL PRIVILEGES ON restaurant.* TO 'restaurant'@'localhost' [identified by 'restaurant'];

flush privileges;


