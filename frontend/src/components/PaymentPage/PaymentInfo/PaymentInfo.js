import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

function PaymentInfo() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Pago</Typography>
      <TextField label="Nombre en la tarjeta" variant="outlined" fullWidth />
      <TextField label="Número de tarjeta" variant="outlined" fullWidth />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField label="MM / AA" variant="outlined" />
        <TextField label="CVC" variant="outlined" />
      </Box>
      <TextField label="Código postal" variant="outlined" fullWidth />
    </Box>
  );
}

export default PaymentInfo;
