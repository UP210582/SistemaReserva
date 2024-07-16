import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">Logo</Typography>
        </Box>
        <Typography variant="h4">Restaurante</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;