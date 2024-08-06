import React from 'react';
import { Box, MenuItem, Select } from '@mui/material';

function ReservationReason({ reason, setReason }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <Select value={reason} onChange={(e) => setReason(e.target.value)} variant="outlined" fullWidth displayEmpty>
        <MenuItem value="" disabled>¿Cuál es el motivo de su reservación?</MenuItem>
        <MenuItem value="Celebración">Celebración</MenuItem>
        <MenuItem value="Negocios">Negocios</MenuItem>
        <MenuItem value="Casual">Casual</MenuItem>
      </Select>
    </Box>
  );
}

export default ReservationReason;
