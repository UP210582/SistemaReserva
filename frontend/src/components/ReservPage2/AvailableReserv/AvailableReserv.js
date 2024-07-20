import React from 'react';
import { Typography, Box } from '@mui/material';

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

  // Ejemplo de horarios no disponibles
  const unavailableTimes = ['14:00', '16:00']; // Estos horarios están marcados como no disponibles

  return (
    <>
      <Typography variant="h6" sx={{ mt: 3 }}>Reservas disponibles</Typography>
      {availableDates.map((date) => (
        <Box key={date} sx={{ mt: 2 }}>
          <Typography variant="subtitle1">{date}</Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
            {availableTimes.map((time) => (
              <Typography
                key={time}
                sx={{
                  padding: '8px 16px',
                  borderRadius: '4px',
                  backgroundColor: unavailableTimes.includes(time) ? 'lightcoral' : 'lightgreen',
                  color: unavailableTimes.includes(time) ? 'white' : 'black',
                  textAlign: 'center',
                  cursor: 'default',
                }}
              >
                {time}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </>
  );
}

export default AvailableReservations;
