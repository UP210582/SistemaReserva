import React from 'react';
import { Container, Paper, Box } from '@mui/material';
import ReservationHeader from './ReservHeader';
import ReservationForm from './ReservForm';
import AvailableReservations from './AvailableReserv';
import CustomButton from '../Button';

function ReservationPage() {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 3, mt: 3, borderRadius: '16px' }}>
        <ReservationHeader />
        <ReservationForm />
        <AvailableReservations />
        <Box sx={{ mt: '25px' }}>
          <CustomButton to="/">Cancelar</CustomButton>
        </Box>
      </Paper>
    </Container>
  );
}

export default ReservationPage;