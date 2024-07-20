import React, { useState } from 'react';
import { Box, Select, MenuItem, IconButton, TextField } from '@mui/material';
import CustomButton from '../../Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function ReservationForm() {
  const [persons, setPersons] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [openCalendar, setOpenCalendar] = useState(false);

  const handlePersonsChange = (event) => setPersons(event.target.value);

  const handleDateChange = (newDate) => {
    if (newDate && newDate.getDay() === 1) { // Check if it's Monday
      alert('Favor de seleccionar un día que no caiga en lunes. Los días lunes nos encontramos cerrados.');
      return;
    }
    setDate(newDate);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    saveReservationData(event.target.value); // Save reservation data when time is selected
  };

  const handleCalendarToggle = () => setOpenCalendar(!openCalendar);

  const saveReservationData = (selectedTime) => {
    if (!persons || !date || !selectedTime) {
      // Only save data if all fields are filled
      return;
    }

    // Here you could send the data to a backend or handle it as needed
    console.log('Reserva realizada:');
    console.log(`Número de personas: ${persons}`);
    console.log(`Fecha: ${date.toISOString().split('T')[0]}`);
    console.log(`Hora: ${selectedTime}`);
  };

  const availableTimes = Array.from({ length: 8 }, (_, i) => `${11 + i}:00`);

  return (
    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
      <Select
        value={persons}
        onChange={handlePersonsChange}
        displayEmpty
        fullWidth
        sx={{ mb: 2 }}
      >
        <MenuItem value="" disabled>Personas</MenuItem>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <MenuItem key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</MenuItem>
        ))}
      </Select>

      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <TextField
          label="Fecha"
          value={date.toISOString().split('T')[0]}
          onClick={handleCalendarToggle}
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleCalendarToggle}>
                <CalendarTodayIcon />
              </IconButton>
            ),
          }}
          readOnly
        />
        {openCalendar && (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              open={openCalendar}
              onClose={() => setOpenCalendar(false)}
              value={date}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
              disablePast
              inputFormat="yyyy-MM-dd"
            />
          </LocalizationProvider>
        )}
      </Box>

      <Select
        value={time}
        onChange={handleTimeChange}
        displayEmpty
        fullWidth
      >
        <MenuItem value="" disabled>Hora</MenuItem>
        {Array.from({ length: 8 }, (_, i) => `${11 + i}:00`).map((time) => (
          <MenuItem key={time} value={time}>{time}</MenuItem>
        ))}
      </Select>

      <CustomButton onClick={() => {
        if (!persons || !date || !time) {
          alert('Por favor, complete todos los campos.');
          return;
        }

        saveReservationData(time); // Save data when button is clicked
      }} sx={{ mt: 2 }}>
        Encuentra una mesa
      </CustomButton>
    </Box>
  );
}

export default ReservationForm;
