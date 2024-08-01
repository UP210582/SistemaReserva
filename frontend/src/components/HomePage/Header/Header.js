import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
        <img 
            src="https://mcgourmet.com/img/logo.png" 
            alt="Logo" 
            style={{ height: '40px' }}
          />
        </Box>
        <Typography variant="h4">Mc Gourmet Restaurante Delicias</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;