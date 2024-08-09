import React, { useState, useEffect } from 'react';
import Header from '../ReservHeader';
import PersonalInfo from './PersonalInfo';
import PaymentInfo from './PaymentInfo';
import CustomButton from '../Button';
import { Container, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'http://localhost:8080';

function PaymentPage() {
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    countryCode: '+52',
    phoneNumber: '',
    email: ''
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    expiration_date: '',
    cvc: '',
    postalCode: ''
  });

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    if (!userId) {
      alert('No se encontró el ID de usuario');
      navigate('/login');
    }

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

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      fetch(`${BASE_URL}/users/buscar/${userId}`)
        .then(response => response.json())
        .then(data => setPersonalInfo({
          firstName: data.firstName,
          lastName: data.lastName,
          countryCode: '+52',
          phoneNumber: data.phoneNumber,
          email: data.email
        }))
        .catch(error => console.error('Error fetching user info:', error));
    }
  }, []);

  const handleConfirmReservation = async () => {
    const reservationId = sessionStorage.getItem('reservationId');
    if (!reservationId) {
      alert('No se encontró el ID de la reservación');
      return;
    }
  
    const paymentData = { ...paymentInfo, reservationId: Number(reservationId) };
    
    console.log('Payment Data to be sent:', paymentData); // Log the payment data to check the format
  
    try {
      const paymentResponse = await fetch(`${BASE_URL}/payment-info/alta`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentData)
      });
  
      if (paymentResponse.ok) {
        console.log('Pago registrado con éxito');
        navigate('/reservinfo'); // Redirigir a la página de información de la reserva
      } else {
        const paymentErrorData = await paymentResponse.json();
        console.error('Error al registrar el pago:', paymentErrorData);
        alert('Error al registrar el pago');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al conectar con el servidor');
    }
  };
  

  const handleCancelReservation = async () => {
    const reservationId = sessionStorage.getItem('reservationId');
    if (!reservationId) {
      alert('No se encontró el ID de la reservación');
      return;
    }

    try {
      const cancelResponse = await fetch(`${BASE_URL}/reservations/baja/${reservationId}`, {
        method: 'DELETE'
      });

      if (cancelResponse.ok) {
        console.log('Reserva cancelada con éxito');
        navigate('/reservinfo');
      } else {
        const cancelErrorData = await cancelResponse.json();
        console.error('Error al cancelar la reserva:', cancelErrorData);
        alert('Error al cancelar la reserva');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Header />
        </Box>
        <Box sx={{ mb: 4 }}>
          <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        </Box>
        <Box sx={{ mb: 4 }}>
          <PaymentInfo paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo} />
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <CustomButton onClick={handleConfirmReservation} sx={{ mt: 2 }}>
            Confirmar Reservación
          </CustomButton>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <CustomButton onClick={handleCancelReservation} sx={{ mt: 2 }}>
            Cancelar
          </CustomButton>
        </Box>
      </Paper>
    </Container>
  );
}

export default PaymentPage;
