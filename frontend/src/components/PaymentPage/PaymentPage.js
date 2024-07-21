import React, { useEffect } from 'react';
import Header from '../ReservHeader';
import PersonalInfo from './PersonalInfo';
import ReservationReason from './ReasonReserv';
import PaymentInfo from './PaymentInfo';
import CustomButton from '../Button';
import { Container, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedPaymentPage');

    if (hasVisited) {
      navigate('/');
    } else {
      sessionStorage.setItem('hasVisitedPaymentPage', 'true');
    }

    return () => {
      sessionStorage.removeItem('hasVisitedPaymentPage');
    };
  }, [navigate]);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Header />
        </Box>
        <Box sx={{ mb: 4 }}>
          <PersonalInfo />
        </Box>
        <Box sx={{ mb: 4 }}>
          <ReservationReason />
        </Box>
        <Box sx={{ mb: 4 }}>
          <PaymentInfo />
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <CustomButton to="/" sx={{ mt: 2 }}>
            Confirmar Reservación
          </CustomButton>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <CustomButton to="/" sx={{ mt: 2 }}>
            Cancelar
          </CustomButton>
        </Box>
      </Paper>
    </Container>
  );
}

export default PaymentPage;
