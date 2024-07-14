import React, { useState } from 'react';
import { 
  Container, 
  Paper, 
  Grid, 
  Select, 
  MenuItem, 
  Button, 
  Typography,
  Box
} from '@mui/material';

function ReservationPage() {
  const [persons, setPersons] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handlePersonsChange = (event) => setPersons(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleTimeChange = (event) => setTime(event.target.value);

  const availableTimes = ['12:00', '13:00', '14:00', '15:00'];
  const availableDates = ['2023-07-01', '2023-07-02', '2023-07-03'];

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6">Mesa</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Datos</Typography>
          </Grid>
        </Grid>

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

          <Button variant="contained" color="primary">
            Encuentra una mesa
          </Button>
        </Box>

        <Typography variant="h6" sx={{ mt: 3 }}>Reservas disponibles</Typography>

        {availableDates.map((date) => (
          <Box key={date} sx={{ mt: 2 }}>
            <Typography variant="subtitle1">{date}</Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              {availableTimes.map((time) => (
                <Button key={time} variant="outlined">{time}</Button>
              ))}
            </Box>
          </Box>
        ))}
      </Paper>
    </Container>
  );
}

export default ReservationPage;