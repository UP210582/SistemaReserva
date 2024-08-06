import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function ContactItem({ icon, text, link }) {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      mb: 1, 
      p: '5px', // Aplicar padding de 5px en todos los lados
      bgcolor: 'white', // Opcional: color de fondo para diferenciar el padding
      borderRadius: '4px' // Opcional: esquinas redondeadas para un mejor aspecto visual
    }}>
      {icon}
      <Typography variant="body2" sx={{ ml: 1 }}>
        {link ? (
          <Link href={link} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'inherit' }}>
            {text}
          </Link>
        ) : (
          text
        )}
      </Typography>
    </Box>
  );
}

export default ContactItem;
