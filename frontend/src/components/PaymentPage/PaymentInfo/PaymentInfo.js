import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

function PaymentInfo({ paymentInfo, setPaymentInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    switch (name) {
      case 'cardName':
        formattedValue = value.replace(/[^a-zA-Z\s]/g, '');
        break;
      case 'cardNumber':
        formattedValue = value.replace(/\D/g, '').slice(0, 16);
        break;
      case 'cvc':
        formattedValue = value.replace(/\D/g, '').slice(0, 3);
        break;
      case 'postalCode':
        formattedValue = value.replace(/\D/g, '').slice(0, 5);
        break;
      case 'expiration_date':
        formattedValue = value.replace(/\D/g, '');
        if (formattedValue.length > 2) {
          formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2, 4);
        }
        break;
      default:
        break;
    }

    // Validar si el campo está vacío y mostrar un mensaje de error si es necesario
    if (formattedValue.trim() === '') {
      console.error(`${name} no puede estar vacío.`);
    }

    setPaymentInfo(prev => ({ ...prev, [name]: formattedValue }));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Pago</Typography>
      <TextField
        label="Nombre en la tarjeta"
        name="cardName"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        value={paymentInfo.cardName || ''}
        required
      />
      <TextField
        label="Número de tarjeta"
        name="cardNumber"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        value={paymentInfo.cardNumber || ''}
        required
      />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          label="MM / AA"
          name="expiration_date"
          variant="outlined"
          value={paymentInfo.expiration_date || ''}
          onChange={handleChange}
          required
        />
        <TextField
          label="CVC"
          name="cvc"
          variant="outlined"
          onChange={handleChange}
          value={paymentInfo.cvc || ''}
          required
        />
      </Box>
      <TextField
        label="Código postal"
        name="postalCode"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        value={paymentInfo.postalCode || ''}
        required
      />
    </Box>
  );
}

export default PaymentInfo;
