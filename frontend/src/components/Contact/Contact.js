import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import ContactItem from './ContactItem';

function Contact() {
  return (
    <Box sx={{ 
      bgcolor: 'grey.200', 
      py: 4, 
      mt: 4, 
      px: 2,
      borderRadius: '8px'
    }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Contacto</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ContactItem icon={<EmailIcon />} text="ventas@mcgourmet.com" />
          <ContactItem icon={<PhoneIcon />} text="+52 (449) 963-64-64" />
          <ContactItem icon={<PhoneIcon />} text="+52 (449) 963-96-69" />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactItem icon={<LocationOnIcon />} text="Av. Chichimeco No. 103 Parque Industrial Chichimeco C.P 20916 Jesús Maria, Aguascalientes, México" />
          <ContactItem icon={<LanguageIcon />} text="mcgourmet.com" link="https://mcgourmet.com" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
