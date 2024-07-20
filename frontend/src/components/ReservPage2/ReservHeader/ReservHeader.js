import React from 'react';
import { Grid, Typography } from '@mui/material';

function ReservationHeader() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography variant="h6">Mesa</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">Datos</Typography>
      </Grid>
    </Grid>
  );
}

export default ReservationHeader;