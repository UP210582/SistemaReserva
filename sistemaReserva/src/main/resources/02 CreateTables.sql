-- CREATE DATABASE sistemareserva;
-- USE sistemareserva;

CREATE TABLE `reserva` (
  `idReserva` int(11) NOT NULL,
  `personas` int(11) NOT NULL,
  `fecha` varchar(45) NOT NULL,
  `hora` varchar(45) NOT NULL,
  `mesa` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `numeroTelefono` varchar(20) NOT NULL,
  `correoElectronico` varchar(50) NOT NULL,
  `motivoReserva` varchar(45) NOT NULL,
  `nombreTarjeta` varchar(60) NOT NULL,
  `numeroTarjeta` varchar(45) NOT NULL,
  `vencimienteTarjeta` varchar(10) NOT NULL,
  `cvc` int(11) NOT NULL,
  `codigoPostal` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `reserva`
  ADD PRIMARY KEY (`idReserva`);

ALTER TABLE `reserva`
  MODIFY `idReserva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;