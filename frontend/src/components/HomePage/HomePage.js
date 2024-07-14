import React from 'react';
import Header from '../Header';
import ImageCarousel from '../ImageCarousel';
import CustomButton from '../Button';
import Reviews from '../Review';
import Contact from '../Contact';

function HomePage() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <ImageCarousel />
        <div className="text-center my-4">
        <CustomButton to="/reservation">Reservar Ahora</CustomButton>
        </div>
        <Reviews />
      </main>
      <Contact />
    </>
  );
}

export default HomePage;
