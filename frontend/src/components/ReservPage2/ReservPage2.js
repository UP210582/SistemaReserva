import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, Box } from '@mui/material';
import ReservationHeader from '../ReservHeader';
import ReservationForm from './ReservForm';
import AvailableReservations from './AvailableReserv';
import CustomButton from '../Button';

function ReservationPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedPaymentPage');

    if (hasVisited) {
      navigate('/reservinfo');
    } else {
      sessionStorage.setItem('hasVisitedPaymentPage', 'true');
    }

    return () => {
      sessionStorage.removeItem('hasVisitedPaymentPage');
    };
  }, [navigate]);
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 3, mt: 3, borderRadius: '16px' }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <ReservationHeader />
        </Box>
        <ReservationForm />
        <AvailableReservations />
        <Box sx={{ mt: '25px' }}>
          <CustomButton to="/reservinfo">Cancelar</CustomButton>
        </Box>
      </Paper>
    </Container>
  );
}

export default ReservationPage;