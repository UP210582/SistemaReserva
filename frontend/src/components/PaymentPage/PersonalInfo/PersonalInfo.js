import React from 'react';
import { Box, TextField, MenuItem, Select } from '@mui/material';

function PersonalInfo() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Nombre" variant="outlined" fullWidth />
      <TextField label="Apellido(s)" variant="outlined" fullWidth />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Select defaultValue="+52" variant="outlined">
          <MenuItem value="+52">+52</MenuItem>
        </Select>
        <TextField label="Número de Teléfono" variant="outlined" fullWidth />
      </Box>
      <TextField label="Correo Electrónico" variant="outlined" fullWidth />
    </Box>
  );
}

export default PersonalInfo;
