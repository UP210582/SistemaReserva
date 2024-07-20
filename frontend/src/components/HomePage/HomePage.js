import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from './Header';
import Hero from './Hero';
import Reviews from './Review';
import Contact from '../Contact';

function HomePage() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Hero />
        <Reviews />
        <Contact />
      </Container>
    </>
  );
}

export default HomePage;
