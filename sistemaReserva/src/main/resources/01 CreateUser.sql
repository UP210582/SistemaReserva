CREATE DATABASE IF NOT EXISTS sistemareserva;

CREATE USER 'sistemareserva'@'localhost' IDENTIFIED BY 'sistemareserva';

GRANT ALL PRIVILEGES ON sistemareserva.* TO 'full'@'localhost' [identified by 'sistemareserva'];

flush privileges;