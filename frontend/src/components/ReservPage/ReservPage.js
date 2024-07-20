import React from 'react';
import Calendar from './Calendar';
import Contact from '../Contact';
import CustomButton from '../Button';
import { Container, Paper, Box } from '@mui/material';

function ReservationPage() {
  return (
    <Container>
      <Paper elevation={3} sx={{ p: 3, mt: 3, borderRadius: '16px' }}>
     <div className="reservation-page" style={styles.page}>
        <div style={styles.content}>
         <h1 style={styles.title}>Mc Gourmet Restaurante Delicias</h1>
          <Calendar />
         <div style={styles.infoSection}>
           <CustomButton to="/">Cancelar</CustomButton>
           <Contact />
          </div>
       </div>
      </div>
      </Paper>
    </Container>
  );
}

const styles = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '800px',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    width: '100%',
  },
};

export default ReservationPage;