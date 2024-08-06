import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

// Función para generar horarios aleatorios no disponibles
const getRandomUnavailableTimes = (allTimes, count) => {
  const times = [...allTimes];
  const unavailableTimes = [];
  while (unavailableTimes.length < count) {
    const randomIndex = Math.floor(Math.random() * times.length);
    const time = times.splice(randomIndex, 1)[0];
    unavailableTimes.push(time);
  }
  return unavailableTimes;
};

function AvailableReservations() {
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() + (7 - today.getDay()) % 7); // Ajusta a una semana en el futuro (empezando desde el próximo domingo)

  const availableDates = [];

  // Generar fechas de la semana futura, excluyendo los lunes
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startOfWeek);
    currentDate.setDate(startOfWeek.getDate() + i);
    if (currentDate.getDay() !== 1) { // Excluir lunes
      availableDates.push(currentDate.toISOString().split('T')[0]);
    }
  }

  // Horarios disponibles de 11:00 a 19:00
  const availableTimes = Array.from({ length: 8 }, (_, i) => {
    const hour = 11 + i;
    return `${hour.toString().padStart(2, '0')}:00`;
  });

  // Generar horarios no disponibles de forma aleatoria
  const unavailableTimes = getRandomUnavailableTimes(availableTimes, 3); // Ejemplo: seleccionar 3 horarios aleatorios no disponibles

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>Reservas disponibles</Typography>
      {availableDates.map((date) => (
        <Box key={date} sx={{ mb: 4 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>{date}</Typography>
          <Grid container spacing={2}>
            {availableTimes.map((time) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={time}>
                <Box
                  sx={{
                    padding: '8px',
                    borderRadius: '4px',
                    backgroundColor: unavailableTimes.includes(time) ? 'lightcoral' : 'lightgreen',
                    color: unavailableTimes.includes(time) ? 'white' : 'black',
                    textAlign: 'center',
                    cursor: 'default',
                    fontSize: '0.875rem', // Ajustar el tamaño del texto para pantallas pequeñas
                    whiteSpace: 'nowrap', // Evitar el texto en varias líneas
                    overflow: 'hidden', // Ocultar texto que no cabe
                    textOverflow: 'ellipsis' // Mostrar "..." cuando el texto es demasiado largo
                  }}
                >
                  {time}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

export default AvailableReservations;
