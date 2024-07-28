import React from 'react';
import { Box, MenuItem, Select } from '@mui/material';

function ReservationReason() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Select defaultValue="" variant="outlined" fullWidth>
        <MenuItem value="" disabled>
          ¿Cuál es el motivo de su reservación?
        </MenuItem>
        <MenuItem value="Celebración">Celebración</MenuItem>
        <MenuItem value="Negocios">Negocios</MenuItem>
        <MenuItem value="Casual">Casual</MenuItem>
      </Select>
    </Box>
  );
}

export default ReservationReason;
