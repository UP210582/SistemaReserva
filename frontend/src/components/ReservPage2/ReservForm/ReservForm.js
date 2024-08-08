import React, { useState } from 'react';
import { Box, Select, MenuItem, IconButton, TextField } from '@mui/material';
import CustomButton from '../../Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useNavigate } from 'react-router-dom';
import ReservationReason from '../ReasonReserv'; // Importa el nuevo componente

const BASE_URL = 'http://localhost:8787';

function ReservationForm() {
  const navigate = useNavigate();
  const [persons, setPersons] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [openCalendar, setOpenCalendar] = useState(false);
  const [reason, setReason] = useState(''); // Estado para el motivo de la reserva

  const handlePersonsChange = (event) => setPersons(event.target.value);

  const handleDateChange = (newDate) => {
    if (newDate && newDate.getDay() === 1) { // Check if it's Monday
      alert('Favor de seleccionar un día que no caiga en lunes. Los días lunes nos encontramos cerrados.');
      return;
    }
    setDate(newDate);
  };

  const handleTimeChange = (event) => setTime(event.target.value);

  const handleCalendarToggle = () => setOpenCalendar(!openCalendar);

  const saveReservationData = async (selectedTime) => {
    const userId = sessionStorage.getItem('userId');
    const formattedDate = date.toISOString().split('T')[0];

    if (!persons || !date || !selectedTime || !userId || !reason) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const reservationData = {
      userId: Number(userId),
      reservationDate: formattedDate,
      reservationTime: `${selectedTime}:00`,
      numberOfPeople: persons,
      reason: reason // Actualiza con el motivo de la reserva
    };

    try {
      const response = await fetch(`${BASE_URL}/reservations/alta`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservationData)
      });

      if (response.ok) {
        const reservation = await response.json();
        sessionStorage.setItem('reservationId', reservation.id);
        sessionStorage.setItem('reservationDate', reservation.reservationDate);
        sessionStorage.setItem('reservationTime', reservation.reservationTime);
        sessionStorage.setItem('numberOfPeople', reservation.numberOfPeople);
        sessionStorage.setItem('reservationReason', reservation.reason); // Guarda el motivo de la reserva
        console.log('Reserva creada con éxito');
        navigate('/payment'); // Redirigir a la página de pago
      } else {
        console.error('Error al crear la reserva');
        alert('Error al crear la reserva');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al conectar con el servidor');
    }
  };

  const handleReservationClick = () => {
    saveReservationData(time); // Save data when button is clicked
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
        {availableTimes.map((time) => (
          <MenuItem key={time} value={time}>{time}</MenuItem>
        ))}
      </Select>
      <ReservationReason reason={reason} setReason={setReason} /> {/* Agrega el nuevo componente aquí */}
      <CustomButton onClick={handleReservationClick} sx={{ mt: 2 }}>
        Encuentra una mesa
      </CustomButton>
    </Box>
  );
}

export default ReservationForm;