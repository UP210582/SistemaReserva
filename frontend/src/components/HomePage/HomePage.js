import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, CssBaseline, Paper } from '@mui/material';
import Header from './Header';
import Hero from './Hero';
import Reviews from './Review';
import Contact from '../Contact';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedPaymentPage');

    if (hasVisited) {
      navigate('/');
    } else {
      sessionStorage.setItem('hasVisitedPaymentPage', 'true');
    }

    return () => {
      sessionStorage.removeItem('hasVisitedPaymentPage');
    };
  }, [navigate]);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 3, mt: 3, borderRadius: '16px' }}>
          <Header />
          <Hero />
          <Reviews />
          <Contact />
        </Paper>
      </Container>
    </>
  );
}

export default HomePage;
