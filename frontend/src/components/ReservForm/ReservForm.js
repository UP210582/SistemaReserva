import React, { useState } from 'react';
import { Box, Select, MenuItem } from '@mui/material';
import CustomButton from '../Button';

function ReservationForm() {
  const [persons, setPersons] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handlePersonsChange = (event) => setPersons(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleTimeChange = (event) => setTime(event.target.value);

  const availableDates = ['2023-07-01', '2023-07-02', '2023-07-03'];
  const availableTimes = ['12:00', '13:00', '14:00', '15:00'];

  return (
    <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
      <Select value={persons} onChange={handlePersonsChange} displayEmpty>
        <MenuItem value="" disabled>Personas</MenuItem>
        <MenuItem value={1}>1 persona</MenuItem>
        <MenuItem value={2}>2 personas</MenuItem>
        <MenuItem value={3}>3 personas</MenuItem>
        <MenuItem value={4}>4 personas</MenuItem>
      </Select>

      <Select value={date} onChange={handleDateChange} displayEmpty>
        <MenuItem value="" disabled>Fecha</MenuItem>
        {availableDates.map((date) => (
          <MenuItem key={date} value={date}>{date}</MenuItem>
        ))}
      </Select>

      <Select value={time} onChange={handleTimeChange} displayEmpty>
        <MenuItem value="" disabled>Hora</MenuItem>
        {availableTimes.map((time) => (
          <MenuItem key={time} value={time}>{time}</MenuItem>
        ))}
      </Select>

      <CustomButton onClick={() => console.log('Buscando mesa...')}>
        Encuentra una mesa
      </CustomButton>
    </Box>
  );
}

export default ReservationForm;