import React from 'react';
import { Container, Paper } from '@mui/material';
import ReservationHeader from './ReservHeader';
import ReservationForm from './ReservForm';
import AvailableReservations from './AvailableReserv';

function ReservationPage() {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <ReservationHeader />
        <ReservationForm />
        <AvailableReservations />
      </Paper>
    </Container>
  );
}

export default ReservationPage;