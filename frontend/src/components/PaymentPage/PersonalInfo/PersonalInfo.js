import React, { useEffect, useState } from 'react';
import { Box, TextField, MenuItem, Select } from '@mui/material';

function PersonalInfo({ personalInfo, setPersonalInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Nombre" name="firstName" value={personalInfo.firstName} onChange={handleChange} variant="outlined" fullWidth />
      <TextField label="Apellido(s)" name="lastName" value={personalInfo.lastName} onChange={handleChange} variant="outlined" fullWidth />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Select name="countryCode" value={personalInfo.countryCode} onChange={handleChange} variant="outlined">
          <MenuItem value="+52">+52</MenuItem>
        </Select>
        <TextField label="Número de Teléfono" name="phoneNumber" value={personalInfo.phoneNumber} onChange={handleChange} variant="outlined" fullWidth />
      </Box>
      <TextField label="Correo Electrónico" name="email" value={personalInfo.email} onChange={handleChange} variant="outlined" fullWidth />
    </Box>
  );
}

export default PersonalInfo;
