import React from 'react';
import { Typography, Box } from '@mui/material';
import CustomButton from '../Button';

function AvailableReservations() {
  const availableDates = ['2023-07-01', '2023-07-02', '2023-07-03'];
  const availableTimes = ['12:00', '13:00', '14:00', '15:00'];

  return (
    <>
      <Typography variant="h6" sx={{ mt: 3 }}>Reservas disponibles</Typography>
      {availableDates.map((date) => (
        <Box key={date} sx={{ mt: 2 }}>
          <Typography variant="subtitle1">{date}</Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
            {availableTimes.map((time) => (
              <CustomButton 
                key={time} 
                variant="outlined" 
                onClick={() => console.log(`Reservando para ${date} a las ${time}`)}
              >
                {time}
              </CustomButton>
            ))}
          </Box>
        </Box>
      ))}
    </>
  );
}

export default AvailableReservations;