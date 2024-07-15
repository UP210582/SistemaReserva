import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';

function ContactItem({ icon, text }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      {icon}
      <Typography variant="body2" sx={{ ml: 1 }}>{text}</Typography>
    </Box>
  );
}

function Contact() {
  return (
    <Box sx={{ bgcolor: 'grey.200', py: 4, mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Contacto</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ContactItem icon={<EmailIcon />} text="info@restaurante.com" />
          <ContactItem icon={<PhoneIcon />} text="+1 234 567 890" />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactItem icon={<LocationOnIcon />} text="123 Calle Principal, Ciudad" />
          <ContactItem icon={<LanguageIcon />} text="www.restaurante.com" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;